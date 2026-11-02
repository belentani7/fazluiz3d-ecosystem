/** Never treat a static HTML fallback or a generic HTTP 2xx as proof of email delivery. */
export async function isConfirmedContactDelivery(response) {
  if (response.status !== 201) return false
  const contentType = response.headers.get('content-type') ?? ''
  if (!/^application\/json(?:\s*;|\s*$)/i.test(contentType)) return false
  try {
    const data = await response.json()
    return data !== null && typeof data === 'object' && !Array.isArray(data) && data.success === true
  } catch {
    return false
  }
}
