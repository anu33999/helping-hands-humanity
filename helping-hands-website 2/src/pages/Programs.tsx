import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { images, programs } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero } from '../components/Blocks'
import { ButtonLink, Reveal, SafeImage } from '../components/ui'

export default function Programs() {
  useSeo('Our missions', 'Mission Education, Teaching Mission, HHH Homes, Grama Seva, Sevarth, Sahaya and Mission Awareness — the seven ways Helping Hands Humanity serves.')
  return (
    <>
      <PageHero
        eyebrow="Our missions"
        title="Seven missions. One promise: we join hands."
        lede="HHH began with education in 2012. Today volunteers and donors work across schools, slums, care homes, the streets and an adopted village."
        image={images.teachingSlate}
        imageAlt="Two young boys holding up a chalk slate"
      >
        <nav aria-label="Jump to mission" className="flex flex-wrap gap-2">
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="rounded-[8px] border border-linen/25 px-3.5 py-2 text-sm font-semibold text-linen/85 transition-colors hover:border-sun hover:text-white"
            >
              {p.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x section-y space-y-24 md:space-y-32">
        {programs.map((p, i) => (
          <section key={p.slug} id={p.slug} className="scroll-mt-28" aria-labelledby={`${p.slug}-title`}>
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal>
                <Link to={`/missions/${p.slug}`} className="group block rounded-[var(--radius-media)]" tabIndex={-1} aria-hidden>
                  <SafeImage src={p.image} alt="" className={`media-zoom aspect-[5/4] ${i === 0 ? 'shape-leaf' : ''}`} />
                </Link>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-display text-xl text-amber">{p.number}</p>
                <h2 id={`${p.slug}-title`} className="display-lg mt-2">{p.title}</h2>
                <p className="lede mt-5">{p.summary}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 font-semibold text-ink">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-linen text-pine-800">
                        <Check size={14} strokeWidth={3} aria-hidden />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={`/missions/${p.slug}`} variant="secondary" icon="arrow">
                    Learn more <span className="sr-only">about {p.title}</span>
                  </ButtonLink>
                  <ButtonLink to={`/donate?purpose=${encodeURIComponent(purposeFor(p.slug))}`} variant="primary">
                    Support this mission
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-linen/55 py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="font-display max-w-2xl text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug">
            Want to give your time to one of these missions? Volunteers and company partners are always welcome.
          </p>
          <Link to="/get-involved" className="link-arrow shrink-0">
            Ways to get involved <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}

export function purposeFor(slug: string) {
  return (
    {
      'mission-education': 'Mission Education',
      'teaching-mission': 'Teaching Mission',
      'hhh-homes': 'HHH Homes',
      'grama-seva': 'Grama Seva',
      'sevarth-mission': 'Sevarth & Sahaya',
      'sahaya-mission': 'Sevarth & Sahaya',
    } as Record<string, string>
  )[slug] ?? 'Where it’s needed most'
}
