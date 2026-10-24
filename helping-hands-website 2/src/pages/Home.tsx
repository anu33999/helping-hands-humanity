import { Link } from 'react-router-dom'
import {
  ArrowUpRight, FileSpreadsheet, HandHeart, Building2, Users, ShieldCheck, Quote, Heart,
  GraduationCap, HeartHandshake, Home as HomeIcon, Repeat, School, Droplets, CalendarClock,
} from 'lucide-react'
import { documents, educationByYear, formatINR, images, org, programs, publishedStats, steps, stories, studentYears, type Program } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { ContourLines } from '../components/Footer'
import { StoryCard, SourceNote } from '../components/Blocks'
import DonationWidget from '../components/DonationWidget'
import { ButtonLink, CountUp, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading, TextLink, Underlined } from '../components/ui'

export default function Home() {
  useSeo('', 'Helping Hands Humanity (HHH) is a Hyderabad NGO sponsoring children’s education, running children’s homes and serving communities since 2012 — with full monthly transparency.')
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Statement />
      <MissionsGrid />
      <GrowthChart />
      <Causes />
      <FeaturedStory />
      <HowItWorks />
      <GetInvolvedTeaser />
      <DonateSection />
      <Transparency />
      <LatestStories />
    </>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-pine-900 text-linen">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M640 900 C 760 640, 820 420, 1040 300 C 1210 205, 1330 120, 1440 40 L 1440 900 Z" fill="var(--color-pine-800)" />
      </svg>
      <ContourLines className="pointer-events-none absolute -bottom-10 -left-28 w-[620px] opacity-[0.2]" stroke="#9cc4a8" />

      <div className="container-x relative grid items-center gap-16 pb-20 pt-32 md:pt-44 lg:min-h-[min(100svh,940px)] lg:grid-cols-[1fr_1fr] lg:gap-10 lg:pb-24">
        <div className="max-w-[620px]">
          <p className="font-script animate-fade-in text-[1.7rem] text-sun">
            Cheyyi cheyyi kalipi cheyutaniddam
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-linen/60">“Let’s join hands and help”</p>
          <h1 className="display-xl mt-6 text-white">
            Join your hands. <Underlined>Change a future.</Underlined>
          </h1>
          <p className="lede mt-7 max-w-[540px]">
            Since 2012, Helping Hands Humanity has sponsored the education of hundreds of children, given orphans a home, and brought clean water to a village — accounting to donors for every single rupee.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/donate" variant="primary">Donate now</ButtonLink>
            <ButtonLink to="/missions" variant="outline-light" icon="arrow">Explore our missions</ButtonLink>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden>
              {[images.teachingSlate, images.homesBoys, images.sevarthCake].map((src) => (
                <img key={src} src={src} alt="" className="h-11 w-11 rounded-full object-cover ring-[3px] ring-pine-900" />
              ))}
            </div>
            <p className="text-sm leading-snug text-linen/80">
              <strong className="block text-white">{studentYears.toLocaleString('en-IN')} student-years of schooling</strong>
              sponsored by HHH donors since 2013
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[580px] lg:mr-0">
          <div aria-hidden className="blob-morph absolute inset-[6%_0_4%_6%] bg-amber" />
          <div aria-hidden className="blob-a absolute inset-[0_5%_8%_0] border-2 border-dashed border-sun/50" />
          <SafeImage
            src={images.hero}
            alt="A group of smiling schoolgirls in white uniforms waving in a park"
            eager
            className="blob-c relative mx-auto aspect-[1/0.92] w-[90%] shadow-[0_40px_70px_-35px_rgb(0_0_0/0.7)]"
            imgClassName="object-[50%_40%]"
          />
          <Spark className="absolute -top-5 right-3 w-14 text-sun" />
          <div className="float-y absolute -bottom-6 left-0 w-[34%] sm:-left-3">
            <SafeImage src={images.teachingSlate} alt="Two young boys holding up a chalk slate" eager className="aspect-square rounded-full! ring-[6px] ring-pine-900" />
          </div>
          <div className="absolute -right-1 bottom-[10%] rotate-[-4deg] rounded-[16px] bg-ivory px-5 py-3 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.6)] sm:-right-5">
            <p className="font-script flex items-center gap-2 text-[1.7rem] text-pine-800">
              <Heart size={20} className="fill-amber text-amber" aria-hidden /> Small hands,
            </p>
            <p className="font-script -mt-1 pl-7 text-[1.7rem] text-amber">big dreams</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" className={className} aria-hidden>
      <path d="M14 30 L 6 12" />
      <path d="M28 26 L 40 6" />
      <path d="M36 40 L 54 36" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */

function Stats() {
  const icons = [GraduationCap, School, HomeIcon, CalendarClock]
  return (
    <section aria-labelledby="stats-heading" className="on-dark relative z-10 bg-pine-950 text-linen">
      <h2 id="stats-heading" className="sr-only">HHH at a glance</h2>
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
        {publishedStats.map((s, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={s.label} delay={i * 80} className={`flex items-center gap-4 px-2 sm:px-6 ${i ? 'lg:border-l lg:border-line-dark' : ''}`}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-amber text-white">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </span>
              <span>
                <span className="font-display block text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none text-white">
                  <CountUp value={s.value} />
                  <span className="text-sun">{s.suffix}</span>
                </span>
                <span className="mt-1.5 block text-[0.85rem] font-semibold leading-snug text-linen/75">{s.label}</span>
              </span>
            </Reveal>
          )
        })}
      </div>
      <p className="container-x pb-4 text-[0.7rem] text-linen/45">Derived from figures published on helpinghandshumanity.com — to be verified by the HHH team before launch.</p>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Intro() {
  const pillars = [
    { icon: FileSpreadsheet, title: 'Every rupee reported', text: 'A monthly statement of funds and bills goes to every donor.' },
    { icon: HeartHandshake, title: 'Volunteer-powered', text: 'Young people giving weekends to tutor, visit and rescue.' },
    { icon: GraduationCap, title: 'Education first', text: 'Where HHH began in 2012 — and still its biggest mission.' },
    { icon: Repeat, title: 'We follow up', text: 'We stay in touch with every child and person we help.' },
  ]
  return (
    <section className="container-x section-y">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <Eyebrow>About HHH</Eyebrow>
          <h2 className="display-lg mt-4">
            It began with a film. <em className="font-display italic text-amber">It became a movement.</em>
          </h2>
          <div className="mt-7 space-y-5 text-[1.05rem] text-muted">
            <p>
              A few young people made a documentary called <strong className="text-ink">“Humanity”</strong>. It helped a mentally challenged man receive legal care and return to his parents — and showed them that the determination to do good is enough to begin.
            </p>
            <p>
              One of them founded Helping Hands Humanity, named after that film. What started as education sponsorship in 2012 has grown into seven missions across Hyderabad and beyond.
            </p>
          </div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-[14px] border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/30 hover:shadow-[0_18px_36px_-26px_rgb(19_53_40/0.45)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-amber-soft text-amber transition-colors group-hover:bg-amber group-hover:text-white">
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="font-sans text-[0.98rem] font-bold tracking-normal">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <ButtonLink to="/about" variant="secondary" icon="arrow">Read our story</ButtonLink>
            <p className="text-sm text-muted">{org.regNo}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-[540px]">
          <div aria-hidden className="blob-b absolute inset-[6%_-2%_0_6%] bg-sun-soft" />
          <div aria-hidden className="absolute -left-2 top-6 h-5 w-5 rounded-full bg-amber" />
          <div aria-hidden className="absolute right-6 top-0 h-3 w-3 rounded-full bg-pine-700" />
          <div aria-hidden className="absolute bottom-10 right-0 h-8 w-8 rounded-full border-[3px] border-sun" />
          <SafeImage src={images.girlsWalking} alt="Two little girls running and playing in a park" className="blob-a relative aspect-[1/1.02]" imgClassName="object-[45%_50%]" />
          <div className="absolute -bottom-6 left-2 rounded-[16px] bg-white px-5 py-4 shadow-[0_24px_48px_-24px_rgb(19_53_40/0.5)] sm:left-[-1.5rem]">
            <p className="font-display text-4xl leading-none text-pine-800">7</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">Missions, one family</p>
          </div>
          <p className="font-script absolute -top-8 right-4 rotate-[5deg] text-[1.9rem] text-amber">since 2012 ♥</p>
        </Reveal>
      </div>
    </section>
  )
}

function Statement() {
  return (
    <section className="container-x pb-24 md:pb-32">
      <Reveal>
        <p className="font-display max-w-[980px] text-[clamp(1.7rem,3.4vw,2.85rem)] leading-[1.22] text-ink">
          Our donors are our pillars of strength. <span className="text-pine-700">That’s why every month, they receive a statement of funds received and spent — with a bill for every rupee.</span>
        </p>
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function MissionsGrid() {
  const [first, ...rest] = programs
  return (
    <section className="bg-linen section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our missions" title={<>Seven ways we join hands <br className="hidden md:block" />with people who need it.</>} />
          <ButtonLink to="/missions" variant="secondary" icon="arrow" className="self-start md:self-auto">All missions</ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-7">
          <Reveal className="lg:col-span-5 lg:row-span-3">
            <MissionFeature p={first} />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <MissionTile p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionFeature({ p }: { p: Program }) {
  return (
    <article className="on-dark group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-pine-900 text-linen">
      <SafeImage src={p.image} alt={p.imageAlt} className="media-zoom aspect-[16/10] rounded-none!" />
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <span className="font-script text-[1.6rem] text-sun">Where it all began</span>
        <h3 className="display-md mt-1 text-white">
          <Link to={`/missions/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
        </h3>
        <p className="mt-3 text-linen/80">{p.short}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line-dark pt-6">
          <div>
            <p className="font-display text-3xl text-white">380</p>
            <p className="text-xs font-semibold text-linen/65">children at peak (2021–22)</p>
          </div>
          <div>
            <p className="font-display text-3xl text-white">249</p>
            <p className="text-xs font-semibold text-linen/65">children in 2024–25</p>
          </div>
        </div>
        <span className="link-arrow mt-auto self-start pt-6" aria-hidden>Explore the mission <ArrowUpRight size={16} /></span>
      </div>
    </article>
  )
}

function MissionTile({ p }: { p: Program }) {
  return (
    <article className="group relative flex h-full gap-4 rounded-[18px] bg-white p-3 pr-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-28px_rgb(19_53_40/0.45)]">
      <SafeImage src={p.image} alt={p.imageAlt} className="media-zoom aspect-square w-[34%] shrink-0 rounded-[12px]!" />
      <div className="flex min-w-0 flex-col py-1">
        <span className="font-display text-sm text-amber">{p.number}</span>
        <h3 className="font-display text-[1.2rem] leading-tight">
          <Link to={`/missions/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
        </h3>
        <p className="mt-1.5 line-clamp-3 text-[0.86rem] leading-snug text-muted">{p.short}</p>
        <span className="mt-auto flex items-center gap-1 pt-2 text-[0.82rem] font-bold text-pine-800 group-hover:text-amber" aria-hidden>
          Learn more <ArrowUpRight size={14} />
        </span>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */

function GrowthChart() {
  const max = Math.max(...educationByYear.map((y) => y.children))
  return (
    <section className="container-x section-y" aria-labelledby="growth-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
        <Reveal>
          <Eyebrow>Mission Education, year by year</Eyebrow>
          <h2 id="growth-title" className="display-lg mt-4">From 18 children to 380 — <em className="italic text-amber">one donor at a time.</em></h2>
          <p className="lede mt-5">
            Every bar is a classroom of real children whose schooling HHH donors paid for. Hundreds of them have since finished their studies and found stable jobs.
          </p>
          <div className="mt-8"><TextLink to="/impact">See our full impact</TextLink></div>
        </Reveal>
        <Reveal delay={100}>
          <figure className="rounded-[22px] border border-line bg-white p-5 sm:p-8">
            <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-bold text-ink">Children supported each academic year</span>
              <span className="text-xs text-muted">Source: helpinghandshumanity.com</span>
            </figcaption>
            <div
              className="mt-8 flex h-64 items-end gap-1.5 sm:gap-2.5"
              role="img"
              aria-label={`Bar chart of children supported: ${educationByYear.map((y) => `${y.year}: ${y.children}`).join(', ')}`}
            >
              {educationByYear.map((y) => {
                const peak = y.children === max
                return (
                  <div key={y.year} className="group flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                    <span className={`text-[0.65rem] font-bold sm:text-xs ${peak ? 'text-amber' : 'text-pine-800'}`}>{y.children}</span>
                    <div
                      className={`w-full rounded-t-[6px] transition-colors ${peak ? 'bg-amber' : 'bg-pine-700/85 group-hover:bg-pine-600'}`}
                      style={{ height: `${(y.children / max) * 100}%` }}
                    />
                    <span className="h-8 origin-top-left translate-x-1/2 rotate-[-50deg] whitespace-nowrap text-[0.6rem] font-semibold text-muted sm:rotate-0 sm:translate-x-0 sm:text-[0.62rem]">
                      {y.year.slice(2)}
                    </span>
                  </div>
                )
              })}
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Causes() {
  const causes = [
    { icon: GraduationCap, title: 'Sponsor students for 2026–27', text: 'Help HHH match every child on the waiting list with an education sponsor.', image: images.education2, raised: 820000, goal: 1500000 },
    { icon: HomeIcon, title: 'HHH Homes requirements', text: 'Groceries, bedding, uniforms and books for 63 children across two homes.', image: images.homesGate, raised: 260000, goal: 450000 },
    { icon: Droplets, title: 'Nelavancha water plant upkeep', text: 'Keep clean drinking water flowing for the village HHH adopted.', image: images.gramaSchool, raised: 54000, goal: 90000 },
  ]
  return (
    <section className="relative overflow-hidden bg-sand/50 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-script text-[1.7rem] text-amber">Donate to</p>
            <h2 className="display-lg mt-1">Causes that need your hands</h2>
            <p className="lede mt-4">Pick a cause, and you’ll see exactly where your money went in next month’s statement.</p>
          </div>
          <DemoTag>Sample campaigns &amp; progress</DemoTag>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {causes.map(({ icon: Icon, ...c }, i) => {
            const pct = Math.round((c.raised / c.goal) * 100)
            return (
              <Reveal as="article" key={c.title} delay={i * 90} className="group relative flex flex-col overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_50px_-36px_rgb(19_53_40/0.45)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative">
                  <SafeImage src={c.image} alt="" className="media-zoom aspect-[16/10] rounded-none!" />
                  <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-[14px] bg-amber text-white shadow-lg">
                    <Icon size={22} strokeWidth={1.9} aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-10">
                  <h3 className="display-sm">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{c.text}</p>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-pine-800">{pct}% funded</span>
                      <span className="text-muted">Goal {formatINR(c.goal)}</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-sand" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${c.title}: ${pct}% funded (sample)`}>
                      <div className="h-full rounded-full bg-gradient-to-r from-sun to-amber" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted">{formatINR(c.raised)} raised</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                    <ButtonLink to="/donate" variant="primary" size="sm">Donate</ButtonLink>
                    <TextLink to="/missions">Learn more</TextLink>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function FeaturedStory() {
  const story = stories[0]
  return (
    <section className="on-dark relative overflow-hidden bg-pine-950 text-linen">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[620px]">
          <SafeImage src={story.image} alt={story.imageAlt} className="absolute! inset-0 rounded-none!" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-pine-950/40" />
        </div>
        <div className="relative flex items-center px-5 py-16 sm:px-10 md:px-16 lg:py-24">
          <ContourLines className="pointer-events-none absolute -right-28 bottom-0 w-[460px] opacity-[0.12]" />
          <Reveal className="relative max-w-xl">
            <Eyebrow>Our origin story</Eyebrow>
            <Quote size={36} className="mt-8 text-sun" aria-hidden />
            <h2 className="display-lg mt-4 text-white">{story.title}</h2>
            <p className="lede mt-6">
              The film helped a mentally challenged man receive legal care and return home to his parents. It gave a group of young people hope — and the name for the NGO one of them would go on to found.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to={`/stories/${story.slug}`} variant="light">Read the full story</ButtonLink>
              <ButtonLink to="/missions/sahaya-mission" variant="outline-light" icon="arrow">The Sahaya Mission today</ButtonLink>
            </div>
            <p className="mt-6 text-xs text-linen/55">Story as published by HHH. The photograph is illustrative.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function HowItWorks() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        eyebrow="How your help travels"
        title="From your hands to theirs — and back to you in a report."
        lede="HHH keeps the loop short and visible, so donors always know what their support achieved."
      />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px bg-[repeating-linear-gradient(90deg,var(--color-line)_0_8px,transparent_8px_14px)] lg:block" />
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 110} className="relative">
            <span className={`font-display relative grid h-14 w-14 place-items-center rounded-full border-[1.5px] text-xl ${i === 3 ? 'border-amber bg-amber text-white' : 'border-pine-800 bg-ivory text-pine-800'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="display-sm mt-6">{s.title}</h3>
            <p className="mt-3 text-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function GetInvolvedTeaser() {
  const paths = [
    { icon: Users, title: 'Volunteer with us', text: 'Tutor children with the Teaching Mission, join Sevarth visits, or help at awareness drives.', cta: 'Become a volunteer', to: '/get-involved#volunteer' },
    { icon: Building2, title: 'Partner as a company', text: 'Fund a mission through CSR, sponsor a batch of students, or bring your team for a volunteer day.', cta: 'Explore partnerships', to: '/get-involved#partner' },
    { icon: HandHeart, title: 'Sponsor & donate', text: 'Sponsor a child’s schooling, fulfil an HHH Homes requirement, or give monthly.', cta: 'Ways to give', to: '/donate' },
  ]
  return (
    <section className="bg-sun-soft/45 section-y">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Get involved"
            title={<>Many hands make <em className="italic text-pine-700">light work.</em></>}
            lede="HHH grew because ordinary people saw the work on social media and joined in. There’s a place for you too."
          />
          <SafeImage src={images.volunteers} alt="A large group of HHH volunteers and children waving" className="blob-c mt-10 aspect-[16/11]" />
        </Reveal>
        <ul className="flex flex-col justify-center divide-y divide-pine-900/15 border-y border-pine-900/15">
          {paths.map(({ icon: Icon, ...p }, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className="group grid gap-5 py-9 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-[14px] bg-ivory text-amber transition-colors group-hover:bg-amber group-hover:text-white">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </span>
              <div>
                <h3 className="display-sm">{p.title}</h3>
                <p className="mt-2 max-w-md text-muted">{p.text}</p>
              </div>
              <ButtonLink to={p.to} variant={i === 2 ? 'primary' : 'secondary'} size="sm" icon="arrow" className="justify-self-start">
                {p.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function DonateSection() {
  const uses = [
    { label: 'Education sponsorship', note: 'School fees, books and uniforms for children in need' },
    { label: 'HHH Homes', note: 'Food, bedding and daily care for 63 children' },
    { label: 'Community projects', note: 'Clean water and school upgrades in Nelavancha' },
    { label: 'Outreach', note: 'Sevarth visits, Sahaya rescues and awareness drives' },
  ]
  return (
    <section id="donate" className="on-dark relative overflow-hidden bg-pine-900 text-linen">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L 620 0 C 520 260, 420 560, 0 760 Z" fill="var(--color-pine-800)" />
      </svg>
      <div className="container-x section-y relative grid gap-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-20">
        <Reveal>
          <Eyebrow>Give today</Eyebrow>
          <h2 className="display-lg mt-4 text-white">
            Be the reason a child <Underlined>stays in school.</Underlined>
          </h2>
          <p className="lede mt-6 max-w-lg">
            A monthly gift, even a small one, lets HHH promise a child a full year of schooling. And every month, you’ll see exactly how it was spent.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {uses.map((u) => (
              <li key={u.label} className="border-t border-line-dark pt-4">
                <p className="font-bold text-white">{u.label}</p>
                <p className="mt-1 text-sm text-linen/70">{u.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[12px] bg-sun text-pine-950">
              <FileSpreadsheet size={26} aria-hidden />
            </span>
            <div className="min-w-[12rem] flex-1">
              <p className="font-bold text-white">See what the homes need right now</p>
              <p className="text-sm text-linen/70">HHH publishes a live list of requirements for its children’s homes.</p>
            </div>
            <TextLink to="/donate#wishlist">Fulfil a need</TextLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-[22px] border border-line-dark bg-pine-950/50 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="font-display text-2xl text-white">Make a gift</h3>
            <DemoTag>Simulated</DemoTag>
          </div>
          <DonationWidget tone="dark" />
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Transparency() {
  return (
    <section className="container-x section-y">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Transparency"
            title="Accountable for every penny."
            lede="HHH is known for it: each month, donors receive an Excel sheet of funds received and expenditure — with bills for every rupee. This hub puts that openness front and centre."
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink to="/transparency" variant="secondary" icon="arrow">Visit the transparency hub</ButtonLink>
            <span className="flex items-center gap-2 text-sm font-semibold text-muted"><ShieldCheck size={16} className="text-pine-700" aria-hidden /> {org.regNo}</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="divide-y divide-line border-y border-line">
            {documents.slice(0, 5).map((d) => (
              <li key={d.title}>
                <Link to="/transparency#documents" className="group flex items-center gap-5 py-5 transition-colors hover:bg-linen sm:px-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-linen text-pine-800">
                    <FileSpreadsheet size={20} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-ink">{d.title}</span>
                    <span className="text-sm text-muted">{d.type}</span>
                  </span>
                  <DemoTag className="hidden sm:inline-flex">Sample</DemoTag>
                  <ArrowUpRight size={18} className="text-pine-800 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <SourceNote className="mt-3">Placeholder entries for demonstration. HHH’s actual statements and reports would be published here.</SourceNote>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function LatestStories() {
  const picks = [stories[1], stories[2], stories[3]]
  return (
    <section className="border-t border-line bg-white/50 section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Stories & updates" title="News from the HHH family" />
          <TextLink to="/stories">All stories</TextLink>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-8">
          {picks.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <StoryCard story={s} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
