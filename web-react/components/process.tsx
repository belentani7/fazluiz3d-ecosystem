'use client'

import { useEffect, useRef } from 'react'
import { useLang } from './lang-provider'
import { gsap, ensureRegistered } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'

export function Process() {
  const { t } = useLang()
  const root = useRef<HTMLDivElement | null>(null)
  const line = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    ensureRegistered()
    const el = root.current
    const ln = line.current
    if (!el || !ln) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('[data-step]', el)
      if (!prefersReduced) {
        gsap.fromTo(
          ln,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 60%', end: 'bottom 70%', scrub: true },
          },
        )
      }
      steps.forEach((s, i) => {
        const dot = s.querySelector('[data-dot]')
        gsap.fromTo(
          s,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: s, start: 'top 82%', toggleActions: 'play none none none' },
          },
        )
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.4, backgroundColor: 'rgba(201,169,110,0.2)' },
            {
              scale: 1,
              backgroundColor: '#c9a96e',
              duration: 0.5,
              scrollTrigger: { trigger: s, start: 'top 75%', toggleActions: 'play none none none' },
            },
          )
        }
      })
    }, el)
    return () => ctx.revert()
  }, [t])

  return (
    <section id="process" className="scroll-mt-24 py-24 sm:py-32">
      <div ref={root} className="mx-auto max-w-3xl px-6">
        <SectionHeading tag={t.proc.tag} title={t.proc.title} sub={t.proc.sub} />

        <div className="relative mt-16 pl-14">
          {/* Track */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-[color:var(--color-border)]" />
          <div
            ref={line}
            className="absolute left-[22px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[color:var(--color-gold)] to-[color:var(--color-gold-bronze)]"
          />

          {t.proc.steps.map((s) => (
            <div key={s.n} data-step className="relative mb-14 last:mb-0">
              <span
                data-dot
                className="absolute -left-[42px] top-1.5 h-3 w-3 rounded-full bg-[color:var(--color-gold)] shadow-[0_0_12px_rgba(201,169,110,0.5)]"
              />
              <span className="font-mono text-xs text-[color:var(--color-gold)]">{s.n}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
