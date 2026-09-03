import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function Faqs() {
  useMeta({
    title: 'FAQ — Frequently Asked Questions About Rendaven',
    description:
      'Answers to the most common questions about Rendaven — account setup, security, assets, deposits and withdrawals.',
    canonical: `${SITE_URL}faq`,
  })

  return (
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
          <Link to="/contact-us" style={{ fontWeight: 600 }}>
            Contact our team
          </Link>{' '}
          — we are here 24/7.
        </p>
      </div>
    </section>
  )
}
