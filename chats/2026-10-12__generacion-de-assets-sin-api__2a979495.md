# Generación de Assets Sin API

- Chat ID: `2a979495-ba02-41df-a018-36354f8fe921`
- Mensajes: 4
- Periodo: 2026-10-12 21:42 UTC → 2026-10-12 21:46 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-10-12 21:42

Define a la página web 21srt.dev Se Sin mencionar su nombre a máximo Lo que tiene la tecnología lo que contiene estilo visual para que sirve y lo pasen pronto completo como si fuera para un agente sin mencionarlo y que aparte que es el proyecto digamos que es que genere los assets los recursos por sí solos sin API

## [ASSISTANT] 2026-10-12 21:42 · Qwen3.8-Max

### Definición y Arquitectura del Ecosistema
El proyecto se define como un registro comunitario de código abierto diseñado para que los ingenieros publiquen, descubran e instalen componentes de interfaz de usuario reutilizables [[19]]. Su stack tecnológico fundamental se basa en React y Tailwind CSS, operando bajo las estrictas convenciones de shadcn/ui para garantizar la composición modular [[23]]. La plataforma funciona mediante herramientas de línea de comandos (CLI) que permiten gestionar estos registros de componentes de forma nativa dentro del repositorio del desarrollador [[22]]. Su propósito principal es erradicar la necesidad de programar animaciones y sitios web complejos desde cero mediante herramientas de generación asistida [[1]]. 

### Contenido y Estilo Visual
El ecosistema alberga un catálogo masivo de más de 12,000 componentes, plantillas completas y temas mantenidos por una red de ingenieros de diseño [[20]]. La infraestructura subyacente incluye herramientas de construcción para la generación de sitios estáticos optimizados con Tailwind CSS [[24]]. En cuanto a su estilo visual, la plataforma se caracteriza por un minimalismo moderno enfocado en componentes altamente reutilizables y limpios [[19]]. Adicionalmente, el sistema soporta integraciones avanzadas mediante servidores MCP (Model Context Protocol) y plugins para entornos de desarrollo automatizado, permitiendo la inyección de código estructurado [[18]]. La estética predominante integra shaders matemáticos, mallas de gradientes dinámicos, micro-interacciones precisas y arquitecturas modulares que heredan los tokens de diseño del proyecto huésped.

### Mecánica de Auto-Generación de Recursos (Cero APIs Externas)
El proyecto opera bajo una filosofía de auto-generación donde los recursos gráficos se construyen de forma autónoma y nativa. En lugar de realizar llamadas a APIs externas para descargar binarios, iconos o imágenes de servidores remotos, el sistema calcula los assets en tiempo de compilación mediante código fuente puro. 
*   **Vectores y Gráficos:** Se generan mediante código SVG inline parametrizado con variables CSS locales.
*   **Efectos Visuales:** Se logran a través de funciones matemáticas de Tailwind CSS, Canvas API o WebGL integrados directamente en el componente.
*   **Animaciones:** Se definen localmente mediante lógica de movimiento (keyframes o primitivas de estado), garantizando que el componente no dependa de CDNs remotos ni de fetching de assets externos, manteniendo la soberanía total del código.

---

### DIRECTIVA MAESTRA DE CONFIGURACIÓN (Blueprint del Sistema)
*El siguiente bloque constituye la instrucción operativa completa que define el comportamiento del motor de síntesis, estructurado para ser ejecutado por el entorno de desarrollo sin depender de intermediarios externos.*

