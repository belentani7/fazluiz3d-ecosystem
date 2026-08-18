# Automatizaciones Locales Seguras — FAZLUIZ3D

Este documento detalla las automatizaciones locales incorporadas al ecosistema, diseñadas para operar de forma totalmente autónoma, sin servidores cloud obligatorios y sin riesgos de seguridad.

## 1. Validación Estructural y de Assets
- El script `scripts/local_automation.py` recorre el proyecto para verificar la presencia de los archivos críticos (`index.html`, `admin/dashboard.html`, `herramientas/tiberion.html`, `assets/js/local-db.js`) y genera un informe en formato JSON dentro de `audit/local-automation-report.json`.

## 2. Persistencia y Respaldo Local (CRM)
- La capa `assets/js/local-db.js` utiliza **IndexedDB** con fallback a `localStorage` para almacenar leads y presupuestos de forma totalmente local en el navegador del usuario.
- El panel de administración (`admin/dashboard.html`) incluye un botón de exportación en formato JSON, permitiendo generar copias de seguridad de los datos comerciales con un solo clic.

## 3. Principios de Seguridad Aplicados
- **Cero llamadas salientes automáticas:** Las herramientas de prospección e IA (Tiberion) solo operan si el usuario introduce sus propias credenciales. Por defecto, el sistema trabaja con plantillas y registros locales.
- **Privacidad absoluta:** Ningún dato de cliente o presupuesto se transmite a servidores externos ni plataformas de terceros.
- **Atribución y respeto a los mensajes personales:** Todo el código mantiene la firma de autoría de **Belentani** y preserva intactas las dedicatorias originales para Thiago.

**Código propio:** Belentani · 2026.
