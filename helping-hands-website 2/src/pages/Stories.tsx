import { useMemo, useState } from 'react'
import { stories } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero, StoryCard } from '../components/Blocks'
import { Reveal } from '../components/ui'

const categories = ['All', 'Origins', 'Education', 'Homes', 'Community'] as const
type Category = (typeof categories)[number]

export default function Stories() {
  useSeo('Stories & updates', 'Stories from Helping Hands Humanity’s missions — education, children’s homes, village development and more.')
  const [active, setActive] = useState<Category>('All')
  const sorted = useMemo(() => [...stories].sort((a, b) => b.date.localeCompare(a.date)), [])
  const list = active === 'All' ? sorted : sorted.filter((s) => s.category === active)
  const [lead, ...rest] = list

  return (
    <>
      <PageHero
        eyebrow="Stories & updates"
        title="Every helping hand has a story."
        lede="Where HHH came from, what volunteers do on a Saturday, and how one village changed — news from our missions."
      />

      <section className="container-x section-y pt-12!">
        <div role="toolbar" aria-label="Filter stories by category" className="flex flex-wrap gap-2 border-b border-line pb-6">
          {categories.map((c) => {
            const count = c === 'All' ? stories.length : stories.filter((s) => s.category === c).length
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className={`min-h-[42px] rounded-[9px] border-[1.5px] px-4 text-sm font-bold transition-colors ${
                  active === c ? 'border-pine-800 bg-pine-800 text-white' : 'border-line bg-white text-ink hover:border-pine-700/50'
                }`}
              >
                {c} <span className={active === c ? 'text-white/70' : 'text-muted'}>({count})</span>
              </button>
            )
          })}
        </div>

        <div aria-live="polite">
          {list.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display text-2xl">No stories in this category yet.</p>
              <p className="mt-2 text-muted">Check back soon, or browse all stories.</p>
              <button type="button" className="btn btn-secondary mt-6" onClick={() => setActive('All')}>
                Show all stories
              </button>
            </div>
          ) : (
            <>
              {lead && (
                <div className="mt-12">
                  <StoryCard story={lead} large />
                </div>
              )}
              <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 80}>
                    <StoryCard story={s} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
