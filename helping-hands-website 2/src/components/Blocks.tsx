import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { formatDate, type Story } from '../data/site'
import { ContourLines } from './Footer'
import { ButtonLink, DemoTag, Eyebrow, SafeImage } from './ui'

/* Maroon page hero used on every inner page. */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  image?: string
  imageAlt?: string
  children?: ReactNode
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-pine-900 text-linen">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
        <path d="M760 0 C 980 120, 1020 300, 1440 260 L 1440 0 Z" fill="var(--color-pine-800)" />
      </svg>
      <ContourLines className="pointer-events-none absolute -bottom-16 -left-24 w-[520px] opacity-[0.16]" />
      <div className={`container-x relative grid gap-10 pb-20 pt-36 md:pb-24 md:pt-52 ${image ? 'lg:grid-cols-[1.15fr_0.85fr] lg:items-end' : ''}`}>
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-xl mt-5 text-white">{title}</h1>
          {lede && <p className="lede mt-6 max-w-2xl">{lede}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="relative hidden lg:block">
            <div aria-hidden className="absolute -right-3 -top-3 h-full w-full rounded-[var(--radius-media)] border border-sun/40" />
            <SafeImage src={image} alt={imageAlt ?? ''} eager className="relative aspect-[4/3.4]" />
          </div>
        )}
      </div>
      <svg className="relative -mb-px block h-10 w-full text-ivory md:h-16" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
        <path d="M0 64 L0 40 C 360 0, 1080 70, 1440 22 L1440 64 Z" fill="currentColor" />
      </svg>
    </section>
  )
}

/* Closing call-to-action band. */
export function CtaBand({
  title = 'Join your hands. Change a child’s future.',
  text = 'Sponsor a child’s education, support HHH Homes, or give your weekends to the Teaching Mission. Every rupee is reported back to you.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="container-x pb-20 md:pb-28">
      <div className="on-dark relative overflow-hidden rounded-[26px] bg-pine-800 px-6 py-14 text-linen sm:px-12 md:py-16">
        <ContourLines className="pointer-events-none absolute -right-20 -top-10 w-[480px] opacity-[0.18]" />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
          <div>
            <h2 className="display-md max-w-2xl text-white">{title}</h2>
            <p className="mt-4 max-w-xl text-linen/80">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink to="/donate" variant="primary">Donate now</ButtonLink>
            <ButtonLink to="/get-involved" variant="outline-light" icon="arrow">Get involved</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Editorial story card. */
export function StoryCard({ story, large = false }: { story: Story; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col">
      <SafeImage
        src={story.image}
        alt={story.imageAlt}
        className={`media-zoom ${large ? 'aspect-[16/11]' : 'aspect-[4/3]'}`}
      />
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8rem] font-semibold text-muted">
        <span className="font-bold uppercase tracking-[0.14em] text-amber">{story.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={story.date}>{formatDate(story.date)}</time>
        {story.source === 'demo' && <DemoTag>Sample update</DemoTag>}
      </div>
      <h3 className={`mt-3 text-ink transition-colors group-hover:text-pine-700 ${large ? 'display-md' : 'display-sm'}`}>
        <Link to={`/stories/${story.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
          {story.title}
        </Link>
      </h3>
      <p className="mt-3 text-muted">{story.excerpt}</p>
      <span className="link-arrow mt-4 self-start" aria-hidden>
        Read the story <ArrowUpRight size={16} />
      </span>
    </article>
  )
}

/* Small "published by HHH" provenance note used near real figures. */
export function SourceNote({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs leading-relaxed text-muted ${className ?? ''}`}>{children}</p>
}

export function Eyebrowed({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
    </div>
  )
}
