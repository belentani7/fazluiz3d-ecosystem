'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useLang } from './lang-provider'
import { gsap, ensureRegistered } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  const { t } = useLang()
  const root = useRef<HTMLElement | null>(null)

  useEffect(() => {
    ensureRegistered()
    const el = root.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-project]', el)
      cards.forEach((c, i) => {
        gsap.fromTo(
          c,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: (i % 2) * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: c, start: 'top 85%', toggleActions: 'play none none none' },
          },
        )
        if (!prefersReduced) {
          const img = c.querySelector('[data-project-img]')
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -8 },
              {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: { trigger: c, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            )
          }
        }
      })
    }, el)
    return () => ctx.revert()
  }, [t])

  return (
    <section id="projects" ref={root} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tag={t.projects.tag} title={t.projects.title} sub={t.projects.sub} />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <a
              key={i}
              href="#contact"
              data-project
              className={`group relative block overflow-hidden rounded-2xl border border-[color:var(--color-border)] transition-colors hover:border-[color:var(--color-border-hover)] ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div data-project-img className="absolute inset-0 scale-110">
                  <Image
                    src={p.img || '/placeholder.svg'}
                    alt={p.t}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-background)] via-[color:var(--color-background)]/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-gold)]">
                  {p.c}
                </span>
                <h3 className="mt-2 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                  {p.t}
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--color-gold)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--color-muted)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.d}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
