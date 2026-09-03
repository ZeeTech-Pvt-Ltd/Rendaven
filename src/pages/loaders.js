// Route → lazy-loader map. Used by main.jsx for React.lazy and by the
// header/footer for hover prefetch (fires the import early so navigation
// feels instant). Home is eager and intentionally not listed here.
export const ROUTE_LOADERS = {
  '/about-us': () => import('./AboutUs'),
  '/product': () => import('./Product'),
  '/offer': () => import('./Offer'),
  '/team': () => import('./Team'),
  '/contact-us': () => import('./Contacts'),
  '/faq': () => import('./Faqs'),
  '/sign-up': () => import('./SignUp'),
  '/sign-in': () => import('./SignIn'),
  '/thank-you': () => import('./ThankYou'),
  '/privacy': () => import('./PrivacyPolicy'),
  '/terms': () => import('./TermsOfUse'),
  '/risk-disclosure': () => import('./RiskDisclosure'),
}

// Fire-and-forget prefetch: downloads the route chunk so it is ready
// (cached) by the time the visitor clicks.
export function prefetchRoute(path) {
  const loader = ROUTE_LOADERS[path]
  if (loader) loader().catch(() => {})
}
