'use client'

import { useLang } from './lang-provider'
import { useReveal } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'

export function Capabilities() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section id="capabilities" ref={ref} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tag={t.cap.tag} title={t.cap.title} sub={t.cap.sub} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.cap.items.map((c, i) => (
            <div
              key={i}
              data-reveal
              data-reveal-delay={(i % 3) * 0.08}
              className="glass-card group relative overflow-hidden p-7"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--color-gold-glow)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-[color:var(--color-faint)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono rounded-full border border-[color:var(--color-gold-dim)] bg-[color:var(--color-gold-glow)] px-3 py-1 text-[11px] text-[color:var(--color-gold)]">
                  {c.s}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
