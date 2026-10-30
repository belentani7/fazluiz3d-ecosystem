import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const get = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8')

test('public contact confirms only after an accepted email delivery', () => {
  const source = get('web-react/app/api/contact/route.ts')
  const form = get('web-react/components/contact.tsx')
  assert.match(source, /if \(!apiKey \|\| !from \|\| !to\)/)
  assert.match(source, /status: 201/)
  assert.match(source, /if \(!response\.ok\)/)
  assert.match(source, /'https:\/\/api\.resend\.com\/emails'/)
  assert.match(source, /text: body/)
  assert.match(form, /fetch\('\/api\/contact'/)
  assert.match(form, /if \(!response\.ok\)/)
  assert.match(form, /setDone\(true\)/)
  assert.doesNotMatch(form, /setTimeout\(r, 900\)/)
  assert.doesNotMatch(form, /900 000 000/)
})
test('public request is bounded and never saves personal data to local files', () => {
  const source = get('web-react/app/api/contact/route.ts')
  const helper = get('web-react/lib/read-bounded-json.mjs')
  assert.match(source, /readBoundedJson\(req\)/)
  assert.match(helper, /8192/)
  assert.match(helper, /reader\.read\(\)/)
  assert.match(helper, /length > maxBytes/)
  assert.match(helper, /TextDecoder/)
  assert.match(source, /reply_to: replyTo/)
  assert.match(source, /data\.website/)
  assert.doesNotMatch(source, /writeFile|localStorage|database\.json/)
})
test('admin mail endpoint requires bearer secret and an existing matching lead', () => {
  const source = get('backend/app/api/send/route.ts')
  assert.match(source, /timingSafeEqual/)
  assert.match(source, /AUREA_ADMIN_TOKEN/)
  assert.match(source, /status: 401/)
  assert.match(source, /const lead = \(await list\('leads'\)\)\.find/)
  assert.match(source, /lead\.email\.toLowerCase/)
  assert.match(source, /text: emailBody/)
  assert.doesNotMatch(source, /html:\s*`/)
  assert.doesNotMatch(source, /ready-to-send/)
})
test('languages and form options agree with server side allowed sectors', () => {
  const i18n = get('web-react/lib/i18n.ts')
  const source = get('web-react/app/api/contact/route.ts')
  for (const key of ['industrial', 'nautica', 'arquitectura', 'otro']) {
    assert.ok(i18n.includes(key + ':'), key)
    assert.ok(source.includes("'" + key + "'"), key)
  }
  for (const key of ['deliveryErr:', 'privacy:']) {
    assert.equal(i18n.split(key).length - 1, 2)
  }
})
