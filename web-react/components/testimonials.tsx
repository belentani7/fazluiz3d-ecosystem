'use client'

import { useLang } from './lang-provider'
import { useReveal } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'
import { Quote } from 'lucide-react'

export function Testimonials() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tag={t.testimonials.tag} title={t.testimonials.title} align="center" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <figure
              key={i}
              data-reveal
              data-reveal-delay={i * 0.1}
              className="glass-card flex flex-col p-8"
            >
              <Quote className="h-8 w-8 text-[color:var(--color-gold)]" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                {item.q}
              </blockquote>
              <figcaption className="mt-6 border-t border-[color:var(--color-border)] pt-5">
                <div className="font-display font-semibold text-foreground">{item.a}</div>
                <div className="font-mono text-xs text-[color:var(--color-muted)]">{item.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
