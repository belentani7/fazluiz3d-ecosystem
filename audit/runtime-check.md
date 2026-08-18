# Validación runtime

La prueba se ejecutó sobre la vista local servida desde el paquete standalone.

| Comprobación | Resultado |
|---|---|
| GSAP | Disponible |
| ScrollTrigger | Disponible |
| Base `FazluizDB` | Disponible |
| Widget de presupuesto | 1 montado |
| Imágenes en la página principal | 20 |
| Scripts con origen distinto al sitio | Ninguno |
| Leads existentes durante la prueba | 0 |
| Presupuestos existentes durante la prueba | 0 |

La API local expone `addLead`, `addQuote`, `list`, `log`, `stats`, `exportData`, `downloadExport`, `version` y `author`. La prueba no creó registros de demostración y no alteró ningún mensaje personal.

## Dashboard administrativo

El panel `admin/dashboard.html` cargó con tres tablas, cuatro métricas y `FazluizDB` disponible. La base respondió con IndexedDB, 0 leads y 0 presupuestos durante la prueba. No se detectaron peticiones externas.

## TIBERION

La herramienta cargó con 38 iconos Lucide, Tailwind runtime local y scripts locales en `/assets/vendor/`. No se detectaron recursos externos durante la carga inicial. Las APIs de prospección, PageSpeed e IA siguen siendo integraciones opt-in y solo se invocan si el propietario introduce claves.
