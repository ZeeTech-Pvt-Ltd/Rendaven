import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// Pages are lazy-loaded per route to keep the initial bundle small —
// Home is the entry bundle; everything else splits into its own chunk.
// Loaders come from loaders.js so header/footer hover-prefetch shares
// the exact same module (and browser cache) as navigation.
import Home from './pages/Home'
import { ROUTE_LOADERS } from './pages/loaders'
const AboutUs = lazy(ROUTE_LOADERS['/about-us'])
const Product = lazy(ROUTE_LOADERS['/product'])
const Offer = lazy(ROUTE_LOADERS['/offer'])
const Team = lazy(ROUTE_LOADERS['/team'])
const Contacts = lazy(ROUTE_LOADERS['/contact-us'])
const Faqs = lazy(ROUTE_LOADERS['/faq'])
const SignUp = lazy(ROUTE_LOADERS['/sign-up'])
const SignIn = lazy(ROUTE_LOADERS['/sign-in'])
const ThankYou = lazy(ROUTE_LOADERS['/thank-you'])
const PrivacyPolicy = lazy(ROUTE_LOADERS['/privacy'])
const TermsOfUse = lazy(ROUTE_LOADERS['/terms'])
const RiskDisclosure = lazy(ROUTE_LOADERS['/risk-disclosure'])
const NotFound = lazy(() => import('./pages/NotFound'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="product" element={<Product />} />
          <Route path="offer" element={<Offer />} />
          <Route path="team" element={<Team />} />
          <Route path="contact-us" element={<Contacts />} />
          <Route path="faq" element={<Faqs />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfUse />} />
          <Route path="risk-disclosure" element={<RiskDisclosure />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
