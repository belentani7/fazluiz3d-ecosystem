# FAZLUIZ3D / ÁUREA 3D

> Ecosistema autónomo 10/10 — diseño paramétrico, arquitectura bioclimática con IA y
> música generativa en un solo repositorio.

[![CI](https://github.com/belentani7/fazluiz3d-ecosystem/actions/workflows/ci.yml/badge.svg)](https://github.com/belentani7/fazluiz3d-ecosystem/actions/workflows/ci.yml)
[![Licencia: MIT](https://img.shields.io/badge/License-MIT-00E676.svg)](./LICENSE)
[![Seguridad](https://img.shields.io/badge/security--policy-brightgreen.svg)](./SECURITY.md)
[![Código de conducta](https://img.shields.io/badge/Code%20of%20Conduct-00E676.svg)](./CODE_OF_CONDUCT.md)

## Qué es

Un ecosistema standalone que une tres disciplinas:

- **Arquitectura paramétrica** — diseño bioclimático assistido por IA
- **Optimización energética** — cálculo y recomendación sobre la geometría generada
- **Música generativa** — composición procedural integrada

| Ruta | Contenido |
|---|---|
| `web-react/` | Frontend React/Next (la interfaz principal) |
| `backend/` | Servicios y API |
| `admin/` | Panel de administración |
| `herramientas/` | CLI y utilidades de generación |
| `assets/` | Recursos visuales y 3D |
| `audit/` | Auditoría de calidad y seguridad |
| `templates/` | Plantillas reutilizables |
| `docs/` | Documentación |
| `scripts/` | Automatización |

## Por qué existe

El diseño paramétrico y la arquitectura bioclimática solían quedar en herramientas
closed-source, caras y con curva de aprendizaje alta. Aquí el pipeline completo —
generar, medir, optimizar, publicar— es abierto y auditable.

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
# El repositorio es standalone: basta con servirlo
python -m http.server 8000     # frontend estático
# o
cd web-react && npm install && npm run dev
```

## Documentación

- [`LEEME-DESPLIEGUE.md`](./LEEME-DESPLIEGUE.md) — guía de despliegue
- [`CHANGELOG.md`](./CHANGELOG.md) — historial de cambios
- [`CITATION.cff`](./CITATION.cff) — citación académica
- `docs/` — documentación técnica

## Licencia

[MIT](./LICENSE) — ver el fichero completo. Este README antes decía
"License: not specified": era incorrecto.

## Contribuir

Lee [`CONTRIBUTING.md`](./CONTRIBUTING.md) y el
[`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). Toda contribución pasa por PR con CI en
verde.

<sub>ÁUREA 3D · by <a href="https://github.com/belentani7">@belentani7</a></sub>

## Protección antiautomatización del contacto React

El formulario de `web-react/` solo entrega correos cuando la verificación Turnstile se valida en el servidor, con acción `contact` y hostname exacto. Configura `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (pública), `TURNSTILE_SECRET_KEY` (secreta) y `TURNSTILE_HOSTNAME` (dominio de producción) en el entorno correspondiente; consulta `web-react/.env.example`. Sin esa configuración, el formulario se muestra deshabilitado y el servidor rechaza el envío. La clave secreta nunca debe estar en `NEXT_PUBLIC_*`. La validación no reemplaza pruebas de entrega real, rate limiting perimetral ni la revisión de privacidad y retención. Documentación del proveedor: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/.
