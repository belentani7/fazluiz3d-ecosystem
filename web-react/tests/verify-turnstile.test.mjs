import test from 'node:test'
import assert from 'node:assert/strict'
import { verifyTurnstile } from '../lib/verify-turnstile.mjs'

const config = { secret: 'server-only-secret', hostname: 'example.com' }
const accepted = { success: true, action: 'contact', hostname: 'example.com' }
const response = (value, ok = true) => ({ ok, json: async () => value })

test('requires secret and configured hostname before network', async () => {
  let calls = 0
  const fetchImpl = async () => { calls++; return response(accepted) }
  assert.equal((await verifyTurnstile('token', { ...config, secret: '', fetchImpl })).status, 503)
  assert.equal((await verifyTurnstile('token', { ...config, hostname: '', fetchImpl })).status, 503)
  assert.equal(calls, 0)
})
test('rejects missing, non-string and oversized tokens without network', async () => {
  let calls = 0
  const fetchImpl = async () => { calls++; return response(accepted) }
  for (const token of ['', null, 42, 'a'.repeat(2049)]) {
    assert.equal((await verifyTurnstile(token, { ...config, fetchImpl })).status, 400)
  }
  assert.equal(calls, 0)
})
test('sends the secret only to siteverify, and accepts exact action and hostname', async () => {
  let calls = 0
  const fetchImpl = async (url, init) => {
    calls++
    assert.equal(url, 'https://challenges.cloudflare.com/turnstile/v0/siteverify')
    assert.equal(init.method, 'POST')
    assert.equal(init.cache, 'no-store')
    assert.equal(init.body.get('secret'), config.secret)
    assert.equal(init.body.get('response'), 'token')
    assert.ok(init.signal)
    return response(accepted)
  }
  assert.deepEqual(await verifyTurnstile('token', { ...config, fetchImpl }), { ok: true, status: 200 })
  assert.equal(calls, 1)
})
test('rejects Cloudflare invalid or duplicate token', async () => {
  const fetchImpl = async () => response({ success: false, 'error-codes': ['timeout-or-duplicate'] })
  assert.equal((await verifyTurnstile('token', { ...config, fetchImpl })).status, 403)
})
test('rejects a mismatched action', async () => {
  const fetchImpl = async () => response({ ...accepted, action: 'login' })
  assert.equal((await verifyTurnstile('token', { ...config, fetchImpl })).status, 403)
})
test('rejects a mismatched hostname', async () => {
  const fetchImpl = async () => response({ ...accepted, hostname: 'attacker.example' })
  assert.equal((await verifyTurnstile('token', { ...config, fetchImpl })).status, 403)
})
test('fails closed on siteverify HTTP error', async () => {
  const fetchImpl = async () => response(accepted, false)
  assert.equal((await verifyTurnstile('token', { ...config, fetchImpl })).status, 503)
})
test('fails closed on network failure or invalid JSON', async () => {
  const fetchImpl = async () => { throw new Error('offline') }
  const malformed = async () => ({ ok: true, json: async () => { throw new SyntaxError('invalid') } })
  assert.equal((await verifyTurnstile('token', { ...config, fetchImpl })).status, 503)
  assert.equal((await verifyTurnstile('token', { ...config, fetchImpl: malformed })).status, 503)
})
