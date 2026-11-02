export declare function checkAdmin(request: Request, secret: string | undefined): { status: number; error: string } | null;
export declare function readBoundedJson(request: Request, maxBytes?: number): Promise<
  | { ok: true; value: unknown }
  | { ok: false; status: number; error: string }
>;
