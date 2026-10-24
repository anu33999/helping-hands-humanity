import { Link } from 'react-router-dom'
import { ArrowUpRight, Droplets, Landmark, Armchair, Zap, Construction, Bath } from 'lucide-react'
import { documents, educationByYear, images, publishedStats, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, CountUp, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, Underlined } from '../components/ui'

const village = [
  { icon: Droplets, title: 'Water purification plant', text: 'Clean, safe drinking water for the village.' },
  { icon: Landmark, title: 'Bank accounts opened', text: 'So families can access government schemes.' },
  { icon: Bath, title: 'School toilets renovated', text: 'Safer, cleaner facilities for students.' },
  { icon: Armchair, title: 'Classroom benches', text: 'No more studying on the floor.' },
  { icon: Construction, title: 'Road construction', text: 'Contributed to better village roads.' },
  { icon: Zap, title: 'Three-phase power', text: 'Helped establish a reliable power supply.' },
]

export default function Impact() {
  useSeo('Our impact', 'Year-by-year results of Mission Education, the growth of HHH Homes and the changes in Nelavancha village.')
  const max = Math.max(...educationByYear.map((y) => y.children))
  const factStories = stories.filter((s) => s.source === 'hhh').slice(1)
  return (
    <>
      <PageHero
        eyebrow="Our impact"
        title={<>Hundreds of children <Underlined>now in careers.</Underlined></>}
        lede="Children sponsored through Mission Education have completed their studies, secured jobs and settled well. Here is what joined hands have achieved since 2012."
      />

      <section className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line lg:grid-cols-4">
          {publishedStats.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8">
              <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none text-pine-800">
                <CountUp value={s.value} />
                <span className="text-amber">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <SourceNote className="mt-3">Derived from figures published on helpinghandshumanity.com. “Student-years” adds up each year’s count, so a child supported for several years is counted each year.</SourceNote>
      </section>

      {/* Education chart */}
      <section className="bg-linen section-y" aria-labelledby="edu-title">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Mission Education</Eyebrow>
              <h2 id="edu-title" className="display-lg mt-4">Children supported, year by year</h2>
              <p className="lede mt-4">After rapid growth to a peak of 380 children in 2021–22, HHH continues to support around 250–300 children every year.</p>
            </div>
            <span className="text-sm font-semibold text-muted">Source: helpinghandshumanity.com</span>
          </div>
          <figure className="mt-12 rounded-[22px] bg-white p-5 sm:p-10">
            <div className="flex h-80 items-end gap-2 sm:gap-4" role="img" aria-label={`Children supported per year: ${educationByYear.map((y) => `${y.year}: ${y.children}`).join(', ')}`}>
              {educationByYear.map((y) => (
                <div key={y.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className={`text-xs font-bold ${y.children === max ? 'text-amber' : 'text-pine-800'}`}>{y.children}</span>
                  <div className={`w-full rounded-t-[8px] ${y.children === max ? 'bg-amber' : 'bg-pine-700'}`} style={{ height: `${(y.children / max) * 100}%` }} />
                  <span className="text-[0.6rem] font-semibold text-muted sm:text-xs">{y.year.replace('20', "'").replace('–', '–')}</span>
                </div>
              ))}
            </div>
          </figure>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Children supported by Mission Education per academic year</caption>
              <thead>
                <tr className="border-b border-line text-muted">
                  <th scope="col" className="py-3 pr-4 font-bold">Year</th>
                  {educationByYear.map((y) => <th key={y.year} scope="col" className="px-2 py-3 font-semibold">{y.year}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="py-3 pr-4 font-bold">Children</th>
                  {educationByYear.map((y) => <td key={y.year} className="px-2 py-3 font-display text-lg text-pine-800">{y.children}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Homes */}
      <section className="container-x section-y">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SafeImage src={images.homesFestival} alt="Children at HHH Home celebrating a festival" className="blob-a aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>HHH Homes</Eyebrow>
            <h2 className="display-lg mt-4">From 17 children to 63.</h2>
            <p className="lede mt-5">Opened in 2016 for orphans, semi-orphans and children of single parents from slum areas.</p>
            <div className="mt-9 grid grid-cols-3 gap-4">
              {[['17', 'children in 2016'], ['38', 'girls today'], ['25', 'boys today']].map(([n, l]) => (
                <div key={l} className="rounded-[var(--radius-media)] bg-sun-soft/60 p-5">
                  <p className="font-display text-4xl text-pine-800">{n}</p>
                  <p className="mt-1 text-sm font-semibold text-muted">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-8"><ButtonLink to="/missions/hhh-homes" variant="secondary" icon="arrow">About HHH Homes</ButtonLink></div>
          </Reveal>
        </div>
      </section>

      {/* Village */}
      <section className="on-dark bg-pine-900 text-linen section-y">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Grama Seva · Nelavancha, Warangal</Eyebrow>
              <h2 className="display-lg mt-4 text-white">What changes when a village is adopted</h2>
            </div>
            <p className="lede">HHH adopted Nelavancha village in Warangal district and keeps improving its infrastructure, project by project.</p>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-media)] bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {village.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 60} className="bg-pine-900 p-7">
                <span className="grid h-12 w-12 place-items-center rounded-[12px] bg-sun text-pine-950"><Icon size={22} aria-hidden /></span>
                <h3 className="font-display mt-5 text-xl text-white">{title}</h3>
                <p className="mt-2 text-linen/75">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Stories */}
      <section className="container-x section-y">
        <SectionHeading eyebrow="Read more" title="Stories behind the numbers" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {factStories.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link to={`/stories/${s.slug}`} className="group flex h-full flex-col rounded-[var(--radius-media)] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-36px_rgb(19_53_40/0.5)]">
                <span className="font-display text-5xl leading-none text-sun">“</span>
                <h3 className="display-sm mt-2">{s.title}</h3>
                <p className="mt-4 flex-1 text-muted">{s.excerpt}</p>
                <span className="link-arrow mt-6 self-start">Read the story <ArrowUpRight size={16} aria-hidden /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/55 py-16">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl">Reports & statements</p>
            <p className="mt-1 text-muted">{documents[0].title} and more in the transparency hub.</p>
          </div>
          <div className="flex items-center gap-3">
            <DemoTag>Sample documents</DemoTag>
            <ButtonLink to="/transparency" variant="secondary" icon="arrow">Open hub</ButtonLink>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand title="The next 18 children are waiting for a sponsor." />
      </div>
    </>
  )
}
