# Visualizar y Descargar Archivos HTML

- Chat ID: `e30211aa-76df-4bbf-832f-d394a51d27c4`
- Mensajes: 4
- Periodo: 2026-08-08 00:29 UTC → 2026-08-08 00:55 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-08 00:29

creame sitio web para ver html  con codigo o wel archivo o el link. lo puedes descargar. pueves ver todo tipo de formato

## [ASSISTANT] 2026-08-08 00:29 · Qwen3.8-Max

Aquí tienes **POLIVISOR**: un visor universal 100 % local en un solo archivo HTML. Guárdalo como `polivisor.html` y ábrelo en el navegador — acepta código pegado, archivos arrastrados o enlaces, renderiza HTML, imágenes, PDF, audio (con espectro en vivo), vídeo, JSON, CSV, Markdown, código con resaltado y binarios en hexadecimal, además de descargar cualquier cosa que estés viendo.

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>POLIVISOR — visor universal · código / archivo / enlace</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;900&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0c1416; --bg2:#0f1b1e; --panel:#122024; --panel2:#17292e; --panel3:#1c333a;
  --line:#20393f; --line2:#2e5560;
  --tx:#e9f3f1; --mut:#8aa8a6; --dim:#5a7a80;
  --amb:#ffb648; --amb2:#ff8a3d; --teal:#3fd8c2; --coral:#ff6f61; --lime:#b7e35c;
  --sky:#6ec6ff; --gold:#ffd166; --plum:#e08adf; --mint:#7de3a1;
  --mono:'JetBrains Mono',ui-monospace,monospace;
  --disp:'Unbounded',sans-serif;
  --body:'Space Grotesk',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{
  background:var(--bg); color:var(--tx); font-family:var(--body);
  display:flex; flex-direction:column; overflow:hidden;
}
/* ── fondo por capas: retícula + resplandores + grano ─────────────── */
body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.13;
  background:linear-gradient(var(--line2) 1px,transparent 1px) 0 0/100% 46px,
             linear-gradient(90deg,var(--line2) 1px,transparent 1px) 0 0/46px 100%;
  -webkit-mask-image:radial-gradient(ellipse at 50% 38%,#000 30%,transparent 85%);
          mask-image:radial-gradient(ellipse at 50% 38%,#000 30%,transparent 85%);}
body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.05;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");}
.glow{position:fixed;border-radius:50%;filter:blur(95px);pointer-events:none;z-index:0}
.g1{width:520px;height:520px;left:-140px;top:-160px;background:var(--amb2);opacity:.14;animation:drift 26s ease-in-out infinite alternate}
.g2{width:560px;height:560px;right:-170px;bottom:-190px;background:var(--teal);opacity:.12;animation:drift 31s ease-in-out infinite alternate-reverse}
.g3{width:300px;height:300px;right:22%;top:-120px;background:var(--coral);opacity:.08;animation:drift 22s ease-in-out infinite alternate}
@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(60px,45px) scale(1.12)}}
@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes blink{50%{opacity:.25}}
@keyframes sweep{from{top:-40%}to{top:110%}}
header,nav,main,.hstrip,footer{position:relative;z-index:1}

/* ── cabecera ─────────────────────────────────────────────────────── */
header{display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:12px 22px;border-bottom:1px solid var(--line);background:linear-gradient(180deg,var(--bg2),transparent);animation:rise .5s ease both}
.brand{display:flex;align-items:center;gap:13px}
.brand svg{animation:spin 24s linear infinite}
.brand h1{font:900 21px/1 var(--disp);letter-spacing:.06em}
.brand h1 em{font-style:normal;color:var(--amb)}
.brand .tag{font:400 10.5px var(--mono);color:var(--mut);letter-spacing:.14em;text-transform:uppercase;margin-left:10px;
  border-left:1px solid var(--line2);padding-left:10px}
