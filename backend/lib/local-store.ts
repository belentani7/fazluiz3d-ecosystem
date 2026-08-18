import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export type LocalRecord = Record<string, unknown> & { id?: string };
type LocalDatabase = { leads: LocalRecord[]; orders: LocalRecord[]; events: LocalRecord[] };

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'database.json');
const emptyDatabase: LocalDatabase = { leads: [], orders: [], events: [] };

async function readDatabase(): Promise<LocalDatabase> {
  try {
    const raw = await readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw) as Partial<LocalDatabase>;
    return {
      leads: Array.isArray(parsed.leads) ? parsed.leads : [],
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      events: Array.isArray(parsed.events) ? parsed.events : [],
    };
  } catch {
    return { leads: [], orders: [], events: [] };
  }
}

async function writeDatabase(database: LocalDatabase): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(database, null, 2) + '\n', 'utf8');
}

function id(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function insert(collection: keyof LocalDatabase, record: LocalRecord): Promise<LocalRecord> {
  const database = await readDatabase();
  const saved = { ...record, id: record.id ?? id(collection.slice(0, -1)), created_at: record.created_at ?? new Date().toISOString() };
  database[collection].push(saved);
  await writeDatabase(database);
  return saved;
}

export async function list(collection: keyof LocalDatabase): Promise<LocalRecord[]> {
  const database = await readDatabase();
  return database[collection];
}

export async function update(collection: keyof LocalDatabase, recordId: string, patch: LocalRecord): Promise<LocalRecord | null> {
  const database = await readDatabase();
  const index = database[collection].findIndex((record) => record.id === recordId || record.google_place_id === recordId);
  if (index < 0) return null;
  database[collection][index] = { ...database[collection][index], ...patch, updated_at: new Date().toISOString() };
  await writeDatabase(database);
  return database[collection][index];
}

export async function upsertLeads(records: LocalRecord[]): Promise<LocalRecord[]> {
  const database = await readDatabase();
  const saved: LocalRecord[] = [];
  for (const record of records) {
    const index = database.leads.findIndex((item) => item.google_place_id === record.google_place_id);
    if (index >= 0) saved.push(database.leads[index]);
    else {
      const next = { ...record, id: id('lead'), created_at: new Date().toISOString() };
      database.leads.push(next);
      saved.push(next);
    }
  }
  await writeDatabase(database);
  return saved;
}

export async function logEvent(event: string, payload: LocalRecord = {}): Promise<void> {
  await insert('events', { event, payload });
}

export async function exportDatabase(): Promise<LocalDatabase> {
  return readDatabase();
}
