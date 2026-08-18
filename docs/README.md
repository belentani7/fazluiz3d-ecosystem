# FAZLUIZ3D — Ecosistema standalone

Este paquete reúne la web pública, el CRM local, las herramientas operativas, las plantillas y la documentación de ÁUREA 3D/FAZLUIZ3D para Málaga y la Costa del Sol. La web funciona sin Manus, sin OAuth, sin Supabase y sin una API obligatoria.

## Estructura

```text
index.html                         Web pública bilingüe ES/EN
admin/dashboard.html               CRM local de leads y presupuestos
assets/img/originals/              Originales recibidos
assets/img/optimized/              Copias WebP optimizadas
assets/fonts/                      Inter, Syne y JetBrains Mono locales
assets/vendor/gsap/                GSAP 3.15.0 y plugins locales
assets/vendor/tailwindcss/         Runtime local usado por TIBERION
assets/vendor/lucide/              Iconos locales usados por TIBERION
assets/js/local-db.js              IndexedDB + fallback localStorage
assets/js/widgets.js               Calculadora y exportación JSON
herramientas/tiberion.html         Prospección opcional con modo local
backend/                           API Next opcional con JSON local
legal/, templates/, docs/          Documentación y plantillas operativas
```

## Ruta recomendada

Primero publica la carpeta completa en cualquier hosting estático o abre la web localmente. El formulario y la calculadora guardan datos en el navegador. Desde el panel de administración se puede revisar el registro de ese dispositivo y exportarlo en JSON.

El backend solo se activa si se necesita una API. Su persistencia predeterminada es `backend/data/database.json`; Google Maps, OpenAI y Resend son integraciones opt-in, no requisitos de la web.

## Operativa responsable

La documentación legal y cooperativa debe revisarse con la cooperativa y con un profesional competente antes de facturar. El paquete no incluye mecanismos para simular actividad, inflar dietas o eludir obligaciones fiscales o laborales. Los contactos comerciales necesitan revisión humana, identificación clara y opción de baja.

## Firma

El código propio de la fusión está atribuido a **Belentani · 2026**. Las dependencias locales conservan sus licencias originales. La dedicatoria personal de Thiago se conserva en `docs/personal/DEDICATORIA-para-Thiago.txt` sin modificaciones.
