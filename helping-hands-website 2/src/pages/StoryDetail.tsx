import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Link2 } from 'lucide-react'
import { formatDate, stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, StoryCard } from '../components/Blocks'
import { DemoTag, SafeImage } from '../components/ui'
import NotFound from './NotFound'

export default function StoryDetail() {
  const { slug } = useParams()
  const story = stories.find((s) => s.slug === slug)
  useSeo(story ? story.title : 'Story not found', story ? story.excerpt : 'This story could not be found.')
  const [copied, setCopied] = useState(false)
  if (!story) return <NotFound />

  const related = stories.filter((s) => s.slug !== story.slug && (s.category === story.category || s.source === story.source)).slice(0, 3)
  const body = story.source === 'demo' ? story.body.slice(1) : story.body

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <article>
        <header className="on-dark bg-pine-900 pb-40 pt-36 text-linen md:pt-44">
          <div className="container-x max-w-[880px]">
            <Link to="/stories" className="link-arrow flex-row-reverse">
              All stories <ArrowLeft size={16} aria-hidden />
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-linen/70">
              <span className="font-bold uppercase tracking-[0.14em] text-sun">{story.category}</span>
              <span aria-hidden>·</span>
              <time dateTime={story.date}>{formatDate(story.date)}</time>
              <span aria-hidden>·</span>
              <span>{story.readTime}</span>
            </div>
            <h1 className="display-lg mt-5 text-white">{story.title}</h1>
          </div>
        </header>

        <div className="container-x -mt-28 max-w-[1040px]">
          <SafeImage src={story.image} alt={story.imageAlt} eager className="aspect-[16/9] shadow-[0_40px_80px_-40px_rgb(54_16_10/0.6)]" />
        </div>

        <div className="container-x max-w-[720px] py-14 md:py-20">
          {story.source === 'hhh' ? (
            <p className="mb-10 rounded-[var(--radius-ui)] bg-linen/70 px-5 py-4 text-sm text-muted">
              Written for this concept from information published by HHH. Photographs are from HHH’s missions and are illustrative.
            </p>
          ) : (
            <p className="mb-10 flex flex-wrap items-center gap-3 rounded-[var(--radius-ui)] border border-dashed border-sun bg-sun-soft/40 px-5 py-4 text-sm text-[#6b4a0d]">
              <DemoTag>Sample update</DemoTag> Written for this design concept — to be replaced with an article from the HHH team.
            </p>
          )}
          <p className="font-display text-[1.45rem] leading-snug text-ink">{story.excerpt}</p>
          <div className="mt-8 space-y-6 text-[1.1rem] leading-[1.8] text-ink/85">
            {body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <button type="button" onClick={copy} className="btn btn-secondary btn-sm" aria-live="polite">
              {copied ? <Check size={16} aria-hidden /> : <Link2 size={16} aria-hidden />}
              {copied ? 'Link copied' : 'Copy link'}
            </button>
            <Link to="/donate" className="link-arrow">
              Join hands with HHH
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-white/50 py-20">
          <div className="container-x">
            <h2 className="display-md">Keep reading</h2>
            <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="pt-20">
        <CtaBand />
      </div>
    </>
  )
}
