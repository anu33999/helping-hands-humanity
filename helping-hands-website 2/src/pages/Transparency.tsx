import { useState } from 'react'
import { Download, FileText, Scale, ShieldCheck, Users, Eye } from 'lucide-react'
import { documents, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { CtaBand, PageHero } from '../components/Blocks'
import Dialog from '../components/Dialog'
import { DemoTag, Eyebrow, SectionHeading } from '../components/ui'

const registrations = [
  { label: 'Registration', value: 'Govt. Reg. No. 84/2012', source: 'Shown on HHH’s logo' },
  { label: 'Donor reporting', value: 'Monthly statement of funds & expenses, with bills', source: 'Stated on helpinghandshumanity.com' },
  { label: '80G / 12A', value: 'To be supplied by HHH', source: 'Placeholder' },
  { label: 'CSR-1 / FCRA', value: 'To be supplied by HHH', source: 'Placeholder' },
]

const allocation = [
  { label: 'Mission Education', value: 42 },
  { label: 'HHH Homes', value: 33 },
  { label: 'Grama Seva & outreach', value: 10 },
  { label: 'Administration', value: 10 },
  { label: 'Fundraising', value: 5 },
]

export default function Transparency() {
  useSeo('Transparency', 'Governance, reports, financial statements and policies — how Helping Hands Humanity is run and accounts for every rupee.')
  const [doc, setDoc] = useState<string | null>(null)
  return (
    <>
      <PageHero
        eyebrow="Transparency & accountability"
        title="Accountable for every penny. Every month."
        lede="HHH already emails donors a monthly sheet of funds received and spent, with bills for every rupee. This hub would make that openness visible to everyone."
      />

      <section className="container-x pb-20 md:pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Scale, title: 'Good governance', text: 'A board that oversees strategy, finances and child protection.' },
            { icon: Eye, title: 'Monthly reporting', text: 'Funds received and every expense, with bills, sent to donors each month.' },
            { icon: ShieldCheck, title: 'Child safeguarding', text: 'Clear policies that put children’s safety and privacy first.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[var(--radius-media)] border border-line bg-white p-7">
              <Icon size={26} className="text-amber" strokeWidth={1.7} aria-hidden />
              <h2 className="font-display mt-5 text-xl">{title}</h2>
              <p className="mt-2 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registrations */}
      <section className="bg-linen/55 section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Registrations" title="Legal status & compliance" lede="Only details published by HHH are shown; all others are placeholders until verified documents are provided." />
          <dl className="divide-y divide-pine-900/15 border-y border-pine-900/15">
            {registrations.map((r) => (
              <div key={r.label} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr_auto] sm:items-center">
                <dt className="text-sm font-bold uppercase tracking-[0.1em] text-muted">{r.label}</dt>
                <dd className="font-semibold text-ink">{r.value}</dd>
                <dd>{r.source === 'Placeholder' ? <DemoTag>Placeholder</DemoTag> : <span className="text-xs text-muted">{r.source}</span>}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Allocation */}
      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Use of funds</Eyebrow>
            <h2 className="display-lg mt-4">Where donations go</h2>
            <p className="lede mt-5">A layout for sharing HHH’s expense breakdown — built from the same monthly statements donors already receive.</p>
            <div className="mt-6"><DemoTag>Sample figures — not HHH’s actual accounts</DemoTag></div>
          </div>
          <ul className="space-y-5 self-center">
            {allocation.map((a) => (
              <li key={a.label}>
                <div className="flex justify-between text-sm font-bold">
                  <span>{a.label}</span>
                  <span className="text-pine-800">{a.value}%</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-sand" role="img" aria-label={`${a.label}: ${a.value}% (sample)`}>
                  <div className="h-full rounded-full bg-gradient-to-r from-pine-800 to-amber" style={{ width: `${a.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="scroll-mt-24 bg-sand/55 section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Documents" title="Reports & policies" />
            <DemoTag>Sample documents</DemoTag>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((d) => (
              <li key={d.title} className="flex flex-col rounded-[var(--radius-media)] bg-ivory p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-[12px] bg-linen text-pine-800">
                    {d.type === 'Governance' ? <Users size={22} aria-hidden /> : <FileText size={22} aria-hidden />}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{d.type}</span>
                </div>
                <h3 className="font-display mt-6 text-xl">{d.title}</h3>
                <p className="mt-1 text-sm text-muted">{d.size}</p>
                <button type="button" className="btn btn-secondary btn-sm mt-6 self-start" onClick={() => setDoc(d.title)}>
                  <Download size={16} aria-hidden /> View document
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-20 md:pt-28"><CtaBand /></div>

      <Dialog open={!!doc} onClose={() => setDoc(null)} title={doc ?? ''}>
        <p className="text-muted">
          This is a <strong className="text-ink">demonstration placeholder</strong>. No real document is attached. When the site goes live, HHH’s actual {doc?.toLowerCase()} would open or download here.
        </p>
        <p className="mt-4 text-sm text-muted">Questions about governance? Write to <a className="font-bold text-pine-800 underline" href={`mailto:${org.email}`}>{org.email}</a>.</p>
        <button type="button" className="btn btn-primary btn-block mt-6" onClick={() => setDoc(null)}>Got it</button>
      </Dialog>
    </>
  )
}
