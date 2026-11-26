// Smoke tests — node:test, sin dependencias externas.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function walk(dir, exts, out = []) {
  const SKIP = new Set([".git", "node_modules", ".next", "dist", "build", ".turbo", "coverage"]);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, exts, out);
    else if (exts.includes(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

test("archivos de presencia existen", () => {
  for (const f of ["README.md", "LICENSE", ".gitignore", "index.html", "LEEME-DESPLIEGUE.md"]) {
    assert.ok(fs.existsSync(path.join(ROOT, f)), `falta ${f}`);
  }
});

test("paquetes Node declarados son JSON válido", () => {
  for (const rel of ["web-react/package.json", "backend/package.json"]) {
    const pkg = JSON.parse(read(rel));
    assert.equal(typeof pkg.name, "string");
    assert.equal(typeof pkg.scripts, "object");
  }
});

test("vercel.json es JSON válido y sin build roto", () => {
  const v = JSON.parse(read("vercel.json"));
  assert.equal(v.version, 2);
  // No debe apuntar a un package.json inexistente en root
  const builds = v.builds || [];
  for (const b of builds) {
    if (b.src === "package.json") {
      assert.ok(fs.existsSync(path.join(ROOT, "package.json")), "vercel.json referencia package.json raíz inexistente");
    }
  }
});

test("HTML sin rutas locales de Windows ni scripts rotos", () => {
  const htmlFiles = walk(ROOT, [".html"]);
  const offenders = [];
  for (const f of htmlFiles) {
    const s = fs.readFileSync(f, "utf8");
    if (/C:\\\\Users\\\\/i.test(s) || /omega-superpowers-client\.js/i.test(s)) {
      offenders.push(path.relative(ROOT, f));
    }
  }
  assert.deepEqual(offenders, [], `HTML con rutas locales de Windows: ${offenders.join(", ")}`);
});

test("HTML sin marcadores de mojibake doble UTF-8", () => {
  const htmlFiles = walk(ROOT, [".html"]);
  const offenders = [];
  // Patrones típicos de doble codificación UTF-8->Latin1->UTF-8
  const bad = /Ã¡|Ã©|Ã­|Ã³|Ãº|Ã±|Ã¼|Â·|Â©|â€”|â€™|â€œ|â€\x9d/;
  for (const f of htmlFiles) {
    const s = fs.readFileSync(f, "utf8");
    if (bad.test(s)) offenders.push(path.relative(ROOT, f));
  }
  assert.deepEqual(offenders, [], `HTML con mojibake: ${offenders.join(", ")}`);
});

test("index.html tiene lang, viewport y título", () => {
  const html = read("index.html");
  assert.match(html, /<html[^>]+lang="es"/i);
  assert.match(html, /<meta[^>]+name="viewport"/i);
  assert.match(html, /<title>[^<]+<\/title>/i);
});

test("scripts de smoke son ejecutables por node --test", () => {
  // Este propio archivo es la prueba: si llega aquí, node --test funciona.
  assert.ok(true);
});
