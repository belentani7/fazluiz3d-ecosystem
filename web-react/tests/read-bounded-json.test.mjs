import test from 'node:test';
import assert from 'node:assert/strict';
import { readBoundedJson } from '../lib/read-bounded-json.mjs';

const req = (body, headers = {}) => new Request('http://localhost/api/contact', {
  method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body,
});

test('accepts bounded JSON with UTF-8', async () => {
  const result = await readBoundedJson(req(JSON.stringify({ message: 'olá' })));
  assert.deepEqual(result, { ok: true, value: { message: 'olá' } });
});
test('rejects oversized streaming body without a Content-Length', async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new Uint8Array(4096));
      controller.enqueue(new Uint8Array(4097));
      controller.close();
    },
  });
  const request = new Request('http://localhost/api/contact', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: stream, duplex: 'half',
  });
  assert.equal((await readBoundedJson(request)).status, 413);
});
test('rejects a false small Content-Length header when actual bytes exceed limit', async () => {
  const request = req('a'.repeat(9000), { 'content-length': '4' });
  assert.equal((await readBoundedJson(request)).status, 413);
});
test('rejects declared oversized requests before reading body', async () => {
  assert.equal((await readBoundedJson(req('{}', { 'content-length': '9000' }))).status, 413);
});
test('rejects invalid media type and malformed JSON', async () => {
  assert.equal((await readBoundedJson(req('{}', { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await readBoundedJson(req('{'))).status, 400);
});
test('rejects invalid UTF-8 bytes', async () => {
  const request = req(new Uint8Array([0xc3, 0x28]));
  assert.equal((await readBoundedJson(request)).status, 400);
});
test('accepts exact 8192-byte JSON boundary', async () => {
  const payload = JSON.stringify({ text: 'x'.repeat(8181) });
  assert.equal(new TextEncoder().encode(payload).length, 8192);
  assert.equal((await readBoundedJson(req(payload))).ok, true);
});
