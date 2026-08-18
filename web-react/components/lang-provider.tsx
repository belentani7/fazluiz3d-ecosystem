'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { content, type Lang } from '@/lib/i18n'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (typeof content)['es']
}

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const toggle = () => setLang((p) => (p === 'es' ? 'en' : 'es'))
  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
