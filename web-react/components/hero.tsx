'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useLang } from './lang-provider'
import { gsap, ensureRegistered } from '@/lib/use-gsap'
import { ArrowUpRight, MousePointer2 } from 'lucide-react'

export function Hero() {
  const { t } = useLang()
  const root = useRef<HTMLElement | null>(null)
  const imgWrap = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    ensureRegistered()
    const el = root.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        const tl = gsap.timeline({ delay: 0.15 })
        tl.from('[data-hero-badge]', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' })
          .from(
            '[data-hero-word]',
            { yPercent: 120, opacity: 0, duration: 1, stagger: 0.08, ease: 'power4.out' },
            '-=0.4',
          )
          .from('[data-hero-sub]', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .from('[data-hero-cta]', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.5')
          .from('[data-hero-img]', { scale: 1.15, opacity: 0, duration: 1.4, ease: 'power3.out' }, '-=1.2')

        // Parallax on the hero image + glow
        gsap.to('[data-hero-img]', {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('[data-hero-copy]', {
          yPercent: -12,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
        })
      }
    }, el)
    return () => ctx.revert()
  }, [])

  const words = `${t.hero.title} ${t.hero.titleAccent}`.split(' ')
  const accentStart = t.hero.title.split(' ').length

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

      {/* Parallax image */}
      <div
        ref={imgWrap}
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div data-hero-img className="absolute inset-0">
          <Image
            src="/images/hero-part.png"
            alt=""
            fill
            priority
            className="object-cover object-right opacity-40 md:opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-background)] via-[color:var(--color-background)]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-background)] via-transparent to-[color:var(--color-background)]/60" />
        </div>
      </div>

      <div data-hero-copy className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <div
            data-hero-badge
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-gold-glow)] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            <span className="font-mono text-xs tracking-wide text-[color:var(--color-gold)]">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.02] tracking-tight">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-1 align-bottom">
                <span
                  data-hero-word
                  className={`inline-block ${i >= accentStart ? 'text-gradient-gold' : ''}`}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-sub
            className="mt-7 max-w-xl text-lg leading-relaxed text-[color:var(--color-muted)]"
          >
            {t.hero.sub}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              data-hero-cta
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-gold)] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-background transition-transform hover:scale-[1.03] active:scale-95"
            >
              {t.hero.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              data-hero-cta
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-hover)] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-[color:var(--color-gold-glow)]"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[color:var(--color-faint)]">
        <MousePointer2 className="h-4 w-4 animate-bounce" />
        <span className="font-mono text-xs uppercase tracking-widest">{t.hero.scroll}</span>
      </div>
    </section>
  )
}
