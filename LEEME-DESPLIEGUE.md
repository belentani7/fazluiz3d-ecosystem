# FAZLUIZ3D · ATELIER — Guía standalone

Web bilingüe **ES / EN**, local-first y portable. La página principal no depende de Manus, OAuth, Supabase, Vercel, Netlify, Google Fonts ni un servidor para funcionar.

## Publicación estática

La carpeta que contiene `index.html` puede publicarse en cualquier hosting estático:

- Netlify Drop: arrastra la carpeta completa, no solo `index.html`.
- GitHub Pages: sube el contenido del paquete y activa Pages desde la rama principal.
- Cloudflare Pages, Vercel Static, Apache, Nginx o cualquier servidor que sirva archivos estáticos.
- Uso local: abre `index.html` directamente o sirve la carpeta con `python3 -m http.server 8080`.

Mantén juntas las carpetas `assets/`, `admin/` y `herramientas/` para conservar las rutas relativas.

## Datos y CRM local

El formulario guarda los leads en **IndexedDB** y conserva un fallback en `localStorage`. La calculadora de presupuestos guarda las estimaciones en la misma base local. El panel `admin/dashboard.html` lee esos datos directamente desde el navegador y permite revisar leads y presupuestos.

El botón **Exportar registro local JSON** descarga una copia portable. Haz una exportación después de cada jornada o antes de limpiar los datos del navegador. Los datos del navegador no se sincronizan entre dispositivos automáticamente.

## Email

Al enviar una consulta, la página abre un email pre-redactado hacia `atelier@fazluiz.es`. Sustituye esa dirección por la real buscando `atelier@fazluiz.es` en `index.html`; no se necesita una API para el uso básico.

## Adaptador backend opcional

La carpeta `backend/` contiene una API Next.js para instalaciones que necesitan endpoints. Su modo predeterminado escribe en `backend/data/database.json`, sin Supabase ni base de datos cloud. Las variables `GOOGLE_MAPS_API_KEY`, `OPENAI_API_KEY` y `RESEND_API_KEY` son opcionales y activan integraciones externas solo cuando el propietario las configura.

Para ejecutarlo:

```bash
cd backend
npm install
npm run dev
```

No es necesario para publicar la página principal.

## Contenido del paquete

- `index.html`: web completa con GSAP 3.15.0, ScrollTrigger y ScrollToPlugin vendorizados localmente.
- `assets/img/optimized/`: 20 imágenes WebP optimizadas.
- `assets/img/originals/`: copias originales recibidas, conservadas para archivo.
- `assets/fonts/`: tipografías locales Inter, Syne y JetBrains Mono.
- `assets/js/local-db.js`: capa de persistencia IndexedDB/localStorage.
- `assets/js/widgets.js`: calculadora de presupuesto y exportación JSON.
- `admin/dashboard.html`: CRM local-first.
- `herramientas/tiberion.html`: herramienta con Tailwind y Lucide locales; sus APIs externas son opt-in.
- `backend/`: adaptador Node/Next opcional con persistencia JSON local.
- `docs/`, `templates/`, `legal/` y `extras/`: documentación operativa y plantillas.
- `docs/personal/DEDICATORIA-para-Thiago.txt`: copia conservada sin modificar.

## Firma

El código propio de esta fusión está atribuido a **Belentani · 2026**. Las dependencias vendorizadas conservan sus licencias originales; consulta `docs/GSAP_SOURCES.md`.

## Cooperativa

Como socio de una cooperativa existente facturas a través de ella. En `templates/INVOICE.md` sustituye tus datos por los de la cooperativa (CIF y razón social) y tu nombre como profesional. Revisa siempre la documentación legal con la entidad correspondiente antes de facturar.
