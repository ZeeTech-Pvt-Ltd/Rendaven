import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

// Scroll to top on route change (anchors on the same page are untouched).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Google Analytics: gtag fires once on page load, so SPA navigations send
// their own page_view events (and their per-page titles).
function TrackPageViews() {
  const location = useLocation()
  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title,
    })
  }, [location])
  return null
}

export default function App() {
  useReveal()
  return (
    <>
      <ScrollToTop />
      <TrackPageViews />
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
