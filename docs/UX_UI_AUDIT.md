# Auditoría UX/UI — FAZLUIZ3D

La revisión visual se orientó a una interfaz industrial premium, no a una plantilla genérica. La jerarquía usa Syne para titulares, Inter para lectura y JetBrains Mono para metadatos técnicos; la paleta mantiene negro profundo, cobre dorado y texto claro con acentos limitados.

## Decisiones aplicadas

La navegación permanece visible y enlaza a anclas claras. El hero presenta una sola propuesta de valor, dos acciones principales y métricas compactas. La página usa secciones con ritmo vertical reducido, grids que colapsan en móvil, `object-fit: cover` para fotografías y `loading="lazy"` en imágenes no críticas.

Los widgets tienen etiquetas visibles, resultados legibles, estados de guardado local y exportación. Los botones se mantienen accionables por teclado; la capa `prefers-reduced-motion` elimina desplazamientos no esenciales y la web conserva fallbacks de sistema si una fuente no carga.

## Rendimiento y autonomía

Las imágenes de uso web se sirven como WebP optimizado y los originales se conservan fuera de la ruta de carga principal. GSAP, ScrollTrigger, ScrollToPlugin, Tailwind runtime de TIBERION, Lucide y las tipografías están vendorizados localmente. No hay CDN obligatorio para ejecutar la experiencia.

## Verificación

La auditoría automática valida rutas relativas, ausencia de IDs duplicados, existencia de recursos, 20 imágenes en la página principal, ausencia de scripts remotos y presencia de la dedicatoria personal intacta. La prueba runtime confirma GSAP, ScrollTrigger, `FazluizDB` y el widget de presupuesto.

**Código propio:** Belentani · 2026.
