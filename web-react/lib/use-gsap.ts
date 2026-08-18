'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false
function ensureRegistered() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }
}

/**
 * Reveal children with [data-reveal] on scroll into view.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    ensureRegistered()
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', el)

    if (prefersReduced) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      items.forEach((item) => {
        const delay = Number(item.dataset.revealDelay ?? 0)
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Parallax: translate element on scroll. amount is px of movement across viewport.
 */
export function useParallax<T extends HTMLElement>(amount = 80) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    ensureRegistered()
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -amount / 10 },
        {
          yPercent: amount / 10,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })
    return () => ctx.revert()
  }, [amount])

  return ref
}

export { gsap, ScrollTrigger, ensureRegistered }
