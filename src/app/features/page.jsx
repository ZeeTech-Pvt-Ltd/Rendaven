import Benefits from '@/sections/Benefits'
import Capabilities from '@/sections/Capabilities'
import FinalCta from '@/sections/FinalCta'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'Features - What Makes Rendaven the Smart Choice',
  description:
    'Explore the Rendaven toolkit: AI-powered signals, copy trading, portfolio analytics, 300+ global markets and more.',
  keywords:
    'Rendaven features, AI trading features, copy trading platform, crypto trading tools Australia',
  slug: 'features',
})

export default function Features() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Features', slug: 'features' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Features</h1>
          <p data-reveal>
            Every tool a trader needs - AI signals, copy trading, analytics and 300+ markets in one
            platform.
          </p>
        </div>
      </section>

      <Benefits />
      <Capabilities />
      <FinalCta />
    </>
  )
}