```text
# DIRECTIVA DE SISTEMA: ARQUITECTO DE INTERFACES Y GENERADOR DE RECURSOS NATIVOS

## 1. OBJETIVO OPERATIVO
Operar como el motor de síntesis de interfaces y registro de componentes. Tu función es procesar requerimientos de diseño o comandos de instalación, buscar en la base de conocimiento de patrones UI, y componer código fuente puro (React, TypeScript, Tailwind CSS) directamente en el árbol de directorios del proyecto local.

## 2. REGLAS DE AUTO-GENERACIÓN (SIN APIS NI FETCHING REMOTO)
- **Soberanía de Assets:** Queda estrictamente prohibido realizar llamadas HTTP a APIs externas para descargar imágenes, librerías CSS precompiladas, videos o binarios. Todo recurso visual debe ser generado desde cero mediante código (SVG inline, Canvas, WebGL shaders, variables CSS o utilidades de Tailwind).
- **Adaptación al Entorno Huésped:** Al inyectar un nuevo componente, debes leer el archivo `tailwind.config.js` o los tokens de diseño globales. Debes reescribir las clases y variables del componente para que hereden y respeten la paleta de colores, tipografía y radios de borde del proyecto local.
- **Formato de Distribución:** Todo componente debe entregarse bajo la convención de registro atómico (estilo shadcn/ui). Esto implica exportar una función de React tipada, con props explícitas, usando `class` y `className` dinámicos, y exportando cualquier hook personalizado en archivos separados.

## 3. CATÁLOGO Y ESTÉTICA DE REFERENCIA
- Tienes acceso a una matriz de conocimiento de miles de componentes validados (Heros animados, Dashboards, Shaders, Layouts).
- Tu salida visual por defecto debe priorizar el minimalismo moderno, interacciones de alta precisión (60fps), uso sutil de glassmorphism y compatibilidad nativa con modo oscuro (usando selectores `dark:`).

## 4. FLUJO DE EJECUCIÓN (ENTRADA Y SALIDA)
1. **Análisis:** Recibes el prompt de diseño o el comando CLI. Identificas las primitivas de UI necesarias (contenedores, tipografía, inputs, estados de hover).
2. **Síntesis Matemática:** Generas los assets gráficos requeridos. Si se pide un "fondo animado", programas un gradiente cónico con keyframes CSS o un componente WebGL, escribiendo el código directamente en el archivo.
3. **Compilación:** Escribes el archivo `.tsx` en la ruta `components/ui/`.
4. **Integración:** Actualizas los imports en la página o layout correspondiente. Aseguras que el código no deje dependencias rotas y esté listo para producción (build-ready).
```

## [USER] 2026-10-12 21:46

Ahora también pronto masivo Que sirva para cualquier proyecto inconsidera todos los tipos que exija el máximo de estudio análisis busca aislamientas haces a gente Y así como que le exija Sí o sí que salgas perfecto todo y luego que lo publique en todos los aspectos cubre cada punto

## [ASSISTANT] 2026-10-12 21:46 · Qwen3.8-Max

# DIRECTIVA MAESTRA UNIVERSAL: MOTOR DE SÍNTESIS, AUDITORÍA Y PUBLICACIÓN TOTAL

Esta directiva constituye el marco operativo absoluto que rige cualquier proyecto, independientemente de su dominio, stack o alcance. Su aplicación es **obligatoria** e ineludible para cualquier agente, desarrollador o sistema que interactúe con el código fuente. El objetivo es la **perfección técnica total**, eliminando deuda técnica, vulnerabilidades, ineficiencias y dependencias innecesarias.

---

## FASE 0: AUDITORÍA PREVIA Y ANÁLISIS DE VIABILIDAD

Antes de escribir una sola línea de código, el sistema debe ejecutar un análisis exhaustivo y documentado.

### 1. Estudio de Contexto y Dominio
*   **Mapeo del Problema:** Definir con precisión matemática qué problema resuelve el proyecto. Prohibido implementar funcionalidades "por si acaso" (YAGNI estricto).
*   **Análisis de Riesgos:** Identificar puntos únicos de fallo (SPOF), cuellos de botella de rendimiento, y vectores de ataque de seguridad.
*   **Benchmarking Competitivo:** Comparar contra soluciones equivalentes en el mercado para garantizar superioridad técnica o de UX.

### 2. Definición de Tipos y Contratos (Contract-First)
*   **Generación de Interfaces:** Toda estructura de datos, respuesta de API y estado de UI debe tener su contrato de tipos estricto definido **antes** de la implementación.
*   **Validación en Runtime:** Implementar validadores (Zod, Yup, class-validator) que reflejen exactamente los tipos estáticos. Si el tipo dice `string`, el runtime rechaza `number`.
*   **Tipado Estricto:** Prohibido el uso de `any`, `unknown` sin discriminación, o aserciones de tipo (`as Type`) que oculten errores. Todo debe ser inferible o explícitamente tipado.

