import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import { readBoundedJson } from '../lib/admin-request.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const token = 't'.repeat(48);

function setup(env = {}) {
  const calls = { provider: 0, updates: 0 };
  const source = readFileSync(new URL('../app/api/send/route.ts', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    reportDiagnostics: true,
  });
  assert.equal(compiled.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error).length, 0);
  const exports = {};
  class FakeResend {
    emails = { send: async () => { calls.provider++; return { data: { id: 'message_123' } }; } };
  }
  const modules = {
    'node:crypto': require('node:crypto'),
    'next/server': { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } },
    resend: { Resend: FakeResend },
    '@/lib/local-store': {
      list: async () => [{ id: 'lead_1792620000000_abc123', email: 'recipient@example.com' }],
      update: async () => { calls.updates++; return {}; },
    },
    '@/lib/schemas': { SendEmailSchema: { safeParse: value => ({ success: true, data: value }) } },
    '@/lib/admin-request.mjs': { readBoundedJson },
  };
  vm.runInNewContext(compiled.outputText, {
    require: id => { if (!(id in modules)) throw new Error('Unexpected dependency: ' + id); return modules[id]; },
    exports, process: { env }, Buffer, Request,
  });
  return { POST: exports.POST, calls };
}
function request(data, headers = {}) {
  return new Request('http://localhost/api/send', {
    method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token, ...headers },
    body: JSON.stringify(data),
  });
}
const env = { AUREA_ADMIN_TOKEN: token, RESEND_API_KEY: 'fake-key', RESEND_FROM_EMAIL: 'verified@example.com' };
const payload = { leadId: 'lead_1792620000000_abc123', to: 'recipient@example.com', subject: 'Proposal', body: 'A complete email body.' };

test('send rejects oversized streamed bodies without invoking provider', async () => {
  const { POST, calls } = setup(env);
  const result = await POST(request({ ...payload, body: 'x'.repeat(9000) }));
  assert.equal(result.status, 413);
  assert.equal(calls.provider, 0);
  assert.equal(calls.updates, 0);
});
test('send rejects invalid declared length before invoking provider', async () => {
  const { POST, calls } = setup(env);
  const result = await POST(request(payload, { 'content-length': 'n/a' }));
  assert.equal(result.status, 400);
  assert.equal(calls.provider, 0);
});
test('send rejects invalid UTF-8 before invoking provider', async () => {
  const { POST, calls } = setup(env);
  const req = new Request('http://localhost/api/send', {
    method: 'POST', headers: { 'content-type': 'application/json', authorization: 'Bearer ' + token },
    body: new Uint8Array([0x7b, 0x22, 0xff, 0x22, 0x7d]),
  });
  const result = await POST(req);
  assert.equal(result.status, 400);
  assert.equal(calls.provider, 0);
});
test('send still delivers to matching stored recipient', async () => {
  const { POST, calls } = setup(env);
  const result = await POST(request(payload));
  assert.equal(result.status, 200);
  assert.equal(calls.provider, 1);
  assert.equal(calls.updates, 1);
});
test('send denies unauthenticated request before reading body or contacting provider', async () => {
  const { POST, calls } = setup(env);
  const result = await POST(request(payload, { authorization: '' }));
  assert.equal(result.status, 401);
  assert.equal(calls.provider, 0);
});
