import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import { readBoundedJson } from '../lib/admin-request.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');

function setup({ failStore = false } = {}) {
  const calls = { stored: [] };
  const source = readFileSync(new URL('../app/api/orders/route.ts', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    reportDiagnostics: true,
  });
  assert.equal(compiled.diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error).length, 0);
  const exports = {};
  const modules = {
    'next/server': { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200, headers: options?.headers }) } },
    '@/lib/local-store': { insert: async (_collection, data) => {
      if (failStore) throw new Error('private disk path');
      calls.stored.push(data);
    } },
    '@/lib/schemas': { OrderSchema: { safeParse: value =>
      value?.email === 'customer@example.com'
        ? { success: true, data: value }
        : { success: false, error: { flatten: () => ({}) } },
    } },
    '@/lib/admin-request.mjs': { readBoundedJson },
  };
  vm.runInNewContext(compiled.outputText, {
    require: id => { if (!(id in modules)) throw new Error(`Unexpected dependency: ${id}`); return modules[id]; },
    exports, process: { env: { RESEND_API_KEY: 'should-never-be-used' } }, Buffer, Request,
  }, { filename: 'orders-route.js' });
  return { POST: exports.POST, calls };
}
const request = (data, headers = {}) => new Request('http://localhost/api/orders', {
  method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(data),
});
const valid = { company_name: 'Atelier', email: 'customer@example.com', project_type: 'Custom', message: 'Please contact me about a project.' };

test('public order intake stores draft without sending an unsolicited email', async () => {
  const { POST, calls } = setup();
  const result = await POST(request({ ...valid, contact_name: '<img src=x onerror=alert(1)>' }));
  assert.equal(result.status, 201);
  assert.equal(result.body.confirmationEmailSent, false);
  assert.equal(result.headers['Cache-Control'], 'no-store');
  assert.equal(calls.stored.length, 1);
});
test('rejects oversized body without writing personal data', async () => {
  const { POST, calls } = setup();
  const result = await POST(request({ ...valid, message: 'x'.repeat(9000) }));
  assert.equal(result.status, 413);
  assert.equal(calls.stored.length, 0);
});
test('rejects malformed content type and invalid payload without writing', async () => {
  const { POST, calls } = setup();
  assert.equal((await POST(request(valid, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await POST(request({ ...valid, email: 'invalid' }))).status, 400);
  assert.equal(calls.stored.length, 0);
});
test('failed persistence does not return false success or expose filesystem errors', async () => {
  const { POST } = setup({ failStore: true });
  const result = await POST(request(valid));
  assert.equal(result.status, 503);
  assert.equal(result.body.success, undefined);
  assert.equal(JSON.stringify(result.body).includes('private disk path'), false);
});
