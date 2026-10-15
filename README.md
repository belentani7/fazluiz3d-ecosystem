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
