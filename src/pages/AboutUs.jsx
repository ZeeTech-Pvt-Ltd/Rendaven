import useMeta from '../hooks/useMeta'
import Icon from '../components/Icon'
import FinalCta from '../sections/FinalCta'
import { SITE_URL, ABOUT_PAGE } from '../data/content'

export default function AboutUs() {
  useMeta({
    title: 'About Us — The Story Behind Rendaven',
    description:
      'Learn about Rendaven: an AI-powered trading platform built on bank-grade security, with a team dedicated to making trading simple for Australians.',
    canonical: `${SITE_URL}about-us`,
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>About Rendaven</h1>
          <p data-reveal>
            We built Rendaven to make world-class trading simple, secure and accessible — powered by
            an AI engine, protected by bank-grade security.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about__copy">
              <span className="kicker kicker--chip" data-reveal>
                {ABOUT_PAGE.story.kicker}
              </span>
              <h2 data-reveal>{ABOUT_PAGE.story.title}</h2>
              {ABOUT_PAGE.story.paragraphs.map((paragraph) => (
                <p key={paragraph} data-reveal>
                  {paragraph}
                </p>
              ))}
              <div className="facts-row" data-reveal>
                {ABOUT_PAGE.story.facts.map((fact) => (
                  <span className="fact-chip" key={fact}>
                    {fact}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__art" data-reveal>
              <img src={ABOUT_PAGE.story.image} alt="The Rendaven trading platform" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--mint">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {ABOUT_PAGE.values.kicker}
            </span>
            <h2 data-reveal>{ABOUT_PAGE.values.title}</h2>
          </div>

          <div className="card-grid card-grid--4">
            {ABOUT_PAGE.values.items.map((item, i) => (
              <div className="card" key={item.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="card__icon">
                  <Icon name={item.icon} size={24} strokeWidth={1.9} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {ABOUT_PAGE.difference.kicker}
            </span>
            <h2 data-reveal>{ABOUT_PAGE.difference.title}</h2>
          </div>

          <div className="steps-grid">
            {ABOUT_PAGE.difference.items.map((item, i) => (
              <div className="step-card" key={item.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="step-card__num">0{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
