import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';
import { upsertLeads } from '@/lib/local-store';
import { ScrapeSchema } from '@/lib/schemas';
import { checkAdmin, readBoundedJson } from '@/lib/admin-request.mjs';

const client = new Client({});

const TYPES_BY_LINE: Record<string, string> = {
  decoracion: 'store',
  nautica: 'marina',
};

export async function POST(req: Request) {
  // Google Maps requests incur costs. Require an operator secret before parsing.
  const gate = checkAdmin(req, process.env.AUREA_ADMIN_TOKEN);
  if (gate) return NextResponse.json({ error: gate.error }, { status: gate.status });
  const body = await readBoundedJson(req);
  if (!body.ok) return NextResponse.json({ error: body.error }, { status: body.status });
  const parsed = ScrapeSchema.safeParse(body.value);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const { address, line } = parsed.data;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Modo local: configura GOOGLE_MAPS_API_KEY solo para activar el escaneo externo.' }, { status: 424 });

  try {
    const geo = await client.geocode({ params: { address, key: apiKey } });
    if (!geo.data.results.length) {
      return NextResponse.json({ error: 'Dirección no encontrada' }, { status: 404 });
    }
    const { lat, lng } = geo.data.results[0].geometry.location;
    const places = await client.placesNearby({
      params: {
        location: { lat, lng },
        radius: 800,
        type: TYPES_BY_LINE[line] as any,
        key: apiKey,
      },
    });
    const leadsToInsert = places.data.results
      .filter(p => p.photos && p.photos.length > 0)
      .map(place => ({
        google_place_id: place.place_id,
        name: place.name,
        address: place.vicinity,
        types: place.types,
        line,
        // Keep only the opaque reference: never persist or return API keys in URLs.
        photo_reference: place.photos![0].photo_reference,
        status: 'new',
      }));

    const savedLeads = await upsertLeads(leadsToInsert);
    // Older stored leads may contain a photo_url with a key: redact in responses.
    const safeLeads = savedLeads.map(({ photo_url: _secretUrl, ...lead }) => lead);
    return NextResponse.json({ success: true, count: safeLeads.length, leads: safeLeads });
  } catch {
    return NextResponse.json({ error: 'Error en el escaneo de la zona' }, { status: 500 });
  }
}
