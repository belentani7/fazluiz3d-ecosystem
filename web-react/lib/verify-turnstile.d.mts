export function verifyTurnstile(
  token: unknown,
  options?: { secret?: string; hostname?: string; fetchImpl?: typeof fetch },
): Promise<{ ok: boolean; status: number }>
