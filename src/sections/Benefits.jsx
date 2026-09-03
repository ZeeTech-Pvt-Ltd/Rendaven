import Icon from '../components/Icon'
import { BENEFITS } from '../data/content'

export default function Benefits() {
  return (
    <section className="section section--mint" id="benefits">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {BENEFITS.kicker}
          </span>
          <h2 data-reveal>{BENEFITS.title}</h2>
          <p data-reveal>{BENEFITS.text}</p>
        </div>

        <div className="card-grid">
          {BENEFITS.items.map((item, i) => (
            <div className="card" key={item.title} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
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
  )
}
