'use client'

import { useEffect, useRef } from 'react'
import { useLang } from './lang-provider'
import { gsap, ScrollTrigger, ensureRegistered } from '@/lib/use-gsap'

export function Stats() {
  const { t } = useLang()
  const root = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    ensureRegistered()
    const el = root.current
    if (!el) return

    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>('[data-count]', el)
      nums.forEach((n) => {
        const target = Number(n.dataset.count)
        const obj = { val: 0 }
        ScrollTrigger.create({
          trigger: n,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                n.textContent = Math.round(obj.val).toLocaleString()
              },
            })
          },
        })
      })
    }, el)
    return () => ctx.revert()
  }, [t])

  return (
    <section className="border-b border-[color:var(--color-border)] py-16 sm:py-20">
      <div ref={root} className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="flex items-baseline justify-center gap-0.5 md:justify-start">
                <span
                  data-count={s.v}
                  className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-none text-gradient-gold"
                >
                  0
                </span>
                <span className="font-display text-2xl font-bold text-[color:var(--color-gold)]">
                  {s.suffix}
                </span>
              </div>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
