import HowItWorks from '@/sections/HowItWorks'
import FinalCta from '@/sections/FinalCta'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'How It Works - Start Trading with Rendaven in Three Steps',
  description:
    'Create your free account, fund it securely and start trading with AI support - in three simple steps.',
  keywords:
    'how Rendaven works, how to start crypto trading Australia, crypto trading for beginners, Rendaven sign up process',
  slug: 'how-it-works',
})

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'How It Works', slug: 'how-it-works' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>How It Works</h1>
          <p data-reveal>
            From sign-up to your first trade: three simple steps, no prior trading experience
            needed.
          </p>
        </div>
      </section>

      <HowItWorks />
      <FinalCta />
    </>
  )
}
