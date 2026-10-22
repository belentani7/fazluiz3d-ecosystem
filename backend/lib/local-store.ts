import { mkdir, readFile, open, rename, rm } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

export type LocalRecord = Record<string, unknown> & { id?: string };
type LocalDatabase = { leads: LocalRecord[]; orders: LocalRecord[]; events: LocalRecord[] };

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'database.json');
const emptyDatabase: LocalDatabase = { leads: [], orders: [], events: [] };

async function readDatabase(): Promise<LocalDatabase> {
  let raw: string;
  try {
    raw = await readFile(DATA_FILE, 'utf8');
  } catch (error) {
    // Only an absent database means a fresh installation. Corruption and
    // permission failures must never silently reset customer records.
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return { leads: [], orders: [], events: [] };
    }
    throw error;
  }
  const data: unknown = JSON.parse(raw);
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Invalid local CRM database format');
  }
  const parsed = data as Partial<LocalDatabase>;
  if (!Array.isArray(parsed.leads) || !Array.isArray(parsed.orders) ||
      !Array.isArray(parsed.events)) {
    throw new Error('Incomplete local CRM database: refusing to erase records');
  }
  return { leads: parsed.leads, orders: parsed.orders, events: parsed.events };
}

async function writeDatabase(database: LocalDatabase): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  const temp = path.join(DATA_DIR, '.database-' + randomUUID() + '.tmp');
  try {
    const fd = await open(temp, 'wx', 0o600);
    try {
      await fd.writeFile(JSON.stringify(database, null, 2) + '\n', 'utf8');
      await fd.sync();
    } finally {
      await fd.close();
    }
    await rename(temp, DATA_FILE);
  } finally {
    await rm(temp, { force: true });
  }
}

// Serializes all read-modify-write operations within one backend process.
// A shared transactional database is required for multiple server instances.
let mutationTail: Promise<void> = Promise.resolve();
function mutate<T>(change: (database: LocalDatabase) => T): Promise<T> {
  const result = mutationTail.then(async () => {
    const database = await readDatabase();
    const value = change(database);
    await writeDatabase(database);
    return value;
  });
  mutationTail = result.then(() => undefined, () => undefined);
  return result;
}

function id(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function insert(collection: keyof LocalDatabase, record: LocalRecord): Promise<LocalRecord> {
  return mutate(database => {
    const saved = { ...record, id: record.id ?? id(collection.slice(0, -1)),
      created_at: record.created_at ?? new Date().toISOString() };
    database[collection].push(saved);
    return saved;
  });
}

export async function list(collection: keyof LocalDatabase): Promise<LocalRecord[]> {
  const database = await readDatabase();
  return database[collection];
}

export async function update(collection: keyof LocalDatabase, recordId: string, patch: LocalRecord): Promise<LocalRecord | null> {
  return mutate(database => {
    const index = database[collection].findIndex((record) => record.id === recordId || record.google_place_id === recordId);
    if (index < 0) return null;
    database[collection][index] = { ...database[collection][index], ...patch,
      updated_at: new Date().toISOString() };
    return database[collection][index];
  });
}

export async function upsertLeads(records: LocalRecord[]): Promise<LocalRecord[]> {
  return mutate(database => {
    const saved: LocalRecord[] = [];
    for (const record of records) {
      const index = database.leads.findIndex(item => item.google_place_id === record.google_place_id);
      if (index >= 0) saved.push(database.leads[index]);
      else {
        const next = { ...record, id: id('lead'), created_at: new Date().toISOString() };
        database.leads.push(next);
        saved.push(next);
      }
    }
    return saved;
  });
}

export async function logEvent(event: string, payload: LocalRecord = {}): Promise<void> {
  await insert('events', { event, payload });
}

export async function exportDatabase(): Promise<LocalDatabase> {
  return readDatabase();
}
