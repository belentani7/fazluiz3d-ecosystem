# FAZLUIZ3D — Configuración del CRM local

El panel principal es `admin/dashboard.html`. No requiere una cuenta SaaS, una API ni una base de datos cloud. Lee leads y presupuestos desde IndexedDB del navegador y ofrece exportación JSON para copias de seguridad o migraciones.

## Pipeline

Usa estas fases: Lead captado, Contactado, Muestra o presupuesto enviado, Presupuesto aceptado, En producción, Facturado y cobrado, y Perdido.

## Campos operativos

Registra línea de producto (Decoración, Industrial o Náutica), material, ciudad, presupuesto estimado, urgencia, estado de producción y última acción. La calculadora guarda material, volumen, urgencia, acabado y estimación en la colección local de presupuestos.

## Flujo diario

Revisa `admin/dashboard.html` desde el mismo dispositivo donde se reciben las consultas. Exporta el registro con el botón de la web y archiva el JSON en una copia privada. El formulario público abre un email pre-redactado para que Thiago pueda revisar y enviar la comunicación manualmente.

## Escalado opcional

Si el volumen justifica un servidor, `backend/` ofrece endpoints Next.js con `backend/data/database.json` como persistencia local. Si más adelante se conecta un CRM externo, la importación debe hacerse de forma explícita y con las garantías de privacidad correspondientes; no existe sincronización cloud oculta.

## Revisión semanal

Comprueba cuántos leads entraron, cuáles requieren respuesta, qué presupuestos están pendientes, qué pedidos están en producción y qué facturas se han emitido y cobrado. Conserva el export JSON junto con la documentación de la jornada.

**Código propio:** Belentani · 2026.
