import { LangProvider } from '@/components/lang-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Stats } from '@/components/stats'
import { Capabilities } from '@/components/capabilities'
import { Materials } from '@/components/materials'
import { Process } from '@/components/process'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LangProvider>
      <ScrollProgress />
      <SiteNav />
      <main className="grain relative">
        <Hero />
        <Marquee />
        <Stats />
        <Capabilities />
        <Materials />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </LangProvider>
  )
}
