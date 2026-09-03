import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { TESTIMONIALS, RATING } from '../data/content'

const AUTOPLAY_MS = 5000

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

/**
 * Scroll-snap testimonial carousel: full-view stepping, wrap-around
 * arrows, dot indicators and autoplay that pauses on hover/focus.
 */
export default function TestimonialsCarousel() {
  const trackRef = useRef(null)
  const [pages, setPages] = useState(1)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Recompute the number of pages whenever the track size changes.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => setPages(Math.max(1, Math.round(track.scrollWidth / track.clientWidth)))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  // Track scroll position (arrows, drag, touch) into the page index.
  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }, [])

  const goTo = useCallback(
    (page) => {
      const track = trackRef.current
      if (!track) return
      const target = ((page % pages) + pages) % pages
      track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' })
      setIndex(target)
    },
    [pages],
  )

  // Autoplay — paused while the pointer hovers or focus is inside.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, index, goTo])

  return (
    <div
      className="testi-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="testi-track" ref={trackRef} onScroll={onScroll}>
        {TESTIMONIALS.items.map((item) => (
          <article className="testi-card" key={item.name}>
            <span className="testi-card__quote" aria-hidden="true">
              “
            </span>
            <div className="testi-card__stars" role="img" aria-label={`${item.stars} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={14} filled={i < item.stars} />
              ))}
            </div>
            <p>{item.text}</p>
            <div className="testi-card__who">
              {item.avatar ? (
                <img className="testi-card__avatar" src={item.avatar} alt="" aria-hidden="true" />
              ) : (
                <span className="testi-card__avatar" aria-hidden="true">
                  {initials(item.name)}
                </span>
              )}
              <div>
                <div className="testi-card__name">{item.name}</div>
                <div className="testi-card__place">{item.place}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="testi-controls">
        <button
          className="testi-arrow"
          type="button"
          aria-label="Previous testimonials"
          onClick={() => goTo(index - 1)}
        >
          <Icon name="arrow-right" size={18} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className="testi-dots" aria-label="Testimonial pages">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              className={`testi-dot${i === index ? ' is-active' : ''}`}
              type="button"
              aria-label={`Go to testimonial page ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          className="testi-arrow"
          type="button"
          aria-label="Next testimonials"
          onClick={() => goTo(index + 1)}
        >
          <Icon name="arrow-right" size={18} />
        </button>
      </div>
    </div>
  )
}

export function RatingBadge() {
  return (
    <div className="testi-rating">
      <span className="testi-rating__score">{RATING.score}</span>
      <div>
        <div className="testi-rating__stars" role="img" aria-label={`${RATING.score} out of 5 stars`}>
          {Array.from({ length: RATING.stars }, (_, i) => (
            <Icon key={i} name="star" size={16} filled />
          ))}
        </div>
        <div className="testi-rating__meta">{RATING.meta}</div>
      </div>
    </div>
  )
}
