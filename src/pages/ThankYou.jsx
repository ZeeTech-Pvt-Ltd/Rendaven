import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

export default function ThankYou() {
  useMeta({
    title: 'Thank You — Your Rendaven Registration Is Received',
    description: 'Your Rendaven registration has been received. Our team will contact you shortly.',
    robots: 'noindex, nofollow',
    canonical: `${SITE_URL}thank-you`,
  })

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
          <Link className="btn btn--gold" to="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" to="/faq">
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  )
}
