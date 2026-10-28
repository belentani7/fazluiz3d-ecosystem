import { NextResponse } from 'next/server';
import { insert } from '@/lib/local-store';
import { OrderSchema } from '@/lib/schemas';
import { readBoundedJson } from '@/lib/admin-request.mjs';

export const runtime = 'nodejs';

const response = (data: Record<string, unknown>, status: number) =>
  NextResponse.json(data, { status, headers: { 'Cache-Control': 'no-store' } });

/** Public intake stores a draft locally; it must never act as an email relay. */
export async function POST(req: Request) {
  const body = await readBoundedJson(req);
  if (!body.ok) return response({ error: body.error }, body.status);

  const parsed = OrderSchema.safeParse(body.value);
  if (!parsed.success) {
    return response({ error: 'Datos de solicitud inválidos' }, 400);
  }

  try {
    await insert('orders', parsed.data as unknown as Record<string, unknown>);
    // Customer-facing delivery requires the separately authenticated send flow.
    return response({ success: true, stored: 'local', confirmationEmailSent: false }, 201);
  } catch {
    // Do not log personal data, raw errors, or falsely acknowledge persistence.
    return response({ error: 'No se pudo guardar la solicitud' }, 503);
  }
}
