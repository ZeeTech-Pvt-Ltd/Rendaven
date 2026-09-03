import { OVERVIEW } from '../data/content'

export default function Overview() {
  return (
    <section className="section" id="overview">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {OVERVIEW.kicker}
          </span>
          <h2 data-reveal>{OVERVIEW.title}</h2>
          <p data-reveal>{OVERVIEW.text}</p>
        </div>

        <div className="ov-card" data-reveal>
          {OVERVIEW.rows.map((row) => (
            <div className="ov-row" key={row.label}>
              <div className="ov-row__label">{row.label}</div>
              <div className="ov-row__value">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
