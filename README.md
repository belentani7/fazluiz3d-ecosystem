# FAZLUIZ3D / ÁUREA 3D

> Atelier de **artesanía digital de precisión** (Málaga): web local-first bilingüe
> ES/EN con backend opcional, todo en un solo repositorio.

[![CI](https://github.com/belentani7/fazluiz3d-ecosystem/actions/workflows/ci.yml/badge.svg)](https://github.com/belentani7/fazluiz3d-ecosystem/actions/workflows/ci.yml)
[![Licencia: MIT](https://img.shields.io/badge/License-MIT-00E676.svg)](./LICENSE)
[![Seguridad](https://img.shields.io/badge/security--policy-brightgreen.svg)](./SECURITY.md)
[![Código de conducta](https://img.shields.io/badge/Code%20of%20Conduct-00E676.svg)](./CODE_OF_CONDUCT.md)

## Qué es

El corazón del repositorio es la web principal `index.html`: una página estática
(HTML/CSS/JS puro) para el atelier FAZLUIZ3D · ATELIER, con catálogo de piezas
(esculturas, lámparas), flujo de presupuesto y almacenamiento local de leads.

- **Web principal (`index.html`)** — estática y portable; guarda leads y
  presupuestos en IndexedDB y permite exportarlos a JSON. No depende de ningún
  servicio externo para funcionar.
- **Backend opcional (`backend/`)** — app Next.js (`aurea3d-backend`) con rutas
  de API (`analyze`, `orders`, `scrape`, `send`) y esquema SQL en `sql/`. La web
  principal funciona sin él; `OPENAI_API_KEY` y `GOOGLE_MAPS_API_KEY` son
  opcionales (ver `backend/README.md`).
- **Herramientas auxiliares** — TIBERION (`herramientas/tiberion.html`) y
  calculadora de impuestos (`herramientas/calc_impuestos.py`).

| Ruta | Contenido |
|---|---|
| `index.html` | Web principal del atelier (estática, ES/EN) |
| `web-react/` | Versión alternativa Next.js/React (v0, para desarrolladores); la web principal sigue siendo `index.html` |
| `backend/` | API opcional Next.js (`aurea3d-backend`) |
| `admin/` | Panel de administración (`dashboard.html`) |
| `herramientas/` | TIBERION y calculadora de impuestos |
| `extras/` | Guía de despliegue, generador de PDF y material varios |
| `assets/` | Recursos visuales y 3D |
| `audit/` | Auditoría de calidad y seguridad |
| `templates/` | Plantillas reutilizables (contrato, emails, factura) |
| `docs/` | Documentación |
| `scripts/` | Automatización |

## Por qué existe

La web es **local-first y portable**: no depende de OAuth, Supabase, Vercel,
Netlify ni servidores para funcionar (ver
[`LEEME-DESPLIEGUE.md`](./LEEME-DESPLIEGUE.md)). El backend es un extra para
quien quiera centralizar leads y presupuestos en un servidor propio.

## Entrega de contacto y protección del correo — 22/10/2026

La versión **React/Next** de `web-react/` dispone ahora de `/api/contact` con
entrega **real por Resend**. No hace falsa confirmación: sin
`RESEND_API_KEY`, `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL` devuelve
503 y el formulario comunica que no se envió. Solo se utiliza el buzón de
destino configurado; el mensaje se envía como texto plano y no se guarda en
JSON/localStorage. Configura estas tres variables como secretos del servidor,
siguiendo `web-react/.env.example`. El remitente requiere dominio verificado.

El endpoint administrativo `backend/app/api/send` ya no es un relay público:
exige `AUREA_ADMIN_TOKEN` (mínimo 32 caracteres aleatorios), envíos habilitados,
y que el destinatario coincida con un contacto registrado. La clave nunca se
expone a aplicaciones cliente. Su configuración se explica en
`backend/.env.example`.

**Distinción importante:** la web raíz `index.html` sigue siendo un sitio
estático con captación local en el dispositivo. No está conectada de forma
automática con el backend Next. El servicio en vivo debe publicar explícitamente
la versión elegida, configurar correo autenticado, protección contra spam y
políticas de privacidad/retención antes de captar datos reales. La suite
`node --test tests/contact-contract.test.mjs` verifica condiciones de entrega y
seguridad; no sustituye una prueba de envío con credenciales ni un despliegue.

## Puesta en marcha

```bash
# Web principal: basta con servir el repositorio
python -m http.server 8000     # abrir http://localhost:8000

# Variante React (opcional)
cd web-react && npm install && npm run dev

# Backend (opcional)
cd backend && npm install && npm run dev
```

## Documentación

- [`LEEME-DESPLIEGUE.md`](./LEEME-DESPLIEGUE.md) — guía de despliegue
- [`CHANGELOG.md`](./CHANGELOG.md) — historial de cambios
- [`CITATION.cff`](./CITATION.cff) — citación académica
- [`backend/README.md`](./backend/README.md) — API opcional
- `docs/` — documentación técnica

## Licencia

[MIT](./LICENSE) — ver el fichero completo.

## Contribuir

Lee [`CONTRIBUTING.md`](./CONTRIBUTING.md) y el
[`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). Toda contribución pasa por PR con CI en
verde.

<sub>ÁUREA 3D · by <a href="https://github.com/belentani7">@belentani7</a></sub>

## Protección antiautomatización del contacto React

El formulario de `web-react/` solo entrega correos cuando la verificación Turnstile se valida en el servidor, con acción `contact` y hostname exacto. Configura `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (pública), `TURNSTILE_SECRET_KEY` (secreta) y `TURNSTILE_HOSTNAME` (dominio de producción) en el entorno correspondiente; consulta `web-react/.env.example`. Sin esa configuración, el formulario se muestra deshabilitado y el servidor rechaza el envío. La clave secreta nunca debe estar en `NEXT_PUBLIC_*`. La validación no reemplaza pruebas de entrega real, rate limiting perimetral ni la revisión de privacidad y retención. Documentación del proveedor: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/.
