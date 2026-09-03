import { useEffect } from 'react'
import { SITE_URL } from '../data/content'

// Creates or updates a meta tag matched by attribute + key.
function upsertMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

// Sets the page title, description, canonical, keywords, robots and social
// (OG/Twitter) tags per route (SPA-friendly). Optional tags are cleared
// when a page doesn't pass them.
export default function useMeta({ title, description, canonical, keywords, robots, ogImage }) {
  useEffect(() => {
    if (title) {
      document.title = title
      upsertMeta('property', 'og:title', title)
      upsertMeta('name', 'twitter:title', title)
    }
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
      upsertMeta('name', 'twitter:description', description)
    }
    upsertMeta('name', 'keywords', keywords || '')
    if (robots) {
      upsertMeta('name', 'robots', robots)
    } else {
      document.querySelector('meta[name="robots"]')?.remove()
    }
    // og:image per route, falling back to the shared social image
    upsertMeta('property', 'og:image', ogImage || `${SITE_URL}og-image.png`)
    upsertMeta('name', 'twitter:image', ogImage || `${SITE_URL}og-image.png`)

    const existing = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      let link = existing
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
      upsertMeta('property', 'og:url', canonical)
    } else {
      // Pages without a canonical (404) clear the previous one.
      existing?.remove()
      document.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [title, description, canonical, keywords, robots, ogImage])
}