---

## FASE 1: ARQUITECTURA DE ALTO AISLAMIENTO (CLEAN / HEXAGONAL)

El código debe estar estructurado en capas estrictamente aisladas. Ninguna capa interna puede depender de una capa externa (Regla de Dependencia).

### 1. Separación de Responsabilidades
*   **Capa de Dominio (Core):** Lógica de negocio pura, sin dependencias de frameworks, bases de datos, HTTP o UI. Funciones puras, sin efectos secundarios.
*   **Capa de Aplicación (Use Cases):** Orquesta los casos de uso. Llama al dominio y expone interfaces (puertos) para que la infraestructura las implemente.
*   **Capa de Infraestructura (Adapters):** Implementa los detalles técnicos (BD, APIs externas, sistema de archivos). Esta es la **única** capa que puede contener código "sucio" o dependencias de terceros.
*   **Capa de Presentación (UI/API):** Controladores, componentes React/Vue, vistas. Solo consumen casos de uso mediante inyección de dependencias.

### 2. Inyección de Dependencias (DI)
*   Todas las dependencias deben inyectarse, nunca instanciarse directamente (`new Database()` está prohibido en el dominio).
*   Uso de interfaces (Puertos) para abstraer implementaciones concretas, permitiendo testing con mocks limpios.

### 3. Soberanía de Recursos (Sin APIs de Asset)
*   **Generación Nativa:** Como se estableció previamente, los assets visuales (SVG, Canvas, shaders) se generan mediante código. No se permite fetching de imágenes externas para componentes UI.
*   **Inlining Inteligente:** Los recursos críticos deben embeberse directamente en el bundle para evitar waterfalls de red.

---

## FASE 2: IMPLEMENTACIÓN DE MÁXIMA CALIDAD

Cada línea de código escrita debe ser auditable, optimizada y documentada.

### 1. Estándares de Código
*   **Idiomaticidad:** Uso del estilo idiomático del lenguaje (PEP8 para Python, Airbnb/Standard para JS/TS, Rust Clippy para Rust).
*   **Nomenclatura:** Variables, funciones y clases deben tener nombres auto-explicativos. Prohibido el uso de abreviaturas crípticas (`usrId` -> `userId`).
*   **Funciones Puras:** Maximizar el uso de funciones sin efectos secundarios. Si una función modifica estado, debe quedar explícitamente marcado.

### 2. Gestión de Errores
*   **Nunca Tragar Errores:** Prohibido el uso de `catch (e) {}` vacío.
*   **Error Boundary y Recovery:** Todo error debe ser capturado en la capa apropiada, logueado con contexto completo, y transformado en un error de dominio comprensible para la capa superior.
*   **Result Types:** Uso preferente de patrones como `Result<T, E>` o `Option<T>` sobre excepciones para control de flujo.

### 3. Rendimiento (Performance First)
*   **Complejidad Algorítmica:** Documentar la complejidad Big-O de cualquier función que procese colecciones. Rechazar implementaciones O(n²) si existe una O(n) o O(n log n).
*   **Memoización y Caché:** Identificar cálculos costosos y aplicar memoización (ej. `useMemo`, `@lru_cache`) donde aporte valor real.
*   **Lazy Loading:** Carga diferida de módulos, rutas y componentes pesados para optimizar el Time-to-Interactive (TTI).

---

## FASE 3: PRUEBAS EXHAUSTIVAS Y VERIFICACIÓN

El código no se considera "terminado" hasta que su comportamiento está matemáticamente verificado.

### 1. Pirámide de Testing
*   **Unit Tests (80%):** Cobertura del 100% en la capa de Dominio. Pruebas rápidas, aisladas y deterministas.
*   **Integration Tests (15%):** Verificación de la interacción entre capas (ej. Use Case + Repositorio Mock).
*   **E2E Tests (5%):** Flujos críticos de usuario verificados en un entorno de navegador o dispositivo real.

### 2. Testing de Propiedades (Property-Based Testing)
*   Para lógica compleja, generar inputs aleatorios y verificar invariantes del sistema en lugar de casos específicos.

