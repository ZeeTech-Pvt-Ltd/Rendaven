import Testimonials from '@/sections/Testimonials'
import FinalCta from '@/sections/FinalCta'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'Reviews - What Real Traders Say About Rendaven',
  description: 'Read reviews from traders across Australia who made the switch to Rendaven - rated 4.7/5.',
  keywords: 'Rendaven reviews, crypto trading reviews Australia, Rendaven testimonials, AI trading platform reviews',
  slug: 'reviews',
})

export default function Reviews() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Reviews', slug: 'reviews' }]} />
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Reviews</h1>
          <p data-reveal>
            Rated 4.7/5 by traders across Australia - see what they say about trading with
            Rendaven.
          </p>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </>
  )
}
