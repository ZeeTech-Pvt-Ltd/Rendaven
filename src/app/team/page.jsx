import ComingSoon from '@/components/ComingSoon'
import { pageMeta } from '@/lib/page-meta'

export const metadata = pageMeta({
  title: 'Our Team - The People Behind Rendaven',
  description: 'Meet the trading, engineering and support professionals behind Rendaven.',
  slug: 'team',
})

export default function Team() {
  return (
    <ComingSoon
      title="Our Team"
      description="Profiles of the traders, engineers and support professionals behind Rendaven are on the way."
    />
  )
}
