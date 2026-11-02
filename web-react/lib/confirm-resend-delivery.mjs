/** A successful HTTP status alone does not prove that Resend accepted an email. */
export async function isAcceptedResendResponse(response) {
  if (!response.ok) return false
  const contentType = response.headers.get('content-type') ?? ''
  if (!/^application\/json(?:\s*;|\s*$)/i.test(contentType)) return false
  try {
    const data = await response.json()
    return data !== null && typeof data === 'object' && !Array.isArray(data) &&
      typeof data.id === 'string' && data.id.trim().length > 0
  } catch {
    return false
  }
}
