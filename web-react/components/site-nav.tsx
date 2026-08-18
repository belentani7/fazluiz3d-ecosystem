'use client'

import { useEffect, useState } from 'react'
import { useLang } from './lang-provider'
import {
  Menu,
  X,
  Boxes,
  Layers,
  Cog,
  FolderKanban,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react'

export function SiteNav() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const links = [
    { href: '#capabilities', label: t.nav.cap },
    { href: '#materials', label: t.nav.materials },
    { href: '#process', label: t.nav.process },
    { href: '#projects', label: t.nav.projects },
  ]

  const megaItems = [
    { icon: Boxes, href: '#capabilities', title: t.nav.cap, desc: t.cap.sub },
    { icon: Layers, href: '#materials', title: t.nav.materials, desc: t.materials.sub },
    { icon: Cog, href: '#process', title: t.nav.process, desc: t.proc.sub },
    { icon: FolderKanban, href: '#projects', title: t.nav.projects, desc: t.projects.sub },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-[color:var(--color-gold)]"
        >
          ÁUREA<span className="text-foreground"> 3D</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-[color:var(--color-muted)] transition-colors hover:text-foreground">
              {t.nav.menuLabel}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${mega ? 'rotate-180' : ''}`}
              />
            </button>
            {/* Mega menu */}
            <div
              className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                mega
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-2 opacity-0'
              }`}
            >
              <div className="glass grid grid-cols-2 gap-2 rounded-2xl p-3">
                {megaItems.map((m) => (
                  <a
                    key={m.href}
                    href={m.href}
                    className="group flex gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-[color:var(--color-border-hover)] hover:bg-[color:var(--color-gold-glow)]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-gold)]">
                      <m.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1 font-display text-sm font-semibold text-foreground">
                        {m.title}
                        <ArrowUpRight className="h-3 w-3 text-[color:var(--color-gold)] opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-[color:var(--color-muted)]">
                        {m.desc}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-[color:var(--color-muted)] transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="font-mono rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs text-[color:var(--color-muted)] transition-colors hover:border-[color:var(--color-border-hover)] hover:text-foreground"
          >
            {lang.toUpperCase()}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full border border-[color:var(--color-gold)] px-5 py-2 text-xs font-medium uppercase tracking-wider text-[color:var(--color-gold)] transition-colors hover:bg-[color:var(--color-gold)] hover:text-background sm:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="text-foreground lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-[color:var(--color-background)]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-8 pt-28">
          {[...links, { href: '#contact', label: t.nav.contact }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-border)] py-4 font-display text-2xl font-semibold text-foreground"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full border border-[color:var(--color-gold)] px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-[color:var(--color-gold)]"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
