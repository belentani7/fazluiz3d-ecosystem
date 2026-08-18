# ÁUREA 3D — Manual Operativo
### Thiago Luiz Pereira · Socio trabajador en cooperativa · Málaga
### Manufactura aditiva: decoración de autor y piezas técnicas/náuticas de repuesto

---

## 0. Nota sobre este manual

Este documento sustituye por completo cualquier versión anterior que planteara anticipos, dietas o cesiones de vivienda como mecanismo para "sobrevivir" el primer mes sin declarar actividad real. Esa vía fue analizada en detalle: los anticipos cooperativos que en la práctica retribuyen trabajo, las dietas sin desplazamiento real y la baja temporal en la Seguridad Social mientras se trabaja son, con altísima probabilidad, fraude de ley (fiscal y de Seguridad Social), con recargos de hasta el 135% y riesgo penal si hay ocultación.

Lo que sigue es la vía legal: darte de alta desde el día 1, facturar cuanto antes, y usar solo los mecanismos cooperativos (anticipos, dietas, cesión de espacio) para su función real y documentada — nunca como sustituto de un salario no declarado.

---

## 1. IDENTIDAD DE MARCA — Fundamento cognitivo

Por qué negro + dorado (y no es solo "gusto"):**

- **Negro (#000000 / #0a0a0a):** reduce el ruido visual. El cerebro, ante un fondo sin textura, dirige toda la atención a los puntos de contraste (el dorado, el producto). Se asocia culturalmente a autoridad, precisión y objetos de alto valor percibido — el mismo principio que usa la joyería y la relojería de lujo en sus escaparates.
- **Dorado (#bf953f → #fcf6ba, degradado, nunca amarillo plano):** el brillo metálico variable simula reflejo físico real, lo que el ojo interpreta como "material", no como "color de pantalla". Un degradado dorado se percibe más caro que un color sólido porque imita cómo la luz se comporta sobre metal.
- **Movimiento con inercia (`cubic-bezier(0.16,1,0.3,1)`):** los elementos que aceleran y frenan como objetos físicos (no de forma lineal) se perciben como "de calidad"; un movimiento lineal se lee como robótico/barato. Es el mismo principio de easing que usan las interfaces de gama alta.
- **Espacio en blanco (negro) generoso:** cuanto menos se satura una composición, más "premium" se percibe — es la lógica contraria al diseño de venta agresiva (banners, colores saturados, muchos CTAs).

Tipografía:**
- Titulares: *Cinzel* (serif clásica, evoca grabado/orfebrería).
- Cuerpo: *Inter* (sans neutra, alta legibilidad técnica, no compite con el titular).

Paleta:**
| Uso | Color |
|---|---|
| Fondo principal | `#000000` |
| Fondo secundario | `#0a0a0a` / `#141414` |
| Acento oro | `#bf953f` |
| Oro claro (hover/brillo) | `#fcf6ba` |
| Oro profundo (sombra) | `#8a6d1f` |
| Texto secundario | `#8a8a8a` |

Tono de marca:** frases cortas, sin exclamaciones, sin superlativos vacíos ("el mejor", "increíble"). La autoridad se transmite por omisión, no por afirmación.

Storytelling oficial (para LinkedIn, prensa, ficha de proveedor):**
> ÁUREA 3D fabrica objetos de decoración y piezas de sustitución con manufactura aditiva. Cada pieza pasa por diseño, impresión y acabado manual antes de salir del taller. Trabajamos tanto piezas de autor para interiorismo y retail como repuestos técnicos —incluida náutica— donde la pieza original ya no existe en el mercado.

---

## 2. LA WEB

Archivo entregado: **`index.html`** (autocontenido, sin dependencias de build — se abre directo en el navegador o se sube tal cual a cualquier hosting/Vercel/Netlify).

Incluye:
- Hero con parallax real (GSAP `ScrollTrigger`, `scrub: true`).
- Animaciones de entrada por scroll (`fade-up`, stagger en tarjetas).
- Dos líneas de negocio explícitas: **Decoración de autor** / **Piezas técnicas y náutica**.
- Sección de proceso (4 pasos).
- Formulario de presupuesto (front-end listo; falta conectar a un backend real — ver §3).

Para desplegar:**
1. Sube `index.html` a Vercel/Netlify (arrastrar y soltar en netlify.com/drop funciona sin cuenta técnica) o cualquier hosting estático.
2. Conecta un dominio (`aurea3d.es` o similar).
3. El formulario necesita un backend o un servicio como Formspree/Resend para recibir los envíos (ver siguiente sección).

---

## 3. BACKEND MÍNIMO VIABLE (sin necesidad de programador)

Si no vas a montar Next.js + Supabase de inmediato, la ruta más rápida y 100% funcional mañana:

1. **Formspree.io** (gratis hasta 50 envíos/mes) → generas un endpoint, lo pegas en el `action` del `<form>` del HTML, y cada envío te llega al email.
2. Cuando quieras escalar: Next.js + Supabase (Postgres) + Resend (envío de emails) — arquitectura ya cubierta en mensajes anteriores de este hilo (tablas `leads`, `orders`, endpoints `/api/scrape`, `/api/analyze`, `/api/send`).

Aviso legal sobre captación automatizada:** usar Google Places API para localizar negocios es correcto (no rasca HTML, no viola ToS). Pero la Places API **no** devuelve emails de contacto (protección RGPD) — tendrás que obtenerlos de la web pública de cada negocio o mediante herramientas de verificación (Hunter.io), nunca de bases de datos compradas de particulares. El envío de emails B2B en frío es legal en España si: (a) es a una persona jurídica o a un email corporativo genérico, (b) incluyes identificación clara del remitente, y (c) ofreces baja/opt-out en cada envío (obligatorio por la LSSI-CE).

---

## 4. CRM

Para volumen bajo/medio y outbound B2B de ticket alto, **Close CRM** o, gratis para empezar, **HubSpot Free**.

Pipeline recomendado:**
1. Lead captado (web/prospección)
2. Contactado
3. Muestra/presupuesto enviado
4. Presupuesto aceptado
5. En producción
6. Facturado y cobrado
7. Perdido

Campos personalizados:** Línea (Decoración / Náutica), Material, Ciudad, Presupuesto estimado, Estado de producción.

---

## 5. PLANTILLAS DE EMAIL (B2B, prospección legal)

Email 1 — Primer contacto**
```
Asunto: Piezas 3D de decoración/repuesto para [Empresa]

Hola [Nombre],

Soy Thiago, de ÁUREA 3D (Málaga). Fabricamos piezas de decoración y
repuestos técnicos —incluida náutica— con manufactura aditiva y acabado
premium en negro y dorado.

Si trabajáis con piezas que se rompen, se descatalogan o necesitáis
decoración a medida, podemos enviaros una muestra física gratuita para
que valoréis el acabado.

¿Os interesaría recibirla?

Un saludo,
Thiago Luiz Pereira
ÁUREA 3D | aurea3d.es

Si no deseas recibir más comunicaciones, responde "BAJA" a este correo.
```

Email 2 — Seguimiento (día +4)**
```
Asunto: RE: Piezas 3D de decoración/repuesto para [Empresa]

Hola [Nombre],

Te escribo para ver si te llegó mi mensaje anterior. Esta semana estamos
enviando muestras a empresas de [sector] en Málaga.

¿Me confirmas una dirección de envío?

Gracias,
Thiago
```

Email 3 — Cierre (día +8)**
```
Asunto: Cierre de contacto

Hola [Nombre],

Entiendo que ahora no es el momento. Dejo mi contacto para cuando
necesitéis prototipado o piezas de repuesto sin mínimos de pedido.

Un saludo,
Thiago | ÁUREA 3D
```

---

## 6. PLANTILLA DE FACTURA (formato España)

```
==============================================
[NOMBRE FISCAL DE LA COOPERATIVA / ÁUREA 3D]
CIF: ____________
Dirección fiscal: ____________, Málaga
Email: facturacion@aurea3d.es
==============================================

FACTURA Nº: AUREA-2025-001
FECHA: __/__/2025

CLIENTE:
[Nombre / Empresa]
NIF/CIF: ____________
[Dirección]

----------------------------------------------
CONCEPTO                    UNID.   PRECIO   TOTAL
----------------------------------------------
[Descripción de la pieza]     1     ___€      ___€
Envío                          1     ___€      ___€
----------------------------------------------
BASE IMPONIBLE                              ___€
IVA (21%)                                   ___€
==============================================
TOTAL A COBRAR:                             ___€
==============================================
Forma de pago: Transferencia
IBAN: ES__ ____ ____ ____ ____ ____
```

---

## 7. MANUAL MÁLAGA — VÍA LEGAL (sustituye al esquema anterior)

### 7.1 Alta (día 1, sin atajos)
- [ ] Alta en RETA / socio trabajador desde el **primer día de actividad real** (instalar taller y prospectar YA es actividad; se cotiza desde ese momento — no hay periodo de gracia).
- [ ] Epígrafe IAE 742/749 (fabricación/acabado de productos plásticos).
- [ ] Modelo 036/037 en Hacienda.
- [ ] Comunicación Previa de Actividad en el Ayuntamiento si el taller está en vivienda (uso "estudio de diseño/prototipado sin afluencia de público").

### 7.2 Uso correcto (no fraudulento) de los mecanismos cooperativos
- **Anticipo (Art. 76 Ley de Cooperativas):** solo como préstamo real a devolver con cargo a rendimientos futuros — aprobado en acta, con pagaré firmado. No sustituye salario ni evita cotización.
- **Dietas (RD 439/2007):** solo si hay desplazamiento real y justificado (ticket de gasolina/parking/factura), nunca por "trabajo desde casa" o desplazamientos inventados.
- **Cesión de espacio:** contrato real de alquiler parcial, declarado como rendimiento de capital inmobiliario en el IRPF, con licencia/comunicación municipal en regla.

### 7.3 Ingresos desde el primer mes (evita necesitar cualquier atajo)
- Prospección diaria (10 emails/día + 2-3 visitas reales a polígonos/tiendas de diseño/puertos deportivos).
- Objetivo realista mes 1: 15-20 empresas contactadas → 2-4 pedidos piloto (100-500€) → 500-2.000€ de facturación real.
- Facturar desde la primera pieza vendida, con IVA, y presentar Modelo 303 trimestral.

### 7.4 SEPE / Subvención (si aplica en tu comunidad)
- Solicitar con actividad ya documentada: alta RETA + 036 + comunicación municipal + web online + al menos un presupuesto real enviado.
- Nunca declarar actividad "en pausa" mientras se sigue trabajando: es el punto que más expone a sanción.

### 7.5 Checklist operativo diario
- [ ] Revisar CRM / bandeja de entrada.
- [ ] Producción: lanzar impresión, lijar/pintar piezas terminadas.
- [ ] Fotografiar en lightbox (fondo neutro, luz fría).
- [ ] Enviar 5-10 emails de prospección.
- [ ] Facturar pedidos confirmados.
- [ ] Backup de archivos STL y documentación fiscal.

---

## 8. Siguiente paso recomendado

1. Sube `index.html` a un hosting gratuito hoy mismo.
2. Da de alta la actividad esta semana (§7.1).
3. Empieza a prospectar en paralelo — no esperes a tener la web "perfecta" para vender.
