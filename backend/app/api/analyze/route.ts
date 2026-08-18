import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { update } from '@/lib/local-store';
import { AnalyzeSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = AnalyzeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
    }
    const { leadId, name, types, photoUrl } = parsed.data;

    const prompt = `Eres el responsable comercial de ÁUREA 3D (manufactura aditiva premium, negro y dorado, decoración y piezas náuticas de repuesto).
Negocio observado: "${name}" (${types.join(', ')}).
Mira la foto adjunta. Redacta UN email breve (máximo 80 palabras) para el responsable del negocio.
No seas genérico: menciona un detalle visual real de la foto y sugiere UNA pieza concreta que encajaría en ese espacio.
Tono: directo, profesional, sin exclamaciones ni superlativos.
Incluye al final una frase de baja: "Si no deseas recibir más comunicaciones, responde BAJA."`;

    let aiEmail = `ASUNTO: Propuesta técnica para ${name}\n\nHola,\n\nHe revisado el espacio y creo que una pieza de manufactura aditiva a medida podría encajar en vuestra operación. Podemos estudiar geometría, material y acabado con una propuesta concreta.\n\nSi no deseas recibir más comunicaciones, responde BAJA.`;
    if (process.env.OPENAI_API_KEY) {
      const response = await new OpenAI({ apiKey: process.env.OPENAI_API_KEY }).chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { role: 'user', content: prompt },
          { role: 'user', content: [{ type: 'image_url', image_url: { url: photoUrl } }] as any },
        ],
        max_tokens: 220,
      });
      aiEmail = response.choices[0].message.content ?? aiEmail;
    }

    await update('leads', leadId, { ai_email: aiEmail, status: 'analyzed' });
    return NextResponse.json({ success: true, email: aiEmail, mode: process.env.OPENAI_API_KEY ? 'ai' : 'local-template' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error en el análisis' }, { status: 500 });
  }
}