.hright{display:flex;align-items:center;gap:10px}
.clock{font:600 12px var(--mono);color:var(--teal);letter-spacing:.1em}
.sess{font:400 10px var(--mono);color:var(--dim);letter-spacing:.12em}
.badge-local{font:600 9.5px var(--mono);letter-spacing:.14em;color:var(--lime);
  border:1px solid #2c4a2f;background:#15251a;border-radius:3px;padding:4px 8px}

/* ── botones ──────────────────────────────────────────────────────── */
.btn{font:700 11px/1 var(--body);letter-spacing:.12em;text-transform:uppercase;color:var(--tx);
  background:var(--panel2);border:1px solid var(--line2);border-radius:5px;padding:9px 14px;cursor:pointer;
  display:inline-flex;align-items:center;gap:7px;transition:transform .15s,border-color .15s,box-shadow .15s,background .15s}
.btn:hover{transform:translateY(-1px);border-color:var(--amb);box-shadow:0 4px 16px #0006,0 0 0 1px #ffb64833}
.btn:active{transform:translateY(0)}
.btn:disabled{opacity:.35;pointer-events:none}
.btn.primary{background:linear-gradient(135deg,var(--amb),var(--amb2));color:#221503;border-color:transparent}
.btn.primary:hover{box-shadow:0 4px 18px #ffb64855}
.btn.ghost{background:transparent}
.ibtn{width:32px;height:32px;justify-content:center;padding:0;border-radius:5px}
.ibtn svg{width:15px;height:15px}

/* ── selector de modo ─────────────────────────────────────────────── */
nav.modes{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px 22px 0;animation:rise .5s .06s ease both}
.mode{position:relative;text-align:left;background:var(--panel);border:1px solid var(--line);border-radius:8px;
  padding:13px 16px 15px;cursor:pointer;color:var(--tx);display:flex;gap:13px;align-items:center;
  transition:background .2s,border-color .2s,transform .15s}
.mode:hover{transform:translateY(-2px);border-color:var(--line2);background:var(--panel2)}
.mode svg{width:22px;height:22px;color:var(--dim);flex:none;transition:color .2s}
.mode b{display:block;font:700 12px var(--disp);letter-spacing:.1em}
.mode small{display:block;font:400 11px var(--body);color:var(--mut);margin-top:3px;letter-spacing:.02em}
.mode::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:3px;border-radius:3px;
  background:linear-gradient(90deg,var(--amb),var(--teal));transform:scaleX(0);transform-origin:left;transition:transform .3s}
.mode.on{background:var(--panel2);border-color:var(--line2)}
.mode.on svg{color:var(--amb)}
.mode.on::after{transform:scaleX(1)}

/* ── área de trabajo ──────────────────────────────────────────────── */
main{flex:1;min-height:0;display:grid;grid-template-columns:minmax(340px,430px) 1fr;gap:14px;padding:14px 22px}
.pane{background:var(--panel);border:1px solid var(--line);border-radius:10px;min-height:0;display:flex;flex-direction:column;overflow:hidden}
.pane-in{animation:rise .5s .12s ease both}
.pane-view{animation:rise .5s .18s ease both}
.pane-head{padding:11px 16px;border-bottom:1px solid var(--line);font:600 10px var(--mono);
  letter-spacing:.2em;color:var(--dim);text-transform:uppercase;display:flex;justify-content:space-between;align-items:center}
.mode-panel{display:none;flex:1;min-height:0;flex-direction:column;padding:16px;gap:13px;overflow:auto}
.mode-panel.active{display:flex}

/* código */
#codeInput{flex:1;min-height:180px;resize:none;background:#0b1517;border:1px solid var(--line);border-radius:7px;
  color:var(--tx);font:400 12.5px/1.65 var(--mono);padding:14px;outline:none;transition:border-color .2s,box-shadow .2s}
#codeInput:focus{border-color:var(--teal);box-shadow:0 0 0 3px #3fd8c222}
.code-foot{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
#codeBadge{font:600 10px var(--mono);letter-spacing:.12em;color:var(--amb);border:1px dashed #ffb64855;padding:4px 8px;border-radius:4px}
#codeCount{margin-left:auto;font:400 10.5px var(--mono);color:var(--dim)}

/* archivo — zona de caída con escuadras y barrido */
.dz{position:relative;flex:1;min-height:210px;border:1.5px dashed var(--line2);border-radius:9px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;
  cursor:pointer;overflow:hidden;transition:border-color .2s,background .2s;background:#0d181b}
.dz:hover{border-color:var(--teal)}
.dz.drag{border-color:var(--amb);background:#1a1d12}
.dz .c{position:absolute;width:26px;height:26px;border:2px solid var(--teal);transition:all .25s}
.c1{top:10px;left:10px;border-right:0;border-bottom:0}.c2{top:10px;right:10px;border-left:0;border-bottom:0}
.c3{bottom:10px;left:10px;border-right:0;border-top:0}.c4{bottom:10px;right:10px;border-left:0;border-top:0}
.dz.drag .c{border-color:var(--amb);width:36px;height:36px}
.dz .big{font:700 clamp(17px,2.2vw,25px)/1.25 var(--disp);letter-spacing:.04em}
.dz .big em{font-style:normal;color:var(--teal)}
.dz .sub{font:400 11.5px var(--body);color:var(--mut);max-width:270px}
.dz .sweep{position:absolute;left:0;right:0;height:34%;top:-40%;pointer-events:none;
  background:linear-gradient(180deg,transparent,#3fd8c21c,transparent);animation:sweep 5.5s linear infinite}
#fileInfo{font:400 11px var(--mono);color:var(--mut);display:none;border:1px solid var(--line);border-radius:6px;padding:9px 12px}
#fileInfo b{color:var(--gold)}

/* url */
.urlrow{display:flex;gap:9px}
#urlInput{flex:1;background:#0b1517;border:1px solid var(--line);border-radius:6px;color:var(--tx);
  font:400 12.5px var(--mono);padding:11px 13px;outline:none}
#urlInput:focus{border-color:var(--sky);box-shadow:0 0 0 3px #6ec6ff22}
.checkline{display:flex;align-items:center;gap:8px;font:400 11.5px var(--body);color:var(--mut);cursor:pointer}
.checkline input{accent-color:var(--amb)}
.qurls{display:flex;gap:8px;flex-wrap:wrap}
.qurl{font:600 10px var(--mono);letter-spacing:.06em;color:var(--sky);background:#12222b;border:1px solid #234457;
  border-radius:99px;padding:5px 11px;cursor:pointer;transition:.15s}
.qurl:hover{color:#fff;border-color:var(--sky);transform:translateY(-1px)}
.hint{font:400 10.5px/1.6 var(--body);color:var(--dim);border-left:2px solid var(--line2);padding-left:10px}

/* ── visor ────────────────────────────────────────────────────────── */
.toolbar{display:flex;align-items:center;gap:14px;padding:9px 14px;border-bottom:1px solid var(--line);flex-wrap:wrap}
.ttabs{display:flex;gap:2px}
.ttab{font:700 10.5px var(--body);letter-spacing:.14em;color:var(--mut);background:none;border:0;
  padding:8px 12px;cursor:pointer;border-bottom:2px solid transparent;transition:.15s}
.ttab:hover{color:var(--tx)}
.ttab.on{color:var(--amb);border-color:var(--amb)}
.tgroup{display:none;align-items:center;gap:6px}
.tgroup.show{display:flex}
.devb{font:600 10px var(--mono);color:var(--mut);background:var(--panel2);border:1px solid var(--line);
  border-radius:4px;padding:5px 9px;cursor:pointer;transition:.15s}
.devb:hover,.devb.on{color:var(--teal);border-color:var(--teal)}
#zoomRange{width:90px;accent-color:var(--amb)}
.zlbl{font:600 10px var(--mono);color:var(--mut);min-width:38px;text-align:center}
.tspacer{flex:1}
#viewHost{flex:1;min-height:0;position:relative;overflow:hidden;background:#0b1416}
.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:20px}
.empty .ap{animation:spin 40s linear infinite}
.empty h2{font:700 clamp(16px,2.4vw,26px) var(--disp);letter-spacing:.08em}
.empty h2 em{font-style:normal;color:var(--teal)}
.empty p{font:400 12px var(--body);color:var(--mut);max-width:400px;line-height:1.6}
.framebox{height:100%;margin:0 auto;transition:width .3s;max-width:100%}
.framebox.bordered{border:1px solid var(--line2);border-top:0;box-shadow:0 0 40px #0008}
iframe.fill,video.fill{width:100%;height:100%;border:0;display:block;background:#fff}
.imgstage{width:100%;height:100%;overflow:auto;display:grid;place-items:center;
  background:repeating-conic-gradient(#101c1f 0 25%,#0c1518 0 50%) 0 0/26px 26px}
.imgstage img{max-width:100%;max-height:100%;transition:width .15s;box-shadow:0 8px 40px #000a}
.imgstage.zoomed{place-items:start center}
.audwrap{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:26px}
.audwrap canvas{width:min(560px,90%);height:84px;background:#0d181b;border:1px solid var(--line);border-radius:8px}
.audwrap audio{width:min(560px,90%)}
.codewrap{height:100%;overflow:auto;display:flex;font:400 12.5px/1.7 var(--mono)}
.gutter{flex:none;padding:14px 12px 14px 16px;color:#3d5a60;text-align:right;user-select:none;border-right:1px solid var(--line);background:#0c1619}
.codepre{flex:1;padding:14px 18px;white-space:pre;overflow-x:auto}
.tk-c{color:#5d848c;font-style:italic}.tk-s{color:#ffd58a}.tk-k{color:#6ec6ff}.tk-n{color:#b7e35c}
.tk-t{color:var(--amb)}.tk-p{color:var(--teal)}.tk-h{color:#ff9d76}.tk-b{color:var(--coral)}
.tk-key{color:var(--amb)}
.hex{padding:16px;font:400 12px/1.6 var(--mono);color:#b8cfcc;height:100%;overflow:auto}
.hx-o{color:#3d5a60}.hx-a{color:#7de3a1}
.tablewrap{height:100%;overflow:auto;padding:16px}
.tablewrap table{border-collapse:collapse;font:400 12px var(--mono);width:100%}
.tablewrap th{background:#1a2f35;color:var(--gold);position:sticky;top:0}
.tablewrap th,.tablewrap td{border:1px solid var(--line);padding:6px 10px;text-align:left;white-space:nowrap}
.tablewrap tr:nth-child(even) td{background:#0e1a1d}
.md{height:100%;overflow:auto;padding:26px 32px;max-width:780px;margin:0 auto;font:400 14.5px/1.75 var(--body)}
.md h1,.md h2,.md h3,.md h4{font-family:var(--disp);margin:.9em 0 .4em;color:var(--amb)}
.md p{margin:.5em 0}.md a{color:var(--sky)}
.md code{font:400 12.5px var(--mono);background:#1a2f35;color:var(--mint);padding:2px 6px;border-radius:4px}
.md pre.mdcode{background:#0c1619;border:1px solid var(--line);border-radius:7px;padding:14px;overflow:auto;font:400 12.5px/1.6 var(--mono);margin:.8em 0}
.md blockquote{border-left:3px solid var(--teal);padding:4px 14px;color:var(--mut);margin:.6em 0}
.md ul,.md ol{padding-left:26px;margin:.5em 0}
.md hr{border:0;border-top:1px solid var(--line2);margin:1.2em 0}
.jsonview{height:100%;overflow:auto}
.statrow{display:flex;gap:8px;padding:10px 16px;border-bottom:1px solid var(--line);flex-wrap:wrap}
.stat{font:600 10px var(--mono);letter-spacing:.08em;color:var(--lime);border:1px solid #2c4a2f;background:#12231a;border-radius:4px;padding:4px 9px}
.stat.warn{color:var(--coral);border-color:#4a2c2c;background:#231212}
.note{font:400 11px var(--mono);color:var(--dim);padding:8px 16px}
.infogrid{height:100%;overflow:auto;padding:22px 26px}
.infogrid dl{display:grid;grid-template-columns:150px 1fr;gap:0;max-width:640px}
.infogrid dt{font:600 10px var(--mono);letter-spacing:.16em;color:var(--dim);text-transform:uppercase;padding:11px 0;border-bottom:1px solid var(--line)}
.infogrid dd{font:400 12.5px var(--mono);color:var(--tx);padding:11px 0;border-bottom:1px solid var(--line);word-break:break-all}
.infogrid dd b{color:var(--amb)}

/* chips de formatos */
.chips{display:flex;gap:7px;padding:9px 14px;border-top:1px solid var(--line);flex-wrap:wrap;align-items:center}
.chips .lbl{font:600 9px var(--mono);letter-spacing:.2em;color:var(--dim);margin-right:4px}
.chip{font:600 9.5px var(--mono);letter-spacing:.1em;padding:4px 9px;border-radius:4px;border:1px solid;opacity:.55;transition:.25s}
.chip.on{opacity:1;box-shadow:0 0 12px currentColor;transform:translateY(-1px)}
.ch-html{color:var(--amb);border-color:#6b4d1e}.ch-img{color:var(--teal);border-color:#1e5a52}
.ch-pdf{color:var(--coral);border-color:#5f2c28}.ch-audio{color:var(--sky);border-color:#28506b}
.ch-video{color:var(--gold);border-color:#635322}.ch-json{color:var(--lime);border-color:#47591f}
.ch-csv{color:var(--plum);border-color:#57385a}.ch-md{color:var(--mint);border-color:#2c5a3f}
.ch-code{color:#9ab6ff;border-color:#3a4668}.ch-txt{color:#a8b8b5;border-color:#41504e}.ch-bin{color:#ff9d76;border-color:#5f3d30}

/* sesión */
.hstrip{display:flex;align-items:center;gap:10px;padding:7px 22px;border-top:1px solid var(--line);background:var(--bg2);overflow-x:auto}
.hstrip .lbl{font:600 9px var(--mono);letter-spacing:.22em;color:var(--dim);flex:none}
.hchip{flex:none;display:inline-flex;align-items:center;gap:7px;font:400 10.5px var(--mono);color:var(--mut);
  background:var(--panel);border:1px solid var(--line);border-radius:99px;padding:4px 11px;cursor:pointer;transition:.15s;max-width:220px}
.hchip:hover{border-color:var(--amb);color:var(--tx);transform:translateY(-1px)}
.hchip i{width:7px;height:7px;border-radius:50%;flex:none}
.hchip span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#hClear{flex:none;font:600 9px var(--mono);letter-spacing:.14em;color:var(--dim);background:none;border:0;cursor:pointer;text-transform:uppercase}
#hClear:hover{color:var(--coral)}

/* barra de estado */
footer{display:flex;align-items:center;gap:18px;padding:8px 22px;border-top:1px solid var(--line);
  background:var(--bg2);font:400 10.5px var(--mono);color:var(--mut)}
.led{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 8px var(--teal);flex:none}
.led.busy{background:var(--amb);box-shadow:0 0 8px var(--amb);animation:blink .6s linear infinite}
.led.err{background:var(--coral);box-shadow:0 0 8px var(--coral)}
#stMsg{letter-spacing:.04em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.stfields{display:flex;gap:16px;margin-left:auto;flex:none}
.stfields b{color:var(--tx);font-weight:600}
.keys{color:var(--dim);letter-spacing:.06em}
@media(max-width:1200px){.keys{display:none}}

/* overlay de arrastre, toasts, ayuda */
#dropOverlay{position:fixed;inset:0;z-index:50;background:#0c1416ee;display:none;align-items:center;justify-content:center;
  flex-direction:column;gap:14px;border:3px dashed var(--amb);margin:12px;border-radius:14px}
#dropOverlay.show{display:flex}
#dropOverlay h2{font:900 clamp(22px,4vw,44px) var(--disp);letter-spacing:.08em;color:var(--amb)}
#dropOverlay p{font:400 13px var(--body);color:var(--mut)}
#toasts{position:fixed;right:18px;bottom:52px;z-index:60;display:flex;flex-direction:column;gap:8px}
.toast{background:var(--panel3);border:1px solid var(--line2);border-left:3px solid var(--teal);border-radius:6px;
  padding:10px 15px;font:400 12px var(--body);max-width:320px;animation:rise .3s ease both;box-shadow:0 8px 30px #000a}
.toast.err{border-left-color:var(--coral)}.toast.warn{border-left-color:var(--amb)}
#helpModal{position:fixed;inset:0;z-index:70;background:#0c1416dd;display:none;align-items:center;justify-content:center;padding:20px}
#helpModal.open{display:flex}
.help-box{background:var(--panel);border:1px solid var(--line2);border-radius:12px;max-width:620px;width:100%;
  max-height:84vh;overflow:auto;padding:28px 32px;animation:rise .3s ease both}
.help-box h2{font:700 18px var(--disp);letter-spacing:.08em;margin-bottom:4px}
.help-box h2 em{font-style:normal;color:var(--amb)}
.help-box h3{font:600 10px var(--mono);letter-spacing:.2em;color:var(--teal);text-transform:uppercase;margin:20px 0 8px}
.help-box p,.help-box li{font:400 12.5px/1.7 var(--body);color:var(--mut)}
.help-box kbd{font:600 10.5px var(--mono);background:var(--panel3);border:1px solid var(--line2);border-bottom-width:2px;border-radius:4px;padding:2px 7px;color:var(--tx)}
.help-box table{width:100%;border-collapse:collapse}
.help-box td{border-bottom:1px solid var(--line);padding:7px 4px;font-size:12px;color:var(--mut)}
.help-box td:first-child{white-space:nowrap;padding-right:16px}

@media(max-width:960px){
  body{overflow:auto;height:auto}
  main{grid-template-columns:1fr}
  .pane-view{min-height:520px}
  nav.modes{grid-template-columns:1fr}
  .stfields{display:none}
  .brand .tag{display:none}
}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-thumb{background:var(--line2);border-radius:6px;border:2px solid var(--bg)}
::-webkit-scrollbar-track{background:transparent}
</style>
</head>
<body>
<div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div>

<header>
  <div class="brand">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="12" stroke="#ffb648" stroke-width="1.6" stroke-dasharray="4 5"/>
      <circle cx="15" cy="15" r="6.5" stroke="#3fd8c2" stroke-width="1.6"/>
      <circle cx="15" cy="15" r="2" fill="#ffb648"/>
    </svg>
    <h1>POLI<em>VISOR</em></h1>
    <span class="tag">visor universal · v2.1</span>
  </div>
  <div class="hright">
    <span class="badge-local">● 100% LOCAL — NADA SE SUBE</span>
    <span class="clock" id="clock">--:--:--</span>
    <span class="sess" id="sess"></span>
    <button class="btn ghost" id="btnSample" title="Cargar HTML de ejemplo">Ejemplo</button>
    <button class="btn ghost" id="btnClear" title="Limpiar visor">Limpiar</button>
    <button class="btn ghost ibtn" id="btnHelp" title="Ayuda y atajos (F1)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.8.3-1.4 1-1.4 1.9v.3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
    </button>
  </div>
</header>

<nav class="modes">
  <button class="mode on" data-mode="code">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6 3 12l5 6M16 6l5 6-5 6"/></svg>
    <span><b>CÓDIGO</b><small>pega HTML, JSON, CSS… y se renderiza al instante</small></span>
  </button>
  <button class="mode" data-mode="file">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>
    <span><b>ARCHIVO</b><small>arrastra o elige cualquier formato: img, pdf, audio, vídeo…</small></span>
  </button>
  <button class="mode" data-mode="url">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7L12.5 18.5"/></svg>
    <span><b>ENLACE</b><small>carga una URL con proxy anti-CORS o iframe directo</small></span>
  </button>
</nav>

<main>
  <!-- ── panel de entrada ── -->
  <section class="pane pane-in">
    <div class="pane-head"><span>Entrada</span><span id="modeLabel">pegar código</span></div>

    <div class="mode-panel active" id="p-code">
      <textarea id="codeInput" spellcheck="false" placeholder="Pega aquí tu HTML…&#10;&#10;<!doctype html>&#10;<html>&#10;  ...&#10;</html>&#10;&#10;También acepta JSON, CSS, texto plano…  (Ctrl+Enter para renderizar)"></textarea>
      <div class="code-foot">
        <span id="codeBadge">— sin datos</span>
        <button class="btn ghost" id="btnPaste">Pegar</button>
        <span id="codeCount">0 caracteres</span>
        <button class="btn primary" id="btnRender">▶ Renderizar</button>
      </div>
    </div>

    <div class="mode-panel" id="p-file">
      <div class="dz" id="dz">
        <span class="c c1"></span><span class="c c2"></span><span class="c c3"></span><span class="c c4"></span>
        <div class="sweep"></div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3fd8c2" stroke-width="1.6"><path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>
        <div class="big">SUELTA <em>CUALQUIER</em> ARCHIVO</div>
        <div class="sub">…o haz clic para elegirlo. También puedes pegarlo con Ctrl+V o arrastrarlo sobre toda la ventana.</div>
        <button class="btn" type="button">Elegir archivo</button>
      </div>
      <input type="file" id="fileInput" hidden>
      <div id="fileInfo"></div>
    </div>

    <div class="mode-panel" id="p-url">
      <div class="urlrow">
        <input id="urlInput" placeholder="https://ejemplo.com/pagina.html" spellcheck="false">
        <button class="btn primary" id="btnGo">Cargar</button>
      </div>
      <label class="checkline"><input type="checkbox" id="directFrame"> iframe directo (sin descargar — para sitios que bloquean proxy)</label>
      <div class="qurls">
        <span class="qurl" data-u="https://example.com">example.com</span>
        <span class="qurl" data-u="https://es.wikipedia.org/wiki/HTML">wikipedia · HTML</span>
        <span class="qurl" data-u="https://httpbin.org/html">httpbin · html</span>
        <span class="qurl" data-u="https://httpbin.org/json">httpbin · json</span>
      </div>
      <p class="hint">Si el servidor bloquea CORS se prueban dos proxies públicos (allorigins, corsproxy). Los HTML descargados se renderizan con <b>&lt;base&gt;</b> inyectado para que sus recursos relativos funcionen. Sitios con X-Frame-Options pueden no mostrarse en modo iframe.</p>
    </div>
  </section>

  <!-- ── visor ── -->
  <section class="pane pane-view" id="viewerPane">
    <div class="toolbar">
      <div class="ttabs">
        <button class="ttab on" data-tab="vista">Vista</button>
        <button class="ttab" data-tab="codigo">Código</button>
        <button class="ttab" data-tab="info">Info</button>
      </div>
      <div class="tgroup" id="devctl">
        <button class="devb on" data-w="0">FLUIDO</button>
        <button class="devb" data-w="768">768</button>
        <button class="devb" data-w="375">375</button>
      </div>
      <div class="tgroup" id="zoomctl">
        <button class="btn ghost ibtn" id="zoomOut" title="Alejar">−</button>
        <input type="range" id="zoomRange" min="10" max="400" value="100">
        <button class="btn ghost ibtn" id="zoomIn" title="Acercar">+</button>
        <span class="zlbl" id="zoomLbl">ajust.</span>
        <button class="btn ghost" id="zoomFit" style="padding:7px 9px">Ajustar</button>
      </div>
      <div class="tspacer"></div>
      <button class="btn ghost ibtn" id="btnCopy" title="Copiar contenido">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg></button>
      <button class="btn ghost ibtn" id="btnDl" title="Descargar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg></button>
      <button class="btn ghost ibtn" id="btnFull" title="Pantalla completa (visor)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/></svg></button>
      <button class="btn ghost ibtn" id="btnExt" title="Abrir en pestaña nueva">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4 11 13M9 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3"/></svg></button>
    </div>

    <div id="viewHost">
      <div class="empty" id="emptyState">
        <svg class="ap" width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="45" cy="45" r="40" stroke="#2e5560" stroke-width="1.5" stroke-dasharray="3 7"/>
          <circle cx="45" cy="45" r="26" stroke="#ffb648" stroke-width="1.5" stroke-dasharray="30 8"/>
          <circle cx="45" cy="45" r="12" stroke="#3fd8c2" stroke-width="1.5"/>
          <circle cx="45" cy="45" r="3.5" fill="#ffb648"/>
        </svg>
        <h2>SUELTA · PEGA · <em>ENLAZA</em></h2>
        <p>Arrastra un archivo a cualquier parte de la ventana, pega código con Ctrl+V o carga una URL. Se detecta el formato automáticamente y se muestra su vista, su código y su ficha.</p>
      </div>
    </div>

    <div class="chips" id="chipsRow">
      <span class="lbl">FORMATOS</span>
      <span class="chip ch-html" data-kind="html">HTML</span>
      <span class="chip ch-img" data-kind="img">IMG</span>
      <span class="chip ch-pdf" data-kind="pdf">PDF</span>
      <span class="chip ch-audio" data-kind="audio">AUDIO</span>
      <span class="chip ch-video" data-kind="video">VÍDEO</span>
      <span class="chip ch-json" data-kind="json">JSON</span>
      <span class="chip ch-csv" data-kind="csv">CSV</span>
      <span class="chip ch-md" data-kind="md">MD</span>
      <span class="chip ch-code" data-kind="code">CÓDIGO</span>
      <span class="chip ch-txt" data-kind="txt">TXT</span>
      <span class="chip ch-bin" data-kind="bin">BIN</span>
    </div>
  </section>
</main>

<div class="hstrip">
  <span class="lbl">SESIÓN</span>
  <div id="hchips" style="display:flex;gap:8px;overflow-x:auto"></div>
  <button id="hClear">vaciar</button>
</div>

<footer>
  <span class="led" id="led"></span>
  <span id="stMsg">sistema listo · procesamiento 100 % local</span>
  <div class="stfields">
    <span>archivo <b id="stName">—</b></span>
    <span>tipo <b id="stKind">—</b></span>
    <span>tamaño <b id="stSize">—</b></span>
    <span>carga <b id="stTime">—</b></span>
  </div>
  <span class="keys">Ctrl+O archivo · Ctrl+L enlace · Ctrl+Enter renderizar · F1 ayuda</span>
</footer>

<div id="dropOverlay"><h2>SUELTA PARA ABRIR</h2><p>cualquier formato · se detecta automáticamente</p></div>
<div id="toasts"></div>

<div id="helpModal">
  <div class="help-box">
    <h2>POLI<em>VISOR</em> — manual rápido</h2>
    <p>Tres vías de entrada, un único visor. Todo ocurre en tu navegador: ningún archivo se envía a ningún servidor.</p>
    <h3>Atajos</h3>
    <table>
      <tr><td><kbd>Ctrl</kbd>+<kbd>Enter</kbd></td><td>Renderizar el código del panel</td></tr>
      <tr><td><kbd>Ctrl</kbd>+<kbd>O</kbd></td><td>Abrir selector de archivo</td></tr>
      <tr><td><kbd>Ctrl</kbd>+<kbd>L</kbd></td><td>Ir al campo de URL</td></tr>
      <tr><td><kbd>Ctrl</kbd>+<kbd>V</kbd></td><td>Pegar archivo o código (fuera de campos de texto)</td></tr>
      <tr><td><kbd>F1</kbd></td><td>Mostrar / ocultar esta ayuda</td></tr>
    </table>
    <h3>Qué abre cada formato</h3>
    <p><b style="color:var(--amb)">HTML</b> renderizado con scripts · <b style="color:var(--teal)">imágenes</b> con zoom y damero · <b style="color:var(--coral)">PDF</b> embebido · <b style="color:var(--sky)">audio</b> con espectro en vivo · <b style="color:var(--gold)">vídeo</b> · <b style="color:var(--lime)">JSON</b> formateado con estadísticas · <b style="color:var(--plum)">CSV/TSV</b> como tabla · <b style="color:var(--mint)">Markdown</b> renderizado · <b style="color:#9ab6ff">código</b> con resaltado y números de línea · <b style="color:#ff9d76">binarios</b> en volcado hexadecimal.</p>
    <h3>Notas</h3>
    <p>· Las URLs se descargan vía proxy si el sitio bloquea CORS; si todo falla se intenta iframe directo.<br>· El botón ⤓ descarga siempre lo que estés viendo.<br>· El historial de sesión vive solo en memoria: al recargar la página desaparece.</p>
    <div style="margin-top:22px;text-align:right"><button class="btn primary" id="helpClose">Entendido</button></div>
  </div>
</div>

<script>
"use strict";
/* ══════════ utilidades ══════════ */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const uid=()=>Math.random().toString(36).slice(2,9);
const host=u=>{try{return new URL(u).host}catch{return u}};
const fmtBytes=n=>{if(n==null)return"—";const u=["B","KB","MB","GB"];let i=0;while(n>=1024&&i<3){n/=1024;i++}return(i?n.toFixed(1):Math.round(n))+" "+u[i]};
const EXT={html:["html","htm","xhtml","shtml"],img:["png","jpg","jpeg","gif","webp","avif","bmp","ico","svg"],
 pdf:["pdf"],audio:["mp3","wav","ogg","oga","flac","m4a","aac","opus"],video:["mp4","webm","mkv","mov","m4v","ogv"],
 json:["json","geojson","ipynb"],csv:["csv","tsv"],md:["md","markdown"],
 code:["js","mjs","cjs","css","xml","yaml","yml","py","sh","sql","ts","tsx","jsx","c","h","cpp","java","rb","go","rs","php","toml","ini","env","conf","vue","svelte"],
 txt:["txt","log","nfo","readme"]};
const MIME={html:"text/html",img:"image/png",pdf:"application/pdf",audio:"audio/mpeg",video:"video/mp4",
 json:"application/json",csv:"text/csv",md:"text/markdown",code:"text/plain",txt:"text/plain",bin:"application/octet-stream"};
const KINDLBL={html:"HTML",img:"Imagen",pdf:"PDF",audio:"Audio",video:"Vídeo",json:"JSON",csv:"CSV",md:"Markdown",code:"Código",txt:"Texto",bin:"Binario"};
const KINDCLR={html:"#ffb648",img:"#3fd8c2",pdf:"#ff6f61",audio:"#6ec6ff",video:"#ffd166",json:"#b7e35c",csv:"#e08adf",md:"#7de3a1",code:"#9ab6ff",txt:"#a8b8b5",bin:"#ff9d76"};
function extOf(name){const i=String(name).lastIndexOf(".");return i>0?String(name).slice(i+1).toLowerCase():""}
function kindOf(ext,mime){mime=(mime||"").toLowerCase();
  for(const k in EXT)if(EXT[k].includes(ext))return k;
  if(mime.startsWith("image/"))return"img";if(mime.startsWith("audio/"))return"audio";
  if(mime.startsWith("video/"))return"video";if(mime==="application/pdf")return"pdf";
  if(mime.includes("json"))return"json";if(mime.includes("csv"))return"csv";
  if(mime.includes("html"))return"html";if(mime.startsWith("text/"))return"txt";return"bin"}
function sniffText(t){const s=t.trim();
  if(/^\s*<!doctype html|^\s*<html/i.test(s))return"html";
  if(s.startsWith("<")&&/<[a-z!][\s\S]*>/i.test(s))return"html";
  if((s[0]==="{"||s[0]==="[")&&s.length>1){try{JSON.parse(s);return"json"}catch{}}
  return"txt"}
const TEXTUAL=new Set(["html","json","csv","md","code","txt"]);
const LANG={js:"js",mjs:"js",cjs:"js",ts:"js",jsx:"js",tsx:"js",css:"css",xml:"html",svg:"html",html:"html",htm:"html"};
function langOf(name){return LANG[extOf(name)]||null}

const state={mode:"code",tab:"vista",item:null,zoom:100,fit:true,deviceW:0,history:[],t0:0};

/* ══════════ estado / ui básica ══════════ */
function setMsg(m,led){$("#stMsg").textContent=m;const l=$("#led");l.className="led"+(led?" "+led:"")}
function toast(msg,type){const t=document.createElement("div");t.className="toast"+(type?" "+type:"");
  t.textContent=msg;$("#toasts").appendChild(t);setTimeout(()=>{t.style.opacity=0;t.style.transition=".4s";setTimeout(()=>t.remove(),400)},3400)}
function syncStatus(it){
  $("#stName").textContent=it?it.name:"—";
  $("#stKind").textContent=it?KINDLBL[it.kind]:"—";
  $("#stSize").textContent=it?fmtBytes(it.size):"—";
  $("#stTime").textContent=it?it.stamp:"—";
  $$(".chip").forEach(c=>c.classList.toggle("on",!!it&&c.dataset.kind===it.kind));
}
function syncToolbar(){const it=state.item;
  $("#devctl").classList.toggle("show",!!it&&it.kind==="html");
  $("#zoomctl").classList.toggle("show",!!it&&it.kind==="img");
  $("#btnCopy").disabled=!(it&&it.text!=null);
  $("#btnDl").disabled=!it;$("#btnFull").disabled=!it;
  $("#btnExt").disabled=!(it&&(it.url||it.blob||it.objURL));}

/* ══════════ resaltado ══════════ */
function hlJS(s){s=esc(s);return s.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(&quot;(?:\\.|[^&]|&(?!quot;))*?&quot;|'(?:\\.|[^'\n])*'|`(?:\\.|[^`])*`)|\b(const|let|var|function|return|if|else|for|while|do|class|new|import|export|from|default|async|await|try|catch|finally|throw|typeof|instanceof|switch|case|break|continue|of|in|this|true|false|null|undefined|void|delete|yield|static|extends|super)\b|\b(\d+\.?\d*)\b/g,
 (m,c,st,k,n)=>c?`<span class="tk-c">${c}</span>`:st?`<span class="tk-s">${st}</span>`:k?`<span class="tk-k">${k}</span>`:`<span class="tk-n">${n}</span>`)}
function hlCSS(s){s=esc(s);return s.replace(/(\/\*[\s\S]*?\*\/)|(&quot;[\s\S]*?&quot;|'[\s\S]*?')|([a-zA-Z-]+)(?=\s*:)|\b(\d+\.?\d*(?:px|em|rem|vh|vw|%|s|ms|deg|fr)?)\b|(#[0-9a-fA-F]{3,8}\b)/g,
 (m,c,st,p,n,h)=>c?`<span class="tk-c">${c}</span>`:st?`<span class="tk-s">${st}</span>`:p?`<span class="tk-p">${p}</span>`:n?`<span class="tk-n">${n}</span>`:`<span class="tk-h">${h}</span>`)}
function hlHTML(s){s=esc(s);
 s=s.replace(/&lt;!--[\s\S]*?--&gt;/g,m=>`<span class="tk-c">${m}</span>`);
 return s.replace(/(&lt;\/?)([a-zA-Z][\w-]*)([^]*?)(\/?&gt;)/g,(m,a,tag,at,e)=>{
   if(/tk-c/.test(a))return m;
   at=at.replace(/([\w-]+)(=)(&quot;[^]*?&quot;|'[^']*')/g,'<span class="tk-p">$1</span>$2<span class="tk-s">$3</span>');
   return `${a}<span class="tk-t">${tag}</span>${at}${e}`})}
function hlJSONstr(raw){let s=esc(raw);
 return s.replace(/(&quot;(?:\\.|[^&]|&(?!quot;))*?&quot;)(\s*:)|(&quot;(?:\\.|[^&]|&(?!quot;))*?&quot;)|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
 (m,key,k,str,bool,num)=>key?`<span class="tk-key">${key}</span>${k}`:str?`<span class="tk-s">${str}</span>`:bool?`<span class="tk-b">${bool}</span>`:`<span class="tk-n">${num}</span>`)}
function codeBlock(text,lang,name){
  const MAXL=6000;let lines=text.split("\n");const cut=lines.length>MAXL;if(cut)lines=lines.slice(0,MAXL);
  const full=lines.join("\n");let hi;
  if(lang==="json")hi=hlJSONstr(full);
  else{const fn={js:hlJS,css:hlCSS,html:hlHTML}[lang];hi=fn?fn(full):esc(full)}
  const gut=lines.map((_,i)=>i+1).join("\n");
  return `<div class="codewrap"><pre class="gutter">${gut}</pre><pre class="codepre">${hi||" "}</pre></div>${cut?'<div class="note">… recortado a '+MAXL+' líneas</div>':""}`}

/* ══════════ csv / markdown / hex ══════════ */
function parseCSV(text){
  const first=(text.split("\n",1)[0]||"");
  const delim=first.split("\t").length>first.split(",").length?"\t":",";
  const rows=[];let row=[],cur="",q=false;
  for(let i=0;i<text.length;i++){const c=text[i];
    if(q){if(c==='"'){if(text[i+1]==='"'){cur+='"';i++}else q=false}else cur+=c}
    else if(c==='"')q=true;
    else if(c===delim){row.push(cur);cur=""}
    else if(c==="\n"){row.push(cur);rows.push(row);row=[];cur=""}
    else if(c!=="\r")cur+=c}
  if(cur!==""||row.length){row.push(cur);rows.push(row)}
  return rows.filter(r=>r.length>1||r[0]!=="")}
function renderMD(src){
  const lines=esc(src).split("\n");let html="",i=0,inCode=false,code=[],list=null;
  const inline=s=>s.replace(/`([^`]+)`/g,"<code>$1</code>")
   .replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>")
   .replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2" style="max-width:100%">')
   .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  const closeList=()=>{if(list){html+=`</${list}>`;list=null}};
  for(const raw of lines){let m;
    if(raw.trim().startsWith("```")){if(inCode){html+='<pre class="mdcode">'+code.join("\n")+"</pre>";code=[];inCode=false}else{closeList();inCode=true}continue}
    if(inCode){code.push(raw);continue}
    if(m=raw.match(/^(#{1,6})\s+(.*)/)){closeList();html+=`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`;continue}
    if(/^(-{3,}|\*{3,})\s*$/.test(raw)){closeList();html+="<hr>";continue}
    if(m=raw.match(/^&gt;\s?(.*)/)){closeList();html+=`<blockquote>${inline(m[1])}</blockquote>`;continue}
    if(m=raw.match(/^\s*[-*+]\s+(.*)/)){if(list!=="ul"){closeList();html+="<ul>";list="ul"}html+=`<li>${inline(m[1])}</li>`;continue}
    if(m=raw.match(/^\s*\d+\.\s+(.*)/)){if(list!=="ol"){closeList();html+="<ol>";list="ol"}html+=`<li>${inline(m[1])}</li>`;continue}
    if(raw.trim()===""){closeList();continue}
    closeList();html+=`<p>${inline(raw)}</p>`}
  if(inCode)html+='<pre class="mdcode">'+code.join("\n")+"</pre>";closeList();return html}
async function hexHTML(it){
  const buf=it.blob?await it.blob.arrayBuffer():new TextEncoder().encode(it.text||"").buffer;
  const b=new Uint8Array(buf,0,Math.min(buf.byteLength,4096));let rows="";
  for(let i=0;i<b.length;i+=16){let hx="",as="";
    for(let j=0;j<16;j++){const v=b[i+j];
      if(v===undefined)hx+="   ";else{hx+=v.toString(16).padStart(2,"0")+" ";as+=v>=32&&v<127?String.fromCharCode(v):"·"}}
    rows+=`<span class="hx-o">${i.toString(16).padStart(8,"0")}</span>  ${hx} <span class="hx-a">${esc(as)}</span>\n`}
  return `<pre class="hex">${rows}</pre>`+(buf.byteLength>4096?'<div class="note">… solo los primeros 4 KB de '+fmtBytes(buf.byteLength)+"</div>":"")}
function jsonStats(o,d){d=d||0;if(!o||typeof o!=="object")return{keys:0,depth:d};
  const vals=Object.values(o);let depth=d,keys=vals.length;
  for(const v of vals){if(v&&typeof v==="object"){const s=jsonStats(v,d+1);depth=Math.max(depth,s.depth);keys+=s.keys}}
  return{keys,depth}}

/* ══════════ núcleo: ítems y vistas ══════════ */
function getObjectURL(it){if(it.objURL)return it.objURL;if(it.blob){it.objURL=URL.createObjectURL(it.blob)}return it.objURL}
function pushHistory(it){if(state.history[0]&&state.history[0].id===it.id)return;
  state.history=state.history.filter(h=>h.id!==it.id);state.history.unshift(it);
  if(state.history.length>10){const out=state.history.pop();if(out.objURL)URL.revokeObjectURL(out.objURL)}
  renderHistory()}
function renderHistory(){$("#hchips").innerHTML=state.history.map(h=>
  `<button class="hchip" data-id="${h.id}"><i style="background:${KINDCLR[h.kind]}"></i><span>${esc(h.name)}</span><span style="color:var(--dim)">${fmtBytes(h.size)}</span></button>`).join("")}
$("#hchips").addEventListener("click",e=>{const b=e.target.closest(".hchip");if(!b)return;
  const it=state.history.find(h=>h.id===b.dataset.id);if(it)showItem(it,true)});
$("#hClear").onclick=()=>{state.history.forEach(h=>h.objURL&&URL.revokeObjectURL(h.objURL));state.history=[];renderHistory()};

async function showItem(it,fromHist){
  state.t0=performance.now();state.item=it;
  it.stamp=new Date().toLocaleTimeString("es",{hour12:false});
  setMsg("procesando "+it.name+"…","busy");
  if(!fromHist)pushHistory(it);
  await renderTab();
  syncStatus(it);syncToolbar();
  const ms=Math.round(performance.now()-state.t0);
  setMsg(`listo · ${KINDLBL[it.kind]} · ${fmtBytes(it.size)} · ${ms} ms`)}

async function renderTab(){
  const it=state.item,hostEl=$("#viewHost");hostEl.innerHTML="";
  if(!it){hostEl.innerHTML=$("#emptyState")?"":"";return}
  if(state.tab==="vista")await renderVista(it,hostEl);
  else if(state.tab==="codigo")await renderCodigo(it,hostEl);
  else renderInfo(it,hostEl)}

function injectBase(html,url){
  const base=`<base href="${esc(url)}">`;
  if(/<head[^>]*>/i.test(html))return html.replace(/<head([^>]*)>/i,m=>m+base);
  return base+html}

async function renderVista(it,root){
  switch(it.kind){
  case"html":{
    const box=document.createElement("div");box.className="framebox"+(state.deviceW?" bordered":"");
    if(state.deviceW)box.style.width=state.deviceW+"px";
    const f=document.createElement("iframe");f.className="fill";
    f.setAttribute("sandbox","allow-scripts allow-forms allow-popups allow-modals allow-downloads allow-pointer-lock");
    if(it.source==="url"&&it.frameDirect)f.src=it.url;
    else if(it.source==="url")f.srcdoc=injectBase(it.text,it.url);
    else f.srcdoc=it.text;
    box.appendChild(f);root.appendChild(box);break}
  case"img":{
    const st=document.createElement("div");st.className="imgstage"+(state.fit?"":" zoomed");st.id="imgStage";
    const img=new Image();img.src=getObjectURL(it);img.alt=it.name;
    img.onload=()=>{it.meta.dimensiones=img.naturalWidth+" × "+img.naturalHeight+" px";syncStatus(state.item)};
    applyZoom(img,st);st.appendChild(img);root.appendChild(st);break}
  case"pdf":{
    const f=document.createElement("iframe");f.className="fill";f.src=getObjectURL(it);
    root.appendChild(f);
    const n=document.createElement("div");n.className="note";n.style.position="absolute";n.style.bottom="0";
    n.textContent="Si el PDF no se muestra (móvil/navegador sin visor), usa el botón de descarga ⤓";root.appendChild(n);break}
  case"audio":{
    const w=document.createElement("div");w.className="audwrap";
    w.innerHTML=`<canvas width="560" height="84"></canvas><audio controls src="${getObjectURL(it)}"></audio>
      <div style="font:400 11px var(--mono);color:var(--dim)">${esc(it.name)} · pulsa play para activar el espectro</div>`;
    root.appendChild(w);setupAudio(w.querySelector("audio"),w.querySelector("canvas"));break}
  case"video":{
    const v=document.createElement("video");v.className="fill";v.controls=true;v.src=getObjectURL(it);
    root.appendChild(v);break}
  case"json":{
    let obj,err=null;try{obj=JSON.parse(it.text)}catch(e){err=e}
    const bar=document.createElement("div");bar.className="statrow";
    if(err){bar.innerHTML=`<span class="stat warn">JSON INVÁLIDO · ${esc(err.message).slice(0,80)}</span>`;
      root.appendChild(bar);root.insertAdjacentHTML("beforeend",codeBlock(it.text,"json",it.name));}
    else{const s=jsonStats(obj,1);
      bar.innerHTML=`<span class="stat">✓ VÁLIDO</span><span class="stat">${s.keys} claves</span><span class="stat">profundidad ${s.depth}</span><span class="stat">${fmtBytes(it.size)}</span>`;
      const jv=document.createElement("div");jv.className="jsonview";
      jv.innerHTML=`<pre class="codepre" style="white-space:pre">${hlJSONstr(JSON.stringify(obj,null,2))}</pre>`;
      root.appendChild(bar);root.appendChild(jv)}break}
  case"csv":{
    const rows=parseCSV(it.text);
    const cap=Math.min(rows.length,501);
    const head=rows[0]||[];
    let h='<div class="tablewrap"><table><thead><tr>'+head.map(c=>"<th>"+esc(c)+"</th>").join("")+"</tr></thead><tbody>";
    for(let r=1;r<cap;r++)h+="<tr>"+rows[r].map(c=>"<td>"+esc(c)+"</td>").join("")+"</tr>";
    h+="</tbody></table></div>";
    if(rows.length>501)h+='<div class="note">… tabla recortada a 500 filas de '+rows.length+"</div>";
    it.meta.filas=rows.length-1+" filas · "+head.length+" columnas";
    root.insertAdjacentHTML("beforeend",h);break}
  case"md":{
    const a=document.createElement("article");a.className="md";a.innerHTML=renderMD(it.text);root.appendChild(a);break}
  case"code":case"txt":{
    root.insertAdjacentHTML("beforeend",codeBlock(it.text,langOf(it.name),it.name));break}
  case"bin":default:{
    root.insertAdjacentHTML("beforeend",await hexHTML(it));break}}}

async function renderCodigo(it,root){
  if(it.text!=null){root.insertAdjacentHTML("beforeend",codeBlock(it.text,it.kind==="json"?"json":langOf(it.name),it.name));return}
  if(it.source==="url"){
    root.innerHTML=`<div class="empty"><h2 style="font-size:17px">CÓDIGO NO DESCARGADO</h2>
      <p>Este enlace se cargó en modo iframe directo. Intenta descargar el código fuente (puede fallar si el servidor bloquea CORS).</p>
      <button class="btn primary" id="btnFetchCode">Descargar código</button></div>`;
    $("#btnFetchCode").onclick=async()=>{setMsg("descargando código…","busy");
      try{const b=await fetchViaProxies(it.url);it.text=await b.text();it.blob=b;it.size=b.size;renderTab();setMsg("código descargado")}
      catch{toast("El servidor bloquea la descarga del código","err");setMsg("bloqueo CORS","err")}};
    return}
  root.innerHTML=await hexHTML(it)}

function renderInfo(it,root){
  const rows=[["Nombre",esc(it.name)],["Origen",{code:"código pegado",file:"archivo local",url:"enlace · "+esc(it.url||"")}[it.source]],
   ["Clase",`<b>${KINDLBL[it.kind]}</b>`],["MIME",esc(it.mime||MIME[it.kind])],["Tamaño",fmtBytes(it.size)],
   ["Cargado",it.stamp],["ID de sesión",it.id]];
  for(const k in it.meta||{})rows.push([esc(k[0].toUpperCase()+k.slice(1)),esc(it.meta[k])]);
  root.innerHTML=`<div class="infogrid"><dl>${rows.map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("")}</dl></div>`}

function applyZoom(img,stage){
  if(state.fit){img.style.width="";stage.classList.remove("zoomed")}
  else{img.style.width=state.zoom+"%";stage.classList.add("zoomed")}
  $("#zoomLbl").textContent=state.fit?"ajust.":state.zoom+"%";
  $("#zoomRange").value=state.zoom}

/* ══════════ audio: espectro ══════════ */
function setupAudio(audio,canvas){
  try{
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    const ctx=new AC(),src=ctx.createMediaElementSource(audio),an=ctx.createAnalyser();
    an.fftSize=128;src.connect(an);an.connect(ctx.destination);
    const data=new Uint8Array(an.frequencyBinCount),g=canvas.getContext("2d");
    audio.addEventListener("play",()=>ctx.resume());
    (function draw(){requestAnimationFrame(draw);
      an.getByteFrequencyData(data);
      g.clearRect(0,0,canvas.width,canvas.height);
      const n=data.length,bw=canvas.width/n;
      for(let i=0;i<n;i++){const v=data[i]/255,h=Math.max(2,v*canvas.height);
        g.fillStyle=v>.72?"#ffb648":v>.35?"#3fd8c2":"#2e5560";
        g.fillRect(i*bw+1,canvas.height-h,bw-2,h)}})();
  }catch(e){canvas.style.display="none"}}

/* ══════════ entradas: código ══════════ */
const codeInput=$("#codeInput");
function updateCodeMeta(){const t=codeInput.value;
  $("#codeCount").textContent=t.length.toLocaleString("es")+" caracteres";
  $("#codeBadge").textContent=t.trim()?KINDLBL[sniffText(t)]+" detectado":"— sin datos"}
codeInput.addEventListener("input",updateCodeMeta);
function renderFromCode(){
  const t=codeInput.value;if(!t.trim()){toast("Escribe o pega algo primero","warn");return}
  const kind=sniffText(t);
  const name=kind==="html"?"documento.html":kind==="json"?"datos.json":"texto.txt";
  showItem({id:uid(),name,kind,mime:MIME[kind],size:new Blob([t]).size,source:"code",text:t,meta:{líneas:t.split("\n").length.toLocaleString("es")+" líneas"}})}
$("#btnRender").onclick=renderFromCode;
$("#btnPaste").onclick=async()=>{try{const t=await navigator.clipboard.readText();
  if(!t){toast("Portapapeles vacío","warn");return}
  codeInput.value=t;updateCodeMeta();renderFromCode()}catch{toast("Permiso de portapapeles denegado — usa Ctrl+V","err")}};
const DEMO=`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Página de prueba</title>
<style>
 body{margin:0;font-family:system-ui;background:#101820;color:#eee;display:grid;place-items:center;min-height:100vh}
 .card{background:#182430;border:1px solid #2c3e50;border-radius:14px;padding:36px 46px;text-align:center;box-shadow:0 20px 60px #0008}
 h1{margin:0 0 8px;background:linear-gradient(90deg,#ffb648,#3fd8c2);-webkit-background-clip:text;background-clip:text;color:transparent}
 button{margin-top:18px;padding:10px 24px;border:0;border-radius:8px;background:#ffb648;color:#222;font-weight:700;cursor:pointer;transition:.15s}
 button:hover{transform:translateY(-2px)}
</style></head><body>
 <div class="card">
  <h1>Hola desde POLIVISOR ✔</h1>
  <p>Este HTML de ejemplo se renderiza con scripts activos dentro del visor.</p>
  <button data-n="0" onclick="this.dataset.n=(+this.dataset.n||0)+1;this.textContent='Pulsado '+this.dataset.n+' veces'">Púlsame</button>
 </div>
</body></html>`;
$("#btnSample").onclick=()=>{switchMode("code");codeInput.value=DEMO;updateCodeMeta();renderFromCode();toast("Ejemplo cargado — prueba la pestaña Código")};

/* ══════════ entradas: archivo ══════════ */
const fileInput=$("#fileInput"),dz=$("#dz");
dz.addEventListener("click",()=>fileInput.click());
fileInput.addEventListener("change",()=>{if(fileInput.files.length)handleFile(fileInput.files[0]);fileInput.value=""});
async function handleFile(file){
  switchMode("file");
  const ext=extOf(file.name),kind=kindOf(ext,file.type);
  const it={id:uid(),name:file.name||"archivo",kind,mime:file.type||MIME[kind],size:file.size,source:"file",blob:file,meta:{}};
  if(file.size>8*1024*1024&&TEXTUAL.has(kind)){toast("Archivo grande: el texto puede tardar","warn")}
  if(TEXTUAL.has(kind)){it.text=await file.text()}
  $("#fileInfo").style.display="block";
  $("#fileInfo").innerHTML=`Último archivo → <b>${esc(it.name)}</b> · ${fmtBytes(it.size)} · ${esc(it.mime||"sin MIME")} · clase <b>${KINDLBL[kind]}</b>`;
  showItem(it)}

/* arrastre global */
let dragDepth=0;
addEventListener("dragenter",e=>{e.preventDefault();dragDepth++;$("#dropOverlay").classList.add("show");dz.classList.add("drag")});
addEventListener("dragover",e=>e.preventDefault());
addEventListener("dragleave",e=>{e.preventDefault();if(--dragDepth<=0){dragDepth=0;$("#dropOverlay").classList.remove("show");dz.classList.remove("drag")}});
addEventListener("drop",e=>{e.preventDefault();dragDepth=0;$("#dropOverlay").classList.remove("show");dz.classList.remove("drag");
  if(e.dataTransfer.files.length)handleFile(e.dataTransfer.files[0])});

/* ══════════ entradas: url ══════════ */
async function fetchViaProxies(u){
  const tries=[u,"https://api.allorigins.win/raw?url="+encodeURIComponent(u),"https://corsproxy.io/?url="+encodeURIComponent(u)];
  let lastErr;
  for(const t of tries){try{const r=await fetch(t,{redirect:"follow"});if(r.ok)return r;lastErr=new Error("HTTP "+r.status)}catch(e){lastErr=e}}
  throw lastErr||new Error("sin respuesta")}
function makeURLItem(u,direct){return{id:uid(),name:host(u),kind:"html",mime:"text/html",size:null,source:"url",url:u,frameDirect:!!direct,meta:{servidor:host(u)}}}
async function loadURL(){
  let u=$("#urlInput").value.trim();if(!u){toast("Escribe una URL","warn");return}
  if(!/^https?:\/\//i.test(u))u="https://"+u;
  switchMode("url");
  if($("#directFrame").checked){showItem(makeURLItem(u,true));setMsg("iframe directo · "+host(u));return}
  setMsg("descargando "+host(u)+" …","busy");
  try{
    const blob=await fetchViaProxies(u);
    const kind=kindOf(extOf(u),blob.type);
    const it={id:uid(),name:u.split("/").pop()||host(u),kind,mime:blob.type||MIME[kind],size:blob.size,source:"url",url:u,blob,meta:{servidor:host(u)}};
    if(!it.name.includes("."))it.name+="."+({html:"html",json:"json",img:"png"}[kind]||"bin");
    if(TEXTUAL.has(kind))it.text=await blob.text();
    if(kind==="html")it.size=blob.size;
    showItem(it);toast("Descargado vía proxy/CDN · "+fmtBytes(blob.size));
  }catch(e){
    toast("CORS bloqueó la descarga — abriendo iframe directo","warn");
    showItem(makeURLItem(u,true))}}
$("#btnGo").onclick=loadURL;
$("#urlInput").addEventListener("keydown",e=>{if(e.key==="Enter")loadURL()});
$$(".qurl").forEach(b=>b.onclick=()=>{$("#urlInput").value=b.dataset.u;$("#directFrame").checked=false;loadURL()});

/* ══════════ modos, pestañas, acciones ══════════ */
const MODELBL={code:"pegar código",file:"arrastrar / elegir",url:"descargar enlace"};
function switchMode(m){state.mode=m;
  $$(".mode").forEach(b=>b.classList.toggle("on",b.dataset.mode===m));
  $$(".mode-panel").forEach(p=>p.classList.remove("active"));
  $("#p-"+m).classList.add("active");
  $("#modeLabel").textContent=MODELBL[m]}
$$(".mode").forEach(b=>b.onclick=()=>switchMode(b.dataset.mode));
$$(".ttab").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;
  $$(".ttab").forEach(x=>x.classList.toggle("on",x===b));if(state.item)renderTab()});
$$(".devb").forEach(b=>b.onclick=()=>{state.deviceW=+b.dataset.w;
  $$(".devb").forEach(x=>x.classList.toggle("on",x===b));
  const box=$("#viewHost .framebox");if(box){box.style.width=state.deviceW?state.deviceW+"px":"";box.classList.toggle("bordered",!!state.deviceW)}});
$("#zoomIn").onclick=()=>{state.fit=false;state.zoom=Math.min(400,state.zoom+25);applyZoom($("#imgStage img"),$("#imgStage"))};
$("#zoomOut").onclick=()=>{state.fit=false;state.zoom=Math.max(10,state.zoom-25);applyZoom($("#imgStage img"),$("#imgStage"))};
$("#zoomRange").addEventListener("input",e=>{state.fit=false;state.zoom=+e.target.value;applyZoom($("#imgStage img"),$("#imgStage"))});
$("#zoomFit").onclick=()=>{state.fit=true;state.zoom=100;applyZoom($("#imgStage img"),$("#imgStage"))};
$("#btnDl").onclick=()=>{const it=state.item;if(!it)return;
  const blob=it.blob||new Blob([it.text??" "],{type:it.mime||MIME[it.kind]});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=it.name||"archivo";
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),6000);
  toast("Descarga iniciada → "+it.name)};
$("#btnCopy").onclick=async()=>{const it=state.item;if(!it||it.text==null)return;
  try{await navigator.clipboard.writeText(it.text);toast("Copiado al portapapeles · "+fmtBytes(it.size))}
  catch{toast("No se pudo copiar","err")}};
$("#btnExt").onclick=()=>{const it=state.item;if(!it)return;
  window.open(it.url||getObjectURL(it),"_blank","noopener")};
$("#btnFull").onclick=()=>{const p=$("#viewerPane");
  if(document.fullscreenElement)document.exitFullscreen();else p.requestFullscreen().catch(()=>toast("Pantalla completa no disponible","err"))};
$("#btnClear").onclick=()=>{state.item=null;syncStatus(null);syncToolbar();
  $("#viewHost").innerHTML=EMPTY_HTML;setMsg("visor limpio");};
$("#btnHelp").onclick=()=>$("#helpModal").classList.add("open");
$("#helpClose").onclick=()=>$("#helpModal").classList.remove("open");
$("#helpModal").addEventListener("click",e=>{if(e.target.id==="helpModal")e.target.classList.remove("open")});

/* pegado global */
addEventListener("paste",e=>{
  if(e.target.closest("textarea,input"))return;
  const cd=e.clipboardData;
  if(cd.files&&cd.files.length){e.preventDefault();handleFile(cd.files[0]);return}
  const t=cd.getData("text");
  if(t){e.preventDefault();switchMode("code");codeInput.value=t;updateCodeMeta();renderFromCode();toast("Código pegado y renderizado")}});

/* atajos */
addEventListener("keydown",e=>{
  if(e.key==="F1"){e.preventDefault();$("#helpModal").classList.toggle("open");return}
  if(!(e.ctrlKey||e.metaKey))return;
  const k=e.key.toLowerCase();
  if(e.key==="Enter"){e.preventDefault();if(state.mode!=="code")switchMode("code");renderFromCode()}
  else if(k==="o"){e.preventDefault();switchMode("file");fileInput.click()}
  else if(k==="l"){e.preventDefault();switchMode("url");$("#urlInput").focus()}});

/* reloj + sesión */
$("#sess").textContent="sesión #"+uid().toUpperCase().slice(0,4);
setInterval(()=>{$("#clock").textContent=new Date().toLocaleTimeString("es",{hour12:false})},1000);
$("#clock").textContent=new Date().toLocaleTimeString("es",{hour12:false});

/* estado vacío reutilizable */
const EMPTY_HTML=$("#emptyState").outerHTML;
updateCodeMeta();
</script>
</body>
</html>
```

**Cómo usarlo**

1. **Guárdalo**: copia todo en un archivo llamado `polivisor.html` y ábrelo con doble clic (Chrome, Edge, Firefox). No necesita servidor ni instalación.
2. **Tres entradas**: pestaña **CÓDIGO** (pega y pulsa `Ctrl+Enter`), **ARCHIVO** (arrastra cualquier cosa a la ventana) o **ENLACE** (descarga con 2 proxies anti-CORS y fallback a iframe).
3. **Lo que detecta**: HTML con scripts en sandbox, imágenes con zoom, PDF, audio con espectro en tiempo real, vídeo, JSON validado con estadísticas, CSV→tabla, Markdown renderizado, código con resaltado y números de línea, y cualquier binario en hexadecimal.
4. **Botones del visor**: ⤓ descarga lo que estés viendo, copia, pantalla completa, abrir en pestaña nueva, y anchos 768/375 px para probar responsive.
5. **Privacidad total**: nada sale de tu máquina; solo los enlaces usan proxies públicos si el sitio bloquea CORS (pulsando `F1` tienes el manual completo dentro de la propia app).

¿Quieres que le añada algún formato concreto (visor de fuentes, comparación de dos archivos, conversor de imágenes)?

## [USER] 2026-08-08 00:55

mejora la idea , webs faciles autogestional¡bles sin api perssistentes al tiempo metaformosicas estacionales. que me traigan legado relevancia social maximas ideas Ecosistema open-source: 100 sitios autogestionables

Version corregida: no eventos como eje, no postureo IA, no productos fisicos. Sitios vivos para gente que quiere herramientas gratis, libres o muy baratas.

Decision

El ecosistema debe funcionar como infraestructura publica ligera: directorios, generadores, wikis, comunidades, comparadores, plantillas y automatizaciones. Cada web cambia con datos, usuarios, formularios, RSS, GitHub releases o CMS; no depende de estar escribiendo articulos todo el dia.

Stack base

Webstudio: builder visual open-source tipo Webflow, orientado a frontend y CMS externo.

Ghost: fuerte para publicaciones, newsletter y membresias.

WordPress: valido si hace falta ecosistema enorme y gestion no tecnica.

GrapesJS/Instatic: builders visuales open-source para HTML/CMS.

NocoDB, Baserow, Teable, Grist, NocoBase, Budibase: bases de datos e interfaces tipo Airtable/Notion.

Discourse: comunidad open-source madura.

listmonk/BillionMail: newsletter y email marketing self-hosted.

n8n, Activepieces, Node-RED: automatizacion open-source.

Docusaurus, MkDocs, Starlight, Docmost: documentacion y wikis persistentes.

Las 100 webs

Capa 1: sitios que se actualizan solos con datos publicos o comunidad

1. Directorio de software gratis. Catalogo vivo de alternativas open-source a herramientas caras. La gente busca ahorrar; tu web organiza opciones, filtros y enlaces.

2. Comparador de alternativas a SaaS caros. Cada pagina compara una herramienta popular con opciones libres. Mantenimiento: actualizar fichas, precios y capturas.

3. Mapa de herramientas sin suscripcion. Buscador por necesidad: web, CRM, email, automatizacion, diseno, documentacion, comunidad.

4. Directorio de self-hosting facil. Guia de apps instalables por Docker: para quien quiere independencia sin pagar plataformas.

5. Ranking de proyectos GitHub utiles. Lista por estrellas, actividad, licencia y dificultad. Cambia solo con datos de GitHub.

6. Buscador de plantillas web libres. Agrega templates Astro, Hugo, Next, HTML y WordPress gratuitos.

7. Directorio de CMS open-source. Ghost, WordPress, Strapi, Payload, Directus, Decap, Grav, Joomla, Drupal explicados en humano.

8. Directorio de builders visuales libres. Webstudio, GrapesJS, Instatic y alternativas para gente que no quiere pagar Webflow.

9. Directorio de formularios gratis. Herramientas open-source para formularios, encuestas, reservas y captacion.

10. Directorio de automatizacion libre. n8n, Activepieces, Node-RED y scripts simples para automatizar sin Zapier caro.

Capa 2: webs herramienta para usuarios sin dinero

11. Generador de landing gratis. Formulario que produce una pagina HTML simple exportable. Valor: cero coste y control.

12. Generador de CV web. Crea un CV publico descargable o publicable como HTML.

13. Generador de portfolio basico. Artistas, tecnicos y freelancers suben datos y reciben una web simple.

14. Generador de link-in-bio libre. Alternativa propia a Linktree con export HTML.

15. Generador de press kit. Para musicos, artistas y proyectos pequenos que no pueden pagar agencia.

16. Generador de dossier social. ONGs o colectivos crean una pagina clara de proyecto, necesidades y contacto.

17. Generador de pagina de evento barato. No eje cultural elitista: herramienta para cualquier charla, taller, reunion o causa.

18. Generador de tienda digital minima. Vende PDF, plantilla, archivo o acceso mediante enlaces de pago simples.

19. Generador de pagina de servicios. Autonomos crean oferta, precio, contacto y preguntas frecuentes.

20. Generador de pagina de donaciones. Proyecto social o creativo publica objetivo, avance y formas de apoyar.

Capa 3: bases de datos publicas mantenibles

21. Base de recursos gratis por ciudad. Comida, empleo, formacion, asesoria, cultura gratuita, herramientas y ayuda local.

22. Base de becas y ayudas verificadas. Solo enlaces oficiales y fechas. Alto valor, mantenimiento semanal.

23. Base de cursos gratuitos. Cursos por tema, idioma, duracion, certificado y coste real.

24. Base de trabajos remotos junior. Ofertas filtradas para gente sin red profesional fuerte.

25. Base de herramientas para autonomos. Facturacion, contratos, calendario, CRM, firma, documentos y copias.

26. Base de ayudas tecnicas open-source. Apps para accesibilidad, lectura, OCR, voz, subtitulos y traduccion.

27. Base de espacios gratuitos. Bibliotecas, coworkings gratuitos, centros publicos, aulas abiertas.

28. Base de convocatorias abiertas. No eventos como postureo: oportunidades reales para presentar obra o proyecto.

29. Base de repositorios utiles. Repos GitHub clasificados por dificultad, instalacion y utilidad social.

30. Base de proveedores gratis. Hosting, dominios, email, almacenamiento y deploy con capa gratuita.

Capa 4: comunidades autogestionables

31. Foro de herramientas gratis. Discourse o Flarum. Usuarios recomiendan alternativas y explican como instalarlas.

32. Comunidad de no pagar SaaS. Espacio para migrar de herramientas caras a open-source.

33. Comunidad de webs pequenas. La gente muestra su pagina y recibe mejoras practicas.

34. Comunidad de self-hosting para principiantes. Guia lenta, clara, sin elitismo tecnico.

35. Comunidad de documentacion libre. Plantillas, wikis, manuales y tutoriales colaborativos.

36. Comunidad de empleo digital humilde. Recursos reales para empezar sin master caro.

37. Comunidad de plantillas libres. Usuarios comparten HTML, CSS, Notion-like, dashboards y formularios.

38. Comunidad de automatizaciones n8n. Flujos reutilizables para email, formularios, RSS, scraping legal y backups.

39. Comunidad de reparacion digital. Soluciones para PCs, Windows, Linux, backups y limpieza segura.

40. Comunidad de proyectos utiles. No postureo: herramientas pequenas que resuelven problemas cotidianos.

Capa 5: publicaciones persistentes

41. Revista de alternativas open-source. Cada articulo resuelve: que sustituye, cuanto ahorra, dificultad, riesgo.

42. Blog de migraciones reales. Historias: de Notion a Docmost, de Airtable a Baserow, de Mailchimp a listmonk.

43. Observatorio de precios SaaS. Registra subidas de precio y alternativas libres.

44. Boletin semanal de herramientas gratis. Newsletter automatizable con RSS, GitHub releases y seleccion manual.

45. Wiki de supervivencia digital. Manual vivo para montar web, email, backups, documentos y automatizaciones.

46. Archivo de tutoriales cortos. Una tarea por pagina: instalar, exportar, publicar, migrar, respaldar.

47. Comparador de privacidad. Explica que herramientas respetan datos y cuales monetizan usuarios.

48. Guia de software para asociaciones. CRM, miembros, emails, formularios, archivos, calendario y web.

49. Guia de software para artistas pobres. Portfolio, ventas digitales, newsletter, press kit, agenda y backups.

50. Guia de software para microempresas. Stack minimo sin pagos fijos o con pagos muy bajos.

Capa 6: microsaas gratuitos o freemium propios

51. Acortador de enlaces propio. Servicio simple para creadores; plan gratis y donaciones.

52. Constructor de paginas QR. QR que abre mini pagina editable; util para flyers, CVs y tarjetas.

53. Monitor de cambios web. Avisa cuando una pagina de ayuda, beca o convocatoria cambia.

54. RSS builder para gente normal. Convierte varias fuentes en un feed unico y una pagina publica.

55. Generador de presupuestos. Herramienta simple para autonomos que no tienen software de gestion.

56. Gestor de tareas publico/privado. Tablero ligero para proyectos pequenos, basado en open-source.

57. Creador de formularios solidarios. Formularios simples para asociaciones, colectivos y proyectos.

58. Creador de paginas de recursos. Cualquier usuario monta una lista publica de recursos en minutos.

59. Creador de changelogs. Para proyectos pequeños que necesitan mostrar progreso persistente.

60. Creador de mini CRM. Contactos, estado y notas para freelancers sin HubSpot.

Capa 7: sitios de descarga y plantillas libres

61. Biblioteca de HTML gratis. Plantillas descargables sin bloqueo de plataforma.

62. Biblioteca de CSS utiles. Componentes visuales simples: cards, grids, hero, formularios, menus.

63. Biblioteca de dashboards libres. Paneles para presupuestos, seguimiento, inventario digital y CRM.

64. Biblioteca de documentos. Contratos informativos, briefings, checklists, plantillas de proyecto.

65. Biblioteca de flujos n8n. Automatizaciones exportables para usuarios sin presupuesto.

66. Biblioteca de prompts utiles. Prompts practicos para escribir, ordenar, resumir y generar webs.

67. Biblioteca de logos simples. SVG editables y libres para proyectos pequenos.

68. Biblioteca de iconos sociales. Iconos y assets ligeros para webs pequenas.

69. Biblioteca de configs Docker. Compose listos para instalar herramientas open-source.

70. Biblioteca de backups. Scripts y guias para guardar webs, bases de datos y archivos.

Capa 8: sitios de ayuda directa

71. Ayuda para publicar web gratis. Paso a paso con GitHub Pages, Cloudflare Pages o Netlify free.

72. Ayuda para salir de plataformas caras. Rutas de migracion: exportar datos, elegir alternativa, publicar.

73. Ayuda para montar newsletter propia. listmonk, Ghost o Buttondown-like open-source.

74. Ayuda para montar comunidad propia. Discourse/Flarum/Zulip segun necesidad.

75. Ayuda para tener base de datos propia. Baserow, NocoDB, Teable, Grist, Directus.

76. Ayuda para montar formularios propios. Formbricks, OhMyForm, HeyForm-like alternativas.

77. Ayuda para automatizar sin pagar. n8n y Activepieces con recetas simples.

78. Ayuda para publicar documentacion. Docusaurus, MkDocs, Starlight o Docmost.

79. Ayuda para vender digital sin tienda pesada. Stripe links, Gumroad-like, Lemon Squeezy o soluciones simples.

80. Ayuda para mantener copias. Backups manuales y automaticos explicados sin jerga.

Capa 9: ranking, auditoria y verificacion

81. Ranking de herramientas por dificultad. Verde, amarillo, rojo. La gente necesita saber si podra usarlo.

82. Ranking por coste real. Gratis, freemium, self-host, pago unico, pago mensual.

83. Ranking por privacidad. Que guarda, donde, exportacion, dependencia de proveedor.

84. Ranking por instalacion Windows. Que funciona bien en Windows sin pelearse con Linux.

85. Ranking por Docker facil. Apps que se levantan con compose sin configuracion infernal.

86. Ranking por comunidad viva. Stars, commits recientes, issues, documentacion y releases.

87. Auditor de landing. Revisa si una pagina comunica, carga rapido y tiene accion clara.

88. Auditor de coste SaaS. Calcula cuanto paga alguien al mes y que puede sustituir.

89. Auditor de dependencia. Detecta si una persona depende demasiado de plataformas cerradas.

90. Auditor de exportabilidad. Marca si una herramienta permite sacar datos y moverse.

Capa 10: red de distribucion social

91. Portal madre del ecosistema. Indice de todo. Explica mision: herramientas libres para gente sin presupuesto.

92. Pagina de manifiesto practico. No ideologia vacia: pagar menos, controlar datos, publicar sin permiso.

93. Pagina empieza aqui. Ruta guiada por necesidad: quiero web, comunidad, email, tienda digital, automatizar.

94. Pagina de casos reales. Antes/despues de usuarios que migran a herramientas libres.

95. Pagina de donaciones y sostenimiento. Transparente: que cuesta mantener, como ayudar, en que se invierte.

96. Pagina de voluntariado tecnico. Gente que ayuda a documentar, traducir, probar y corregir.

97. Pagina de peticiones. Usuarios piden tutoriales o herramientas; la comunidad vota.

98. Pagina de estado del ecosistema. Que webs estan vivas, que se actualizo, que esta roto.

99. Pagina de licencias y fuentes. Claridad: que es libre, que no, que se puede reutilizar.

100. Pagina de mapa completo. Una navegacion visual de las 100 webs y como se conectan.

Primer bloque que si construiria

1. Portal madre del ecosistema.

2. Directorio de software gratis.

3. Comparador de alternativas a SaaS caros.

4. Generador de landing gratis.

5. Base de cursos gratuitos.

6. Foro de herramientas gratis.

7. Biblioteca de HTML gratis.

8. Boletin semanal de herramientas gratis.

9. Ranking por coste real.

10. Ayuda para publicar web gratis.

Regla de gestion

Cada web debe tener una fuente de datos clara, un formulario o CMS para actualizarla, una plantilla repetible, una pagina de estado y exportacion de datos. Si no puede mantenerse en menos de una hora semanal, no entra en la primera fase.

## [ASSISTANT] 2026-08-08 00:55 · Qwen3.8-Max

# COMPENDIO · Ecosistema de 100 webs autogestionables → corrección arquitectónica a 7 organismos metamórficos

**Comité emisor:** ingeniería de sistemas · economía del procomún · historia de la tecnología · UX · legal. Densidad máxima; cada dato lleva fecha o autor para que puedas verificarlo.

---

## 0 · Lectura de la consulta (descomposición)

| Capa | Contenido |
|---|---|
| **Explícita** | Mejorar un ecosistema de 100 sitios open-source, sin APIs frágiles, autogestionables <1 h/semana, con 10 capas ya enumeradas. |
| **Implícita** | Tres palabras en tu titular que no desarrollas y son lo mejor de la idea: **metamórficas** (misma estructura, piel cambiante), **estacionales** (el contenido sigue el calendario real de la gente: becas, renta, vuelta al cole) y **legado** (que siga vivo en 2035 sin ti). |
| **Periférica** | Estás describiendo sin saberlo una **infraestructura pública digital ligera**: hay 40 años de precedentes, teoría económica (Ostrom) y errores documentados de los que aprender. |

**Sesgo detectado en tu plan:** sesgo de abundancia. 100 sitios = 100 frentes de SEO, 100 dominios, 100 superficies de mantenimiento. La historia digital muestra que el valor se concentra, no se dispersa (casos en §4). La corrección central de este compendio: **100 ideas → 7 organismos → 4 superficies de datos**.

---

## 1 · Resumen ejecutivo (7 tesis)

1. **Tus 100 webs no son 100 webs.** Aproximadamente 45 de tus ítems (capas 1, 3 y 9) son *vistas distintas sobre la misma base de datos*. Un directorio, un comparador y cinco rankings son filtros sobre una única tabla de herramientas. Construir 45 sitios separados sería multiplicar por 45 el mantenimiento para obtener el mismo contenido.
2. **La forma correcta es federación, no archipiélago:** un portal madre + 7 organismos que comparten datos, plantilla, dominio raíz (subdirectorios `/directorio`, `/generador`, `/boletin`), licencias y backups. Un dominio acumula autoridad; cien la diluyen.
3. **"Sin APIs persistentes" tiene solución probada:** RSS (1999, Netscape), GitHub Releases expone feed Atom nativo (`/releases.atom`, sin clave), archivos planos en Git, SQLite (año 2000, dominio público, el software más desplegado de la historia). Ninguno requiere cuenta, pago ni contrato.
4. **Lo metamórfico-estacional es tu diferenciador real y está virgen:** un portal cuya portada se recompone sola según calendario (convocatorias abiertas, temporada de impuestos, cursos de verano), con pieles CSS estacionales. Precedente legitimador: **CSS Zen Garden** (Dave Shea, mayo 2003): un solo HTML, +200 pieles distintas.
5. **El legado se diseña, no se desea:** formatos con ≥20 años de supervivencia demostrada (HTML 1991, CSV años 70, Markdown 2004), copia en Wayback Machine (Internet Archive, 1996) y **DOI gratuito vía Zenodo (CERN, 2013)** para que tus bases de datos sean citables como publicaciones científicas.
6. **La comunidad va después del valor, no antes.** Tu bloque inicial incluye el foro (#31) en 6º lugar: riesgo de sala vacía. La evidencia de proyectos commons (Wikipedia creció artículos antes que gobernanza; Framasoft primero servicios, después comunidad) indica: foro solo cuando O1–O3 tengan tráfico.
7. **Presupuesto real 2025:** mínimo viable ≈ **15 €/año** (dominio + Cloudflare Pages/GitHub Pages gratis); con VPS para foro y newsletter ≈ **50–65 €/año** (Hetzner ~4 €/mes, Oracle Cloud Always Free da 4 núcleos ARM + 24 GB RAM gratis con letra pequeña). Tu restricción "gente sin dinero" es técnicamente cumplible.

---

## 2 · Corrección estructural: los 7 organismos

Cada organismo = **una superficie de datos + una plantilla + múltiples vistas**. Tus 100 ítems se reasignan como rutas/vistas.

| Organismo | Absorbe tus ítems | Núcleo de datos | Motor sugerido |
|---|---|---|---|
| **O0 · Portal madre** | 91–93, 97–100 | RSS/JSON de los otros 6; se autogenera | Astro o Hugo (Apache 2.0, 2013) |
| **O1 · Registro Libre** (directorio+comparador+rankings+bases) | 1–10, 21–30, 81–86 | **Una sola tabla** con facetas: precio, privacidad, dificultad, Docker, SO, exportabilidad | Baserow (MIT, 2020) o CSV en Git |
| **O2 · La Fragua** (generadores + bibliotecas descargables) | 11–20, 61–70 | Plantillas HTML de un solo archivo + formulario datos→HTML | El motor es un HTML estático; **POLIVISOR** (entregado en el mensaje anterior) actúa como previsualizador y es la pieza nº 1 de la biblioteca |
| **O3 · Boletín** (newsletter + revista + observatorio) | 41–44 | Curaduría RSS → email | listmonk (AGPL, 2019, un solo binario Go) |
| **O4 · Comunidad** | 31–40 | Hilos votados | Discourse (GPL v2, 2013) — **fase 2** |
| **O5 · Documenta** (wikis + guías + ayuda paso a paso) | 45–50, 71–80 | Markdown en Git | MkDocs Material o Docusaurus (Meta, MIT, 2017) |
| **O6 · Vigía** (auditorías + monitor de cambios + estado) | 53, 87–90, 98 | Calculadoras client-side + Uptime Kuma (MIT, 2021) | Estático + contenedor |

**Consecuencia aritmética:** pasas de mantener 100 webs a mantener **4 bases de datos** (Registro, Fragua, Wiki, Comunidad) y un protocolo. El resto son vistas generadas.

---

## 3 · Matriz de evaluación por capa (precedente real, certeza, riesgo)

| Tu capa | Precedente que valida | Certeza | Riesgo principal |
|---|---|---|---|
| 1 · Directorios que se actualizan solos | **AlternativeTo** (Malmö, 2007, +100 000 programas catalogados por usuarios); **awesome-selfhosted** (+200 000 estrellas GitHub desde 2015); **F-Droid** (2010, apps Android auditadas); **DistroWatch** (2001) | Alta: la demanda existe y es masiva | Competencia ya establecida → tu ángulo debe ser **curado en español + dificultad honesta + coste real**, no volumen |
| 2 · Generadores (webs-herramienta) | **IT-Tools** (Corentin Thomasset, 2020, GPL-3.0, decenas de utilidades en un sitio autoinstalable); POLIVISOR como prueba de concepto | Alta: valor inmediato, cero backend | Duplicación entre los 10 generadores → un solo motor plantilla-datos |
| 3 · Bases de datos públicas | **Class Central** (Dhawal Shah, 2011); **freeCodeCamp** (Quincy Larson, 2014: reporta decenas de miles de contrataciones); **Open Food Facts** (Stéphane Gigandet, 2012: +3 M de productos aportados por voluntarios) | Alta en cursos/ayudas; media en empleo junior | Datos perecederos (becas con fecha). Sin campo **"última verificación"** la base se pudre y pierde confianza |
| 4 · Comunidades | Discourse (2013) con sus niveles de confianza TL0–TL4 como gobernanza automática | Media | Sala vacía si arranca antes que el valor; coste VPS (~2 GB RAM mínimo) |
| 5 · Publicaciones persistentes | La propia Wikipedia: secciones rotatorias ("Efemérides", "Artículo bueno") sin reescritura diaria | Alta | Escribir artículos es la trampa que tú mismo excluiste: que sean **derivados del Boletín**, nunca contenido nuevo |
| 6 · Microsaas gratuitos | Acortadores y monitores existen a patadas | Media-baja | Son los únicos ítems con servidor siempre encendido → los únicos con factura y ataque. Mantener solo monitor de cambios y estado (O6), el resto como calculadoras estáticas |
| 7 · Bibliotecas descargables | CSS Zen Garden (2003) como tesis: **contenido fijo, piel variable** | Alta | Repositorio sin curaduría = vertedero. Máximo 30 piezas excelentes, no 300 mediocres |
| 8 · Ayuda directa | **Framasoft** (asociación francesa, 2001; campaña *Dégooglisons Internet*, oct 2013: +30 servicios libres sustituyendo Google) | Alta: es el modelo social más parecido al tuyo que funciona desde hace 20 años | Tutoriales que caducan con cada versión → fecha de verificación obligatoria |
| 9 · Rankings/auditoría | **PrivacyGuides.org** (nace 2021 de la escisión de PrivacyTools: prueba de que la audiencia de privacidad es fiel) | Alta | Rankings sin metodología publicada pierden legitimidad en meses. Publica el baremo, siempre |
| 10 · Red de distribución | Concepto de **federación anidada** de Ostrom (principio 8) | Alta | Que el portal madre sea un menú estático escrito a mano → debe generarse solo desde los otros organismos |

---

## 4 · Triangulación del comité

### 4.1 · Perspectiva científica (teoría de redes y procomún)
- **Elinor Ostrom, *Governing the Commons* (Cambridge UP, 1990; Nobel de Economía 2009):** los comunes no colapsan si cumplen 8 principios de diseño. Traducidos a tu ecosistema: (1) límites claros → cada organismo tiene maintainer registrado; (2) reglas acordes al contexto → tu regla de <1 h/semana **es** el principio 2, consérvala; (3) elección colectiva → tu página de peticiones #97 con votos; (4) monitoreo → fechas "verificado el" + Uptime Kuma; (5) sanciones graduadas → niveles de confianza de Discourse; (6) resolución de conflictos → issues públicas; (7) reconocimiento → licencia CC BY-SA que impide el cercado; (8) anidamiento → portal madre federando organismos.
- **Yochai Benkler, *The Wealth of Networks* (Yale UP, 2006):** la *producción entre pares basada en comunes* funciona cuando el coste marginal de contribuir es mínimo y la modularidad es fina (módulos pequeños, muchos contribuyentes). Implicación dura: **cada tarea de contribución debe caber en 15 minutos** ("verificar una ficha", "añadir una beca", "traducir una guía"), nunca "mantener una web".
- **Kleppmann et al., "Local-first software: you own your data, in spite of the cloud" (Onward!, 2019):** base académica de tu intuición anti-API: los datos en formatos locales sobreviven a los servicios. Cítalo como manifiesto técnico de O0.
- **Sesgo señalado:** *sesgo del superviviente*. Tu lista menciona herramientas que triunfaron; el cementerio también es dato: Google Reader (cerrado 2013), Inbox (2019), Google+ (2019), Stadia (2023). Ese historial **es tu argumento de venta**: "las plataformas cierran; tus archivos no".

### 4.2 · Perspectiva práctica (stack, costes, tiempos)
- **Advertencias de licencia que tu lista necesita** (verificado a 2025): **n8n NO es open-source OSI** — usa *Sustainable Use License* desde abril 2022 (no puedes revenderlo como servicio); **Baserow** MIT solo en el núcleo; **NocoDB, Teable, NocoBase, Docmost, Formbricks, listmonk** son AGPL-3.0 (el copyleft fuerte obliga a liberar modificaciones si las sirves en red — para uso interno no hay problema, pero tu página de licencias #99 debe decirlo); **Grist** Apache 2.0 y **Budibase** GPL-3.0; **Webstudio** AGPL; de **Instatic** verifica licencia antes de recomendarlo.
- **Alternativas que faltan en tu lista y encajan exactamente:** Stirling-PDF (MIT, 2023, +40 000 estrellas: PDF sin suscripción), Immich (AGPL, 2022, alternativa a Google Photos), Vaultwarden (AGPL, Bitwarden en Rust), Actual Budget (MIT; historia instructiva: la empresa cerró 2022–2023 y la comunidad revivió el código), Paperless-ngx (GPL-3.0; su autor original, Jonas Winkler, dejó el proyecto por salud en 2022 y el fork comunitario lo sostuvo — caso real de bus factor), Penpot (MPL-2.0, empresa española Kaleidos, 2022: el "Figma libre"), Excalidraw (MIT, 2020), Hoppscotch (MIT, 2019, antes *Postwoman*), Cal.com (AGPL, 2021), Vikunja (AGPL, tareas), Umami/Plausible (analítica sin Google: MIT/AGPL), Matomo (ex-Piwik 2007, GPL), SearXNG (AGPL, metabuscador), CyberChef (Apache 2.0, del GCHQ británico, 2016), LocalSend (MIT, 2022).
- **Costes reales 2025 (fuente: tarifas públicas):** dominio .org/.com 10–15 €/año · GitHub Pages y Cloudflare Pages gratis (Workers: 100 000 peticiones/día gratis) · GitHub Actions ilimitado en repos públicos (2 000 min/mes en privados) · Hetzner CX22 ≈ 3,79 €/mes (suficiente para Discourse+listmonk+Uptime Kuma en Docker) · Oracle Cloud Always Free: 4 OCPUs ARM + 24 GB RAM gratis indefinido (letra pequeña: recuperación de instancias inactivas — no lo uses como única sede) · email: Brevo gratis 300/día o Amazon SES ≈ 0,10 $/1 000 (10 000 correos ≈ 1 $). **Total fase 1: ~15 €/año. Fase con foro: ~65 €/año.**
- **Trampa de tiempo detectada:** tu propia regla (<1 h/semana) es buena pero no medible. Acción: mide con Toggl dos semanas reales antes de prometer nada; la historia del software libre está llena de burnout documentado (Denis Pushkarev abandonando core-js en 2019; el incidente **left-pad**, marzo 2016, cuando un solo autor borró 11 líneas y rompió medio npm).

### 4.3 · Perspectiva ético-histórica (genealogía del legado)
Tu proyecto no empieza en 2025; es el último eslabón de una cadena de 80 años. Nombrarla te da legitimidad y manifiesto:

| Año | Hito | Qué te enseña |
|---|---|---|
| 1945 | Vannevar Bush, "As We May Think" (*The Atlantic*, julio): el **Memex** | La idea de archivo universal accesible es anterior al ordenador |
| 1968 | Douglas Engelbart, "Mother of All Demos" (9 dic, San Francisco) | Herramientas para aumentar intelecto, no para consumir |
| 1971 | Michael Hart funda **Project Gutenberg**: +70 000 obras, **54 años vivo** | El formato más simple (texto plano) es el que más dura |
| 1983/1985 | Anuncio de GNU; FSF de Stallman; GPL v1 en 1989 | El marco legal del común digital |
| 1995 | **WikiWikiWeb** de Ward Cunningham (25 marzo) | Colaboración asíncrona persistente |
| 1996 | **Internet Archive** (Brewster Kahle); Wayback Machine público en 2001 | El backup civilizatorio: úsalo como capa tuya |
| 1997 | Eric Raymond, *The Cathedral and the Bazaar* | Curaduría centralizada (catedral) vs. comunidad (bazar): tu fase 1 es catedral; la fase 3, bazar |
| 1999 | RSS (Netscape) | Tu "API sin API" |
| 2001 | Wikipedia (15 enero, Wales/Sanger); Creative Commons (Lessig); **Benkler** teoriza el común | Licencias = infraestructura |
| 2004 | OpenStreetMap (Steve Coast) | Datos geográficos por voluntarios: tu capa "recursos por ciudad" puede montarse sobre él |
| 2007 | AlternativeTo | La prueba de demanda de tu O1 |
| 2008 | Kevin Kelly, "1,000 True Fans" (*The Technium*) | No necesitas millones: 1 000 personas que dependan del ecosistema lo sostienen |
| 2010 | IndieWeb (Tantek Çelik + Aaron Swartz); F-Droid | Publicar sin permiso de plataformas |
| 2013 | Framasoft *Dégooglisons*; Zenodo (CERN) | El gemelo francés de tu misión; DOI gratis para tus datos |
| 2013/2022 | Muerte de Aaron Swartz (11 enero 2013, caso JSTOR); dominios de Z-Library incautados (nov 2022) | **Límite ético-legal:** tu biblioteca de documentos (#64) solo con CC/dominio público/plantillas propias. El común se defiende respetando la ley mejor que tus adversarios |

---

## 5 · Análisis con casos (lecciones operativas)

1. **CSS Zen Garden (2003):** un HTML inmutable, pieles rotativas. → **Mecanismo metamórfico**: separa estrictamente contenido semántico de piel CSS; las estaciones cambian solo `variables.css` y el orden de módulos.
2. **Portada de Wikipedia:** módulos que rotan (efemérides, actualidad, artículo destacado) sin que nadie escriba la portada. → Tu O0 se compone de módulos alimentados por RSS de O1–O6.
3. **Framasoft:** empezó instalando servicios útiles uno a uno; la comunidad llegó después, atraída por utilidad demostrada. → Orden correcto de lanzamiento (ver §7).
4. **Open Food Facts:** calidad mediante estructura (campos obligatorios, fotos, verificación) no mediante editores heroicos. → Tu Registro necesita esquema estricto: `nombre, categoría, precio_real, licencia, dificultad, docker, exporta_datos, última_verificación`.
5. **Paperless → Paperless-ngx (2022):** un maintainer único es un punto de fallo; el fork comunitario salvó el proyecto. → Regla bus factor ≥ 2 desde el día 1.
6. **left-pad (2016) / core-js (2019):** dependencia silenciosa de piezas mantenidas por una persona agotada. → Tu auditor de dependencia (#89) debe medir exactamente esto en el stack de los usuarios.
7. **Rug-pulls de licencias 2021–2025:** Elasticsearch→SSPL (2021, volvió a AGPL en 2024), Redis→SSPL (2024, reañadió AGPL en Redis 8, 2025), HashiCorp→BSL (2023, provocó el fork **OpenTofu** bajo Linux Foundation), CentOS 8 cancelado (dic 2020). → Tu ranking de "comunidad viva" (#86) debe puntuar **estabilidad de licencia**, no solo estrellas.
8. **Space Jam (1996) y la primera página web del CERN (1991, aún en info.cern.ch):** el HTML plano sobrevive décadas sin mantenimiento. → **Tu definición de legado:** "ninguna página del ecosistema requiere JavaScript para leerse".

---

## 6 · Los dos protocolos que faltaban en tu plan

### 6.1 · Protocolo metamórfico-estacional (tu idea original, desarrollada)
- Cada ficha del Registro lleva `ventana_inicio`, `ventana_fin`, `estación`, `público`. Ejemplos reales anclables: temporada de la renta (abril–junio, España), becas MEC (marzo–octubre), convocatorias de subvenciones (BOE y Base de Datos Nacional de Subvenciones, Ley 38/2003), cursos de verano (mayo–julio), vuelta al cole (septiembre).
- **Cron semanal** (GitHub Actions, gratuito en repos públicos): regenera la portada de O0 con (a) lo que vence pronto, (b) lo que abre ahora, (c) lo recién verificado.
- Piel estacional: 4 juegos de variables CSS (invierno/primavera/verano/otoño). Opcional y bello: inspiración en los **72 microestaciones del calendario tradicional japonés (shichijūni kō)** — un subtítulo de portada que cambia cada 5 días da sensación de organismo vivo a coste cero.
- Inspiración en calendarios medievales (libros de horas): el mismo libro, leído según la estación. Tu portal es un libro de horas digital de la supervivencia económica.

### 6.2 · Protocolo de persistencia sin APIs
1. **Todo en Git** (GitHub o Gitea propio): CSV/JSON/Markdown como única fuente de verdad.
2. **RSS como API universal:** cada organismo emite su feed; el portal madre se alimenta de sus propios feeds (autopoiesis). GitHub expone releases sin clave vía `.atom`.
3. **SQLite + Datasette** (Simon Willison, 2017, Apache 2.0): cuando el Registro pase de ~2 000 fichas, consultas instantáneas desde un solo archivo, publicable en solo lectura.
4. **Backup 3-2-1 semanal automatizado:** 3 copias, 2 soportes, 1 fuera (segundo repo Git + export CSV + peticiones de archivo a Wayback Machine programadas por cron).
5. **DOI anual vía Zenodo:** cada 1 de enero, snapshot del Registro como dataset citable. Tu base de becas se convierte en publicación permanente con identificador global. Legado medible.
6. **Cero JS para leer:** HTML semántico + versión imprimible. Estándares W3C, no frameworks de moda.

---

## 7 · Ruta (90 días, semanas reales; luego trimestres)

**Semanas 1–2 · Fundación.** Dominio único + subdirectorios. Repo Git con esquema del Registro (CSV con las 9 columnas de §5.4). Licencias decididas y publicadas (contenido CC BY-SA 4.0; código MIT o AGPL según caso; datos ODC-BY). Plantilla base HTML/CSS con variables estacionales.

**Semanas 3–4 · O1 Registro (catedral, no bazar).** 50 fichas curadas a mano de alternativas libres (usa el catálogo que ya enumeraste en tu prompt como semilla). Búsqueda y filtros 100 % client-side. Cada ficha con fecha de verificación. Publica la metodología del baremo (principio de legitimidad).

**Semanas 5–6 · O2 La Fragua.** Un motor: formulario → HTML de un solo archivo descargable (landing, CV, link-in-bio, press kit: tus #11–15 son plantillas del mismo motor). POLIVISOR se integra como previsualizador y abre la biblioteca #61.

**Semanas 7–8 · O3 Boletín.** listmonk sobre Brevo/SES; fuentes RSS curadas + 1 párrafo humano; 3 números publicados antes de anunciarlo. La "revista" (#41) nace como archivo del boletín, jamás como contenido extra.

**Semanas 9–10 · O5 Documenta.** 12 tutoriales "una tarea por página" (publicar en GitHub Pages, exportar de Notion, backup básico…). MkDocs Material, todo Markdown.

**Semanas 11–12 · O6 Vigía + auditoría interna.** Uptime Kuma público (tu #98 ya existe como software hecho). Enlaces rotos chequeados por cron (lychee, gratuito). Mides horas reales invertidas; cortas lo que supere 1 h/semana.

**Trimestre 2:** protocolo estacional activo; O2 añade plantillas 6–10; primer snapshot Zenodo con DOI; página de casos reales (#94) con las primeras 5 migraciones documentadas.

**Trimestre 3:** solo si hay tracción medible (≥500 suscriptores o ≥10 000 visitas/mes): **O4 Comunidad** en Discourse sobre Hetzner, con niveles de confianza y 3 categorías máximo. Voluntariado técnico (#96) con tareas de 15 minutos (principio de Benkler).

**Lo que NO se construye en el año:** microsaas con servidor (capa 6 salvo el monitor), los 40 rankings redundantes (son filtros de O1), y cualquier ítem que no tenga maintainer nombrado.

---

## 8 · Reglas de gestión: tus 5 + 7 añadidas

Tus reglas (fuente de datos clara · formulario/CMS · plantilla repetible · página de estado · exportación · <1 h/semana) son correctas. El comité añade:

1. **Fuente única de verdad:** cada dato vive en exactamente un sitio; todo lo demás es vista generada.
2. **Lectura sin JavaScript:** ninguna página lo requiere para leerse.
3. **3-2-1 automático:** backup semanal programado o no existe.
4. **"Verificado el" visible** en cada ficha; lo no verificado en 6 meses se marca en ámbar.
5. **Bus factor ≥ 2:** cada organismo tiene maintainer + suplente con accesos documentados.
6. **Transparencia de coste (#95 ampliada):** publicar €/año reales y horas/semana medidas. Es tu mejor argumento contra el SaaS.
7. **Regla del organismo justificante:** si un organismo no puede defenderse solo ante la pregunta "¿a quién le ahorra dinero o dependencia esta semana?", se congela.

**Métricas de legado (sustituyen a la vanidad):** años en línea · migraciones completadas documentadas · euros ahorrados declarados · forks y reutilizaciones · copias offline distribuidas · citas al DOI.

---

## 9 · Glosario operativo

| Término | Definición densa |
|---|---|
| **Autogestionable** | Mantenible por 1 persona en <1 h/semana usando formularios/CMS, sin reescritura de código. |
| **Metamórfico** | Sitio cuya estructura semántica es fija y cuya presentación y orden de módulos cambian por datos/estación (tesis CSS Zen Garden). |
| **Fair-code** | Código visible pero licencia restrictiva comercial (n8n): **no** es open-source según la OSI (1998). |
| **AGPL-3.0** | Copyleft de red: si modificas y sirves el software, publicas el código. Ideal para comunes; exige entenderlo. |
| **CC BY-SA 4.0** | Licencia de contenido tipo Wikipedia: permite reuso exigiendo atribución y misma licencia — anti-cercado. |
| **RSS** | Feed XML (Netscape, 1999): la API que no puede cerrarte nadie porque es un archivo. |
| **Local-first** | Datos en formatos locales tuyos, sincronización opcional (Kleppmann et al., 2019). |
| **Datasette** | Publica SQLite como web de solo lectura (Willison, 2017). |
| **DOI** | Identificador persistente; Zenodo (CERN) lo emite gratis para datasets. |
| **Bus factor** | Personas que pueden desaparecer antes de que el proyecto muera. Mínimo aceptable: 2. |
| **Rug-pull de licencia** | Cambio unilateral a licencia restrictiva (Elastic 2021, Redis 2024, HashiCorp 2023). |
| **Lock-in / exportabilidad** | Capacidad (o no) de sacar tus datos; tu ítem #90 convertido en columna del Registro. |
| **Común digital** | Recurso gobernado por comunidad según Ostrom (1990), ni mercado ni Estado. |
| **Cercado (enclosure)** | Apropiación privada de un común: el riesgo que tu licencia BY-SA bloquea. |

---

## 10 · Reflexión prospectiva

Escenario 2030 si el plan funciona: el ecosistema no será famoso; será **infraestructura silenciosa** — como OpenStreetMap o Project Gutenberg — citada en talleres de asociaciones, compartida por trabajadores sociales, copiada en pendrives donde no hay buena conexión. Ese es el legado real: no visitas, sino *dependencia agradecida*. Los dos riesgos terminales no son técnicos: son el **burnout del fundador** (core-js, Paperless-ng lo documentan) y la **institucionalización** — aceptar subvenciones que exijan métricas de vanidad y conviertan el común en oficina. La vacuna es la gobernanza Ostrom desde el día 1 y la regla de oro del formato: construir solo con cosas que ya llevan 20 años vivas.

**Pregunta guía para decidir la fase 1:** si solo pudieras mantener *uno* de los 7 organismos durante los próximos 10 años, ¿cuál justificaría a todos los demás — el Registro que ahorra dinero, la Fragua que publica sin permiso, o el Boletín que lo distribuye? De esa respuesta depende qué construyes la semana 1.
