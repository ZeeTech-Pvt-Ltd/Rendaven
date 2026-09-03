import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import useMeta from '../hooks/useMeta'
import { SITE_URL } from '../data/content'

const POINTS = [
  'Free registration — no hidden fees to open an account',
  'AI-driven signals with an 85% accuracy rate',
  '98% of assets held in offline cold storage',
  'Withdraw your funds whenever you want',
]

export default function SignUp() {
  useMeta({
    title: 'Sign Up — Create Your Free Rendaven Account',
    description:
      'Create your free Rendaven account in under two minutes and start trading Bitcoin, Ethereum and 300+ assets with AI-powered insights.',
    canonical: `${SITE_URL}sign-up`,
  })

  return (
    <section className="auth-wrap">
      <div className="container">
        <div className="join-grid" style={{ alignItems: 'center' }}>
          <div className="join__copy">
            <span className="kicker kicker--chip" data-reveal>
              Join Rendaven
            </span>
            <h2 data-reveal style={{ fontSize: 'clamp(30px, 3.6vw, 44px)', margin: '14px 0 20px' }}>
              Create your free account today
            </h2>
            <p data-reveal style={{ fontSize: 17, color: 'var(--muted)', marginBottom: 26 }}>
              Opening an account takes less than two minutes. Our team will contact you to activate
              your account and guide you through your first trade.
            </p>
            <ul className="join__points">
              {POINTS.map((point) => (
                <li key={point} data-reveal>
                  <Icon name="check" size={19} strokeWidth={2.6} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <RegistrationForm idPrefix="signup" />
        </div>
      </div>
    </section>
  )
}
