import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import { checkAdmin, readBoundedJson } from '../lib/admin-request.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const token = 's'.repeat(48);
const request = (data, authorization) => new Request('http://localhost/api/route', {
  method: 'POST',
  headers: { 'content-type': 'application/json', ...(authorization ? { authorization } : {}) },
  body: JSON.stringify(data),
});

function route(name, env = {}) {
  const counters = { ai: 0, geo: 0, nearby: 0, stored: [], updated: [] };
  const src = readFileSync(new URL(`../app/api/${name}/route.ts`, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(src, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    reportDiagnostics: true,
  });
  assert.equal(compiled.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error).length, 0);
  const exports = {};
  class FakeAI {
    constructor() {
      this.chat = { completions: { create: async () => {
        counters.ai++;
        return { choices: [{ message: { content: 'Draft text' } }] };
      } } };
    }
  }
  class FakeMaps {
    geocode = async () => {
      counters.geo++;
      return { data: { results: [{ geometry: { location: { lat: 1, lng: 2 } } }] } };
    };
    placesNearby = async () => {
      counters.nearby++;
      return { data: { results: [{ place_id: 'abc', name: 'Shop', vicinity: 'Málaga', types: ['store'], photos: [{ photo_reference: 'safe-reference' }] }] } };
    };
  }
  const modules = {
    'next/server': { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } },
    openai: { __esModule: true, default: FakeAI },
    '@googlemaps/google-maps-services-js': { Client: FakeMaps },
    '@/lib/local-store': {
      list: async () => [{ id: 'lead_1792620000000_abc123' }],
      update: async (_collection, id, patch) => { counters.updated.push({ id, patch }); return { id, ...patch }; },
      upsertLeads: async leads => { counters.stored.push(...leads); return leads; },
    },
    '@/lib/schemas': {
      AnalyzeSchema: { safeParse: value => ({ success: true, data: value }) },
      ScrapeSchema: { safeParse: value => ({ success: true, data: value }) },
    },
    '@/lib/admin-request.mjs': { checkAdmin, readBoundedJson },
  };
  vm.runInNewContext(compiled.outputText, {
    require: id => { if (!(id in modules)) throw new Error(`Unexpected dependency: ${id}`); return modules[id]; },
    exports, process: { env }, Buffer, TextEncoder, Request, console,
  }, { filename: name + '.js' });
  return { POST: exports.POST, counters };
}

test('AI route denies anonymous use before contacting provider', async () => {
  const { POST, counters } = route('analyze', { AUREA_ADMIN_TOKEN: token, OPENAI_API_KEY: 'not-used' });
  const result = await POST(request({ leadId: 'lead_1792620000000_abc123' }));
  assert.equal(result.status, 401);
  assert.equal(counters.ai, 0);
});
test('AI route generates a draft for an existing lead without a photo', async () => {
  const { POST, counters } = route('analyze', { AUREA_ADMIN_TOKEN: token });
  const result = await POST(request({ leadId: 'lead_1792620000000_abc123', name: 'Shop', types: ['store'] }, `Bearer ${token}`));
  assert.equal(result.status, 200);
  assert.equal(result.body.mode, 'local-template');
  assert.equal(counters.updated.length, 1);
  assert.equal(counters.ai, 0);
});
test('Google Maps route denies anonymous use before external calls', async () => {
  const { POST, counters } = route('scrape', { AUREA_ADMIN_TOKEN: token, GOOGLE_MAPS_API_KEY: 'not-used' });
  const result = await POST(request({ address: 'Málaga', line: 'decoracion' }));
  assert.equal(result.status, 401);
  assert.equal(counters.geo, 0);
  assert.equal(counters.nearby, 0);
});
test('Google Maps route does not contact provider without a configured API key', async () => {
  const { POST, counters } = route('scrape', { AUREA_ADMIN_TOKEN: token });
  const result = await POST(request({ address: 'Málaga', line: 'decoracion' }, `Bearer ${token}`));
  assert.equal(result.status, 424);
  assert.equal(counters.geo, 0);
});
test('Google Maps route saves photo references without leaking API keys', async () => {
  const { POST, counters } = route('scrape', { AUREA_ADMIN_TOKEN: token, GOOGLE_MAPS_API_KEY: 'private-test-key' });
  const result = await POST(request({ address: 'Málaga', line: 'decoracion' }, `Bearer ${token}`));
  assert.equal(result.status, 200);
  assert.equal(counters.geo, 1);
  assert.equal(counters.nearby, 1);
  assert.equal(counters.stored[0].photo_reference, 'safe-reference');
  assert.equal(JSON.stringify(result.body).includes('private-test-key'), false);
  assert.equal(JSON.stringify(counters.stored).includes('private-test-key'), false);
});
