import { STATS } from '../data/content'

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div
              className={`stat-card${stat.gold ? ' stat-card--gold' : ''}`}
              key={stat.label}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
