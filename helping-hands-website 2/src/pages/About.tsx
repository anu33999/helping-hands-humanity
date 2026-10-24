import { images, org, publishedStats, values } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, SourceNote } from '../components/Blocks'
import { ButtonLink, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, Underlined } from '../components/ui'

const timeline = [
  { year: 'The film', text: 'A group of friends makes a documentary called “Humanity”. It helps a mentally challenged man receive legal care and return to his parents.' },
  { year: '2012', text: 'One of them founds Helping Hands Humanity. Mission Education begins, funded by donors who saw the work on social media.' },
  { year: '2013–14', text: 'HHH sponsors the education of its first 18 children.' },
  { year: '2016', text: 'HHH Homes opens with 17 children from slum areas — orphans, semi-orphans and children of single parents.' },
  { year: '2021–22', text: 'Mission Education reaches its peak so far: 380 children supported in a single year.' },
  { year: 'Today', text: 'Seven missions, 63 children in two homes, an adopted village in Warangal, and 249 children sponsored in 2024–25.' },
]

const team = [
  { name: 'Name to be confirmed', role: 'Founder', note: 'Placeholder — profile supplied by HHH.' },
  { name: 'Name to be confirmed', role: 'Mission Education lead', note: 'Placeholder — profile supplied by HHH.' },
  { name: 'Name to be confirmed', role: 'HHH Homes coordinator', note: 'Placeholder — profile supplied by HHH.' },
  { name: 'Name to be confirmed', role: 'Volunteer coordinator', note: 'Placeholder — profile supplied by HHH.' },
]

export default function About() {
  useSeo('About us', 'How a documentary called “Humanity” inspired a Hyderabad NGO that has sponsored children’s education, run children’s homes and served communities since 2012.')
  return (
    <>
      <PageHero
        eyebrow="About Helping Hands Humanity"
        title={<>Cheyyi cheyyi kalipi — <Underlined>join hands.</Underlined></>}
        lede="With the determination to do good and the commitment to take action, success follows. That belief has guided HHH since 2012."
        image={images.homes}
        imageAlt="Children and volunteers from HHH Homes standing together under trees"
      />

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="display-lg mt-4">A film called “Humanity” — and what came after.</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-[1.05rem] text-muted">
            <p>
              A group of young people created a documentary titled “Humanity”. It led to the legal rehabilitation of a mentally challenged man and his reunion with his parents.
            </p>
            <p>
              That outcome instilled hope in the group. One of its members went on to establish the NGO Helping Hands Humanity, named after the film. It showed them that with the determination to do good and the commitment to act, success follows.
            </p>
            <p>
              HHH began with education and has since grown into seven missions — from sponsoring schooling and running children’s homes to adopting a village and rescuing people from the streets.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-media)] bg-line lg:grid-cols-4">
          {publishedStats.map((s) => (
            <div key={s.label} className="bg-ivory p-6 md:p-8">
              <p className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-pine-800">
                {s.value.toLocaleString('en-IN')}
                <span className="text-amber">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <SourceNote className="mt-3">Derived from figures published on helpinghandshumanity.com — to be verified before launch.</SourceNote>
      </section>

      <section className="bg-linen section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SafeImage src={images.childAlone} alt="A young child sitting alone by a wall on a city street" className="shape-leaf aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Why we exist</Eyebrow>
            <p className="font-display mt-4 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-snug text-ink">
              Too many children in our cities grow up without school, without a home, or without anyone checking in on them. HHH exists to change that — one child, one family, one village at a time.
            </p>
            <hr className="rule my-9" />
            <Eyebrow>Our donors</Eyebrow>
            <p className="mt-4 text-[1.05rem] text-muted">
              Our donors are our pillars of strength and encouragement. Every mission has been possible because they placed their trust in us — and we honour that trust with a monthly account of every rupee.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="What we stand for" title="The values behind every mission" />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="border-t-2 border-pine-800 pt-6">
              <span className="font-display text-sm text-amber">0{i + 1}</span>
              <h3 className="display-sm mt-2">{v.title}</h3>
              <p className="mt-3 text-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="on-dark bg-pine-900 text-linen section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="display-lg mt-4 text-white">A decade and more of joined hands.</h2>
            <p className="lede mt-5">From one documentary to seven missions.</p>
            <SafeImage src={images.homesFestival} alt="Children celebrating a festival at HHH Home" className="mt-10 hidden aspect-[16/10] lg:block" />
          </div>
          <ol className="relative border-l border-line-dark">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 70} className="relative pb-10 pl-9 last:pb-0">
                <span aria-hidden className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-sun bg-pine-900" />
                <p className="font-display text-3xl text-sun">{t.year}</p>
                <p className="mt-2 max-w-lg text-linen/85">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Small team, many hands, total openness."
              lede="HHH is driven by volunteers who give their time alongside their jobs and studies — and by donors who trust them because they can see every rupee."
            />
            <ul className="mt-9 space-y-4">
              {[
                'Every sponsorship is matched to a real child, school or home.',
                'Volunteers follow up on each child’s health and studies.',
                'Donors receive a monthly sheet of funds received and spent, with bills.',
                'Requirements for HHH Homes are published openly for anyone to fulfil.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[1.02rem]">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/missions">See our missions</ButtonLink>
              <ButtonLink to="/transparency" variant="secondary" icon="arrow">Transparency</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4 self-center">
            <SafeImage src={images.teaching} alt="Children studying with volunteers" className="aspect-[3/4]" />
            <SafeImage src={images.grama} alt="Villagers of Nelavancha with HHH volunteers" className="mt-12 aspect-[3/4]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/55 section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Our people" title="The volunteers who lead HHH" />
            <DemoTag>Placeholder profiles</DemoTag>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p, i) => (
              <li key={i} className="rounded-[var(--radius-media)] bg-ivory p-6">
                <div aria-hidden className="font-display grid aspect-square w-20 place-items-center rounded-full bg-linen text-2xl text-pine-700">—</div>
                <h3 className="font-display mt-5 text-xl">{p.name}</h3>
                <p className="mt-1 text-sm font-bold text-amber">{p.role}</p>
                <p className="mt-3 text-sm text-muted">{p.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{org.regNo} · as shown on HHH’s logo.</p>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  )
}
