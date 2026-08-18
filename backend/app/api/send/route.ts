import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { update } from '@/lib/local-store';
import { SendEmailSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = SendEmailSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }
    const { leadId, to, subject, body: emailBody } = parsed.data;

    let messageId: string | null = null;
    if (process.env.RESEND_API_KEY) {
      const result = await new Resend(process.env.RESEND_API_KEY).emails.send({
        from: 'Thiago · ÁUREA 3D <hola@aurea3d.es>',
        to: [to],
        subject,
        html: `
          <div style="background:#000;color:#fff;font-family:Arial,sans-serif;padding:36px;">
            <h1 style="color:#bf953f;font-size:20px;letter-spacing:2px;text-transform:uppercase;">ÁUREA 3D</h1>
            <p style="color:#ccc;line-height:1.7;font-size:14px;">${emailBody.replace(/\n/g, '<br>')}</p>
            <hr style="border-color:#222;margin:24px 0;">
            <p style="color:#555;font-size:11px;">Manufactura Aditiva Premium · Málaga · Responde "BAJA" para no recibir más correos.</p>
          </div>`,
      });
      messageId = result.data?.id ?? null;
      if (result.error) throw result.error;
    }
    await update('leads', leadId, { status: process.env.RESEND_API_KEY ? 'sent' : 'ready-to-send' });
    return NextResponse.json({ success: true, id: messageId, mode: process.env.RESEND_API_KEY ? 'email' : 'local-draft' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}
