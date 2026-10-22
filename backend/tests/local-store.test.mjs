import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const source = readFileSync(new URL("../lib/local-store.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  reportDiagnostics: true,
});
assert.equal(compiled.diagnostics.filter(x => x.category === ts.DiagnosticCategory.Error).length, 0);
const previousCwd = process.cwd();
const sandbox = mkdtempSync(join(tmpdir(), "aurea-local-crm-"));
process.chdir(sandbox);
const compiledFile = join(sandbox, "local-store.mjs");
writeFileSync(compiledFile, compiled.outputText, "utf8");
const store = await import(pathToFileURL(compiledFile).href);
const dataDir = join(sandbox, "data");
const dataFile = join(dataDir, "database.json");
test.beforeEach(() => rmSync(dataDir, { recursive: true, force: true }));
test.after(() => { process.chdir(previousCwd); rmSync(sandbox, { recursive: true, force: true }); });

test("empty installation creates usable database without external provider", async () => {
  assert.deepEqual(await store.exportDatabase(), { leads: [], orders: [], events: [] });
  await store.insert("orders", { subject: "real request" });
  assert.equal((await store.list("orders")).length, 1);
  assert.equal(JSON.parse(readFileSync(dataFile, "utf8")).orders.length, 1);
});
test("concurrent writes cannot overwrite preceding customer records", async () => {
  const count = 35;
  await Promise.all(Array.from({ length: count }, (_, i) => store.insert("orders", { i })));
  const orders = await store.list("orders");
  assert.equal(orders.length, count);
  assert.equal(new Set(orders.map(x => x.id)).size, count);
  assert.equal(readdirSync(dataDir).filter(x => x.endsWith(".tmp")).length, 0);
});
test("corrupt database fails closed and preserves original bytes", async () => {
  mkdirSync(dataDir, { recursive: true });
  const broken = "{ corrupted json";
  writeFileSync(dataFile, broken);
  await assert.rejects(store.insert("orders", {test: true}));
  assert.equal(readFileSync(dataFile, "utf8"), broken);
});
test("incomplete database refuses destructive implicit recovery", async () => {
  mkdirSync(dataDir, { recursive: true });
  const broken = '{"orders":[{"id":"retained"}]}';
  writeFileSync(dataFile, broken);
  await assert.rejects(store.insert("orders", {test: true}), /Incomplete/);
  assert.equal(readFileSync(dataFile, "utf8"), broken);
});
test("upsert and update work as native local CRM features", async () => {
  await store.upsertLeads([{google_place_id:"test-place-a",name:"A"}]);
  await store.upsertLeads([{google_place_id:"test-place-a",name:"Duplicate"}]);
  assert.equal((await store.list("leads")).length, 1);
  const record = (await store.list("leads"))[0];
  const updated = await store.update("leads", record.id, {status:"reviewed"});
  assert.equal(updated.status, "reviewed");
  assert.equal((await store.list("leads"))[0].status, "reviewed");
});
