'use client'

import { useLang } from './lang-provider'

export function SiteFooter() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const nav = [
    { href: '#capabilities', label: t.nav.cap },
    { href: '#materials', label: t.nav.materials },
    { href: '#process', label: t.nav.process },
    { href: '#projects', label: t.nav.projects },
  ]

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-background-2)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a
              href="#top"
              className="font-display text-lg font-bold tracking-tight text-[color:var(--color-gold)]"
            >
              ÁUREA<span className="text-foreground"> 3D</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--color-muted)]">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-faint)]">
              {t.footer.cols.nav}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-gold)]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-faint)]">
              {t.footer.cols.legal}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {t.footer.legal.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-gold)]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-faint)]">
              {t.footer.cols.contact}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[color:var(--color-muted)]">
              <li>
                <a href="mailto:info@aurea3d.com" className="transition-colors hover:text-[color:var(--color-gold)]">
                  info@aurea3d.com
                </a>
              </li>
              <li>{t.footer.loc}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--color-border)] pt-8 sm:flex-row">
          <p className="font-mono text-xs text-[color:var(--color-faint)]">
            © {year} ÁUREA 3D. {t.footer.rights}.
          </p>
          <p className="font-mono text-xs text-[color:var(--color-faint)]">{t.footer.sign}</p>
        </div>
      </div>
    </footer>
  )
}