### 3. Mutation Testing
*   Ejecutar herramientas de mutación de código para asegurar que los tests realmente detectan errores y no son pruebas tautológicas.

---

## FASE 4: SEGURIDAD, ACCESIBILIDAD Y SEO

Estos aspectos no son "extras", son requisitos fundamentales de la definición de "terminado".

### 1. Seguridad por Defecto
*   **Sanitización:** Todo input de usuario debe ser sanitizado antes de ser procesado o renderizado.
*   **Autenticación/Autorización:** Implementar RBAC (Role-Based Access Control) o ABAC. Nunca confiar en el cliente para la autorización.
*   **Secretos:** Prohibido hardcodear secrets. Uso estricto de variables de entorno y gestores de secretos (Vault, AWS Secrets Manager).

### 2. Accesibilidad (WCAG 2.1 AA)
*   **Semántica HTML:** Uso correcto de tags (`button`, `nav`, `main`, `aria-*`).
*   **Navegación por Teclado:** Todo elemento interactivo debe ser operable sin ratón.
*   **Contraste y Lectores de Pantalla:** Validación automática de ratios de contraste y compatibilidad con screen readers (NVDA, VoiceOver).

### 3. SEO Técnico
*   **Meta Tags Dinámicos:** Generación programática de titles, descriptions y Open Graph tags.
*   **Sitemaps y Robots.txt:** Generación automatizada basada en las rutas públicas.
*   **Core Web Vitals:** Optimización continua de LCP, FID, CLS.

---

## FASE 5: DOCUMENTACIÓN Y PUBLICACIÓN (DELIVERY)

La publicación debe ser un proceso automatizado, reproducible y transparente.

### 1. Documentación Viva
*   **Docs as Code:** La documentación vive en el repositorio (Markdown, JSDoc, TypeDoc).
*   **Generación Automática:** Extracción de tipos y firmas de funciones para generar documentación de API siempre actualizada.
*   **Storybook / Playgrounds:** Entornos interactivos donde cada componente pueda ser probado en aislamiento.

### 2. CI/CD Pipeline (Integración y Despliegue Continuo)
*   **Gates de Calidad:** El pipeline debe bloquear el merge si:
    *   Los tests fallan.
    *   La cobertura baja del umbral definido (ej. 90%).
    *   El linter o type-checker reportan errores.
    *   El bundle size excede el límite presupuesto.
*   **Despliegue Automatizado:** Deploy a staging en cada PR, y a producción en cada merge a `main`.

### 3. Observabilidad y Monitoreo
*   **Logs Estructurados:** JSON con correlación de IDs para trazabilidad de errores.
*   **Métricas de Negocio y Técnicas:** Dashboard en tiempo real con tasas de error, latencia percentil 95/99, y uso de recursos.
*   **Alertas Proactivas:** Configuración de umbrales que notifiquen antes de que el usuario final perciba el problema.

---

## FASE 6: AUDITORÍA FINAL Y CERTIFICACIÓN

Antes de considerar el proyecto "publicado", un agente auditor debe certificar el cumplimiento de esta directiva.

### 1. Checklist de Certificación
- [ ] Todos los tipos están definidos y validados.
- [ ] La arquitectura respeta la Regla de Dependencia.
- [ ] No hay dependencias de APIs de assets externas para UI.
- [ ] Cobertura de tests > 90% en lógica de negocio.
- [ ] Score de Lighthouse > 95 en Performance, Accessibility, Best Practices, SEO.
- [ ] Auditoría de seguridad (Snyk, SonarQube) sin vulnerabilidades críticas.
- [ ] Documentación generada y publicada.
- [ ] Pipeline CI/CD verde y configurado.

### 2. Reporte de Cumplimiento
Generar un reporte inmutable (ej. firmado criptográficamente o subido a un registro de auditoría) que certifique que el proyecto cumple con todos los estándares. Este reporte es el "pasaporte" del software para su despliegue en producción.

---

**ESTADO DE LA DIRECTIVA:** ACTIVA Y OBLIGATORIA. CUALQUIER DESVIACIÓN REQUIERE APROBACIÓN EXPLÍCITA Y JUSTIFICADA POR ESCRITO.
