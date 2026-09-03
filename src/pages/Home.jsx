import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

import Hero from '../sections/Hero'
import StatsBand from '../sections/StatsBand'
import MarketTicker from '../components/MarketTicker'
import About from '../sections/About'
import Assets from '../sections/Assets'
import HowItWorks from '../sections/HowItWorks'
import JoinCta from '../sections/JoinCta'
import Benefits from '../sections/Benefits'
import Overview from '../sections/Overview'
import Testimonials from '../sections/Testimonials'
import Security from '../sections/Security'
import Capabilities from '../sections/Capabilities'
import FinalCta from '../sections/FinalCta'
import FaqSection from '../sections/FaqSection'

export default function Home() {
  useMeta({
    title: 'Rendaven — AI-Powered Crypto Trading Platform | Now in Australia',
    description:
      'Rendaven is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Secure, simple and now available in Australia.',
    keywords:
      'Rendaven, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, cryptocurrency exchange Australia, crypto analytics',
    canonical: SITE_URL,
  })

  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <Assets />
      <HowItWorks />
      <JoinCta />
      <MarketTicker />
      <Benefits />
      <Overview />
      <Testimonials />
      <Security />
      <Capabilities />
      <FinalCta />
      <FaqSection />
    </>
  )
}
