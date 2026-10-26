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
