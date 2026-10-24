import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Backpack, Bed, CheckCircle2, Droplet, ExternalLink, FileSpreadsheet, GraduationCap, Landmark, Minus, Package,
  Pencil, Plus, Shirt, Stethoscope, Wheat, type LucideIcon,
} from 'lucide-react'
import { formatINR, images, org, wishlist } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero, SourceNote } from '../components/Blocks'
import Dialog from '../components/Dialog'
import DonationWidget from '../components/DonationWidget'
import { Button, DemoTag, Eyebrow, Reveal, SafeImage, SectionHeading } from '../components/ui'

const icons: Record<string, LucideIcon> = { pencil: Pencil, backpack: Backpack, shirt: Shirt, wheat: Wheat, bed: Bed, stethoscope: Stethoscope, droplet: Droplet, graduation: GraduationCap }

const faqs = [
  { q: 'How will I know where my money went?', a: 'Every month HHH emails donors a spreadsheet of funds received and expenses — with bills for every rupee spent.' },
  { q: 'Can I choose which mission I support?', a: 'Yes. Choose a mission in the donation form, or leave it as “where it’s needed most” so HHH can direct it to the most urgent need.' },
  { q: 'Can I sponsor one particular child?', a: 'Mission Education matches sponsors with children. Contact the team to set up a sponsorship and receive progress updates.' },
  { q: 'Is my donation tax-deductible?', a: 'Tax-exemption details (such as 80G) are to be confirmed by HHH and would be shown here on the live site.' },
]

