import Link from 'next/link'
import Icon from '@/components/Icon'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'Thank You - Your Rendaven Registration Is Received',
  description: 'Your Rendaven registration has been received. Our team will contact you shortly.',
  slug: 'thank-you',
  robots: { index: false, follow: false },
})

export default function ThankYou() {
  return (
    <section className="centered-page">
      <div className="container">
        <div className="centered-page__icon" data-reveal>
          <Icon name="check" size={38} strokeWidth={2.6} />
        </div>
        <h1 data-reveal>Thank you!</h1>
        <p data-reveal>
          Your registration has been received. Our team will contact you shortly to activate your
          Rendaven account and guide you through your first trade.
        </p>
        <div data-reveal style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--gold" href="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" href="/faq">
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  )
}
