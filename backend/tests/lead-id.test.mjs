import test from "node:test";
import assert from "node:assert/strict";
import { isStoredLeadId } from "../lib/lead-id.mjs";
import { readFileSync } from "node:fs";

test("accepts native local CRM identifiers", () => {
  assert.equal(isStoredLeadId("lead_1792620000000_a3k4z2"), true);
});
test("preserves compatibility with UUID-based leads", () => {
  assert.equal(isStoredLeadId("550e8400-e29b-41d4-a716-446655440000"), true);
});
test("rejects arbitrary identifiers and injection payloads", () => {
  for (const value of [null, [], 12, "", "1", "alice@example.com", "../data/database.json",
    "lead_x_abc", "lead_1792620000000_/../", "lead_1792620000000_a3k4z2' OR 1=1",
  ]) assert.equal(isStoredLeadId(value), false);
});
test("Analyze and Send schemas must share legacy-compatible ID validation", () => {
  const source = readFileSync(new URL("../lib/schemas.ts", import.meta.url), "utf8");
  assert.match(source, /isStoredLeadId/);
  assert.equal((source.match(/refine\(isStoredLeadId/g) ?? []).length, 2);
});
