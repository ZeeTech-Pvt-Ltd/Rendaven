import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { FINAL_CTA } from '../data/content'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2 data-reveal>{FINAL_CTA.title}</h2>
        <p data-reveal>{FINAL_CTA.text}</p>
        <div className="final-cta__actions" data-reveal>
          <Link className="btn btn--gold btn--lg" to="/sign-up">
            Open your free account
            <Icon name="arrow-right" size={19} />
          </Link>
          <a className="btn btn--ghost-dark btn--lg" href="#faq">
            Read the FAQ
          </a>
        </div>
        <div className="final-cta__trust" data-reveal>
          <Icon name="lock" size={14} />
          {FINAL_CTA.trust}
        </div>
      </div>
    </section>
  )
}
