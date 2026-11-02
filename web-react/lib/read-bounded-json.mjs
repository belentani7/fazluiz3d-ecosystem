/** Reject oversized request bodies while streaming, including chunked uploads. */
export async function readBoundedJson(request, maxBytes = 8192) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!/^application\/json(?:\s*;|\s*$)/i.test(contentType)) {
    return { ok: false, status: 415, error: 'Formato de solicitud no admitido.' };
  }
  const declared = request.headers.get('content-length');
  if (declared !== null) {
    if (!/^\d+$/.test(declared)) return { ok: false, status: 400, error: 'Longitud de solicitud inválida.' };
    if (Number(declared) > maxBytes) return { ok: false, status: 413, error: 'Solicitud demasiado grande.' };
  }
  if (!request.body) return { ok: false, status: 400, error: 'Falta el contenido de la solicitud.' };
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
        return { ok: false, status: 413, error: 'Solicitud demasiado grande.' };
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return { ok: true, value: JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) };
  } catch {
    return { ok: false, status: 400, error: 'Datos JSON incorrectos.' };
  } finally {
    reader.releaseLock();
  }
}
