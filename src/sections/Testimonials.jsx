import TestimonialsCarousel, { RatingBadge } from '../components/TestimonialsCarousel'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section section--mint" id="testimonials">
      <div className="container">
        <div className="testi-head">
          <div>
            <span className="kicker" data-reveal>
              {TESTIMONIALS.kicker}
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', marginTop: 12 }} data-reveal>
              {TESTIMONIALS.title}
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 10, maxWidth: 480 }} data-reveal>
              {TESTIMONIALS.text}
            </p>
          </div>
          <div data-reveal>
            <RatingBadge />
          </div>
        </div>

        <div data-reveal>
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  )
}
