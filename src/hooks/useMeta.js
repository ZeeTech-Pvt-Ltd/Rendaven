import { useEffect } from 'react'

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

// Sets the page title, description, canonical and social (OG/Twitter)
// tags per route (SPA-friendly).
export default function useMeta({ title, description, canonical }) {
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
  }, [title, description, canonical])
}
