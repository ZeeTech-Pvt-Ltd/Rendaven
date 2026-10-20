import { Chakra_Petch, Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RevealObserver from '../components/RevealObserver'
import ScrollToTop from '../components/ScrollToTop'
import TrackPageViews from '../components/TrackPageViews'
import { SITE_URL, SUPPORT_EMAIL } from '../data/content'
import '../styles/global.css'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

// Site-wide JSON-LD (was in index.html <head>)
const SITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Rendaven',
      url: SITE_URL,
      logo: `${SITE_URL}favicon.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: SUPPORT_EMAIL,
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
    },
    { '@type': 'WebSite', name: 'Rendaven', url: SITE_URL },
  ],
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Rendaven - AI-Powered Crypto Trading Platform | Now in Australia' },
  description:
    'Rendaven is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Secure, simple and now available in Australia.',
  openGraph: {
    type: 'website',
    siteName: 'Rendaven',
    url: SITE_URL,
    images: [`${SITE_URL}og-image.png`],
  },
  twitter: { card: 'summary_large_image', images: [`${SITE_URL}og-image.png`] },
  verification: { google: 'wrJdzFeY7ZbbmBWbbJOab-srafiKNDjSszqnG4Bwvt0' },
}

export const viewport = { themeColor: '#002867' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${inter.variable}`}>
      <body>
        {/* No-JS safety net: reveal CSS only hides content when JS is present */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YPVXJH1WMV"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'G-YPVXJH1WMV\');',
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }} />
        <ScrollToTop />
        <TrackPageViews />
        <RevealObserver />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
