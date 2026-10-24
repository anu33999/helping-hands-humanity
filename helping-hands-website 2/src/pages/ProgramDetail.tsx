import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { programs } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero } from '../components/Blocks'
import DonationWidget from '../components/DonationWidget'
import { Reveal, SafeImage } from '../components/ui'
import NotFound from './NotFound'
import { purposeFor } from './Programs'

export default function ProgramDetail() {
  const { slug } = useParams()
  const index = programs.findIndex((p) => p.slug === slug)
  const p = programs[index]
  useSeo(p ? p.title : 'Program not found', p ? p.short : 'This program could not be found.')
  if (!p) return <NotFound />
  const next = programs[(index + 1) % programs.length]

  return (
    <>
      <PageHero eyebrow={`Mission ${p.number}`} title={p.title} lede={p.short} image={p.image} imageAlt={p.imageAlt} />

      <section className="container-x section-y">
        <Link to="/missions" className="link-arrow mb-12 flex-row-reverse">
          All missions <ArrowLeft size={16} aria-hidden />
        </Link>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:gap-20">
          <div>
            <p className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug text-ink">{p.summary}</p>
            <div className="mt-12 space-y-10">
              {p.body.map((b, i) => (
                <Reveal key={b.heading} delay={i * 60} className="grid gap-3 border-t border-line pt-8 sm:grid-cols-[3rem_1fr]">
                  <span className="font-display text-lg text-amber">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h2 className="display-sm">{b.heading}</h2>
                    <p className="mt-3 text-[1.05rem] text-muted">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {p.gallery.length > 0 && (
              <div className="mt-14 grid gap-4 sm:grid-cols-2">
                {p.gallery.map((g) => (
                  <SafeImage key={g.src} src={g.src} alt={g.alt} className="aspect-[16/10]" />
                ))}
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[22px] border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgb(76_22_11/0.35)] sm:p-8">
              <h2 className="font-display text-2xl text-pine-900">Support {p.title}</h2>
              <p className="mb-6 mt-2 text-sm text-muted">Your gift will be directed to this mission.</p>
              <DonationWidget key={p.slug} initialPurpose={purposeFor(p.slug)} />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line">
        <Link to={`/missions/${next.slug}`} className="group container-x flex items-center justify-between gap-6 py-12">
          <div>
            <p className="eyebrow">Next mission</p>
            <p className="display-md mt-3 transition-colors group-hover:text-pine-700">{next.title}</p>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-pine-800 text-pine-800 transition-colors group-hover:bg-pine-800 group-hover:text-white">
            <ArrowRight size={22} aria-hidden />
          </span>
        </Link>
      </section>

      <CtaBand />
    </>
  )
}
