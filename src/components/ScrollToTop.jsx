'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// html { scroll-behavior: smooth } makes Next's built-in scroll-to-top
// animate; force instant on route change (parity with the old SPA).
// Anchors on the same page (#register, #faq) are untouched.
export default function ScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
