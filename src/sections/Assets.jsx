import { ASSETS } from '../data/content'

export default function Assets() {
  return (
    <section className="section section--mint" id="exchanges">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {ASSETS.kicker}
          </span>
          <h2 data-reveal>{ASSETS.title}</h2>
          <p data-reveal>{ASSETS.text}</p>
        </div>

        <div className="assets-grid">
          {ASSETS.list.map((asset, i) => (
            <div className="asset-card" key={asset.name} data-reveal style={{ transitionDelay: `${i * 50}ms` }}>
              <img
                className="asset-card__coin"
                src={asset.icon}
                alt={`${asset.name} logo`}
                loading="lazy"
              />
              <div>
                <div className="asset-card__name">{asset.name}</div>
                <div className="asset-card__tag">{asset.tag}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="assets-note" data-reveal>
          {ASSETS.note}
        </p>
      </div>
    </section>
  )
}
