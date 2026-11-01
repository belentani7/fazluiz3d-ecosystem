import test from 'node:test'
import assert from 'node:assert/strict'
import { isConfirmedContactDelivery } from '../lib/confirm-contact-delivery.mjs'

const reply = (body, status = 201, type = 'application/json') =>
  new Response(body, { status, headers: { 'content-type': type } })

test('accepts only the explicit 201 JSON delivery acknowledgment', async () => {
  assert.equal(await isConfirmedContactDelivery(reply('{"success":true}')), true)
  assert.equal(await isConfirmedContactDelivery(reply('{"success":true}', 201, 'application/json; charset=utf-8')), true)
})
test('rejects an HTML 200 from a static fallback route', async () => {
  assert.equal(await isConfirmedContactDelivery(reply('<!doctype html><html></html>', 200, 'text/html')), false)
})
test('rejects generic HTTP 200 even if JSON says success', async () => {
  assert.equal(await isConfirmedContactDelivery(reply('{"success":true}', 200)), false)
})
test('rejects HTML 201 and wrong content types', async () => {
  assert.equal(await isConfirmedContactDelivery(reply('{"success":true}', 201, 'text/html')), false)
})
test('rejects malformed JSON and missing success acknowledgment', async () => {
  for (const body of ['not json', '{}', '{"success":false}', '[]', 'null', '{"success":"true"}']) {
    assert.equal(await isConfirmedContactDelivery(reply(body)), false, body)
  }
})
test('rejects 503, 204, and empty bodies without claiming delivery', async () => {
  assert.equal(await isConfirmedContactDelivery(reply('{"success":true}', 503)), false)
  assert.equal(await isConfirmedContactDelivery(new Response(null, { status: 204 })), false)
  assert.equal(await isConfirmedContactDelivery(reply('')), false)
})
