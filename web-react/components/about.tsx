'use client'

import Image from 'next/image'
import { useLang } from './lang-provider'
import { useReveal, useParallax } from '@/lib/use-gsap'
import { Check } from 'lucide-react'

export function About() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()
  const imgRef = useParallax<HTMLDivElement>(60)

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24 border-y border-[color:var(--color-border)] bg-[color:var(--color-background-2)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--color-border)]">
          <div ref={imgRef} className="absolute inset-0 scale-125">
            <Image
              src="/images/workshop.png"
              alt={t.about.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-background-2)]/60 to-transparent" />
        </div>

        <div>
          <span
            data-reveal
            className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-gold)]"
          >
            {t.about.tag}
          </span>
          <h2
            data-reveal
            data-reveal-delay="0.08"
            className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight tracking-tight text-balance"
          >
            {t.about.title}
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.16"
            className="mt-5 text-base leading-relaxed text-[color:var(--color-muted)] text-pretty"
          >
            {t.about.body}
          </p>
          <ul data-reveal data-reveal-delay="0.24" className="mt-8 flex flex-col gap-3">
            {t.about.points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--color-gold-dim)] bg-[color:var(--color-gold-glow)]">
                  <Check className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
