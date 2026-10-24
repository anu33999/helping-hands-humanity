import { useParams } from 'react-router-dom'
import { org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import { DemoTag } from '../components/ui'
import NotFound from './NotFound'

const policies: Record<string, { title: string; intro: string; points: string[] }> = {
  privacy: {
    title: 'Privacy policy',
    intro: 'How HHH would collect, use and protect personal information shared through this website.',
    points: ['What information is collected (forms, donations, newsletter).', 'How it is used and how long it is kept.', 'Payment data handled only by the payment provider.', 'How to request access, correction or deletion.'],
  },
  terms: {
    title: 'Terms of use',
    intro: 'The terms that govern use of this website and its content.',
    points: ['Use of website content and photography.', 'Donation terms, refunds and recurring gifts.', 'Links to third-party sites.', 'Governing law and contact details.'],
  },
  safeguarding: {
    title: 'Child safeguarding',
    intro: 'HHH’s commitment to keeping every child safe — including online.',
    points: ['Code of conduct for staff, volunteers and visitors.', 'Consent and privacy rules for children’s photos and stories.', 'Names changed in all published stories.', 'How to raise a concern, confidentially.'],
  },
}

export default function Policy() {
  const { slug = '' } = useParams()
  const p = policies[slug]
  useSeo(p?.title ?? 'Page not found', p?.intro ?? '')
  if (!p) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Policies" title={p.title} lede={p.intro} />
      <section className="container-x max-w-[760px] pb-24">
        <DemoTag>Placeholder — final policy text to be supplied by HHH</DemoTag>
        <h2 className="display-sm mt-8">This page would cover</h2>
        <ul className="mt-5 space-y-3">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3 text-[1.05rem]">
              <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber" />
              {pt}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-muted">Questions? Email <a href={`mailto:${org.email}`} className="font-bold text-pine-800 underline underline-offset-4">{org.email}</a>.</p>
      </section>
    </>
  )
}
