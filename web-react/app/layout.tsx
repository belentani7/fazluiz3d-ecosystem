import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
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
