import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const syne = localFont({
  src: [
    { path: '../fonts/8vIS7w4qzmVxsWxjBZRjr0FKM_0KuT6k.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/8vIS7w4qzmVxsWxjBZRjr0FKM_3mvj6k.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/8vIS7w4qzmVxsWxjBZRjr0FKM_3fvj6k.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/8vIS7w4qzmVxsWxjBZRjr0FKM_24vj6k.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-syne',
  display: 'swap',
})

const inter = localFont({
  src: [
    { path: '../fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = localFont({
  src: [
    { path: '../fonts/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8lqxjPQ.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPQ.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ÁUREA 3D — Manufactura Aditiva Industrial y Náutica | Málaga',
  description:
    'Manufactura aditiva y prototipado rápido de precisión industrial y náutica en Málaga. Tolerancia ±0.05mm, materiales certificados PA12/ASA/PETG, entrega en 48h.',
  generator: 'v0.app',
  keywords: [
    'impresión 3D',
    'manufactura aditiva',
    'prototipado rápido',
    'náutica',
    'industrial',
    'Málaga',
    'PA12',
    'CNC',
  ],
  openGraph: {
    title: 'ÁUREA 3D — Manufactura Aditiva Industrial y Náutica',
    description:
      'Precisión industrial y náutica en Málaga. De CAD a pieza funcional en 48h.',
    type: 'website',
    locale: 'es_ES',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${inter.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
