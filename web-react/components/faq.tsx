'use client'

import { useState } from 'react'
import { useLang } from './lang-provider'
import { useReveal } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'
import { Plus } from 'lucide-react'

export function Faq() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      ref={ref}
      className="scroll-mt-24 border-t border-[color:var(--color-border)] bg-[color:var(--color-background-2)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading tag={t.faq.tag} title={t.faq.title} align="center" />

        <div data-reveal className="mt-12 flex flex-col gap-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-card)] transition-colors hover:border-[color:var(--color-border-hover)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[color:var(--color-gold)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
