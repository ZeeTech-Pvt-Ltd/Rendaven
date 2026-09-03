import Icon from '../components/Icon'
import { ABOUT } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about__copy">
            <span className="kicker kicker--chip" data-reveal>
              {ABOUT.kicker}
            </span>
            <h2 data-reveal>{ABOUT.title}</h2>
            <p data-reveal>{ABOUT.text}</p>
            <ul className="about__points">
              {ABOUT.points.map((point) => (
                <li key={point} data-reveal>
                  <Icon name="check" size={19} strokeWidth={2.6} />
                  {point}
                </li>
              ))}
            </ul>
            <div data-reveal>
              <a className="btn btn--teal" href="#register">
                Get started
                <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </div>

          <div className="about__art" data-reveal>
            <img src="/images/intro-640.avif" alt="Rendaven trading platform" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
