'use client'

import { useState, type FormEvent } from 'react'
import { useLang } from './lang-provider'
import { useReveal } from '@/lib/use-gsap'
import { SectionHeading } from './section-heading'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>()
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [fd, setFd] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    sector: 'industrial',
    notes: '',
  })

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!fd.company || !fd.contact || !fd.email) {
      setError(t.contact.err)
      return
    }
    setSending(true)
    // Simulated submission — connect to your CRM / API route here.
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setDone(true)
    setFd({ company: '', contact: '', email: '', phone: '', sector: 'industrial', notes: '' })
  }

  const inputCls =
    'w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/80 px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-[color:var(--color-faint)] focus:border-[color:var(--color-gold-dim)] focus:shadow-[0_0_0_3px_var(--color-gold-glow)]'

  return (
    <section id="contact" ref={ref} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading tag={t.contact.tag} title={t.contact.title} sub={t.contact.sub} />
          <div data-reveal className="mt-10 flex flex-col gap-5">
            {[
              { icon: Mail, label: 'info@aurea3d.com', href: 'mailto:info@aurea3d.com' },
              { icon: Phone, label: '+34 900 000 000', href: 'tel:+34900000000' },
              { icon: MapPin, label: t.footer.loc, href: '#' },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 text-[color:var(--color-muted)] transition-colors hover:text-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-border)] text-[color:var(--color-gold)] transition-colors group-hover:border-[color:var(--color-border-hover)]">
                  <c.icon className="h-4 w-4" />
                </span>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="0.1" className="glass-card p-8 sm:p-10">
          {done ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-14 w-14 text-[color:var(--color-gold)]" />
              <p className="mt-6 max-w-sm font-display text-xl font-semibold text-foreground">
                {t.contact.ok}
              </p>
              <button
                onClick={() => setDone(false)}
                className="mt-6 rounded-full border border-[color:var(--color-border-hover)] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-[color:var(--color-gold-glow)]"
              >
                OK
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className={inputCls}
                  placeholder={t.contact.company}
                  value={fd.company}
                  onChange={(e) => setFd({ ...fd, company: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder={t.contact.contact}
                  value={fd.contact}
                  onChange={(e) => setFd({ ...fd, contact: e.target.value })}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className={inputCls}
                  type="email"
                  placeholder={t.contact.email}
                  value={fd.email}
                  onChange={(e) => setFd({ ...fd, email: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder={t.contact.phone}
                  value={fd.phone}
                  onChange={(e) => setFd({ ...fd, phone: e.target.value })}
                />
              </div>
              <select
                className={inputCls}
                value={fd.sector}
                onChange={(e) => setFd({ ...fd, sector: e.target.value })}
              >
                {Object.entries(t.contact.sectors).map(([k, v]) => (
                  <option key={k} value={k} className="bg-[color:var(--color-background-2)]">
                    {v}
                  </option>
                ))}
              </select>
              <textarea
                className={`${inputCls} min-h-28 resize-y`}
                placeholder={t.contact.desc}
                value={fd.notes}
                onChange={(e) => setFd({ ...fd, notes: e.target.value })}
              />
              {error && <p className="text-sm text-[color:var(--color-gold)]">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 rounded-full bg-[color:var(--color-gold)] px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-background transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {sending ? t.contact.sending : t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
