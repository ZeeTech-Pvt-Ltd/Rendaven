import { Component, Suspense, useEffect } from 'react'
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

// Shown while a lazy route chunk loads — visible feedback instead of a
// blank page on slow connections.
function PageFallback() {
  return (
    <div className="page-loading" role="status" aria-label="Loading page">
      <span className="page-loading__mark" />
      <span className="page-loading__text">Loading…</span>
    </div>
  )
}

// If a route chunk fails (e.g. a stale cached index.html after a deploy
// references a missing file), offer a reload instead of a blank page.
class ChunkErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <div className="page-loading" role="alert">
        <p style={{ color: 'var(--muted)', marginBottom: 18 }}>
          Something went wrong loading this page.
        </p>
        <button className="btn btn--gold" type="button" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </div>
    )
  }
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
  const { pathname } = useLocation()
  useReveal()
  return (
    <>
      <ScrollToTop />
      <TrackPageViews />
      <Header />
      <main>
        <ChunkErrorBoundary key={pathname}>
          <Suspense fallback={<PageFallback />}>
            <Outlet />
          </Suspense>
        </ChunkErrorBoundary>
      </main>
      <Footer />
    </>
  )
}
