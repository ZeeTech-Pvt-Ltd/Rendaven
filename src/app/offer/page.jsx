import ComingSoon from '@/components/ComingSoon'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'Offer - What You Get with Rendaven',
  description: 'See what is included with a Rendaven account: AI signals, education, 24/7 support and more.',
  slug: 'offer',
})

export default function Offer() {
  return (
    <ComingSoon
      title="The Rendaven Offer"
      description="The full breakdown of what every Rendaven account includes is coming in the next iteration."
    />
  )
}
