'use client'

import Image from 'next/image'
import { useLang } from './lang-provider'
import { useReveal } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'
import { Check } from 'lucide-react'

export function Materials() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="materials"
      ref={ref}
      className="scroll-mt-24 border-y border-[color:var(--color-border)] bg-[color:var(--color-background-2)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading tag={t.materials.tag} title={t.materials.title} sub={t.materials.sub} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.materials.items.map((m, i) => (
            <article
              key={i}
              data-reveal
              data-reveal-delay={i * 0.1}
              className="glass-card group overflow-hidden p-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={m.img || '/placeholder.svg'}
                  alt={m.t}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-background-2)] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{m.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{m.d}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {m.props.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                      <Check className="h-4 w-4 shrink-0 text-[color:var(--color-gold)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
