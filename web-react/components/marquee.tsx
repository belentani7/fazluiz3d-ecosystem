'use client'

import { useLang } from './lang-provider'

export function Marquee() {
  const { t } = useLang()
  const items = [...t.marquee, ...t.marquee]

  return (
    <div className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-background-2)] py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10">
          {items.map((m, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                {m}
              </span>
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-gold)]" />
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10"
        >
          {items.map((m, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
                {m}
              </span>
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-gold)]" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
