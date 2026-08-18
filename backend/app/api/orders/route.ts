import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { insert } from '@/lib/local-store';
import { OrderSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = OrderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }
    const data = parsed.data;

    await insert('orders', data as unknown as Record<string, unknown>);

    // Confirmación automática al cliente solo cuando Resend está configurado.
    if (process.env.RESEND_API_KEY) await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: 'ÁUREA 3D <solicitudes@aurea3d.es>',
      to: [data.email],
      subject: 'Hemos recibido tu solicitud',
      html: `
        <div style="background:#000;color:#fff;font-family:Arial,sans-serif;padding:36px;">
          <h1 style="color:#bf953f;font-size:20px;letter-spacing:2px;text-transform:uppercase;">Solicitud recibida</h1>
          <p style="color:#ccc;line-height:1.7;font-size:14px;">
            Gracias, ${data.contact_name ?? ''}. Hemos registrado tu proyecto
            (<strong style="color:#fff;">${data.project_type}</strong>) y te
            responderemos en un plazo máximo de 24h laborables con un presupuesto orientativo.
          </p>
        </div>`,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}
