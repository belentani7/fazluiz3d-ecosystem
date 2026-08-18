import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';
import { upsertLeads } from '@/lib/local-store';
import { ScrapeSchema } from '@/lib/schemas';

const client = new Client({});

// Tipos de negocio relevantes por línea de producto
const TYPES_BY_LINE: Record<string, string> = {
  decoracion: 'store',       // tiendas de diseño, retail, hoteles boutique
  nautica: 'marina',         // puertos deportivos, clubes náuticos
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ScrapeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }
    const { address, line } = parsed.data;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'Modo local: configura GOOGLE_MAPS_API_KEY solo para activar el escaneo externo.' }, { status: 424 });

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
        photo_url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${place.photos![0].photo_reference}&key=${apiKey}`,
        status: 'new',
      }));

    const savedLeads = await upsertLeads(leadsToInsert);
    return NextResponse.json({ success: true, count: savedLeads.length, leads: savedLeads });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error en el escaneo de la zona' }, { status: 500 });
  }
}
