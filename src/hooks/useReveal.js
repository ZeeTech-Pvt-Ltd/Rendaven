import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Observes [data-reveal] elements on each route and fades them in as they
// enter the viewport. Re-runs on navigation, and rescans whenever deferred
// content mounts (a 'reveal:rescan' window event) so it animates too.
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    let observer = null

    const scan = () => {
      const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
      if (!elements.length) return
      observer?.disconnect()
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px' },
      )
      elements.forEach((el) => observer.observe(el))
    }

    scan()
    window.addEventListener('reveal:rescan', scan)
    return () => {
      window.removeEventListener('reveal:rescan', scan)
      observer?.disconnect()
    }
  }, [pathname])
}
