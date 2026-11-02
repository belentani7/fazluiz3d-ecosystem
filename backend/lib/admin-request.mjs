import { timingSafeEqual } from 'node:crypto';

/** Fail closed when no server-only administrative credential is configured. */
export function checkAdmin(request, secret) {
  if (typeof secret !== 'string' || secret.length < 32) {
    return { status: 503, error: 'Admin access is not configured' };
  }
  const expected = Buffer.from(`Bearer ${secret}`, 'utf8');
  const supplied = Buffer.from(request.headers.get('authorization') ?? '', 'utf8');
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
    return { status: 401, error: 'Unauthorized' };
  }
  return null;
}

/** Read a bounded JSON stream, regardless of a missing or inaccurate Content-Length. */
export async function readBoundedJson(request, maxBytes = 8192) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!/^application\/json(?:\s*;|\s*$)/i.test(contentType)) {
    return { ok: false, status: 415, error: 'Expected application/json' };
  }
  const declared = request.headers.get('content-length');
  if (declared !== null) {
    if (!/^\d+$/.test(declared)) return { ok: false, status: 400, error: 'Invalid Content-Length' };
    if (Number(declared) > maxBytes) return { ok: false, status: 413, error: 'Request too large' };
  }
  if (!request.body) return { ok: false, status: 400, error: 'Missing JSON body' };
  const reader = request.body.getReader();
  const chunks = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > maxBytes) {
        await reader.cancel().catch(() => {});
        return { ok: false, status: 413, error: 'Request too large' };
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return { ok: true, value: JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) };
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON body' };
  } finally {
    reader.releaseLock();
  }
}
