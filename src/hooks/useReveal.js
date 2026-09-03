import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Observes [data-reveal] elements on each route and fades them in as they
// enter the viewport. Re-runs on navigation so new pages animate too.
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    if (!elements.length) return

    const observer = new IntersectionObserver(
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
    return () => observer.disconnect()
  }, [pathname])
}
