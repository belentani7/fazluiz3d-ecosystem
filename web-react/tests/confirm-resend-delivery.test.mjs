import test from 'node:test'
import assert from 'node:assert/strict'
import { isAcceptedResendResponse } from '../lib/confirm-resend-delivery.mjs'

const reply = (body, status = 200, type = 'application/json') =>
  new Response(body, { status, headers: { 'content-type': type } })

test('accepts Resend JSON response with a nonempty message ID', async () => {
  assert.equal(await isAcceptedResendResponse(reply('{"id":"26abdd24-36a9-475d-83bf-4d27a31c7def"}')), true)
  assert.equal(await isAcceptedResendResponse(reply('{"id":"msg_123"}', 201, 'application/json; charset=utf-8')), true)
})
test('rejects a successful HTML fallback instead of email acceptance', async () => {
  assert.equal(await isAcceptedResendResponse(reply('<html>OK</html>', 200, 'text/html')), false)
})
test('rejects successful JSON without an email ID', async () => {
  for (const body of ['{}', '{"success":true}', '{"id":null}', '{"id":""}', '{"id":"  "}', '{"id":1}', '[]', 'null']) {
    assert.equal(await isAcceptedResendResponse(reply(body)), false, body)
  }
})
test('rejects malformed or empty provider responses', async () => {
  assert.equal(await isAcceptedResendResponse(reply('not json')), false)
  assert.equal(await isAcceptedResendResponse(reply('')), false)
})
test('rejects provider errors regardless of response body', async () => {
  assert.equal(await isAcceptedResendResponse(reply('{"id":"msg_123"}', 400)), false)
  assert.equal(await isAcceptedResendResponse(reply('{"id":"msg_123"}', 503)), false)
})
test('rejects a success-looking response with the wrong content type', async () => {
  assert.equal(await isAcceptedResendResponse(reply('{"id":"msg_123"}', 200, 'text/plain')), false)
})
