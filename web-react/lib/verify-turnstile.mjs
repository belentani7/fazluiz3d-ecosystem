/** Fail-closed server-side Turnstile verification. Tokens are single-use. */
export async function verifyTurnstile(token, { secret, hostname, fetchImpl = fetch } = {}) {
  if (!secret || !hostname) return { ok: false, status: 503 }
  if (typeof token !== 'string' || !token || token.length > 2048) {
    return { ok: false, status: 400 }
  }
  try {
    const response = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) return { ok: false, status: 503 }
    const result = await response.json()
    if (result?.success !== true || result.action !== 'contact' || result.hostname !== hostname) {
      return { ok: false, status: 403 }
    }
    return { ok: true, status: 200 }
  } catch {
    return { ok: false, status: 503 }
  }
}
