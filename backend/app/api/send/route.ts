import { timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { list, update } from '@/lib/local-store';
import { SendEmailSchema } from '@/lib/schemas';
import { readBoundedJson } from '@/lib/admin-request.mjs';

function authorized(request: Request, secret: string): boolean {
  const expected = Buffer.from('Bearer ' + secret, 'utf8');
  const provided = Buffer.from(request.headers.get('authorization') || '', 'utf8');
  return expected.length === provided.length && timingSafeEqual(expected, provided);
}

/** Administrative operation; never expose this endpoint to unauthenticated callers. */
export async function POST(req: Request) {
  const token = process.env.AUREA_ADMIN_TOKEN;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!token || token.length < 32) {
    return NextResponse.json({ error: 'Admin access is not configured' }, { status: 503 });
  }
  if (!authorized(req, token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!apiKey || !from) {
    return NextResponse.json({ error: 'Email delivery is not configured' }, { status: 503 });
  }
  // Reject oversized or malformed bodies while streaming, before allocating the full request.
  const body = await readBoundedJson(req);
  if (!body.ok) return NextResponse.json({ error: body.error }, { status: body.status });

  try {
    const parsed = SendEmailSchema.safeParse(body.value);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid email request' }, { status: 400 });
    }
    const { leadId, to, subject, body: emailBody } = parsed.data;
    // Forbid arbitrary-recipient sending even with a valid admin token.
    const lead = (await list('leads')).find(item => item.id === leadId);
    if (!lead || typeof lead.email !== 'string' ||
        lead.email.toLowerCase().trim() !== to.toLowerCase().trim()) {
      return NextResponse.json({ error: 'Lead or recipient not found' }, { status: 404 });
    }

    const result = await new Resend(apiKey).emails.send({
      from,
      to: [to],
      subject,
      text: emailBody,
    });
    if (result.error || !result.data?.id) {
      return NextResponse.json({ error: 'Email provider did not accept the message' }, { status: 502 });
    }
    await update('leads', leadId, { status: 'sent', messageId: result.data.id });
    return NextResponse.json({ success: true, id: result.data.id, mode: 'email' });
  } catch {
    return NextResponse.json({ error: 'Unable to deliver email' }, { status: 502 });
  }
}
