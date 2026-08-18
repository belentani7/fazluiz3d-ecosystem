# PVC-U Universal — Perfil standalone de FAZLUIZ3D

Este documento incorpora la expansión universal del protocolo PVC-U recibida en el adjunto. Se adopta como **especificación documental y checklist**, no como una promesa de que la web ejecuta modelos de IA, servicios MLOps o infraestructura distribuida. La versión standalone permanece gratuita, local y sin dependencias externas obligatorias.

## Perfil de validación del proyecto

**Perfil:** `FAZLUIZ3D-STATIC-LOCAL-v1`  
**Esferas activas:** integridad de assets, validación de formularios, privacidad local, auditoría de exportaciones, revisión humana y despliegue portable.  
**Persistencia:** IndexedDB con fallback localStorage en navegador; JSON local en el adaptador backend opcional.  
**Registro:** `FazluizDB.log()` y exportación JSON con autor y fecha.

## Adaptación de las subesferas de IA

Las subesferas 4-A, 2-A y 8 del protocolo se mantienen como controles de activación futura. Si se conecta un modelo, el adaptador deberá validar prompt/response, evitar fugas de datos, comprobar formato, registrar versión, medir deriva y exigir revisión humana antes de cualquier comunicación comercial. La web actual usa plantillas locales cuando no existe una clave de IA; no envía datos a un modelo por defecto.

## Agentes y acciones de riesgo

No se ejecutan transferencias, borrados irreversibles ni envíos automáticos sin revisión. Las acciones externas de TIBERION son opt-in, dependen de claves configuradas por el propietario y deben pasar por una confirmación humana. La simulación previa y el registro de decisión son obligatorios para futuras funciones de agente.

## Interoperabilidad futura

El perfil puede mapearse posteriormente a JSON Schema, OpenAPI, AsyncAPI, CloudEvents, OPA o un registro MLOps, pero el paquete actual no instala esas plataformas. Esta decisión conserva la publicación universal y evita añadir coste o superficie técnica innecesaria.

## Bucle de auto-validación local

```text
Auditoría de archivos → validación de rutas → prueba runtime → revisión humana → exportación del informe
```

Los informes actuales quedan en `audit/standalone-validation.json`, `audit/runtime-check.md` y `audit/visual-findings.md`.

**Código propio:** Belentani · 2026.
