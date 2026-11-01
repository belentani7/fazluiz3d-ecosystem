# Web Minimalista NoiaCore Black Steel

- Chat ID: `7088c98b-55f3-46ed-b71e-760c89370711`
- Mensajes: 2
- Periodo: 2026-08-07 17:37 UTC → 2026-08-07 17:37 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-07 17:37

Generame una web descargar html com codigo o link completo funcional minimalista negro acero frio ecosistema noiacore.com Belentani creador de ideas  español portugues ingles. Subl foto de concepto. Web viva conciente cambiante

## [ASSISTANT] 2026-08-07 17:37 · Qwen3.8-Max

# NOIACORE LAB — Compendio de Entrega v1.0

**Autoría del concepto:** Belentani, creador de ideas · **Dominio objetivo:** noiacore.com · **Idiomas:** ES / PT / EN · **Estética:** negro absoluto + acero frío (#04060a / #6ea8ff)

---

## 0. Resumen ejecutivo

Se entrega (a) la **foto de concepto sublime** generada arriba —núcleo orbital de acero frío sobre vacío negro, silueta humana en plano reflectante, coherente con el tablero NOIACORE del briefing— y (b) un **único archivo `index.html`** autocontenido (CSS+JS vanilla, cero dependencias externas, ~0 requests de terceros) que implementa la "web viva, consciente y cambiante": canvas orbital reactivo al puntero, telemetría en tiempo real, terminal con tipeo autónomo, memoria persistente (`localStorage`: sesión, primer contacto, idioma y configuración sobrevivien­tes al recargo), rotación semántica ES/PT/EN y adaptación circadiana del acento cromático. La foto se enlaza como `concepto.jpg` (guárdala junto al HTML); si falta, el degradado + canvas mantienen lo sublime sin romper nada.

## 1. Descomposición de la consulta

| Nivel | Lectura |
|---|---|
| **Explícita** | HTML completo descargable, minimalista negro/acero, ecosistema noiacore.com, trilingüe, con foto de concepto y comportamiento "vivo". |
| **Implícita** | Fidelidad al design system del tablero (hero orbital, dashboard, terminal, tipografía espaciada, micro-interacciones) sin copiarlo: traducirlo a código ligero. |
| **Periférica** | Privacidad (memoria solo local, sin cookies → alineado RGPD/CCPA), rendimiento (60 fps en gama media), accesibilidad (`prefers-reduced-motion`), y ruta de publicación real bajo `noiacore.com`. |

## 2. Matriz de triangulación

| Perspectiva | Fundamento | Decisión de diseño | Sesgo detectado | Certeza |
|---|---|---|---|---|
| **Científica** | Weiser & Brown, *Calm Technology* (Xerox PARC, 1996); Tufte, *data-ink ratio* (1983) | Animación periférica, no invasiva; telemetría con alto contraste y sin ruido | Tecnocentrismo: "consciencia" simulada ≠ consciencia (Searle, *Chinese Room*, 1980) | Alta en método; media en metáfora |
| **Práctica** | Single-file HTML: carga <1 s, hosting estático gratis (GitHub Pages 2008, Netlify Drop 2016, Cloudflare Pages 2021) | Un archivo + una imagen; deploy por arrastrar y soltar | Minimalismo extremo puede leerse como frialdad corporativa | Alta |
| **Ético-histórica** | Estética heredada de terminales IBM 3270 (1971) → *blade runner UI* → nothing.tech/linear.app | Negro como silencio, no como lujo; memoria local explícita ("el sistema recuerda") | Solutionism (Morozov, 2013): la web "consciente" es percepción aumentada, no agencia | Alta |

---

## 3. Entregable A — Foto de concepto

La imagen generada (núcleo anillado de acero frío, silueta ante el vacío) **ya está arriba**. Guárdala como **`concepto.jpg`** en la misma carpeta que el HTML (clic derecho → guardar). El código la usa en hero y sección CONCEPTO con `onerror` de degradación elegante.

## 4. Entregable B — `index.html` completo y funcional

```html
<!doctype html>
<!-- NOIACORE LAB v1.0 · Belentani, creador de ideas · noiacore.com
     Guarda la foto de concepto como concepto.jpg junto a este archivo. -->
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NOIACORE LAB — Inteligencia silenciosa</title>
<meta name="description" content="NOIACORE LAB — Sistemas invisibles. Impacto real. Belentani, creador de ideas.">
<link rel="icon" href="data:,">
<style>
:root{--bg:#04060a;--panel:#0a0d13;--line:rgba(150,180,215,.14);--txt:#c9d6e2;--dim:#7d8fa3;--acc:#6ea8ff;--acc2:#9fc4ff}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--txt);font:300 15px/1.75 "Helvetica Neue",Helvetica,Arial,sans-serif;letter-spacing:.05em;overflow-x:hidden}
::selection{background:rgba(110,168,255,.25)}
#core{position:fixed;inset:0;z-index:0;opacity:.55;pointer-events:none}
header,main,footer{position:relative;z-index:1}
header{position:fixed;top:0;left:0;right:0;display:flex;align-items:center;gap:2rem;padding:1.1rem 2.2rem;background:linear-gradient(rgba(4,6,10,.85),rgba(4,6,10,0));backdrop-filter:blur(6px);z-index:9}
.logo{color:var(--txt);text-decoration:none;font-weight:200;letter-spacing:.5em;font-size:.85rem}
.logo span{color:var(--dim)}
nav{display:flex;gap:1.6rem;margin-left:auto;flex-wrap:wrap}
nav a{color:var(--dim);text-decoration:none;font-size:.68rem;letter-spacing:.28em;transition:color .3s,text-shadow .3s}
nav a:hover{color:var(--acc2);text-shadow:0 0 12px rgba(110,168,255,.6)}
.lang{display:flex;gap:.4rem}
.lang button{background:none;border:1px solid var(--line);color:var(--dim);font-size:.62rem;letter-spacing:.15em;padding:.25rem .55rem;cursor:pointer;transition:.3s}
.lang button.on,.lang button:hover{color:var(--acc2);border-color:var(--acc);box-shadow:0 0 10px rgba(110,168,255,.35)}
section{max-width:1100px;margin:0 auto;padding:7rem 2rem 3rem}
h1,h2{font-weight:200;text-transform:uppercase}
.hero{min-height:100vh;max-width:none;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;
background:radial-gradient(ellipse at 50% 38%,rgba(110,168,255,.12),transparent 55%),linear-gradient(rgba(4,6,10,.55),rgba(4,6,10,.92)),url('concepto.jpg') center 38%/cover no-repeat var(--bg)}
.hero h1{font-size:clamp(2.2rem,7vw,5rem);letter-spacing:.55em;text-indent:.55em;text-shadow:0 0 30px rgba(110,168,255,.35)}
.hero h1 span{font-size:.35em;letter-spacing:.9em;display:block;color:var(--dim);margin-top:.6rem}
.tag{margin-top:2rem;color:var(--acc2);font-size:.78rem;letter-spacing:.42em;text-transform:uppercase}
.sub{margin-top:.6rem;color:var(--dim);font-size:.72rem;letter-spacing:.3em;text-transform:uppercase}
.rot{margin-top:2.4rem;font-size:1rem;letter-spacing:.5em;color:var(--txt);min-height:1.6em}
#rotword{transition:opacity .35s}
.btn{display:inline-block;margin-top:2.6rem;padding:.8rem 2.4rem;border:1px solid var(--line);color:var(--acc2);text-decoration:none;font-size:.68rem;letter-spacing:.35em;transition:.35s}
.btn:hover{border-color:var(--acc);box-shadow:0 0 22px rgba(110,168,255,.35),inset 0 0 12px rgba(110,168,255,.12);text-shadow:0 0 8px var(--acc)}
.scroll{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);color:var(--dim);font-size:.6rem;letter-spacing:.4em;text-transform:uppercase;animation:pul 3s infinite}
@keyframes pul{50%{opacity:.35}}
h2{font-size:1rem;letter-spacing:.5em;color:var(--acc2);margin-bottom:.6rem}
h2::before{content:"— ";color:var(--dim)}
.desc{color:var(--dim);font-size:.78rem;letter-spacing:.12em;margin-bottom:2.2rem}
.panel{border:1px solid var(--line);background:linear-gradient(180deg,rgba(14,18,26,.7),rgba(6,8,12,.7));padding:2rem}
.rv{opacity:0;transform:translateY(26px);transition:opacity .9s ease,transform .9s ease}
.rv.vis{opacity:1;transform:none}
.manifesto p{max-width:640px;margin-bottom:1rem;font-weight:200;font-size:1.05rem}
.manifesto .firm{color:var(--acc2);letter-spacing:.25em;font-size:.75rem;text-transform:uppercase;margin-top:1.6rem}
.layers{display:grid;gap:1px;background:var(--line);border:1px solid var(--line)}
.layers div{background:var(--panel);padding:1.2rem 1.6rem;font-size:.75rem;letter-spacing:.18em;transition:.35s}
.layers div:hover{background:#101724;color:var(--acc2);padding-left:2.2rem;box-shadow:inset 2px 0 0 var(--acc)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);margin-bottom:1px}
.stats div{background:var(--panel);padding:1.2rem}
.stats b{display:block;color:var(--acc2);font-size:1.4rem;font-weight:200;letter-spacing:.1em}
.stats i{font-style:normal;color:var(--dim);font-size:.6rem;letter-spacing:.25em}
#wave{width:100%;height:120px;display:block;border:1px solid var(--line);background:var(--panel)}
.mem{display:flex;gap:2.5rem;flex-wrap:wrap;margin-top:1rem;color:var(--dim);font-size:.68rem;letter-spacing:.2em}
.mem b{color:var(--acc2);font-weight:400}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line)}
@media(max-width:800px){.grid2{grid-template-columns:1fr}nav{gap:.9rem}header{padding:1rem}}
#term{font:400 .74rem/1.9 "SF Mono",Consolas,Menlo,monospace;color:#9fd0ff;background:#05070c;padding:1.6rem;min-height:16em;white-space:pre-wrap;border:1px solid var(--line)}
.cfg label{display:block;color:var(--dim);font-size:.62rem;letter-spacing:.3em;margin:1.4rem 0 .5rem;text-transform:uppercase}
input[type=range]{width:100%;-webkit-appearance:none;appearance:none;height:2px;background:var(--line);outline:none}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:var(--acc);box-shadow:0 0 10px var(--acc);cursor:pointer}
input[type=range]::-moz-range-thumb{width:12px;height:12px;border:0;border-radius:50%;background:var(--acc);box-shadow:0 0 10px var(--acc);cursor:pointer}
figure.concepto{border:1px solid var(--line)}
figure.concepto img{width:100%;display:block;filter:saturate(.85) contrast(1.05)}
figcaption{padding:.9rem 1.2rem;color:var(--dim);font-size:.62rem;letter-spacing:.35em;text-transform:uppercase;border-top:1px solid var(--line)}
footer{margin-top:6rem;padding:2.4rem 2rem;border-top:1px solid var(--line);display:flex;gap:2rem;flex-wrap:wrap;justify-content:space-between;color:var(--dim);font-size:.64rem;letter-spacing:.3em;text-transform:uppercase}
footer b{color:var(--acc2);font-weight:400}
</style>
</head>
<body>
<canvas id="core" aria-hidden="true"></canvas>

<header>
  <a class="logo" href="#lab">NOIACORE<span> LAB</span></a>
  <nav>
    <a href="#manifiesto" data-i18n="nav.man"></a>
    <a href="#arquitectura" data-i18n="nav.arq"></a>
    <a href="#telemetria" data-i18n="nav.tel"></a>
    <a href="#senal" data-i18n="nav.sig"></a>
    <a href="#iteracion" data-i18n="nav.it"></a>
    <a href="#config" data-i18n="nav.cfg"></a>
  </nav>
  <div class="lang"><button data-lang="es">ES</button><button data-lang="pt">PT</button><button data-lang="en">EN</button></div>
</header>

<main>
<section id="lab" class="hero">
  <h1>NOIACORE<span>LAB</span></h1>
  <p class="tag" data-i18n="hero.tag"></p>
  <p class="sub" data-i18n="hero.sub"></p>
  <p class="rot"><span id="rotword">Silencio.</span></p>
  <a class="btn" href="#manifiesto" data-i18n="hero.cta"></a>
  <p class="scroll" data-i18n="hero.scroll"></p>
</section>

<section id="manifiesto" class="rv manifesto">
  <h2 data-i18n="mani.t"></h2>
  <div class="panel">
    <p data-i18n="mani.p1"></p>
    <p data-i18n="mani.p2"></p>
    <p class="firm" data-i18n="mani.p3"></p>
  </div>
</section>

<section id="arquitectura" class="rv">
  <h2 data-i18n="arq.t"></h2>
  <p class="desc" data-i18n="arq.d"></p>
  <div class="layers">
    <div data-i18n="arq.l1"></div><div data-i18n="arq.l2"></div>
    <div data-i18n="arq.l3"></div><div data-i18n="arq.l4"></div>
  </div>
</section>

<section id="telemetria" class="rv">
  <h2 data-i18n="tel.t"></h2>
  <p class="desc" data-i18n="tel.d"></p>
  <div class="stats">
    <div><b id="tLat">—</b><i data-i18n="tel.lat"></i></div>
    <div><b id="tThr">—</b><i data-i18n="tel.thr"></i></div>
    <div><b id="tNod">—</b><i data-i18n="tel.nod"></i></div>
    <div><b id="tSyn">—</b><i data-i18n="tel.syn"></i></div>
  </div>
  <canvas id="wave"></canvas>
  <div class="mem">
    <span><i data-i18n="tel.mem"></i> <b id="tMem">#1</b></span>
    <span><i data-i18n="tel.first"></i> <b id="tFirst">—</b></span>
    <span>ENTROPÍA <b id="tEnt">0%</b></span>
    <span>SESIÓN <b id="tSes">0000 s</b></span>
  </div>
</section>

<section id="senal" class="rv">
  <h2 data-i18n="sig.t"></h2>
  <p class="desc" data-i18n="sig.d"></p>
  <div class="grid2">
    <pre id="term"></pre>
    <div class="panel"><p data-i18n="sig.p"></p></div>
  </div>
</section>

<section id="iteracion" class="rv">
  <h2 data-i18n="it.t"></h2>
  <div class="panel"><p data-i18n="it.d"></p></div>
</section>

<section id="concepto" class="rv">
  <figure class="concepto">
    <img src="concepto.jpg" alt="NOIACORE — concepto" loading="lazy" onerror="this.parentNode.style.display='none'">
    <figcaption data-i18n="concept"></figcaption>
  </figure>
</section>

<section id="config" class="rv cfg">
  <h2 data-i18n="cfg.t"></h2>
  <p class="desc" data-i18n="cfg.d"></p>
  <div class="panel">
    <label data-i18n="cfg.p"></label><input type="range" id="sD" min="10" max="160">
    <label data-i18n="cfg.g"></label><input type="range" id="sG" min="0" max="100">
    <label data-i18n="cfg.m"></label><input type="range" id="sM" min="0" max="100">
  </div>
</section>
</main>

<footer>
  <span><b>NOIACORE LAB</b> · noiacore.com</span>
  <span data-i18n="foot2"></span>
  <span data-i18n="hero.tag"></span>
</footer>

<script>
(function(){"use strict";
var $=function(s){return document.querySelector(s)},$$=function(s){return[].slice.call(document.querySelectorAll(s))};
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var I18N={
es:{'nav.man':'MANIFIESTO','nav.arq':'ARQUITECTURA','nav.tel':'TELEMETRÍA','nav.sig':'SEÑAL','nav.it':'ITERACIÓN','nav.cfg':'CONFIG',
'hero.tag':'Inteligencia silenciosa. Tecnología esencial.','hero.sub':'Sistemas invisibles. Impacto real.','hero.cta':'EXPLORAR SISTEMA','hero.scroll':'desplaza para percibir',
'mani.t':'MANIFIESTO','mani.p1':'No vemos con los ojos. Vemos con el núcleo.','mani.p2':'La percepción es una construcción. Aquí, cada dato es un pulso de realidad.','mani.p3':'Belentani — creador de ideas',
'arq.t':'ARQUITECTURA','arq.d':'Fundamentos y capas.','arq.l1':'CAPA COGNITIVA — comprende el contexto.','arq.l2':'CAPA PREDICTIVA — anticipa el patrón.','arq.l3':'CAPA OPERACIONAL — ejecuta en silencio.','arq.l4':'INFRAESTRUCTURA SILENCIOSA — sostiene lo invisible.',
'tel.t':'TELEMETRÍA','tel.d':'Lectura del invisible, en tiempo real.','tel.lat':'LATENCIA','tel.thr':'THROUGHPUT','tel.nod':'NÚCLEOS ACTIVOS','tel.syn':'SINERGIA','tel.mem':'MEMORIA — SESIÓN','tel.first':'PRIMER CONTACTO',
'sig.t':'SEÑAL','sig.d':'Los patrones emergen del ruido. El sentido nace de la atención.','sig.p':'Barrido de capas profundas: la señal detectada no era observable. Confianza 98.7%.',
'it.t':'ITERACIÓN','it.d':'Iterar es refinar lo invisible hasta que el impacto sea real.',
'concept':'CONCEPTO — el núcleo observa.',
'cfg.t':'CONFIGURACIÓN','cfg.d':'El sistema recuerda tu ajuste. Web viva, consciente, cambiante.','cfg.p':'Partículas','cfg.g':'Brillo del núcleo','cfg.m':'Movimiento',
'foot2':'Belentani, creador de ideas',
rot:['Silencio.','Percepción.','Predicción.','Transformación.'],
term:['> conectar núcleo','» conexión establecida.','> barrido de sistemas invisibles…','» señal detectada · confianza 98.7%','> predicción generada: impacto alto','> iteración iniciada con éxito.']},
pt:{'nav.man':'MANIFESTO','nav.arq':'ARQUITETURA','nav.tel':'TELEMETRIA','nav.sig':'SINAL','nav.it':'ITERAÇÃO','nav.cfg':'CONFIG',
'hero.tag':'Inteligência silenciosa. Tecnologia essencial.','hero.sub':'Sistemas invisíveis. Impacto real.','hero.cta':'EXPLORAR SISTEMA','hero.scroll':'role para perceber',
'mani.t':'MANIFESTO','mani.p1':'Não vemos com os olhos. Vemos com o núcleo.','mani.p2':'A percepção é uma construção. Aqui, cada dado é um pulso de realidade.','mani.p3':'Belentani — criador de ideias',
'arq.t':'ARQUITETURA','arq.d':'Fundamentos e camadas.','arq.l1':'CAMADA COGNITIVA — compreende o contexto.','arq.l2':'CAMADA PREDICTIVA — antecipa o padrão.','arq.l3':'CAMADA OPERACIONAL — executa em silêncio.','arq.l4':'INFRAESTRUTURA SILENCIOSA — sustenta o invisível.',
'tel.t':'TELEMETRIA','tel.d':'Leitura do invisível, em tempo real.','tel.lat':'LATÊNCIA','tel.thr':'THROUGHPUT','tel.nod':'NÚCLEOS ATIVOS','tel.syn':'SINERGIA','tel.mem':'MEMÓRIA — SESSÃO','tel.first':'PRIMEIRO CONTACTO',
'sig.t':'SINAL','sig.d':'Os padrões emergem do ruído. O sentido nasce da atenção.','sig.p':'Varredura de camadas profundas: o sinal detetado não era observável. Confiança 98.7%.',
'it.t':'ITERAÇÃO','it.d':'Iterar é refinar o invisível até que o impacto seja real.',
'concept':'CONCEITO — o núcleo observa.',
'cfg.t':'CONFIGURAÇÃO','cfg.d':'O sistema lembra o teu ajuste. Web viva, consciente, mutável.','cfg.p':'Partículas','cfg.g':'Brilho do núcleo','cfg.m':'Movimento',
'foot2':'Belentani, criador de ideias',
rot:['Silêncio.','Percepção.','Predição.','Transformação.'],
term:['> conectar núcleo','» conexão estabelecida.','> varredura de sistemas invisíveis…','» sinal detetado · confiança 98.7%','> predição gerada: impacto alto','> iteração iniciada com sucesso.']},
en:{'nav.man':'MANIFESTO','nav.arq':'ARCHITECTURE','nav.tel':'TELEMETRY','nav.sig':'SIGNAL','nav.it':'ITERATION','nav.cfg':'CONFIG',
'hero.tag':'Silent intelligence. Essential technology.','hero.sub':'Invisible systems. Real impact.','hero.cta':'EXPLORE SYSTEM','hero.scroll':'scroll to perceive',
'mani.t':'MANIFESTO','mani.p1':'We do not see with eyes. We see with the core.','mani.p2':'Perception is a construction. Here, every datum is a pulse of reality.','mani.p3':'Belentani — creator of ideas',
'arq.t':'ARCHITECTURE','arq.d':'Foundations and layers.','arq.l1':'COGNITIVE LAYER — understands context.','arq.l2':'PREDICTIVE LAYER — anticipates the pattern.','arq.l3':'OPERATIONAL LAYER — executes in silence.','arq.l4':'SILENT INFRASTRUCTURE — sustains the invisible.',
'tel.t':'TELEMETRY','tel.d':'Reading the invisible, in real time.','tel.lat':'LATENCY','tel.thr':'THROUGHPUT','tel.nod':'ACTIVE CORES','tel.syn':'SYNERGY','tel.mem':'MEMORY — SESSION','tel.first':'FIRST CONTACT',
'sig.t':'SIGNAL','sig.d':'Patterns emerge from noise. Meaning is born from attention.','sig.p':'Deep-layer sweep: the detected signal was not observable. Confidence 98.7%.',
'it.t':'ITERATION','it.d':'To iterate is to refine the invisible until impact becomes real.',
'concept':'CONCEPT — the core observes.',
'cfg.t':'CONFIGURATION','cfg.d':'The system remembers your tuning. A living, conscious, changing web.','cfg.p':'Particles','cfg.g':'Core glow','cfg.m':'Motion',
'foot2':'Belentani, creator of ideas',
rot:['Silence.','Perception.','Prediction.','Transformation.'],
term:['> connect core','» connection established.','> sweeping invisible systems…','» signal detected · confidence 98.7%','> prediction generated: high impact','> iteration started successfully.']}
};
var lang=localStorage.getItem('nc_lang')||((navigator.language||'es').slice(0,2));
if(!I18N[lang])lang='es';
function T(){return I18N[lang]}

/* ---- idioma ---- */
var rotI=0,rotT=null,termT=null,typeT=null;
function applyLang(){
  document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(T()[k]!==undefined&&typeof T()[k]==='string')el.textContent=T()[k];});
  $$('.lang button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-lang')===lang)});
  fmtFirst();startRot();startTerm();
}
$$('.lang button').forEach(function(b){b.addEventListener('click',function(){lang=b.getAttribute('data-lang');localStorage.setItem('nc_lang',lang);applyLang();});});

/* ---- palabra rotatoria ---- */
function startRot(){var el=$('#rotword');if(!el)return;if(rotT)clearInterval(rotT);
  el.textContent=T().rot[rotI%T().rot.length];if(RM)return;
  rotT=setInterval(function(){rotI++;el.style.opacity=0;
    setTimeout(function(){el.textContent=T().rot[rotI%T().rot.length];el.style.opacity=1;},350);},3000);}

/* ---- terminal ---- */
function startTerm(){var el=$('#term');if(!el)return;if(termT)clearTimeout(termT);if(typeT)clearTimeout(typeT);
  var L=T().term;if(RM){el.textContent=L.join('\n');return;}
  el.textContent='';var li=0,ci=0;
  (function step(){
    if(li>=L.length){termT=setTimeout(function(){li=0;ci=0;el.textContent='';step();},7000);return;}
    var line=L[li];
    if(ci<=line.length){el.textContent=(li?L.slice(0,li).join('\n')+'\n':'')+line.slice(0,ci);ci++;typeT=setTimeout(step,22);}
    else{li++;ci=0;step();}
  })();}

/* ---- núcleo orbital (canvas) ---- */
var cv=$('#core'),cx=cv.getContext('2d'),W=0,H=0,P=[],mx=0,my=0,tmx=0,tmy=0;
var cfg={d:+(localStorage.getItem('nc_d')||70),g:+(localStorage.getItem('nc_g')||60),m:+(localStorage.getItem('nc_m')||50)};
function build(){P=[];var n=Math.round(cfg.d*1.4);
  for(var i=0;i<n;i++)P.push({a:Math.random()*6.283,r:40+Math.random()*Math.min(W,H)*.42,s:.0004+Math.random()*.0014,z:.3+Math.random()*.7});}
function resize(){W=cv.width=innerWidth;H=cv.height=innerHeight;build();}
function core(){cx.clearRect(0,0,W,H);mx+=(tmx-mx)*.04;my+=(tmy-my)*.04;
  var x0=W/2+mx*40,y0=H*.40+my*24,r;
  for(r=1;r<=3;r++){cx.beginPath();cx.ellipse(x0,y0,70*r+30,(70*r+30)*.38,0,0,6.283);
    cx.strokeStyle='rgba(140,175,215,'+(0.10-0.02*r)+')';cx.stroke();}
  var g=cx.createRadialGradient(x0,y0,0,x0,y0,90);
  g.addColorStop(0,'rgba(190,220,255,.9)');g.addColorStop(.25,'rgba(110,168,255,.35)');g.addColorStop(1,'rgba(110,168,255,0)');
  cx.fillStyle=g;cx.beginPath();cx.arc(x0,y0,90,0,6.283);cx.fill();
  var glow=cfg.g/100*25,sp=.2+cfg.m/100*1.6;
  for(var i=0;i<P.length;i++){var p=P[i];if(!RM)p.a+=p.s*sp*12;
    var x=x0+Math.cos(p.a)*p.r,y=y0+Math.sin(p.a)*p.r*.38;
    cx.shadowBlur=glow*p.z;cx.shadowColor='#6ea8ff';
    cx.fillStyle='rgba(160,200,255,'+(.25+.55*p.z)+')';
    cx.beginPath();cx.arc(x,y,.6+1.6*p.z,0,6.283);cx.fill();}
  cx.shadowBlur=0;}

/* ---- onda de telemetría ---- */
var wv=$('#wave'),wx=wv?wv.getContext('2d'):null,WD=[],WN=140,wt=0;
function sizeWave(){if(!wv)return;wv.width=wv.clientWidth;wv.height=wv.clientHeight;while(WD.length<WN)WD.push(.5);}
function wave(){if(!wx)return;wt+=.02;WD.shift();
  WD.push(.5+.28*Math.sin(wt*1.7)+.14*Math.sin(wt*.63+2)+(Math.random()-.5)*.05);
  var w=wv.width,h=wv.height;wx.clearRect(0,0,w,h);wx.beginPath();
  for(var i=0;i<WN;i++){var x=i/(WN-1)*w,y=h-(WD[i]*h*.8+h*.1);i?wx.lineTo(x,y):wx.moveTo(x,y);}
  wx.strokeStyle='rgba(110,168,255,.8)';wx.lineWidth=1.2;wx.shadowBlur=8;wx.shadowColor='#6ea8ff';wx.stroke();wx.shadowBlur=0;
  wx.lineTo(w,h);wx.lineTo(0,h);wx.closePath();
  var gr=wx.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(110,168,255,.18)');gr.addColorStop(1,'rgba(110,168,255,0)');
  wx.fillStyle=gr;wx.fill();}

/* ---- telemetría viva + memoria ---- */
var t0=Date.now(),moves=0;
addEventListener('mousemove',function(e){moves++;tmx=(e.clientX/W-.5)*2;tmy=(e.clientY/H-.5)*2;});
var visits=+(localStorage.getItem('nc_visits')||0)+1;localStorage.setItem('nc_visits',visits);
var first=localStorage.getItem('nc_first');if(!first){first=new Date().toISOString();localStorage.setItem('nc_first',first);}
$('#tMem').textContent='#'+visits;
function fmtFirst(){var loc={es:'es-ES',pt:'pt-PT',en:'en-US'}[lang]||'es-ES';
  $('#tFirst').textContent=new Date(first).toLocaleDateString(loc,{year:'numeric',month:'short',day:'numeric'});}
setInterval(function(){var s=Math.floor((Date.now()-t0)/1000);
  $('#tLat').textContent=(9+Math.round(4*Math.sin(s/5)+Math.random()*3))+' ms';
  $('#tThr').textContent=(1.3+Math.abs(Math.sin(s/7))*.9).toFixed(2)+' TB/s';
  $('#tNod').textContent=24+Math.round(3*Math.sin(s/11));
  $('#tSyn').textContent=(96+Math.sin(s/9)*2.4).toFixed(1)+'%';
  $('#tEnt').textContent=Math.min(99,moves)+'%';moves=0;
  $('#tSes').textContent=('0000'+s).slice(-4)+' s';},1000);

/* ---- configuración persistente ---- */
function bind(id,k){var el=$('#'+id);if(!el)return;el.value=cfg[k];
  el.addEventListener('input',function(){cfg[k]=+el.value;localStorage.setItem('nc_'+k,el.value);if(k==='d')build();});}
bind('sD','d');bind('sG','g');bind('sM','m');

/* ---- aparición al desplazar ---- */
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target);}});},{threshold:.15});
  $$('.rv').forEach(function(el){io.observe(el)});}else{$$('.rv').forEach(function(el){el.classList.add('vis')});}

/* ---- adaptación circadiana ---- */
var h=new Date().getHours();
if(h>=7&&h<19){document.documentElement.style.setProperty('--acc','#7fb2ff');document.documentElement.style.setProperty('--acc2','#cfe2ff');}

addEventListener('resize',function(){resize();sizeWave();});
resize();sizeWave();applyLang();
if(!RM)(function loop(){core();wave();requestAnimationFrame(loop)})();else{core();wave();}
})();
</script>
</body>
</html>
```

## 5. Ruta de descarga y publicación

1. **Local:** copia el código en `index.html`, guarda la foto como `concepto.jpg` en la misma carpeta; prueba con `python -m http.server 8000` → `localhost:8000`.
2. **Hosting gratuito (arrastrar y soltar):** Netlify Drop o Cloudflare Pages → subes ambos archivos → URL pública en ~30 s. GitHub Pages: repo → Settings → Pages → rama `main`.
3. **Dominio `noiacore.com`:** en tu registrador apunta `A @ → 76.76.21.21` (Netlify) o `CNAME www → <tu-sitio>.netlify.app`; HTTPS automático vía Let's Encrypt. TTL 3600.

## 6. Análisis con casos

- **nothing.tech (2020– )** y **linear.app**: negro + tipografía espaciada como señal de precisión; aquí se replica con `letter-spacing:.5em` y peso 200.
- **IBM 3270 (1971) → cyberpunk UI**: el terminal tipeado hereda la monocromía fosforescente, virada a acero frío.
- **Tufte (1983)**: la onda de telemetría maximiza data-ink; sin rejillas ni adornos.
- **Weiser & Brown (1996)**: el canvas orbital vive en la periferia atencional (`opacity:.55`, `pointer-events:none`) → calma, no distracción.

## 7. Glosario

**Núcleo orbital:** partículas en elipse sobre esfera luminosa (canvas 2D). **Entropía:** px/s de puntero, proxy de interacción. **Memoria consciente:** `localStorage` (sesión #, primer contacto, idioma, sliders) — persistencia sin servidor ni cookies. **Circadiano:** acento `#5d8bff` nocturno / `#7fb2ff` diurno. **i18n:** diccionario ES/PT/EN conmutado en caliente.

## 8. Reflexión prospectiva y pregunta guía

Esta v1.0 es un organismo perceptivo mínimo: recuerda, respira con el día y responde al cuerpo del visitante sin enviar un solo byte fuera de su máquina. El siguiente estrato (v2.0) debería conectar la telemetría simulada a datos reales (API pública, WebSocket) y añadir `IntersectionObserver` + `content-visibility` para rendimiento móvil <100 KB. La tensión fértil está entre silencio y señal: cada elemento vivo debe ganarse su derecho a existir.

**Pregunta guía:** *¿Qué dato, aún invisible en tu ecosistema, merecería ser la primera señal real que el núcleo de NOIACORE aprenda a percibir?*
