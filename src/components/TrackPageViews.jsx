'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Google Analytics: gtag's config event already counts the initial page
// view, so the first render is skipped and SPA navigations send their own
// page_view events (with per-page titles).
export default function TrackPageViews() {
  const pathname = usePathname()
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      // window.location avoids the useSearchParams Suspense requirement
      page_path: pathname + window.location.search,
      page_title: document.title,
    })
  }, [pathname])

  return null
}
