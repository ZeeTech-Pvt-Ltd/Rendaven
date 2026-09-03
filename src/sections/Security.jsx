import Icon from '../components/Icon'
import { SECURITY } from '../data/content'

export default function Security() {
  return (
    <section className="section section--dark" id="security">
      <div className="container">
        <div className="security-grid">
          <div className="security__copy">
            <span className="kicker" data-reveal>
              {SECURITY.kicker}
            </span>
            <h2 data-reveal>{SECURITY.title}</h2>
            <p data-reveal>{SECURITY.text}</p>
            <div className="security__big" data-reveal>
              <strong>{SECURITY.bigStat}</strong>
              <span>{SECURITY.bigStatLabel}</span>
            </div>
          </div>

          <div className="security-list">
            {SECURITY.items.map((item, i) => (
              <div className="security-item" key={item.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="security-item__icon">
                  <Icon name={item.icon} size={21} strokeWidth={1.9} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
