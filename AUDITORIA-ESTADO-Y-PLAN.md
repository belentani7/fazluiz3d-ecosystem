# Auditoría, situación y plan de elevación — `fazluiz3d-ecosystem`

Generado 2026-11-03 por el pase de reglas del ecosistema (catálogo `_meta/reglas-oficiales.md`).
Todo lo afirmado aquí sale de datos reales: base de consolidación, gate oficial y git.

- **Categoría:** arte-musica · **Ruta:** `C:\Users\USER\belentani-ecosystem\arte-musica\fazluiz3d-ecosystem`
- **Remoto:** https://github.com/belentani7/fazluiz3d-ecosystem.git · **Rama:** master · **HEAD:** 7a942e1 (docs(auditoria): gobernanza GH-01..10 verificada (GH-09/GH-10 OK) + estado y pla)
- **Lenguajes:** .md:32,.png:31,.webp:20,.tsx:19,.js:13,.json:12 · **Commits (git real):** 13 · **Tamaño worktree:** 880.4 MB
- **Visibilidad GitHub:** public · **Homepage:** https://fazluiz3d-ecosystem.vercel.app · **HTTP:** HTTP_200
- **GitHub Pages:** no activo

## 1. Situación actual

- **Consolidación:** familia `proyecto-fazluiz3decosystem` · acción survivor (estable).
- **Git:** 3 ficheros sin commitear · 7 commits sin push · 5 commits del pase de reglas (desde 2026-11-02).
- **Reglas web (gate oficial):** 4 HTML · **0 hallazgos** · 0 títulos duplicados.
- **Gobernanza GitHub (protocolo MS):** 11/11 reglas aplicadas · completo.
- **Secretos (triaje):** sin hallazgos.

## 2. Comandos para arreglar y elevar (ejecutar en este orden)

1. **Reglas web: ya cumplidas (0 hallazgos).** Barrera continua:
   ```powershell
   python C:\Users\USER\belentani-ecosystem\_meta\check_web_rules.py fazluiz3d-ecosystem
   ```
2. **Publicar en GitHub Pages** (repo público; la cuenta free solo publica repos públicos):
   ```powershell
   gh api -X POST repos/belentani7/fazluiz3d-ecosystem/pages -f source[branch]=main -f source[path]=/
   gh api -X POST repos/belentani7/fazluiz3d-ecosystem/pages/builds/latest -X POST 2>$null   # o dejar que el workflow publique
   ```
3. **Limpiar 3 ficheros sin commitear** (revisar antes; si son del pase de reglas, commitear):
   ```powershell
   git -C "C:\Users\USER\belentani-ecosystem\arte-musica\fazluiz3d-ecosystem" status --short
   git -C "C:\Users\USER\belentani-ecosystem\arte-musica\fazluiz3d-ecosystem" add -- <solo los ficheros del pase> ; git -C "C:\Users\USER\belentani-ecosystem\arte-musica\fazluiz3d-ecosystem" commit -m "fix(web-rules): ..."
   ```
4. **Subir al remoto** (requiere tu confirmación explícita; hoy ningún repo tiene push):
   ```powershell
   git -C "C:\Users\USER\belentani-ecosystem\arte-musica\fazluiz3d-ecosystem" push origin master
   ```

## 3. Qué puede alcanzar este repositorio

- **Repositorio público**: puede publicar gratis en GitHub Pages (`https://belentani7.github.io/fazluiz3d-ecosystem/`) y mantener Vercel; hoy tiene Pages desactivado
- Ya tiene despliegue Vercel vivo: siguiente nivel es dominio propio (`<producto>.belentani.es`) añadiendo CNAME en el registrador.
- Sitio pequeño pero válido: con gobernanza GH-01..10 completa y CI quedaría listo como producto público.

---
*Evidencia: `_meta/consolidacion/consolidacion.db` · `_meta/specs/2026-11-01-*` · gate `check_web_rules.py` · git log. Regenerable con `python _meta/gen_auditoria_repos.py`.*
