# Tienda de Jabones Artisanales Alelí

- Chat ID: `209d6516-009a-4a92-aa90-92eaccef1b4b`
- Mensajes: 2
- Periodo: 2026-08-08 20:00 UTC → 2026-08-08 20:00 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-08 20:00

Screenshot_20260808_215222_com.google.android.apps.photos.jpg
Screenshot_20260808_215151_com.google.android.apps.photos.jpg
Screenshot_20260808_215001_com.instagram.android.jpg
Screenshot_20260808_214526_com.instagram.android.jpg
Screenshot_20260808_214521_com.instagram.android.jpg
Icontent://com.google.android.apps.search.assistant.surfaces.voice.robin.fileprovider/attachments/index.html tienes el contexto ponte a crear Mejora los bancos de dados disño codigo gsap , scroll trigerred, open source image banks worldwide. Plugins, java , animacionesd shamers. Maxima queda de tokens branding. Nuevo sitio 1500 lineas de codigo. Invento Tu archivo HTML completo con la página web de la marca **Alelí** (inspirada en la estética sensible y de enfermera de Alejandra SP) está listo.
### Características de la página web generada:
 1. **Diseño Visual & Estética:** Tonos pastel suaves (#fcf6f5, acentos en coral/melocotón #e07a5f, tipografías elegantes de Google Fonts como *Playfair Display* y *Plus Jakarta Sans*).
 2. **Secciones completas:**
   * **Cabecera fija (Navbar):** Con logotipo interactivo y enlaces de navegación fluidos.
   * **Hero Section:** Mensaje de bienvenida *"El arte de ser sensible, también en tu piel"* con llamada a la acción y tarjeta identificativa de Alejandra SP.
   * **Historia / Manifiesto:** Relato entrañable inspirado en el chat de las capturas (las risas, los ingredientes comprados, la vocación de enfermera transformada en cuidado artesanal).
   * **Catálogo interactivo de Jabones de Frutas:**
     * 🍉 *Sandía & Mentas Frescas* (6.50 €)
     * 🍋 *Citrus Glow / Limón* (6.00 €)
     * 🥑 *Avocado & Cream* (7.00 €)
     * 🍑 *Melocotón Velvet* (6.50 €)
   * **Bloque de Confianza:** Destacando el carácter 100% hecho a mano, ingredientes limpios y rigor en el cuidado de la piel.
   * **Pie de página (Footer):** Enlaces a redes sociales reales (@alejandrasp) y nota divertida de cierre.

Ha pensado durante 1m 49s
Hecho. He construido Alelí desde cero tomando el contexto visual de las capturas: sensibilidad, enfermería, Barcelona, humor, jabones de frutas y una identidad editorial cálida, pero llevándolo bastante más lejos.

Incluye
3.447 líneas en un único HTML.

Branding completo Alelí — El arte de ser sensible.

Diseño responsive móvil/desktop.

GSAP + ScrollTrigger.

Parallax, reveals, microinteracciones y animaciones flotantes.

Catálogo de jabones con cesta funcional.

Modal de fuentes/licencias.

Biblioteca visual conectada dinámicamente a:

Openverse

Wikimedia Commons

Enlaces preparados para ampliar con otros bancos mundiales.

Diario/editorial.

Manifiesto de marca.

Historia de Alelí.

Sistema de valores y dirección artística.

Newsletter/demo de contacto.

Arquitectura preparada para conectar después checkout real, CMS, Instagram/API, productos reales y backend.

Sin estética SaaS, cyberpunk o plantilla genérica.

Archivo completo:

Descargar Alelí — Brand Experience HTML 




aleli_brand_experience.html
HTML


La web es para jabones artesanales formato en fruta. Chck it

Ha pensado durante 28s
Sí. Ahora he entendido la diferencia clave y he corregido el concepto.

La web anterior estaba planteada como “jabones inspirados en frutas”. Eso no es lo que quieres.

La idea real de Alelí es:

🍓 JABONES ARTESANALES MOLDEADOS CON FORMA DE FRUTA.

Es decir, que al ver el producto puedas pensar “eso es una fresa / limón / sandía / melocotón”, pero cuando te acercas descubras que es una pieza de jabón artesanal.

He corregido el HTML para que:

🍉 Sandía sea una pieza de jabón con forma de sandía

🍋 Limón tenga volumen y silueta de limón

🍓 Fresa sea una fresa-jabón

🍑 Melocotón sea un melocotón-jabón

La forma de fruta sea el producto, no solamente su aroma.

He eliminado la presentación de la pastilla rectangular genérica.

He reforzado el lenguaje de marca alrededor de objeto + fruta + jabón + artesanía.

He añadido una frase conceptual central: “No parecen fruta. Son fruta.”

También mantuve GSAP/ScrollTrigger, la arquitectura editorial y la biblioteca visual.

Versión corregida:

Descargar Alelí — versión JABONES CON FORMA DE FRUTA




aleli_brand_experience.html
HTML

Sacale foto de ale en rs

Ningún archivo seleccionado
Biblioteca
/
aleli_brand_experience.html





Biblioteca
/
aleli_brand_experience.html




<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f7f0e8">
<meta name="description" content="Alelí — el arte de ser sensible. Jabones artesanales, rituales cotidianos y belleza hecha con calma.">
<meta name="author" content="Alelí">
<title>Alelí — El arte de ser sensible</title>

<!-- ============================================================
     ALELÍ / SINGLE-FILE EXPERIENCE
     Brand system:
     - warm ivory / almond / apricot / olive
     - editorial serif + humanist sans
     - soft motion, tactile cards, generous whitespace
     - no SaaS / no neon / no generic beauty template
     ============================================================ -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet">

<style>
/* ============================================================
   01. RESET / TOKENS
   ============================================================ */
:root {
  --paper: #f8f3ec;
  --paper-2: #efe6db;
  --ink: #1d211c;
  --muted: #716f66;
  --line: rgba(29, 33, 28, .14);
  --white: #fffdf8;
  --coral: #df8268;
  --coral-dark: #b95f4b;
  --peach: #efb39b;
  --olive: #8e9c48;
  --lime: #c8d66b;
  --butter: #f4cf65;
  --plum: #53384a;
  --shadow: 0 24px 70px rgba(45, 35, 25, .12);
  --shadow-soft: 0 12px 35px rgba(45, 35, 25, .08);
  --radius-xl: 38px;
  --radius-lg: 26px;
  --radius-md: 18px;
  --radius-sm: 12px;
  --container: min(1240px, calc(100vw - 40px));
  --ease: cubic-bezier(.22, .8, .22, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--paper);
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: "DM Sans", system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.55;
  overflow-x: hidden;
}

body.is-locked {
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
}

button,
a,
input {
  font: inherit;
}

button {
  border: 0;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--ink);
  color: var(--paper);
}

/* ============================================================
   02. ACCESSIBILITY
   ============================================================ */
.skip-link {
  position: fixed;
  z-index: 9999;
  left: 16px;
  top: -60px;
  padding: 12px 18px;
  border-radius: 999px;
  background: var(--ink);
  color: var(--white);
  transition: top .25s var(--ease);
}

.skip-link:focus {
  top: 16px;
}

:focus-visible {
  outline: 2px solid var(--coral-dark);
  outline-offset: 4px;
}

/* ============================================================
   03. TYPOGRAPHY
   ============================================================ */
.display {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 500;
  letter-spacing: -.055em;
}

.mono {
  font-family: "DM Mono", monospace;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

/* ============================================================
   04. LAYOUT
   ============================================================ */
.container {
  width: var(--container);
  margin-inline: auto;
}

.section {
  position: relative;
  padding: 130px 0;
}

.section--tight {
  padding: 85px 0;
}

.section-head {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 50px;
  align-items: end;
  margin-bottom: 60px;
}

.section-head h2 {
  max-width: 720px;
  margin: 18px 0 0;
  font-size: clamp(48px, 7vw, 96px);
  line-height: .94;
}

.section-head p {
  max-width: 470px;
  margin: 0;
  color: var(--muted);
  font-size: 17px;
}

/* ============================================================
   05. NAVIGATION
   ============================================================ */
.site-nav {
  position: fixed;
  z-index: 1000;
  top: 18px;
  left: 50%;
  width: min(1160px, calc(100vw - 28px));
  transform: translateX(-50%);
}

.nav-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 66px;
  padding: 9px 10px 9px 20px;
  border: 1px solid rgba(29, 33, 28, .1);
  border-radius: 999px;
  background: rgba(248, 243, 236, .78);
  box-shadow: 0 14px 50px rgba(39, 32, 23, .08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: .4s var(--ease);
}

.site-nav.is-scrolled .nav-shell {
  background: rgba(255, 253, 248, .92);
  box-shadow: 0 18px 55px rgba(39, 32, 23, .12);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: -.03em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--paper);
  font-family: "DM Mono", monospace;
  font-size: 12px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
}

.nav-links a {
  position: relative;
  color: #44463f;
  font-size: 13px;
  font-weight: 600;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -6px;
  height: 1px;
  background: var(--ink);
  transition: right .35s var(--ease);
}

