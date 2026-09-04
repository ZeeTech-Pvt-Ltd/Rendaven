import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// All pages are imported eagerly. They are tiny (1-4KB each), so this
// adds ~15KB to the entry bundle — but it guarantees every page renders
// on the first click/load on any hosting, with no chunk-fetch failures
// or stale-cache mismatches (the previous lazy loading caused blank
// pages that only appeared after clicking several times).
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Offer from './pages/Offer'
import Team from './pages/Team'
import Contacts from './pages/Contacts'
import Faqs from './pages/Faqs'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ThankYou from './pages/ThankYou'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import RiskDisclosure from './pages/RiskDisclosure'
import NotFound from './pages/NotFound'

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
