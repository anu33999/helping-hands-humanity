import { useEffect } from 'react'

const SITE = 'Helping Hands Humanity'

/** Sets the document title and meta description for each route. */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} · Hyderabad`
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
  }, [title, description])
}