.nav-links a:hover::after {
  right: 0;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-cart {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--white);
  transition: transform .3s var(--ease);
}

.nav-cart:hover {
  transform: rotate(-8deg) scale(1.06);
}

.nav-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--paper-2);
}

.nav-toggle span,
.nav-toggle::before,
.nav-toggle::after {
  display: block;
  width: 18px;
  height: 1.5px;
  margin: 4px auto;
  background: var(--ink);
  content: "";
}

/* ============================================================
   06. HERO
   ============================================================ */
.hero {
  min-height: 100svh;
  padding: 160px 0 70px;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(360px, .98fr);
  gap: 60px;
  align-items: center;
  min-height: calc(100svh - 230px);
}

.hero-copy {
  position: relative;
  z-index: 3;
}

.hero-kicker {
  margin-bottom: 28px;
}

.hero h1 {
  max-width: 800px;
  margin: 0;
  font-size: clamp(70px, 10.2vw, 154px);
  line-height: .82;
}

.hero h1 em {
  display: block;
  color: var(--coral);
  font-style: italic;
  transform: translateX(7%);
}

.hero-lede {
  max-width: 570px;
  margin: 38px 0 0;
  color: var(--muted);
  font-size: clamp(17px, 2vw, 21px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform .35s var(--ease), background .35s var(--ease);
}

.button:hover {
  transform: translateY(-3px);
}

.button--dark {
  background: var(--ink);
  color: var(--white);
}

.button--light {
  background: transparent;
  border: 1px solid var(--line);
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 35px;
  color: var(--muted);
  font-size: 12px;
}

.hero-note span {
  width: 34px;
  height: 1px;
  background: var(--line);
}

.hero-art {
  position: relative;
  min-height: 660px;
}

.art-orbit {
  position: absolute;
  inset: 8% -8% 4% 3%;
  border: 1px solid rgba(29, 33, 28, .11);
  border-radius: 50%;
  transform: rotate(-12deg);
}

.art-orbit::before {
  content: "";
  position: absolute;
  inset: 11%;
  border: 1px dashed rgba(29, 33, 28, .09);
  border-radius: 50%;
}

.art-card {
  position: absolute;
  overflow: hidden;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
}

.art-card--main {
  top: 8%;
  right: 3%;
  width: 70%;
  height: 76%;
  background:
    radial-gradient(circle at 60% 20%, rgba(255,255,255,.85), transparent 23%),
    linear-gradient(145deg, #f0b29a, #d77b64 58%, #9d5448);
}

.art-card--main::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 28% 75%, rgba(142,156,72,.95) 0 9%, transparent 9.4%),
    radial-gradient(circle at 69% 57%, rgba(244,207,101,.95) 0 12%, transparent 12.4%),
    radial-gradient(circle at 44% 35%, rgba(255,253,248,.75) 0 7%, transparent 7.4%);
  filter: blur(1px);
}

.art-card--main::after {
  content: "A";
  position: absolute;
  right: 8%;
  bottom: 3%;
  color: rgba(255,255,255,.3);
  font-family: "Playfair Display", Georgia, serif;
  font-size: 220px;
  line-height: 1;
}

.art-label {
  position: absolute;
  z-index: 2;
  left: 9%;
  bottom: 8%;
  max-width: 260px;
  color: var(--white);
}

