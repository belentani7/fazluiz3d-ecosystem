# FAZLUIZ3D — Adaptador backend opcional

El sitio principal no necesita este backend: funciona como HTML/CSS/JavaScript local, guarda leads y presupuestos en IndexedDB y permite exportarlos a JSON. Esta carpeta ofrece una API opcional para quien quiera ejecutar un servidor Node/Next sin cambiar de base de datos cloud.

## Modo local

```bash
cd backend
npm install
npm run dev
```

La persistencia se escribe en `backend/data/database.json`. El archivo se crea automáticamente y no requiere cuenta, API key, Supabase ni servicio de pago. Para conservar los datos, incluye la carpeta `data/` en tus copias de seguridad.

## Variables opcionales

| Variable | Función | Obligatoria |
|---|---|---|
| `GOOGLE_MAPS_API_KEY` | Activa el escaneo externo de negocios | No |
| `OPENAI_API_KEY` | Sustituye la plantilla por análisis IA | No |
| `RESEND_API_KEY` | Envía correos automáticamente | No |

Sin estas variables, los endpoints de pedidos, análisis y envío funcionan en modo local con plantillas y borradores. El endpoint de prospección devuelve un estado de configuración hasta que se active Google Maps.

## Endpoints

- `POST /api/orders` valida y guarda un pedido local.
- `POST /api/analyze` genera una plantilla local o usa OpenAI si existe una clave.
- `POST /api/send` actualiza el estado del lead y envía con Resend solo si está configurado.
- `POST /api/scrape` usa Google Maps únicamente como integración opt-in.

## Despliegue

El paquete principal puede publicarse directamente en cualquier hosting estático: Netlify, GitHub Pages, Cloudflare Pages, Vercel static, un servidor Apache/Nginx o una carpeta local. El adaptador backend es opcional y necesita un runtime Node si se desea activar.

## Acceso administrativo y fotografías

`POST /api/scrape` y `POST /api/analyze` requieren `Authorization: Bearer <AUREA_ADMIN_TOKEN>` con un secreto aleatorio de al menos 32 caracteres configurado **solo en el servidor**. Sin secreto devuelven 503; sin autorización válida, 401. Ambos limitan el cuerpo JSON a 8192 bytes antes de llamar a proveedores de pago. Nunca incluyas el token en JavaScript público ni en `NEXT_PUBLIC_*`.

El escaneo guarda `photo_reference` de Google Maps en lugar de construir URL con la clave API. No se ofrece un enlace directo a esa fotografía; el análisis admite una `photoUrl` HTTPS proporcionada explícitamente por el operador, o genera texto sin foto y sin inventar detalles visuales. Las bases de datos antiguas podrían conservar `photo_url` con una clave incrustada: mantén sus respaldos privados y rota cualquier clave que se haya expuesto.

**Gate pendiente:** `/api/orders` sigue siendo una entrada pública y el envío opcional de confirmaciones requiere límites antiabuso y validación de remitente antes de publicar este backend. No activar proveedores de pago ni desplegar el adaptador sin completar esos controles.

## Seguridad y legalidad

Revisión humana obligatoria antes de enviar comunicaciones. Toda comunicación comercial debe identificar al remitente e incluir una opción clara de baja. No se incluyen scraping automático ni bases de datos de contactos por defecto.

**Código propio:** Belentani · 2026.

## Integridad del fichero local

Las escrituras usan fichero temporal y sustitución atómica, y las operaciones de mutación quedan serializadas dentro de un proceso Node. JSON corrupto o estructuras incompletas provocan error en lugar de reiniciar silenciosamente el CRM. **No** existe seguridad transaccional entre varias instancias ni respaldo automatizado. Mantén `backend/data/` privado (ignorado por Git) y ejecuta `npm test` antes de publicar el adaptador.
