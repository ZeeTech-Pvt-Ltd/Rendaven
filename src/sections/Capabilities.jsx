import Icon from '../components/Icon'
import { CAPABILITIES } from '../data/content'

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {CAPABILITIES.kicker}
          </span>
          <h2 data-reveal>{CAPABILITIES.title}</h2>
          <p data-reveal>{CAPABILITIES.text}</p>
        </div>

        <div className="caps-grid">
          {CAPABILITIES.items.map((item, i) => (
            <div className="cap-item" key={item.title} data-reveal style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <span className="cap-item__icon">
                <Icon name={item.icon} size={21} strokeWidth={1.9} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
