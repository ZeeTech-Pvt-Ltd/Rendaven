import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// Pages are lazy-loaded per route to keep the initial bundle small —
// Home is the entry bundle; everything else splits into its own chunk.
import Home from './pages/Home'
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Product = lazy(() => import('./pages/Product'))
const Offer = lazy(() => import('./pages/Offer'))
const Team = lazy(() => import('./pages/Team'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Faqs = lazy(() => import('./pages/Faqs'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))
const RiskDisclosure = lazy(() => import('./pages/RiskDisclosure'))
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
