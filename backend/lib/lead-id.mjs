/** Backwards-compatible local CRM identifiers generated in saved lead records. */
export function isStoredLeadId(value) {
  return typeof value === "string" &&
    (/^lead_[0-9]{10,17}_[a-z0-9]{1,12}$/.test(value) ||
     /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value));
}
