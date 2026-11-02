'use client'

import { useCallback, useEffect, useRef } from 'react'
import Script from 'next/script'

type TurnstileOptions = {
  sitekey: string
  action: string
  callback: (token: string) => void
  'expired-callback': () => void
  'error-callback': () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: TurnstileOptions) => string
      remove: (widgetId: string) => void
      reset: (widgetId?: string) => void
    }
  }
}

export function TurnstileChallenge({ siteKey, onToken }: { siteKey: string; onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const renderWidget = useCallback(() => {
    if (!container.current || !window.turnstile || widgetId.current !== null) return
    widgetId.current = window.turnstile.render(container.current, {
      sitekey: siteKey,
      action: 'contact',
      callback: onToken,
      'expired-callback': () => onToken(''),
      'error-callback': () => onToken(''),
    })
  }, [siteKey, onToken])

  useEffect(() => {
    renderWidget()
    return () => {
      if (widgetId.current !== null) {
        window.turnstile?.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, [renderWidget])

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onReady={renderWidget}
      />
      <div ref={container} aria-label="Verificación antispam" className="min-h-16" />
    </>
  )
}
