import { Link } from 'react-router-dom'
import Icon from './Icon'

// Lightweight stub for routes that are scheduled for a later iteration.
export default function ComingSoon({ title, description }) {
  return (
    <section className="centered-page">
      <div className="container">
        <div className="centered-page__icon">
          <Icon name="sparkle" size={34} />
        </div>
        <h1>{title}</h1>
        <p>
          {description} This page is part of the next iteration of rendaven.com — check back soon.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--gold" to="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" to="/sign-up">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  )
}
