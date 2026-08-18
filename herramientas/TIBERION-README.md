# TIBERION — Organismo de Adquisición Autónomo

v3.0-omega** · single-file web app

> Arquitectura y lógica: **Pedro Belentani** (`mi belentani_`)
> Derechos y alma del sistema: **Thiago Luiz** — *O homem mais belo do universo. Te amo.*

TIBERION es un organismo de adquisición de clientes autónomo: busca negocios en
Google Maps, analiza sus webs, puntúa cada lead y genera emails personalizados
listos para que Thiago los revise y envíe.

---

## 🚀 Cómo usarlo

1. **Doble clic en `tiberion.html`** — se abre en el navegador. No necesita
   servidor ni instalación. Todo corre en el navegador con `localStorage`.
2. **Configura las APIs** en la sección *APIs & Keys* (sidebar → Sistema).
3. **Lanza una cacería** desde *Scraper* (ej: "restaurante" en "Lisboa").
4. **Revisa los leads** en *Leads Hunter* (puntuados hot/warm/cold).
5. **Genera el email** en *Emails IA* y cópialo con un clic.
6. **Añade a CRM** los que interesen y muévelos por el pipeline de deals.

Atajos: **Ctrl + K** abre la CLI de Hermes · **Esc** cierra ventanas.

---

## 🔑 APIs (configúralas en la propia app, pestaña *APIs & Keys*)

### Scraping de Google Maps (necesitas al menos UNA)

| API | Tier gratuito | Enlace |
|-----|---------------|--------|
| **SerpAPI** | 100 búsquedas/mes | https://serpapi.com |
| **Outscraper** | $1 crédito inicial | https://outscraper.com |
| **RapidAPI** (Google Maps Scraper) | varía | https://rapidapi.com |

### Análisis de webs

| API | Tier gratuito | Enlace |
|-----|---------------|--------|
| **Google PageSpeed** | ✅ Gratis (sin key también funciona) | https://pagespeed.web.dev |
| **URLScan** | 1000/día | https://urlscan.io |

### IA (opcional, para generar los emails con IA real (con fallback a plantillas si no hay key))

| API | Enlace |
|-----|--------|
|  **OpenRouter** (multimodelo, usa `meta-llama/llama-3.3-70b-instruct:free` — open-source, 0 €) | https://openrouter.ai |

Para empezar basta con SerpAPI + PageSpeed** (ambos gratis).

---

## 🧩 Módulos

- **Dashboard** — KPIs, distribución de tareas, actividad reciente.
- **GIP** — Kanban de proyectos (Backlog → Progreso → Revisión → Completado).
- **CRM** — Contactos + pipeline de negocios (Nuevo → Cerrado).
- **Scraper** — Cacerías de Google Maps con análisis de webs automático.
- **Leads Hunter** — Leads puntuados (🔥 Hot ≥80), filtros, export CSV/JSON.
- **Emails IA** — Generador de emails según el problema detectado (4 escenarios).
- **APIs & Keys** — Gestión de credenciales.
- **Doctor Fix** — Diagnóstico animado del sistema (Protocolo Aegis).
- **CLI (Ctrl+K)** — Terminal de Hermes con humor nerd/BR.

---

## 🛠️ Detalles técnicos

- **Stack:** HTML + Tailwind CDN + JS vanilla (sin build, sin dependencias npm).
- **Persistencia:** `localStorage` (clave `tiberion_state`).
- **CORS:** PageSpeed y SerpAPI funcionan directo desde el navegador. Si tu
  proveedor de scraping bloquea CORS, corre detrás de un proxy ligero o usa
  la versión backend (futura).

---

## 📜 Firma

```
TIBERION CORE — Organismo de Adquisición Autónomo
Arquitectura: Pedro Belentani (mi belentani_)
Derechos: Thiago Luiz — O homem mais belo do universo. Te amo.
```

"Quem não tem API, caça com Playwright." — Proverbio Tiberion.*
