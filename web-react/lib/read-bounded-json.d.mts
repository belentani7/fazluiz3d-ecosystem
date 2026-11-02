export type BoundedJsonResult =
  | { ok: true; value: unknown }
  | { ok: false; status: number; error: string };
export declare function readBoundedJson(request: Request, maxBytes?: number): Promise<BoundedJsonResult>;
