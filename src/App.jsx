import { useEffect } from 'react'
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

export default function App() {
  useReveal()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