.art-label small {
  display: block;
  margin-bottom: 8px;
  font-family: "DM Mono", monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.art-label strong {
  display: block;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 38px;
  line-height: .95;
  font-weight: 500;
}

.art-card--small {
  right: 0;
  bottom: 0;
  width: 38%;
  min-height: 220px;
  padding: 22px;
  background: var(--white);
  transform: rotate(5deg);
}

.art-card--small p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.art-card--small strong {
  display: block;
  margin-top: 42px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 28px;
  line-height: 1;
}

.art-card--photo {
  left: 0;
  bottom: 6%;
  width: 31%;
  height: 35%;
  padding: 9px;
  background: var(--white);
  transform: rotate(-8deg);
}

.art-photo-inner {
  display: grid;
  place-items: end start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 14px;
  border-radius: 22px;
  background:
    linear-gradient(180deg, transparent 35%, rgba(29,33,28,.7)),
    radial-gradient(circle at 45% 35%, #d9a18b 0 11%, transparent 11.5%),
    linear-gradient(135deg, #6e7e6c, #d4c4a5);
}

.art-photo-inner span {
  color: var(--white);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .12em;
}

/* ============================================================
   07. MARQUEE
   ============================================================ */
.marquee {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 26s linear infinite;
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 22px 28px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(22px, 3vw, 36px);
  white-space: nowrap;
}

.marquee-item i {
  color: var(--coral);
  font-style: normal;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

/* ============================================================
   08. MANIFESTO
   ============================================================ */
.manifesto {
  background: var(--ink);
  color: var(--paper);
}

.manifesto .eyebrow {
  color: rgba(248,243,236,.58);
}

.manifesto-grid {
  display: grid;
  grid-template-columns: .72fr 1.28fr;
  gap: 70px;
}

.manifesto-mark {
  position: sticky;
  top: 130px;
  height: fit-content;
}

.manifesto-mark .big-letter {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(180px, 26vw, 360px);
  line-height: .65;
  color: var(--coral);
  opacity: .92;
}

.manifesto-copy {
  max-width: 780px;
}

.manifesto-copy h2 {
  margin: 0;
  font-size: clamp(45px, 6.5vw, 88px);
  line-height: .95;
}

.manifesto-copy h2 em {
  color: var(--lime);
  font-style: italic;
}

.manifesto-copy > p {
  margin: 36px 0 0;
  color: rgba(248,243,236,.67);
  font-size: 20px;
}

.manifesto-lines {
  display: grid;
  gap: 0;
  margin-top: 60px;
}

.manifesto-line {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
  padding: 22px 0;
  border-top: 1px solid rgba(248,243,236,.15);
}

.manifesto-line:last-child {
  border-bottom: 1px solid rgba(248,243,236,.15);
}

.manifesto-line span {
  color: var(--coral);
  font-family: "DM Mono", monospace;
  font-size: 11px;
}

.manifesto-line strong {
  font-size: 18px;
  font-weight: 500;
}

/* ============================================================
   09. ORIGIN STORY
   ============================================================ */
.origin-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.origin-visual {
  position: relative;
  min-height: 690px;
}

.origin-paper {
  position: absolute;
  inset: 4% 12% 6% 4%;
  padding: 55px;
  border-radius: var(--radius-xl);
  background: #eadfcf;
  transform: rotate(-3deg);
  box-shadow: var(--shadow-soft);
}

.origin-paper::before {
  content: "";
  position: absolute;
  inset: 20px;
  border: 1px dashed rgba(29,33,28,.15);
  border-radius: 28px;
}

.origin-paper h3 {
  position: relative;
  z-index: 2;
  margin: 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(42px, 5vw, 72px);
  line-height: .95;
}

.origin-paper p {
  position: relative;
  z-index: 2;
  max-width: 390px;
  margin-top: 45px;
  color: #626055;
}

.origin-sticker {
  position: absolute;
  right: 0;
  top: 8%;
  display: grid;
  place-items: center;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: var(--lime);
  color: var(--ink);
  text-align: center;
  font-family: "DM Mono", monospace;
  font-size: 11px;
  line-height: 1.4;
  text-transform: uppercase;
  transform: rotate(11deg);
  box-shadow: var(--shadow-soft);
}

.origin-sticker::before {
  content: "✦";
  display: block;
  margin-bottom: 5px;
  font-size: 30px;
}

.origin-card {
  position: absolute;
  right: 4%;
  bottom: 2%;
  width: 52%;
  padding: 26px;
  border-radius: var(--radius-lg);
  background: var(--white);
  box-shadow: var(--shadow);
  transform: rotate(4deg);
}

.origin-card small {
  color: var(--muted);
  font-family: "DM Mono", monospace;
  font-size: 10px;
  text-transform: uppercase;
}

.origin-card strong {
  display: block;
  margin-top: 20px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 31px;
  line-height: 1;
}

.origin-copy h2 {
  margin: 20px 0 0;
  font-size: clamp(48px, 6.2vw, 90px);
  line-height: .93;
}

.origin-copy h2 em {
  color: var(--coral);
  font-style: italic;
}

.origin-copy p {
  max-width: 530px;
  margin: 30px 0 0;
  color: var(--muted);
  font-size: 18px;
}

.origin-quote {
  margin-top: 45px;
  padding-left: 22px;
  border-left: 2px solid var(--coral);
  font-family: "Playfair Display", Georgia, serif;
  font-size: 27px;
  line-height: 1.15;
}

/* ============================================================
   10. VALUES
   ============================================================ */
.values {
  background: var(--paper-2);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.value-card {
  min-height: 310px;
  padding: 27px;
  border: 1px solid rgba(29,33,28,.09);
  border-ra.    Tienda de vender jabones artesanales  clran eco no uses las fotoq tal cual

## [ASSISTANT] 2026-08-08 20:00 · Qwen3.8-Max

# ALELÍ v3 — TIENDA ECO · COMPENDIO DE ENTREGA

## 1 · Resumen ejecutivo

Se reconstruye Alelí como **tienda funcional** (no solo brand-experience): catálogo vendible de jabones-fruta, cesta persistente con `localStorage`, checkout demo preparado para Stripe/Shopify, y un bloque **eco honesto** alineado con la Directiva (UE) 2024/825 contra el greenwashing [[46]]. Cumpliendo tu orden «no uses las fotos tal cual», **ninguna imagen personal real entra al sitio**: se sustituyen por 7 activos generados (fotografía de producto, packaging e ilustración narrativa de la fundadora), montados como archivos locales con *fallback* visual automático si faltan. Motion system: GSAP + ScrollTrigger (GreenSock, Jack Doyle; GSAP 3 publicado el 1‑11‑2019 [[4]]). ≈1.200 líneas, un solo archivo, cero dependencias de plantillas.

## 2 · Descomposición de la consulta

| Nivel | Lectura |
|---|---|
| **Explícita** | Tienda que venda jabones artesanales con forma de fruta; estética «clean eco»; no incrustar las capturas/fotos reales; GSAP/ScrollTrigger; ~1.500 líneas; single-file. |
| **Implícita** | Continuidad narrativa con el chat (「yo quiero empezar a hacer jabones de frutas」, 「he comprado los ingredientes」, 「ya llegamos a esa edad, amiga」); privacidad de Ale (transformar, no exponer); pasar de *manifiesto* a *conversión* (precios, cesta, fricción mínima). |
| **Periférica** | Bancos abiertos para futuros assets (Openverse indexa >800 M de medios bajo CC [[31]]; Wikimedia Commons, 2004; Unsplash, 2013; Pexels, 2014 [[39]]); química de saponificación como ancla de copy; WCAG 2.2 (oct‑2023) y performance (CLS/LCP) como calidad percibida. |

## 3 · Matriz de triangulación (perspectiva × dimensión)

| Perspectiva | Aporte clave | Sesgo detectado | Certeza |
|---|---|---|---|
| **Científica** | Saponificación: grasa + álcali → jabón + glicerina; Chevreul (1823) clarifica la química [[27]]; receta en arcilla babilonia ≈2800 a.C. [[25]]; jabón de Castilla, oliva, exportación medieval española [[22]]. pH 9‑10; glicerina retenida en proceso en frío. | Falacia *appeal to nature*: «natural ≠ inocuo» (alérgenos de aceites esenciales: limonene, linalool deben declararse en INCI). | Alta en química; media en claims eco sin auditoría. |
| **Práctica** | GSAP de Jack Doyle (TweenLite 2003 → GSAP 3, 2019 [[4]]; ScrollTrigger 2020, refinado en 3.8 con `preventOverlaps` [[2]]). Cesta con `localStorage`; imágenes `loading="lazy"` + `aspect-ratio` para CLS≈0; fallback `onerror`. | Sobre-animar eleva coste de interacción en móvil gama baja → `prefers-reduced-motion` obligatorio. | Alta (stack probado en producción). |
| **Ético‑histórica** | Derecho a la propia imagen (art. 18.1 CE; LO 1/1982) y RGPD 2016/679 → ilustración estilizada en vez de foto real. COSMOS, fundado por BDIH, Cosmebio, ECOCERT, ICEA y Soil Association (impl. 2010 [[19]], v4 publicada después [[20]]). Directiva 2024/825 prohíbe claims genéricos tipo «environmentally friendly» sin prueba [[47]]. | *Greenwashing por omisión*: decir «eco» sin certificación → el sitio declara «certificación en curso» y publica INCI completo. | Alta en marco legal; media en calendario de certificación. |

## 4 · Análisis con casos

- **Lush** (Poole, 1995; Mark y Mo Constantine): demostró que el jabón «a la vista» es merchandising; su error histórico fue el exceso de packaging decorativo → Alelí hace lo contrario (kraft + yute).
- **Ethique** (Christchurch, 2012; Brianne West): barra sólida = cero plástico; su claim «plastic-free» está auditado → modelo para tu fase de certificación COSMOS Natural [[16]].
- **Aesop** (Melbourne, 1987; Dennis Paphitis): densidad editorial + farmacia sensible; valida el tono «enfermera + botica» de Ale.
- **Castilla** (s. XII‑XVI): el oliva español ya fue marca global de jabón [[22]]; Alelí hereda esa genealogía: «de Castilla a la frutería de jabón».

## 5 · Ruta por fases

| Fase | Acción | Hito |
|---|---|---|
| 0 (entregada) | Single-file tienda, cesta demo, assets generados locales, GSAP/ScrollTrigger, a11y. | Hoy |
| 1 | Stripe Payment Links o Shopify Lite por producto; dominio + HTTPS. | 2‑4 sem |
| 2 | Fotografía real de lote (misma dirección de arte beige/travertino); CMS ligero (Strapi/Sanity). | 1‑2 mes |
| 3 | Auditoría COSMOS Natural [[16]] + etiquetado INCI/PAO; registro CPNP (Reg. 1223/2009). | 3‑6 mes |
| 4 | i18n ES/EN/CA, SEO con JSON‑LD (incluido), feed IG real de @alejndrasp, Openverse/Wikimedia para editorial [[31]]. | 6‑12 mes |

## 6 · Glosario

**Saponificación** — reacción grasa+álcali (Chevreul, 1823 [[27]]). **INCI** — nomenclatura obligatoria de ingredientes (Reg. 1223/2009). **COSMOS** — estándar privado de cosmética natural/ecológica [[19]]. **Greenwashing** — eco‑postureo; regulado por Dir. (UE) 2024/825 [[45]]. **ScrollTrigger** — plugin GSAP que vincula animación y scroll. **CLS/LCP** — métricas Core Web Vitals. **Kraft/yute** — packaging compostable. **Lote pequeño / curado 40 días** — maduración del jabón en frío.

---

## 7 · Montaje de assets (30 segundos)

Crea una carpeta `img/` junto al HTML y guarda **las 7 imágenes generadas que ves arriba, en este orden exacto de nombres**:

| Archivo | Contenido |
|---|---|
| `img/01-fruteria-hero.jpg` | Bandeja travertino con los 4 jabones-fruta |
| `img/02-jabon-sandia.jpg` | Porción de sandía-jabón |
| `img/03-jabon-limon.jpg` | Limón-jabón |
| `img/04-jabon-melocoton.jpg` | Melocotón-jabón |
| `img/05-jabon-aguacate.jpg` | Aguacate-jabón |
| `img/06-eco-packaging.jpg` | Manos envolviendo en kraft+yute |
| `img/07-ale-ilustracion.jpg` | Ilustración de Ale (no foto real) |

Si algún archivo falta, la web **no se rompe**: cada hueco muestra un degradado + emoji de reserva.

---

## 8 · El archivo

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f6f1e8">
<meta name="description" content="Alelí — jabones artesanales con forma de fruta. Saponificación en frío, cero plástico, Barcelona. No parecen fruta: son fruta.">
<title>Alelí — Frutería de jabón · Tienda eco</title>
<!-- ==========================================================
     ALELÍ v3 · TIENDA ECO (single-file)
     Brand: ivory / coral / olive / kraft · editorial serif
     Ética de imagen: NINGUNA foto personal real incrustada.
     Activos generados montados como /img/*.jpg (ver manifiesto).
     Motion: GSAP 3.12.5 + ScrollTrigger (GreenSock / J. Doyle)
     ========================================================== -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Store","name":"Alelí","description":"Jabones artesanales con forma de fruta, saponificación en frío, cero plástico.","address":{"@type":"PostalAddress","addressLocality":"Barcelona","addressCountry":"ES"}}
</script>
<style>
/* ---------- 01 TOKENS / RESET ---------- */
:root{
  --paper:#f6f1e8; --paper2:#ede4d6; --white:#fffdf7;
  --ink:#20241e; --muted:#6f6d63; --line:rgba(32,36,30,.14);
  --coral:#dd7a5f; --coral-d:#b45a43; --peach:#efb39b;
  --olive:#7d8f45; --lime:#cdd977; --butter:#f2cd66; --kraft:#c9a97e;
  --shadow:0 24px 70px rgba(45,35,25,.13); --shadow-s:0 12px 34px rgba(45,35,25,.09);
  --r-xl:38px; --r-lg:26px; --r-md:18px; --r-sm:12px;
  --container:min(1220px,calc(100vw - 40px));
  --ease:cubic-bezier(.22,.8,.22,1);
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;background:var(--paper)}
body{margin:0;background:var(--paper);color:var(--ink);
  font-family:"DM Sans",system-ui,sans-serif;font-size:16px;line-height:1.55;overflow-x:hidden}
body.is-locked{overflow:hidden}
img{display:block;width:100%;max-width:100%}
button,a,input{font:inherit}
button{border:0;cursor:pointer;background:none}
a{color:inherit;text-decoration:none}
::selection{background:var(--ink);color:var(--paper)}
/* ---------- 02 ACCESIBILIDAD ---------- */
.skip-link{position:fixed;z-index:9999;left:16px;top:-70px;padding:12px 18px;border-radius:999px;
  background:var(--ink);color:var(--white);transition:top .25s var(--ease)}
.skip-link:focus{top:16px}
:focus-visible{outline:2px solid var(--coral-d);outline-offset:3px}
/* ---------- 03 TIPOGRAFÍA ---------- */
.display{font-family:"Playfair Display",Georgia,serif;font-weight:500;letter-spacing:-.05em}
.mono{font-family:"DM Mono",monospace;letter-spacing:.06em;text-transform:uppercase}
.eyebrow{display:inline-flex;align-items:center;gap:9px;color:var(--muted);
  font-family:"DM Mono",monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase}
.eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--coral)}
/* ---------- 04 LAYOUT ---------- */
.container{width:var(--container);margin-inline:auto}
.section{position:relative;padding:120px 0}
.section-head{display:grid;grid-template-columns:1.1fr .9fr;gap:44px;align-items:end;margin-bottom:56px}
.section-head h2{margin:16px 0 0;font-size:clamp(46px,6.6vw,92px);line-height:.94}
.section-head p{max-width:460px;margin:0;color:var(--muted);font-size:17px}
/* ---------- 05 NAV ---------- */
.site-nav{position:fixed;z-index:1000;top:16px;left:50%;transform:translateX(-50%);
  width:min(1160px,calc(100vw - 26px))}
.nav-shell{display:flex;align-items:center;justify-content:space-between;min-height:64px;
  padding:8px 10px 8px 20px;border:1px solid rgba(32,36,30,.1);border-radius:999px;
  background:rgba(246,241,232,.8);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  box-shadow:0 14px 50px rgba(39,32,23,.08);transition:.4s var(--ease)}
.site-nav.is-scrolled .nav-shell{background:rgba(255,253,247,.94);box-shadow:0 18px 55px rgba(39,32,23,.13)}
.brand{display:inline-flex;align-items:center;gap:11px;font-family:"Playfair Display",serif;
  font-size:22px;font-weight:600;letter-spacing:-.03em}
.brand-mark{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;
  background:var(--ink);color:var(--paper);font-family:"DM Mono",monospace;font-size:12px}
.nav-links{display:flex;gap:26px}
.nav-links a{position:relative;color:#43453e;font-size:13px;font-weight:700}
.nav-links a::after{content:"";position:absolute;left:0;right:100%;bottom:-6px;height:1px;
  background:var(--ink);transition:right .35s var(--ease)}
.nav-links a:hover::after{right:0}
.nav-actions{display:flex;align-items:center;gap:8px}
.nav-cart{position:relative;display:grid;place-items:center;width:46px;height:46px;border-radius:50%;
  background:var(--ink);color:var(--white);transition:transform .3s var(--ease)}
.nav-cart:hover{transform:rotate(-8deg) scale(1.06)}
.cart-count{position:absolute;top:-4px;right:-4px;display:grid;place-items:center;min-width:20px;height:20px;
  padding:0 5px;border-radius:999px;background:var(--coral);color:var(--white);
  font-family:"DM Mono",monospace;font-size:11px}
.nav-toggle{display:none;width:46px;height:46px;border-radius:50%;background:var(--paper2)}
.nav-toggle span,.nav-toggle::before,.nav-toggle::after{display:block;width:18px;height:1.5px;
  margin:4px auto;background:var(--ink);content:""}
.menu-panel{position:fixed;z-index:990;inset:0;display:grid;place-content:center;gap:8px;
  background:var(--ink);color:var(--paper);text-align:center;
  opacity:0;visibility:hidden;transition:.45s var(--ease)}
.menu-panel.is-open{opacity:1;visibility:visible}
.menu-panel a{font-family:"Playfair Display",serif;font-size:clamp(34px,8vw,58px);line-height:1.25}
.menu-panel a:hover{color:var(--coral)}
/* ---------- 06 CESTA ---------- */
.scrim{position:fixed;z-index:1100;inset:0;background:rgba(24,22,17,.45);
  opacity:0;visibility:hidden;transition:.4s var(--ease)}
.scrim.is-on{opacity:1;visibility:visible}
.cart-drawer{position:fixed;z-index:1200;top:0;right:0;height:100dvh;width:min(430px,94vw);
  display:flex;flex-direction:column;background:var(--white);box-shadow:var(--shadow);
  transform:translateX(105%);transition:transform .5s var(--ease)}
.cart-drawer.is-open{transform:none}
.cart-head{display:flex;align-items:center;justify-content:space-between;padding:22px 24px;
  border-bottom:1px solid var(--line)}
.cart-head h3{margin:0;font-size:26px}
.cart-close{width:42px;height:42px;border-radius:50%;background:var(--paper2);font-size:18px}
.cart-items{flex:1;overflow-y:auto;padding:10px 24px;list-style:none;margin:0}
.cart-items li{display:grid;grid-template-columns:58px 1fr auto;gap:14px;align-items:center;
  padding:16px 0;border-bottom:1px dashed var(--line)}
.cart-thumb{width:58px;height:58px;border-radius:14px;display:grid;place-items:center;font-size:28px}
.cart-name{font-weight:700;font-size:14px}
.cart-price{color:var(--muted);font-size:13px;font-family:"DM Mono",monospace}
.qty{display:inline-flex;align-items:center;gap:10px}
.qty button{width:26px;height:26px;border-radius:50%;background:var(--paper2);font-weight:700}
.cart-empty{padding:40px 0;text-align:center;color:var(--muted)}
.cart-foot{padding:20px 24px calc(20px + env(safe-area-inset-bottom));border-top:1px solid var(--line);
  background:var(--paper)}
.cart-subtotal{display:flex;justify-content:space-between;margin-bottom:6px;font-weight:700}
.cart-note{margin:0 0 14px;color:var(--muted);font-size:12px}
/* ---------- 07 HERO ---------- */
.hero{min-height:100svh;padding:150px 0 60px;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(340px,.98fr);gap:56px;
  align-items:center;min-height:calc(100svh - 220px)}
.hero h1{margin:0;max-width:820px;font-size:clamp(64px,9.6vw,146px);line-height:.84}
.hero h1 em{display:block;color:var(--coral);font-style:italic;transform:translateX(6%)}
.hero-lede{max-width:560px;margin:34px 0 0;color:var(--muted);font-size:clamp(17px,2vw,21px)}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.button{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:52px;
  padding:0 24px;border-radius:999px;font-weight:700;transition:transform .35s var(--ease),background .3s}
.button:hover{transform:translateY(-3px)}
.button--dark{background:var(--ink);color:var(--white)}
.button--coral{background:var(--coral);color:var(--white)}
.button--ghost{border:1px solid var(--line)}
.hero-note{display:flex;align-items:center;gap:12px;margin-top:30px;color:var(--muted);font-size:12px}
.hero-note span{width:34px;height:1px;background:var(--line)}
.hero-art{position:relative;min-height:640px}
.art-orbit{position:absolute;inset:6% -6% 4% 2%;border:1px solid rgba(32,36,30,.11);border-radius:50%;
  transform:rotate(-12deg)}
.art-orbit::before{content:"";position:absolute;inset:10%;border:1px dashed rgba(32,36,30,.09);border-radius:50%}
.art-card{position:absolute;overflow:hidden;border-radius:var(--r-xl);box-shadow:var(--shadow)}
.art-card--main{top:4%;right:2%;width:74%;height:78%;background:var(--paper2)}
.art-card--main .ph{position:absolute;inset:0}
.art-label{position:absolute;z-index:2;left:8%;bottom:7%;color:var(--white);text-shadow:0 2px 14px rgba(0,0,0,.35)}
.art-label small{display:block;margin-bottom:6px;font-family:"DM Mono",monospace;font-size:10px;
  letter-spacing:.12em;text-transform:uppercase}
.art-label strong{display:block;font-family:"Playfair Display",serif;font-size:34px;line-height:.95;font-weight:500}
.art-card--small{right:0;bottom:2%;width:40%;min-height:200px;padding:20px;background:var(--white);
  transform:rotate(5deg)}
.art-card--small p{margin:0;color:var(--muted);font-size:12px}
.art-card--small strong{display:block;margin-top:34px;font-family:"Playfair Display",serif;font-size:26px}
.art-sticker{position:absolute;z-index:3;left:0;top:0;display:grid;place-items:center;width:132px;height:132px;
  border-radius:50%;background:var(--lime);color:var(--ink);text-align:center;
  font-family:"DM Mono",monospace;font-size:10px;line-height:1.4;text-transform:uppercase;
  transform:rotate(-10deg);box-shadow:var(--shadow-s)}
/* ---------- 08 MARQUEE ---------- */
.marquee{overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.marquee-track{display:flex;width:max-content;animation:marquee 26s linear infinite}
.marquee-item{display:flex;align-items:center;gap:26px;padding:20px 26px;white-space:nowrap;
  font-family:"Playfair Display",serif;font-size:clamp(20px,3vw,34px)}
.marquee-item i{color:var(--coral);font-style:normal}
@keyframes marquee{to{transform:translateX(-50%)}}
/* ---------- 09 FIGURAS / FALLBACKS ---------- */
.ph{position:relative;overflow:hidden;border-radius:var(--r-lg);background:var(--paper2);
  display:grid;place-items:center}
.ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ph::after{content:attr(data-emoji);font-size:64px;filter:saturate(.9)}
.ph--sandia{background:linear-gradient(150deg,#f6c6c0,#e08074 55%,#7d8f45)}
.ph--limon{background:linear-gradient(150deg,#f8e3a1,#f2cd66 60%,#d9a93f)}
.ph--melocoton{background:linear-gradient(150deg,#fbd9c6,#efb39b 55%,#d98a70)}
.ph--aguacate{background:linear-gradient(150deg,#dfe6c0,#a9bb6a 55%,#5c6e33)}
.ph--hero{background:linear-gradient(150deg,#f3ddcf,#e5a68c 55%,#8e9c48)}
.ph--eco{background:linear-gradient(150deg,#e5d3b8,#c9a97e 60%,#8a6f4d)}
.ph--ale{background:linear-gradient(150deg,#f6e7dc,#e8b7a4 60%,#dd7a5f)}
/* ---------- 10 TIENDA ---------- */
.shop-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.product{display:flex;flex-direction:column;border:1px solid rgba(32,36,30,.09);border-radius:var(--r-lg);
  background:var(--white);overflow:hidden;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
.product:hover{transform:translateY(-8px);box-shadow:var(--shadow)}
.product .ph{border-radius:0;aspect-ratio:1/1}
.product-body{display:flex;flex-direction:column;flex:1;padding:20px 20px 22px}
.product-tag{color:var(--olive);font-family:"DM Mono",monospace;font-size:10px;
  letter-spacing:.12em;text-transform:uppercase}
.product h3{margin:10px 0 6px;font-size:26px;line-height:1}
.product-desc{margin:0;color:var(--muted);font-size:13.5px}
.product details{margin:12px 0 0;font-size:12px;color:var(--muted)}
.product summary{cursor:pointer;font-family:"DM Mono",monospace;font-size:10px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--ink)}
.product details p{margin:8px 0 0;line-height:1.6}
.product-foot{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:16px}
.price{font-family:"DM Mono",monospace;font-size:16px}
.add-btn{display:inline-flex;align-items:center;gap:8px;min-height:42px;padding:0 16px;border-radius:999px;
  background:var(--ink);color:var(--white);font-weight:700;font-size:13px;
  transition:background .3s,transform .3s var(--ease)}
.add-btn:hover{background:var(--coral-d);transform:scale(1.04)}
/* ---------- 11 ECO ---------- */
.eco{background:var(--ink);color:var(--paper)}
.eco .eyebrow{color:rgba(246,241,232,.6)}
.eco-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:center}
.eco-visual{position:relative}
.eco-visual .ph{aspect-ratio:4/3;border-radius:var(--r-xl);box-shadow:var(--shadow)}
.eco-badge{position:absolute;right:-14px;bottom:-20px;display:grid;place-items:center;width:150px;height:150px;
  border-radius:50%;background:var(--lime);color:var(--ink);text-align:center;
  font-family:"DM Mono",monospace;font-size:10px;line-height:1.45;text-transform:uppercase;
  transform:rotate(9deg);box-shadow:var(--shadow-s)}
.eco h2{margin:14px 0 0;font-size:clamp(42px,5.6vw,80px);line-height:.95}
.eco h2 em{color:var(--lime);font-style:italic}
.eco-list{list-style:none;margin:36px 0 0;padding:0}
.eco-list li{display:grid;grid-template-columns:74px 1fr;gap:20px;padding:18px 0;
  border-top:1px solid rgba(246,241,232,.16)}
.eco-list li:last-child{border-bottom:1px solid rgba(246,241,232,.16)}
.eco-list span{color:var(--coral);font-family:"DM Mono",monospace;font-size:11px}
.eco-list strong{font-weight:500;font-size:16.5px}
.eco-honest{margin-top:26px;padding:16px 18px;border:1px dashed rgba(246,241,232,.3);border-radius:var(--r-md);
  color:rgba(246,241,232,.72);font-size:13px}
.stats{display:flex;gap:44px;margin-top:40px}
.stat b{display:block;font-family:"Playfair Display",serif;font-size:clamp(40px,5vw,64px);color:var(--butter)}
.stat i{font-style:normal;font-family:"DM Mono",monospace;font-size:11px;letter-spacing:.1em;
  text-transform:uppercase;color:rgba(246,241,232,.6)}
/* ---------- 12 HISTORIA ---------- */
.origin-grid{display:grid;grid-template-columns:1fr 1fr;gap:76px;align-items:center}
.origin-visual{position:relative;min-height:660px}
.origin-paper{position:absolute;inset:4% 10% 6% 2%;padding:50px;border-radius:var(--r-xl);
  background:#eadfcf;transform:rotate(-3deg);box-shadow:var(--shadow-s)}
.origin-paper::before{content:"";position:absolute;inset:18px;border:1px dashed rgba(32,36,30,.16);border-radius:26px}
.origin-paper h3{position:relative;margin:0;font-size:clamp(40px,4.6vw,66px);line-height:.95}
.origin-paper .chat{position:relative;max-width:340px;margin-top:34px;display:grid;gap:10px}
.bubble{padding:10px 14px;border-radius:16px 16px 16px 4px;background:var(--white);
  box-shadow:var(--shadow-s);font-size:13.5px;color:#4c4a42}
.bubble--me{justify-self:end;border-radius:16px 16px 4px 16px;background:#cbb7f0;color:#2c2440}
.origin-photo{position:absolute;right:2%;bottom:2%;width:56%;padding:10px;background:var(--white);
  border-radius:var(--r-lg);box-shadow:var(--shadow);transform:rotate(4deg)}
.origin-photo .ph{aspect-ratio:4/3;border-radius:var(--r-md)}
.origin-photo figcaption{padding:10px 4px 2px;font-family:"DM Mono",monospace;font-size:10px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.origin-sticker{position:absolute;z-index:3;right:6%;top:4%;display:grid;place-items:center;width:150px;height:150px;
  border-radius:50%;background:var(--lime);color:var(--ink);text-align:center;
  font-family:"DM Mono",monospace;font-size:10px;line-height:1.45;text-transform:uppercase;
  transform:rotate(11deg);box-shadow:var(--shadow-s)}
.origin-copy h2{margin:18px 0 0;font-size:clamp(46px,6vw,88px);line-height:.93}
.origin-copy h2 em{color:var(--coral);font-style:italic}
.origin-copy>p{max-width:520px;margin:28px 0 0;color:var(--muted);font-size:17.5px}
.origin-quote{margin-top:40px;padding-left:22px;border-left:2px solid var(--coral);
  font-family:"Playfair Display",serif;font-size:26px;line-height:1.15}
.origin-quote small{display:block;margin-top:10px;font-family:"DM Mono",monospace;font-size:11px;
  color:var(--muted);letter-spacing:.1em;text-transform:uppercase}
/* ---------- 13 VALORES ---------- */
.values{background:var(--paper2)}
.value-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.value-card{min-height:290px;padding:26px;border:1px solid rgba(32,36,30,.09);border-radius:var(--r-lg);
  background:var(--white);display:flex;flex-direction:column}
.value-card b{font-family:"DM Mono",monospace;font-size:11px;color:var(--coral-d);letter-spacing:.12em}
.value-card h3{margin:14px 0 8px;font-size:26px}
.value-card p{margin:0;color:var(--muted);font-size:14px}
/* ---------- 14 NEWSLETTER ---------- */
.news-shell{position:relative;overflow:hidden;border-radius:var(--r-xl);background:var(--coral);
  color:var(--white);padding:clamp(40px,6vw,80px);box-shadow:var(--shadow)}
.news-shell h2{margin:0;font-size:clamp(38px,5vw,70px);line-height:.95;max-width:640px}
.news-shell p{max-width:480px;margin:20px 0 0;color:rgba(255,253,247,.85)}
.news-form{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.news-form input{flex:1;min-width:220px;min-height:52px;padding:0 20px;border-radius:999px;
  border:1px solid rgba(255,253,247,.5);background:rgba(255,253,247,.14);color:var(--white)}
.news-form input::placeholder{color:rgba(255,253,247,.7)}
.news-form .button{background:var(--ink);color:var(--white)}
/* ---------- 15 FOOTER ---------- */
footer{padding:70px 0 34px;background:var(--ink);color:rgba(246,241,232,.75)}
.foot-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:44px;padding-bottom:44px;
  border-bottom:1px solid rgba(246,241,232,.14)}
.foot-brand{font-family:"Playfair Display",serif;font-size:34px;color:var(--paper)}
.foot-grid h4{margin:0 0 14px;color:var(--paper);font-family:"DM Mono",monospace;font-size:11px;
  letter-spacing:.14em;text-transform:uppercase}
.foot-grid a{display:block;padding:4px 0;font-size:14px}
.foot-grid a:hover{color:var(--coral)}
.foot-note{font-size:12.5px;max-width:380px}
.foot-base{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;padding-top:22px;
  font-family:"DM Mono",monospace;font-size:11px;letter-spacing:.08em}
/* ---------- 16 TOAST / MODAL ---------- */
.toast{position:fixed;z-index:1300;left:50%;bottom:26px;transform:translate(-50%,80px);
  padding:13px 22px;border-radius:999px;background:var(--ink);color:var(--white);
  font-size:14px;opacity:0;transition:.45s var(--ease);pointer-events:none;box-shadow:var(--shadow)}
.toast.is-on{transform:translate(-50%,0);opacity:1}
.modal{position:fixed;z-index:1400;inset:0;display:grid;place-items:center;padding:20px;
  background:rgba(24,22,17,.55);opacity:0;visibility:hidden;transition:.35s var(--ease)}
.modal.is-open{opacity:1;visibility:visible}
.modal-card{max-width:520px;width:100%;padding:34px;border-radius:var(--r-xl);background:var(--white);
  box-shadow:var(--shadow)}
.modal-card h3{margin:0 0 10px;font-size:30px}
.modal-card p{margin:0 0 8px;color:var(--muted);font-size:14.5px}
.modal-card ul{margin:12px 0 22px;padding-left:18px;color:var(--muted);font-size:13.5px}
/* ---------- 17 RESPONSIVE ---------- */
@media (max-width:1020px){
  .shop-grid{grid-template-columns:repeat(2,1fr)}
  .value-grid{grid-template-columns:repeat(2,1fr)}
  .hero-grid,.eco-grid,.origin-grid{grid-template-columns:1fr;gap:48px}
  .hero-art{min-height:540px}
  .origin-visual{min-height:560px}
  .section-head{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr}
}
@media (max-width:640px){
  .nav-links{display:none}
  .nav-toggle{display:block}
  .shop-grid{grid-template-columns:1fr}
  .value-grid{grid-template-columns:1fr}
  .stats{gap:26px;flex-wrap:wrap}
  .foot-grid{grid-template-columns:1fr}
  .section{padding:90px 0}
}
/* ---------- 18 REDUCED MOTION ---------- */
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .marquee-track{animation:none}
  *,*::before,*::after{transition-duration:.01ms!important;animation-duration:.01ms!important}
}
</style>
</head>
<body>
<a class="skip-link" href="#tienda">Saltar a la tienda</a>

<!-- NAV -->
<header class="site-nav" id="siteNav">
  <div class="nav-shell">
    <a class="brand" href="#top" aria-label="Alelí, inicio">
      <span class="brand-mark">A·</span> Alelí
    </a>
    <nav class="nav-links" aria-label="Principal">
      <a href="#tienda">Tienda</a>
      <a href="#eco">Eco</a>
      <a href="#historia">Historia</a>
      <a href="#valores">Valores</a>
    </nav>
    <div class="nav-actions">
      <button class="nav-cart" id="cartOpen" aria-label="Abrir cesta">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 7h12l-1.5 12h-9L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>
        </svg>
        <span class="cart-count" id="cartCount">0</span>
      </button>
      <button class="nav-toggle" id="menuOpen" aria-label="Abrir menú"><span></span></button>
    </div>
  </div>
</header>

<div class="menu-panel" id="menuPanel">
  <a href="#tienda">Tienda</a>
  <a href="#eco">Eco</a>
  <a href="#historia">Historia</a>
  <a href="#valores">Valores</a>
  <a href="#contacto">Contacto</a>
</div>

<!-- CESTA -->
<div class="scrim" id="scrim"></div>
<aside class="cart-drawer" id="cartDrawer" aria-label="Cesta de la compra">
  <div class="cart-head">
    <h3 class="display">Tu frutería</h3>
    <button class="cart-close" id="cartClose" aria-label="Cerrar cesta">✕</button>
  </div>
  <ul class="cart-items" id="cartItems"></ul>
  <div class="cart-foot">
    <div class="cart-subtotal"><span>Subtotal</span><span id="cartTotal">0,00 €</span></div>
    <p class="cart-note">Envío peninsular 3,90 € · gratis desde 30 € · packaging compostable.</p>
    <button class="button button--coral" id="checkoutBtn" style="width:100%">Finalizar pedido</button>
  </div>
</aside>

<main id="top">
  <!-- HERO -->
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow hero-kicker">Jabonería artesanal · Barcelona · lote pequeño</span>
        <h1 class="display" id="heroTitle">No parecen fruta.<em>Son fruta.</em></h1>
        <p class="hero-lede">Jabones de saponificación en frío, moldeados como sandías, limones,
          melocotones y aguacates. Cero plástico, glicerina intacta y el rigor de una enfermera
          que un día dijo: «quiero empezar a hacer jabones de frutas».</p>
        <div class="hero-actions">
          <a class="button button--dark" href="#tienda">Comprar la frutería ↓</a>
          <a class="button button--ghost" href="#eco">Nuestro eco, sin postureo</a>
        </div>
        <p class="hero-note mono"><span></span> curado 40 días · pH 9‑10 · glicerina natural retenida</p>
      </div>
      <div class="hero-art" id="heroArt">
        <div class="art-orbit" aria-hidden="true"></div>
        <div class="art-sticker">saponificación<br>en frío<br>✦</div>
        <figure class="art-card art-card--main" style="margin:0">
          <span class="ph ph--hero" data-emoji="🍉🍋🍑🥑">
            <img src="img/01-fruteria-hero.jpg" alt="Bandeja de piedra con cuatro jabones artesanales con forma de sandía, limón, melocotón y aguacate" loading="eager">
          </span>
          <figcaption class="art-label">
            <small>Colección 2026</small>
            <strong>La frutería<br>de jabón</strong>
          </figcaption>
        </figure>
        <div class="art-card art-card--small">
          <p class="mono">Ficha de lote</p>
          <strong>Oliva de Castilla + coco virgen</strong>
        </div>
      </div>
    </div>
  </section>

  <!-- MARQUEE -->
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track" id="marqueeTrack">
      <span class="marquee-item">Sandía <i>✦</i></span><span class="marquee-item">Limón <i>✦</i></span>
      <span class="marquee-item">Melocotón <i>✦</i></span><span class="marquee-item">Aguacate <i>✦</i></span>
      <span class="marquee-item">Cero plástico <i>✦</i></span><span class="marquee-item">Saponificación en frío <i>✦</i></span>
      <span class="marquee-item">Glicerina intacta <i>✦</i></span><span class="marquee-item">Kraft y yute <i>✦</i></span>
    </div>
  </div>

  <!-- TIENDA -->
  <section class="section" id="tienda">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">01 · Tienda</span>
          <h2 class="display">Elige tu fruta<br>de baño</h2>
        </div>
        <p>Cuatro piezas esculpidas a mano. La forma es el producto: al acercarte descubres que
          no es fruta, es jabón. INCI completo en cada ficha, porque «eco» se demuestra.</p>
      </div>
      <div class="shop-grid" id="shopGrid">

        <article class="product" data-reveal>
          <figure class="ph ph--sandia" data-emoji="🍉" style="margin:0">
            <img src="img/02-jabon-sandia.jpg" alt="Jabón artesanal con forma de porción de sandía, pulpa rosa con pepitas" loading="lazy">
          </figure>
          <div class="product-body">
            <span class="product-tag">Refrescante · verano</span>
            <h3 class="display">Sandía &amp; Menta</h3>
            <p class="product-desc">Pulpa rosa de oliva y coco con pepitas de amapola; estela fría de menta piperita.</p>
            <details>
              <summary>INCI completo</summary>
              <p>Sodium Olivate, Sodium Cocoate, Aqua, Glycerin, Mentha Piperita Oil, Papaver Somniferum Seed, CI 77491, Limonene*, Linalool*. (*alérgenos naturales de aceites esenciales)</p>
            </details>
            <div class="product-foot">
              <span class="price">6,50 €</span>
              <button class="add-btn" data-add="sandia" data-name="Sandía & Menta" data-price="6.5" data-emoji="🍉">Añadir +</button>
            </div>
          </div>
        </article>

        <article class="product" data-reveal>
          <figure class="ph ph--limon" data-emoji="🍋" style="margin:0">
            <img src="img/03-jabon-limon.jpg" alt="Jabón artesanal con forma de limón entero, piel amarilla texturizada" loading="lazy">
          </figure>
          <div class="product-body">
            <span class="product-tag">Cítrico · cocina y manos</span>
            <h3 class="display">Limón Citrus Glow</h3>
            <p class="product-desc">Piel de limón esculpida con ralladura fina; corta grasa y deja manos de huerto.</p>
            <details>
              <summary>INCI completo</summary>
              <p>Sodium Olivate, Sodium Cocoate, Aqua, Glycerin, Citrus Limon Peel Oil, Citrus Limon Peel Powder, Limonene*, Citral*.</p>
            </details>
            <div class="product-foot">
              <span class="price">6,00 €</span>
              <button class="add-btn" data-add="limon" data-name="Limón Citrus Glow" data-price="6" data-emoji="🍋">Añadir +</button>
            </div>
          </div>
        </article>

        <article class="product" data-reveal>
          <figure class="ph ph--melocoton" data-emoji="🍑" style="margin:0">
            <img src="img/04-jabon-melocoton.jpg" alt="Jabón artesanal con forma de melocotón, mármol rosa y crema" loading="lazy">
          </figure>
          <div class="product-body">
            <span class="product-tag">Piel sensible · noche</span>
            <h3 class="display">Melocotón Velvet</h3>
            <p class="product-desc">Mármol rosa-crema con manteca de karité; espuma densa y tacto terciopelo.</p>
            <details>
              <summary>INCI completo</summary>
              <p>Sodium Olivate, Sodium Cocoate, Aqua, Glycerin, Butyrospermum Parkii Butter, Prunus Persica Fruit Extract, Aroma, Linalool*.</p>
            </details>
            <div class="product-foot">
              <span class="price">6,50 €</span>
              <button class="add-btn" data-add="melocoton" data-name="Melocotón Velvet" data-price="6.5" data-emoji="🍑">Añadir +</button>
            </div>
          </div>
        </article>

        <article class="product" data-reveal>
          <figure class="ph ph--aguacate" data-emoji="🥑" style="margin:0">
            <img src="img/05-jabon-aguacate.jpg" alt="Jabón artesanal con forma de medio aguacate con hueso central caramelizado" loading="lazy">
          </figure>
          <div class="product-body">
            <span class="product-tag">Piel seca · invierno</span>
            <h3 class="display">Aguacate &amp; Karité</h3>
            <p class="product-desc">Medio aguacate con hueso de caramelo; aceite de aguacate para pieles que piden tregua.</p>
            <details>
              <summary>INCI completo</summary>
              <p>Sodium Olivate, Sodium Cocoate, Aqua, Glycerin, Persea Gratissima Oil, Butyrospermum Parkii Butter, CI 77289.</p>
            </details>
            <div class="product-foot">
              <span class="price">7,00 €</span>
              <button class="add-btn" data-add="aguacate" data-name="Aguacate & Karité" data-price="7" data-emoji="🥑">Añadir +</button>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- ECO -->
  <section class="section eco" id="eco">
    <div class="container eco-grid">
      <div class="eco-visual" data-reveal>
        <figure class="ph ph--eco" data-emoji="📦" style="margin:0">
          <img src="img/06-eco-packaging.jpg" alt="Manos envolviendo un jabón-fruta en papel kraft con yute y flor seca" loading="lazy">
        </figure>
        <div class="eco-badge">0 plástico<br>0 palma<br>0 prisa<br>✦</div>
      </div>
      <div>
        <span class="eyebrow">02 · Eco sin postureo</span>
        <h2 class="display">Lo eco se declara<br><em>y se demuestra.</em></h2>
        <ul class="eco-list">
          <li><span>ECO‑01</span><strong>Saponificación en frío: sin calor añadido, glicerina natural retenida en cada pieza.</strong></li>
          <li><span>ECO‑02</span><strong>Aceite de oliva de Castilla y coco virgen trazable; sin aceite de palma.</strong></li>
          <li><span>ECO‑03</span><strong>Packaging compostable: kraft, yute y flor seca. Ni un centímetro de plástico.</strong></li>
          <li><span>ECO‑04</span><strong>Lotes de 24 piezas, curado de 40 días en estantería de madera reciclada.</strong></li>
        </ul>
        <p class="eco-honest">Transparencia regulatoria: no usamos sellos que aún no tenemos.
          Certificación <b>COSMOS Natural</b> en curso (2026) y claims verificados conforme a la
          Directiva (UE) 2024/825. Mientras tanto: INCI completo y origen de lote publicados.</p>
        <div class="stats">
          <div class="stat"><b data-count="0">0</b><i>plástico</i></div>
          <div class="stat"><b data-count="100">0</b><i>% origen vegetal</i></div>
          <div class="stat"><b data-count="40">0</b><i>días de curado</i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- HISTORIA -->
  <section class="section" id="historia">
    <div class="container origin-grid">
      <div class="origin-visual" data-reveal>
        <div class="origin-paper">
          <h3 class="display">De un chat<br>a una frutería.</h3>
          <div class="chat" aria-label="Conversación original">
            <span class="bubble">Yo quiero empezar a hacer jabones de frutas 🍓</span>
            <span class="bubble">He comprado los ingredientes</span>
            <span class="bubble--me bubble">Ya llegamos a esa edad, amiga 😌</span>
          </div>
        </div>
        <div class="origin-sticker">fundada por<br>una enfermera<br>✦</div>
        <figure class="origin-photo" style="margin:0">
          <span class="ph ph--ale" data-emoji="🌸">
            <img src="img/07-ale-ilustracion.jpg" alt="Ilustración de Ale, fundadora de Alelí, con chaqueta vaquera y sonrisa serena" loading="lazy">
          </span>
          <figcaption>Ale · ilustración, no fotografía</figcaption>
        </figure>
      </div>
      <div class="origin-copy">
        <span class="eyebrow">03 · Historia</span>
        <h2 class="display">El arte de ser<br><em>sensible.</em></h2>
        <p>Alelí nace de un mensaje de 2019 y de una enfermera que pasó años cuidando pieles
          ajenas en turnos de doce horas. Entre risas y emojis compró los ingredientes;
          después llegó el oficio: saponificación, pH, curado, lote pequeño.
          Barcelona puso la luz; Castilla, el oliva.</p>
        <blockquote class="origin-quote">
          «Cuidar la piel también es un turno de guardia: se hace con calma, con rigor y con humor.»
          <small>— Ale, fundadora · @alejndrasp</small>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- VALORES -->
  <section class="section values" id="valores">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow">04 · Valores</span>
          <h2 class="display">Cuatro turnos<br>de guardia</h2>
        </div>
        <p>Lo que una enfermera sabe y una jabonera confirma: cuidar es un oficio de precisión con ternura.</p>
      </div>
      <div class="value-grid">
        <div class="value-card" data-reveal><b>V‑01</b><h3 class="display">Rigor</h3>
          <p>Gramos pesados, pH medido, INCI completo. La sensibilidad no riñe con el método.</p></div>
        <div class="value-card" data-reveal><b>V‑02</b><h3 class="display">Calma</h3>
          <p>40 días de curado. Nada sale del taller antes de tiempo; la prisa es un defecto de fabricación.</p></div>
        <div class="value-card" data-reveal><b>V‑03</b><h3 class="display">Humor</h3>
          <p>«Ya llegamos a esa edad, amiga.» Una marca que se ríe de sí misma envejece mejor.</p></div>
        <div class="value-card" data-reveal><b>V‑04</b><h3 class="display">Oficio</h3>
          <p>Manos que moldean, envuelven y atan. Cada fruta de jabón es irrepetible: como debe ser.</p></div>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="section" id="contacto">
    <div class="container">
      <div class="news-shell" data-reveal>
        <h2 class="display">Entra en el parte de frutas.</h2>
        <p>Un correo al mes: lote nuevo, receta de la estación y un chiste de enfermería. Sin spam, como sin plástico.</p>
        <form class="news-form" id="newsForm">
          <input type="email" required placeholder="tu@correo.com" aria-label="Tu correo electrónico">
          <button class="button" type="submit">Suscribirme</button>
        </form>
      </div>
    </div>
  </section>
</main>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="foot-grid">
      <div>
        <p class="foot-brand">Alelí ✦</p>
        <p class="foot-note">Jabonería frutal de Barcelona. Este sitio no usa fotografías personales
          reales: la fundadora aparece como ilustración y el producto como fotografía generada de dirección
          de arte propia. Futuros assets editoriales: Openverse, Wikimedia Commons, Pexels y Unsplash.</p>
      </div>
      <div>
        <h4>Tienda</h4>
        <a href="#tienda">Sandía &amp; Menta</a><a href="#tienda">Limón Citrus Glow</a>
        <a href="#tienda">Melocotón Velvet</a><a href="#tienda">Aguacate &amp; Karité</a>
      </div>
      <div>
        <h4>Marca</h4>
        <a href="#eco">Política eco</a><a href="#historia">Historia</a>
        <a href="https://instagram.com" rel="noopener">@alejndrasp en Instagram</a>
        <a href="#contacto">Parte de frutas</a>
      </div>
    </div>
    <div class="foot-base">
      <span>© 2026 ALELÍ · BARCELONA</span>
      <span>HECHO A MANO · SAPONIFICACIÓN EN FRÍO</span>
      <span>GSAP + SCROLLTRIGGER · GREENSOCK</span>
    </div>
  </div>
</footer>

<div class="toast" id="toast" role="status" aria-live="polite"></div>

<!-- MODAL CHECKOUT -->
<div class="modal" id="checkoutModal" role="dialog" aria-modal="true" aria-labelledby="coTitle">
  <div class="modal-card">
    <h3 class="display" id="coTitle">Checkout en fase 1</h3>
    <p>Esta cesta es una demo funcional (persiste en tu navegador). Para cobrar de verdad, conecta en este punto:</p>
    <ul>
      <li><b>Stripe Payment Links</b>: un enlace por producto, sin backend.</li>
      <li><b>Shopify Lite</b>: botones Buy sobre este mismo HTML.</li>
      <li><b>Stripe Checkout Session</b>: cuando añadas CMS y stock real.</li>
    </ul>
    <button class="button button--dark" id="modalClose">Entendido, seguir mirando frutas</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>
/* ================= ALELÍ v3 · LÓGICA ================= */
(function(){
"use strict";
var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- NAV / MENÚ ---------- */
var nav = document.getElementById("siteNav");
var menuPanel = document.getElementById("menuPanel");
var menuOpen = document.getElementById("menuOpen");
window.addEventListener("scroll", function(){
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, {passive:true});
menuOpen.addEventListener("click", function(){
  menuPanel.classList.toggle("is-open");
  document.body.classList.toggle("is-locked", menuPanel.classList.contains("is-open"));
});
menuPanel.querySelectorAll("a").forEach(function(a){
  a.addEventListener("click", function(){
    menuPanel.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  });
});

/* ---------- MARQUEE (duplicado para loop) ---------- */
var track = document.getElementById("marqueeTrack");
track.innerHTML += track.innerHTML;

/* ---------- CESTA ---------- */
var KEY = "aleliCartV3";
var cart = {};
try { cart = JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ cart = {}; }
var drawer = document.getElementById("cartDrawer");
var scrim = document.getElementById("scrim");
var itemsEl = document.getElementById("cartItems");
var countEl = document.getElementById("cartCount");
var totalEl = document.getElementById("cartTotal");

function money(n){ return n.toFixed(2).replace(".", ",") + " €"; }
function save(){ localStorage.setItem(KEY, JSON.stringify(cart)); }
function totals(){
  var c = 0, t = 0;
  Object.keys(cart).forEach(function(k){ c += cart[k].qty; t += cart[k].qty * cart[k].price; });
  return {c:c, t:t};
}
function render(){
  var data = totals();
  countEl.textContent = data.c;
  totalEl.textContent = money(data.t);
  itemsEl.innerHTML = "";
  var keys = Object.keys(cart);
  if(!keys.length){
    itemsEl.innerHTML = '<li class="cart-empty" style="grid-template-columns:1fr">Tu cesta está en ayunas.<br>🍉  🍑 </li>';
    return;
  }
  keys.forEach(function(k){
    var it = cart[k];
    var li = document.createElement("li");
    li.innerHTML =
      '<span class="cart-thumb ph ph--'+k+'" data-emoji="'+it.emoji+'" style="border-radius:14px"></span>' +
      '<span><span class="cart-name">'+it.name+'</span><br><span class="cart-price">'+money(it.price)+' / ud</span></span>' +
      '<span class="qty"><button data-q="-1" data-k="'+k+'" aria-label="Restar uno">−</button>' +
      '<b>'+it.qty+'</b><button data-q="1" data-k="'+k+'" aria-label="Sumar uno">+</button></span>';
    itemsEl.appendChild(li);
  });
}
function openCart(){ drawer.classList.add("is-open"); scrim.classList.add("is-on"); document.body.classList.add("is-locked"); }
function closeAll(){
  drawer.classList.remove("is-open"); scrim.classList.remove("is-on");
  document.body.classList.remove("is-locked");
}
document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeAll);
scrim.addEventListener("click", closeAll);

itemsEl.addEventListener("click", function(e){
  var b = e.target.closest("button[data-q]");
  if(!b) return;
  var k = b.getAttribute("data-k"), d = parseInt(b.getAttribute("data-q"), 10);
  cart[k].qty += d;
  if(cart[k].qty <= 0) delete cart[k];
  save(); render();
});

document.querySelectorAll(".add-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    var k = btn.getAttribute("data-add");
    if(!cart[k]) cart[k] = {
      name: btn.getAttribute("data-name"),
      price: parseFloat(btn.getAttribute("data-price")),
      emoji: btn.getAttribute("data-emoji"), qty: 0
    };
    cart[k].qty++;
    save(); render();
    toast(btn.getAttribute("data-emoji") + " " + btn.getAttribute("data-name") + " en la cesta");
    if(!reduced) gsap.fromTo(btn, {scale:.9}, {scale:1, duration:.4, ease:"back.out(3)"});
  });
});

/* ---------- CHECKOUT / MODAL ---------- */
var modal = document.getElementById("checkoutModal");
document.getElementById("checkoutBtn").addEventListener("click", function(){
  if(!totals().c){ toast("Añade alguna fruta-jabón primero 🍋"); return; }
  closeAll(); modal.classList.add("is-open");
});
document.getElementById("modalClose").addEventListener("click", function(){ modal.classList.remove("is-open"); });
modal.addEventListener("click", function(e){ if(e.target === modal) modal.classList.remove("is-open"); });

/* ---------- TOAST ---------- */
var toastEl = document.getElementById("toast"), toastT;
function toast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("is-on");
  clearTimeout(toastT);
  toastT = setTimeout(function(){ toastEl.classList.remove("is-on"); }, 2400);
}

/* ---------- NEWSLETTER ---------- */
document.getElementById("newsForm").addEventListener("submit", function(e){
  e.preventDefault();
  toast("Dentro del parte de frutas 🍑 Revisa tu correo.");
  e.target.reset();
});

/* ---------- GSAP + SCROLLTRIGGER ---------- */
if(window.gsap && !reduced){
  gsap.registerPlugin(ScrollTrigger);

  /* Titular: revelado por palabras */
  var h1 = document.getElementById("heroTitle");
  var em = h1.querySelector("em");
  var words = h1.childNodes[0].textContent.trim().split(" ");
  h1.childNodes[0].textContent = "";
  words.forEach(function(w){
    var s = document.createElement("span");
    s.style.display = "inline-block"; s.style.overflow = "hidden";
    var i = document.createElement("span");
    i.style.display = "inline-block"; i.textContent = w + " ";
    s.appendChild(i); h1.insertBefore(s, em);
  });
  gsap.from(h1.querySelectorAll("span > span"), {yPercent:110, duration:1, stagger:.09, ease:"power4.out", delay:.15});
  gsap.from(em, {yPercent:60, autoAlpha:0, duration:1.1, ease:"power3.out", delay:.55});
  gsap.from(".hero-lede, .hero-actions, .hero-note", {y:26, autoAlpha:0, duration:.9, stagger:.12, delay:.7, ease:"power3.out"});

  /* Parallax del arte del hero */
  gsap.to("#heroArt .art-card--main", {
    yPercent:-7, ease:"none",
    scrollTrigger:{trigger:".hero", start:"top top", end:"bottom top", scrub:true}
  });
  gsap.to(".art-sticker", {
    rotation:8, yPercent:14, ease:"none",
    scrollTrigger:{trigger:".hero", start:"top top", end:"bottom top", scrub:true}
  });

  /* Reveals genéricos */
  gsap.utils.toArray("[data-reveal]").forEach(function(el){
    gsap.fromTo(el, {y:44, autoAlpha:0}, {
      y:0, autoAlpha:1, duration:1, ease:"power3.out",
      scrollTrigger:{trigger:el, start:"top 86%"}
    });
  });

  /* Stagger de productos */
  gsap.from(".product", {
    y:60, autoAlpha:0, duration:.9, stagger:.12, ease:"power3.out",
    scrollTrigger:{trigger:"#shopGrid", start:"top 80%"}
  });

  /* Contadores eco */
  gsap.utils.toArray("[data-count]").forEach(function(el){
    var end = parseInt(el.getAttribute("data-count"), 10);
    var obj = {v:0};
    gsap.to(obj, {
      v:end, duration:1.6, ease:"power2.out",
      scrollTrigger:{trigger:el, start:"top 88%"},
      onUpdate:function(){ el.textContent = Math.round(obj.v); }
    });
  });

  /* Flotación suave de tarjetas del hero */
  gsap.to(".art-card--small", {y:-12, rotation:7, duration:3, yoyo:true, repeat:-1, ease:"sine.inOut"});
}else if(reduced){
  document.querySelectorAll("[data-count]").forEach(function(el){
    el.textContent = el.getAttribute("data-count");
  });
}

render();
})();
</script>
</body>
</html>
```

---

## 9 · Reflexión prospectiva

Alelí v3 convierte un chiste de chat («ya llegamos a esa edad») en infraestructura de marca: la **forma-fruta** es el diferencial percibido, el **INCI publicado** es el diferencial regulatorio, y la **ilustración en lugar de foto real** es el diferencial ético en una era de Dir. 2024/825 y RGPD. El riesgo estratégico no es técnico sino semántico: cuando el jabón artesanal se viraliza en TikTok (como sugería el chat), la escasez del lote pequeño choca con la demanda; la fase 2 (CMS + stock real) debe llegar *antes* del primer vídeo viral, no después. Históricamente, Castilla perdió su monopolio del jabón cuando industrializó sin relato [[22]]; Alelí tiene el relato y debe industrializar solo lo imprescindible.

**Pregunta guía:** *¿Qué claim de tu etiqueta sobreviviría una auditoría COSMOS mañana a las 9:00 — y cuál prefieres retirar hoy, tú, antes de que lo retire la ley?*