export default function Donate() {
  useSeo('Donate', 'Give once, give monthly, sponsor a child’s education, or fulfil a requirement for HHH Homes — with monthly reporting of every rupee.')
  const [params] = useSearchParams()
  const purpose = params.get('purpose') ?? undefined
  const frequency = params.get('frequency') === 'monthly' ? 'monthly' : 'one-time'

  return (
    <>
      <PageHero
        eyebrow="Donate to HHH"
        title="Your hands. Their future."
        lede="Sponsor schooling, support HHH Homes or fund a village project. Every month, you’ll receive a statement showing exactly how it was spent."
      />

      <section id="donation-form" className="container-x scroll-mt-24 pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-20">
          <div className="relative z-10 -mt-16 self-start rounded-[22px] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgb(19_53_40/0.55)] sm:p-9 md:-mt-24">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2 className="font-display text-[1.75rem] text-pine-900">Make your gift</h2>
              <DemoTag>Simulated</DemoTag>
            </div>
            <DonationWidget initialPurpose={purpose} initialFrequency={frequency} />
          </div>

          <div className="pt-4 lg:pt-14">
            <Eyebrow>Where your gift goes</Eyebrow>
            <h2 className="display-md mt-4">Accountable for every penny — and proud of it.</h2>
            <p className="mt-5 text-[1.05rem] text-muted">
              HHH is well known among its supporters for transparency. Your donation is tracked from the day it arrives to the bill it pays.
            </p>
            <ul className="mt-9 space-y-5">
              {[
                ['Mission Education', 'School fees, books and uniforms for sponsored children.'],
                ['HHH Homes', 'Food, bedding, clothing and care for 63 children.'],
                ['Grama Seva', 'Water, school and infrastructure projects in Nelavancha.'],
                ['Outreach', 'Teaching Mission, Sevarth visits, Sahaya rescues and awareness drives.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-amber" aria-hidden />
                  <div>
                    <p className="font-bold">{t}</p>
                    <p className="text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4 rounded-[var(--radius-media)] bg-sun-soft/60 p-5">
              <FileSpreadsheet size={26} className="shrink-0 text-pine-800" aria-hidden />
              <p className="text-sm">
                <strong className="block text-ink">Monthly donor statement</strong>
                <span className="text-muted">Funds received and every expense, with bills — emailed to donors each month.</span>
              </p>
            </div>
            <SafeImage src={images.homesBoys} alt="Three boys from HHH Home smiling" className="mt-10 hidden aspect-[16/9] md:block" />
          </div>
        </div>
      </section>

      <WishList />

      <section className="container-x section-y">
        <SectionHeading eyebrow="Other ways to give" title="Bank transfer & in-kind gifts" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Landmark size={26} className="text-amber" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">Bank transfer</h3>
            <p className="mt-2 text-muted">Account name: <strong className="text-ink">Helping Hands Humanity</strong>. Full account details would appear here once confirmed by HHH.</p>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-muted">Account</dt><dd className="font-mono">XXXX XXXX XXXX</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-muted">IFSC</dt><dd className="font-mono">XXXX0000000</dd></div>
            </dl>
          </div>
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <Package size={26} className="text-amber" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">In-kind donations</h3>
            <p className="mt-2 text-muted">Books, uniforms, groceries and bedding for HHH Homes are always welcome. Call {org.phone} to arrange a drop-off.</p>
          </div>
          <div className="rounded-[var(--radius-media)] border border-line bg-white p-7">
            <GraduationCap size={26} className="text-amber" strokeWidth={1.7} aria-hidden />
            <h3 className="font-display mt-5 text-xl">Sponsor a child</h3>
            <p className="mt-2 text-muted">Be matched with a child through Mission Education and follow their progress through the year.</p>
          </div>
        </div>
      </section>

      <section className="bg-sand/55 section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Giving, answered" />
          <div className="divide-y divide-pine-900/15 border-y border-pine-900/15">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-pine-900/20 text-pine-800 transition-transform group-open:rotate-45">
                    <Plus size={18} aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */

function WishList() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)
  const total = wishlist.reduce((sum, m) => sum + (cart[m.name] ?? 0) * m.price, 0)
  const count = Object.values(cart).reduce((a, b) => a + b, 0)

  const change = (name: string, d: number) =>
    setCart((c) => {
      const n = Math.max(0, Math.min(20, (c[name] ?? 0) + d))
      const next = { ...c, [name]: n }
      if (!n) delete next[name]
      return next
    })

  return (
    <section id="wishlist" className="on-dark scroll-mt-20 bg-pine-900 text-linen section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Fulfil a need</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Give something specific — and know exactly what it became.</h2>
            <p className="lede mt-5">Choose items from HHH Homes’ wish list. Each gift shows up, line by line, in the monthly statement.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <DemoTag>Sample items &amp; prices</DemoTag>
            <a href={org.requirementsHref} target="_blank" rel="noreferrer" className="link-arrow">
              See HHH’s live requirements list <ExternalLink size={15} aria-hidden />
            </a>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((m, i) => {
            const qty = cart[m.name] ?? 0
            const Icon = icons[m.icon] ?? Package
            return (
              <Reveal as="li" key={m.name} delay={(i % 4) * 60} className={`flex flex-col rounded-[var(--radius-media)] bg-pine-950/50 p-6 ring-1 transition-shadow ${qty ? 'ring-sun' : 'ring-line-dark'}`}>
                <span className={`grid h-14 w-14 place-items-center rounded-[14px] transition-colors ${qty ? 'bg-sun text-pine-950' : 'bg-white/10 text-sun'}`}>
                  <Icon size={26} strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-xl text-white">{m.name}</h3>
                <p className="mt-1 text-sm text-linen/70">{m.detail}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <p className="text-lg font-bold text-sun">{formatINR(m.price)}</p>
                  {qty ? (
                    <div className="flex items-center gap-1" role="group" aria-label={`Quantity of ${m.name}`}>
                      <button type="button" onClick={() => change(m.name, -1)} className="grid h-9 w-9 place-items-center rounded-[8px] border border-linen/30 hover:bg-white/10" aria-label={`Remove one ${m.name}`}>
                        <Minus size={16} aria-hidden />
                      </button>
                      <span className="w-7 text-center font-bold text-white" aria-live="polite">{qty}</span>
                      <button type="button" onClick={() => change(m.name, 1)} className="grid h-9 w-9 place-items-center rounded-[8px] border border-linen/30 hover:bg-white/10" aria-label={`Add one more ${m.name}`}>
                        <Plus size={16} aria-hidden />
                      </button>
                    </div>
                  ) : (
                    <button type="button" onClick={() => change(m.name, 1)} className="btn btn-outline-light btn-sm min-h-[38px]! px-3.5!">
                      <Plus size={15} aria-hidden /> Add <span className="sr-only">{m.name}</span>
                    </button>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ul>

        <div className="sticky bottom-4 z-20 mt-10">
          <div className="flex flex-col gap-4 rounded-[18px] bg-ivory p-4 text-ink shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)] sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <p aria-live="polite" className="px-1">
              {count ? (
                <>
                  <strong>{count}</strong> item{count > 1 ? 's' : ''} · <strong className="font-display text-xl text-pine-900">{formatINR(total)}</strong>
                </>
              ) : (
                <span className="text-muted">Add items above to fulfil them.</span>
              )}
            </p>
            <Button variant="primary" disabled={!count} onClick={() => setOpen(true)}>
              Fulfil {count ? formatINR(total) : 'a need'}
            </Button>
          </div>
        </div>
        <SourceNote className="mt-4 text-linen/55!">Items and prices are illustrative — the live site would read from HHH’s published requirements list.</SourceNote>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} title="Your gift to HHH Homes">
        <ul className="divide-y divide-line">
          {wishlist.filter((m) => cart[m.name]).map((m) => (
            <li key={m.name} className="flex justify-between gap-4 py-3">
              <span>{m.name} × {cart[m.name]}</span>
              <strong>{formatINR(m.price * (cart[m.name] ?? 0))}</strong>
            </li>
          ))}
        </ul>
        <p className="font-display mt-3 flex justify-between border-t-2 border-pine-900 pt-3 text-2xl text-pine-900">
          <span>Total</span> <span>{formatINR(total)}</span>
        </p>
        <p className="mt-6 rounded-[var(--radius-ui)] border border-dashed border-sun/70 bg-sun-soft/40 p-4 text-sm text-[#6b4a0d]">
          <strong>Demonstration only.</strong> On the live site, this would continue to a secure checkout, and the items would appear in your next monthly statement.
        </p>
        <Button variant="primary" block className="mt-5" onClick={() => { setOpen(false); setCart({}) }}>
          Finish demo
        </Button>
      </Dialog>
    </section>
  )
}
