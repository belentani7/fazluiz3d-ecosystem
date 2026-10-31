import { NextResponse } from 'next/server'
import { readBoundedJson } from '@/lib/read-bounded-json.mjs'
import { verifyTurnstile } from '@/lib/verify-turnstile.mjs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const json = (message: string, status: number) =>
  NextResponse.json({ error: message }, { status, headers: { 'Cache-Control': 'no-store' } })

function field(value: unknown, max: number): string | null {
  if (typeof value !== 'string' || value.length > max) return null
  return value.trim()
}

/** Delivery only: no local JSON file, database, tracking, fake success or PII logging. */
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !from || !to) return json('El formulario no está configurado. No se enviaron datos.', 503)
  const bounded = await readBoundedJson(req)
  if (!bounded.ok) return json(bounded.error, bounded.status)
  if (!bounded.value || typeof bounded.value !== 'object' || Array.isArray(bounded.value)) {
    return json('Datos JSON incorrectos.', 400)
  }
  const data = bounded.value as Record<string, unknown>

  // Unused trap field; never deliver automated submissions that fill it.
  if (data.website) return json('Solicitud no admitida.', 400)
  const company = field(data.company, 120)
  const contact = field(data.contact, 120)
  const email = field(data.email, 254)
  const phone = field(data.phone ?? '', 40)
  const sector = field(data.sector, 40)
  const notes = field(data.notes ?? '', 2000)
  if (!company || !contact || !email || !sector || phone === null || notes === null ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !['industrial','nautica','arquitectura','otro'].includes(sector)) {
    return json('Revisa los datos obligatorios del formulario.', 400)
  }

  const verification = await verifyTurnstile(data.turnstileToken, {
    secret: process.env.TURNSTILE_SECRET_KEY,
    hostname: process.env.TURNSTILE_HOSTNAME,
  })
  if (!verification.ok) {
    return json(verification.status === 503
      ? 'Verificación antispam no disponible. Inténtalo más tarde.'
      : 'Verificación antispam fallida. Vuelve a intentarlo.', verification.status)
  }

  const replyTo = email.replace(/[\r\n]/g, '')
  const body = [
    'Nueva solicitud de contacto — FAZLUIZ3D',
    'Empresa: ' + company,
    'Contacto: ' + contact,
    'Email: ' + replyTo,
    'Teléfono: ' + (phone || 'No indicado'),
    'Sector: ' + sector,
    'Descripción:',
    notes || 'No indicada',
  ].join('\n')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyTo,
        subject: 'Consulta de proyecto — FAZLUIZ3D',
        text: body,
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    })
    if (!response.ok) return json('No fue posible enviar la solicitud. Inténtalo de nuevo.', 502)
    return NextResponse.json({ success: true }, { status: 201, headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return json('No hay conexión con el servicio de contacto.', 502)
  }
}
