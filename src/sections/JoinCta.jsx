import Icon from '../components/Icon'
import Calculator from '../components/Calculator'
import RegistrationForm from '../components/RegistrationForm'
import { JOIN, HERO } from '../data/content'

export default function JoinCta() {
  return (
    <section className="section" id="register">
      <div className="container">
        <div className="join-grid">
          <div className="join__copy">
            <span className="kicker kicker--chip" data-reveal>
              {JOIN.kicker}
            </span>
            <h2 data-reveal>{JOIN.title}</h2>
            <p data-reveal>{JOIN.text}</p>
            <ul className="join__points">
              {JOIN.points.map((point) => (
                <li key={point} data-reveal>
                  <Icon name="check" size={19} strokeWidth={2.6} />
                  {point}
                </li>
              ))}
            </ul>
            <Calculator />
          </div>

          <RegistrationForm idPrefix="join" title={HERO.formTitle} subtitle={HERO.formSubtitle} />
        </div>
      </div>
    </section>
  )
}
