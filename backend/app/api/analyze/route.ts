import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { list, update } from '@/lib/local-store';
import { AnalyzeSchema } from '@/lib/schemas';
import { checkAdmin, readBoundedJson } from '@/lib/admin-request.mjs';

export async function POST(req: Request) {
  // External AI calls consume paid quota: no request may reach OpenAI anonymously.
  const gate = checkAdmin(req, process.env.AUREA_ADMIN_TOKEN);
  if (gate) return NextResponse.json({ error: gate.error }, { status: gate.status });
  const body = await readBoundedJson(req);
  if (!body.ok) return NextResponse.json({ error: body.error }, { status: body.status });
  const parsed = AnalyzeSchema.safeParse(body.value);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }
  const { leadId, name, types, photoUrl } = parsed.data;

  try {
    // Prevent spending quota for nonexistent or deleted CRM leads.
    const lead = (await list('leads')).find(item => item.id === leadId);
    if (!lead) return NextResponse.json({ error: 'Lead no encontrado' }, { status: 404 });

    const visualInstruction = photoUrl
      ? 'Observa la fotografía y menciona un detalle visual verificable.'
      : 'No se ha proporcionado fotografía; no inventes detalles visuales.';
    const prompt = `Eres el responsable comercial de ÁUREA 3D (manufactura aditiva premium, negro y dorado, decoración y piezas náuticas de repuesto).
Negocio observado: "${name}" (${types.join(', ')}).
${visualInstruction}
Redacta UN email breve (máximo 80 palabras) para el responsable del negocio.
Tono: directo, profesional, sin exclamaciones ni superlativos.
Incluye al final una frase de baja: "Si no deseas recibir más comunicaciones, responde BAJA."`;

    let aiEmail = `ASUNTO: Propuesta técnica para ${name}\n\nHola,\n\nHe revisado vuestro sector y creo que una pieza de manufactura aditiva a medida podría encajar en vuestra operación. Podemos estudiar geometría, material y acabado con una propuesta concreta.\n\nSi no deseas recibir más comunicaciones, responde BAJA.`;
    const aiEnabled = Boolean(process.env.OPENAI_API_KEY);
    if (aiEnabled) {
      const messages: Array<{ role: 'user'; content: string | Array<{ type: 'image_url'; image_url: { url: string } }> }> = [
        { role: 'user', content: prompt },
      ];
      if (photoUrl) messages.push({ role: 'user', content: [{ type: 'image_url', image_url: { url: photoUrl } }] });
      const response = await new OpenAI({ apiKey: process.env.OPENAI_API_KEY }).chat.completions.create({
        model: 'gpt-4o',
        messages,
        max_tokens: 220,
      });
      aiEmail = response.choices[0]?.message?.content ?? aiEmail;
    }

    const updated = await update('leads', leadId, { ai_email: aiEmail, status: 'analyzed' });
    if (!updated) return NextResponse.json({ error: 'Lead ya no existe' }, { status: 409 });
    return NextResponse.json({ success: true, email: aiEmail, mode: aiEnabled ? 'ai' : 'local-template' });
  } catch {
    return NextResponse.json({ error: 'Error en el análisis' }, { status: 500 });
  }
}
