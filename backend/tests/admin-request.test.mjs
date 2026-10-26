import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { checkAdmin, readBoundedJson } from '../lib/admin-request.mjs';

const token = 'a'.repeat(48);
const req = (body, headers = {}) => new Request('http://localhost/api/scrape', {
  method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body,
});

test('admin guard fails closed without a strong configured token', () => {
  assert.equal(checkAdmin(req('{}'), undefined)?.status, 503);
  assert.equal(checkAdmin(req('{}'), 'short')?.status, 503);
});
test('admin guard denies missing and incorrect bearer tokens', () => {
  assert.equal(checkAdmin(req('{}'), token)?.status, 401);
  assert.equal(checkAdmin(req('{}', { authorization: `Bearer ${'b'.repeat(48)}` }), token)?.status, 401);
});
test('admin guard permits only the exact configured bearer token', () => {
  assert.equal(checkAdmin(req('{}', { authorization: `Bearer ${token}` }), token), null);
  assert.equal(checkAdmin(req('{}', { authorization: `Bearer ${token}x` }), token)?.status, 401);
});
test('bounded JSON accepts valid UTF-8 and rejects invalid syntax', async () => {
  assert.deepEqual(await readBoundedJson(req('{"line":"nautica"}')), { ok: true, value: { line: 'nautica' } });
  assert.equal((await readBoundedJson(req('{'))).status, 400);
});
test('bounded JSON rejects wrong content type and malformed length', async () => {
  assert.equal((await readBoundedJson(req('{}', { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await readBoundedJson(req('{}', { 'content-length': 'oops' }))).status, 400);
});
test('bounded JSON rejects declared and streamed oversize bodies', async () => {
  assert.equal((await readBoundedJson(req('{}', { 'content-length': '9000' }))).status, 413);
  assert.equal((await readBoundedJson(req(JSON.stringify({ payload: 'x'.repeat(9000) })))).status, 413);
});
test('bounded JSON rejects malformed UTF-8', async () => {
  const request = req(new Uint8Array([0x7b, 0x22, 0xff, 0x22, 0x7d]));
  assert.equal((await readBoundedJson(request)).status, 400);
});
test('billable integrations gate authorization before parsing or remote calls', () => {
  for (const name of ['analyze', 'scrape']) {
    const source = readFileSync(new URL(`../app/api/${name}/route.ts`, import.meta.url), 'utf8');
    const guard = source.indexOf('checkAdmin(req, process.env.AUREA_ADMIN_TOKEN)');
    assert.ok(guard >= 0, `${name}: missing authorization gate`);
    assert.ok(source.indexOf('readBoundedJson(req)') > guard, `${name}: parsing before authorization`);
    assert.ok(!source.includes('await req.json()'), `${name}: unbounded JSON read`);
  }
});
test('Google Maps key is not embedded in saved leads or API response', () => {
  const source = readFileSync(new URL('../app/api/scrape/route.ts', import.meta.url), 'utf8');
  assert.ok(source.includes('photo_reference:'));
  assert.ok(!/^[ \t]*photo_url:/m.test(source));
  assert.ok(!source.includes('&key=${apiKey}'));
});
test('AI analysis supports a photo-free draft after secret-safe Google discovery', () => {
  const source = readFileSync(new URL('../lib/schemas.ts', import.meta.url), 'utf8');
  assert.match(source, /photoUrl:.*\.optional\(\)/);
  const route = readFileSync(new URL('../app/api/analyze/route.ts', import.meta.url), 'utf8');
  assert.match(route, /if \(photoUrl\) messages\.push/);
  assert.match(route, /const lead = \(await list\('leads'\)\)\.find/);
});
