import Link from 'next/link'
import FaqList from '@/components/FaqList'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd'
import { FAQS } from '@/data/content'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'FAQs - Frequently Asked Questions About Rendaven',
  description:
    'Answers to the most common questions about Rendaven - account setup, security, assets, deposits and withdrawals.',
  keywords: 'Rendaven FAQ, crypto trading questions, how to trade crypto Australia, Rendaven account help',
  slug: 'faq',
})

export default function Faqs() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'FAQs', slug: 'faq' }]} />
      <FaqJsonLd faqs={FAQS} />
      <section className="section section--mint">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              Help center
            </span>
            <h1 data-reveal style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '14px 0 18px' }}>
              Frequently Asked Questions
            </h1>
            <p data-reveal>Everything you need to know about trading with Rendaven.</p>
          </div>
          <div data-reveal>
            <FaqList />
          </div>
          <p data-reveal style={{ textAlign: 'center', marginTop: 36, color: 'var(--muted)' }}>
            Still have questions?{' '}
            <Link href="/contact-us" style={{ fontWeight: 600 }}>
              Contact our team
            </Link>{' '}
            - we are here 24/7.
          </p>
        </div>
      </section>
    </>
  )
}
