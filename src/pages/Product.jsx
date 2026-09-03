import { Link } from 'react-router-dom'
import useMeta from '../hooks/useMeta'
import Icon from '../components/Icon'
import FinalCta from '../sections/FinalCta'
import { BreadcrumbJsonLd } from '../components/JsonLd'
import { SITE_URL, PRODUCT_PAGE } from '../data/content'

export default function Product() {
  useMeta({
    title: 'Rendaven Trading Platform — Tools, Analytics and Security',
    description:
      'Explore the Rendaven trading platform: manage cryptocurrencies, track your portfolio, trade 300+ markets and access AI-driven analytics — from any device.',
    keywords:
      'Rendaven product, crypto analytics platform, portfolio management, buy cryptocurrency Australia, crypto trading tools',
    canonical: `${SITE_URL}product`,
  })

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Product', slug: 'product' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>{PRODUCT_PAGE.hero.title}</h1>
          <p data-reveal>{PRODUCT_PAGE.hero.lead}</p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              {PRODUCT_PAGE.intro.kicker}
            </span>
            <h2 data-reveal>{PRODUCT_PAGE.intro.title}</h2>
          </div>

          <div className="card-grid">
            {PRODUCT_PAGE.features.map((feature, i) => (
              <div className="card" key={feature.title} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                {feature.img ? (
                  <img className="card__img" src={feature.img} alt={`${feature.title} — Rendaven platform feature`} loading="lazy" />
                ) : (
                  <span className="card__icon">
                    <Icon name={feature.icon} size={24} strokeWidth={1.9} />
                  </span>
                )}
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading experience */}
      <section className="section section--mint">
        <div className="container">
          <div className="about-grid">
            <div className="about__art" data-reveal>
              <img src={PRODUCT_PAGE.experience.image} alt="The Rendaven trading workspace" loading="lazy" />
            </div>

            <div className="about__copy">
              <span className="kicker" data-reveal>
                {PRODUCT_PAGE.experience.kicker}
              </span>
              <h2 data-reveal>{PRODUCT_PAGE.experience.title}</h2>
              <p data-reveal>{PRODUCT_PAGE.experience.text}</p>
              <ul className="about__points">
                {PRODUCT_PAGE.experience.points.map((point) => (
                  <li key={point} data-reveal>
                    <Icon name="check" size={19} strokeWidth={2.6} />
                    {point}
                  </li>
                ))}
              </ul>
              <div data-reveal>
                <Link className="btn btn--gold" to="/sign-up">
                  Open your free account
                  <Icon name="arrow-right" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
