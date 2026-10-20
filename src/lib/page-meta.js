import { SITE_URL } from '../data/content'

const OPEN_GRAPH = {
  type: 'website',
  siteName: 'Rendaven',
  images: [`${SITE_URL}og-image.png`],
}

const TWITTER = { card: 'summary_large_image', images: [`${SITE_URL}og-image.png`] }

/**
 * Mirrors the old useMeta contract: title/description/keywords/robots/canonical,
 * with og:url set explicitly - Next does NOT derive og:url from
 * alternates.canonical, and a page-level openGraph object replaces the
 * layout's entirely (so type/siteName/images are repeated here).
 */
export function pageMeta({ title, description, keywords, slug, robots }) {
  const canonical = slug ? `${SITE_URL}${slug}` : SITE_URL
  return {
    title,
    description,
    ...(keywords && { keywords }),
    ...(robots && { robots }),
    alternates: { canonical },
    openGraph: { ...OPEN_GRAPH, url: canonical },
    twitter: TWITTER,
  }
}
