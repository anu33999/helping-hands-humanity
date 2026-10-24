import { BookOpen, Building2, Briefcase, ClipboardList, ExternalLink, GraduationCap, HandHeart, HeartPulse, Megaphone, Package, Users, Home as HomeIcon } from 'lucide-react'
import { images, org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { ButtonLink, Eyebrow, Reveal, SafeImage, SectionHeading } from '../components/ui'

const roles = [
  { icon: BookOpen, label: 'Tutor with the Teaching Mission' },
  { icon: HomeIcon, label: 'Spend time at HHH Homes' },
  { icon: HeartPulse, label: 'Join Sevarth care-home visits' },
  { icon: Megaphone, label: 'Help at awareness drives' },
  { icon: Users, label: 'Support Sahaya rescues' },
  { icon: ClipboardList, label: 'Help with donor reporting' },
]

const partnerWays = [
  { icon: GraduationCap, title: 'Sponsor a batch of students', text: 'Fund a year of Mission Education for a group of children.' },
  { icon: Building2, title: 'CSR projects', text: 'Back HHH Homes upgrades or Grama Seva infrastructure in Nelavancha.' },
  { icon: Users, title: 'Employee volunteering', text: 'Bring your team for a tutoring day or a Sevarth visit.' },
  { icon: Package, title: 'In-kind support', text: 'Books, uniforms, groceries, bedding or equipment for the homes.' },
]

export default function GetInvolved() {
  useSeo('Get involved', 'Volunteer with Helping Hands Humanity, partner through CSR, or sponsor a child’s education in Hyderabad.')
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Many hands make light work."
        lede="HHH grew because people saw the work and wanted to help. Give your weekends, your skills, or your company’s support."
        image={images.volunteers}
        imageAlt="A large group of HHH volunteers and children waving"
      >
        <ButtonLink to="#volunteer" variant="primary" icon="arrow">Volunteer</ButtonLink>
        <ButtonLink to="#partner" variant="outline-light" icon="arrow">Partner with us</ButtonLink>
      </PageHero>

      <section id="volunteer" className="container-x section-y scroll-mt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Volunteer your time"
              title="Give a Saturday. Change a semester."
              lede="Most HHH volunteers are students and working professionals who give a few hours a week. Pick what suits you."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {roles.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-[var(--radius-ui)] bg-linen px-4 py-3.5 font-semibold">
                  <Icon size={20} className="shrink-0 text-amber" strokeWidth={1.9} aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink to={org.volunteerFormHref} variant="primary" icon="none">
                <span className="flex items-center gap-2">Register as a volunteer <ExternalLink size={16} aria-hidden /></span>
              </ButtonLink>
              <p className="text-sm text-muted">Opens HHH’s current registration form.</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative">
            <SafeImage src={images.teaching} alt="Children studying on a mat while volunteers help" className="shape-arch aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-[var(--radius-media)] bg-pine-900 p-6 text-linen shadow-xl sm:left-auto sm:max-w-xs">
              <p className="font-script text-[1.7rem] text-sun">Cheyyi kalipi!</p>
              <p className="mt-1 text-sm text-linen/80">Tell us which mission speaks to you, and we’ll help you plan your first visit.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/55 py-16 md:py-20">
        <div className="container-x grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <span className="grid h-16 w-16 place-items-center rounded-[16px] bg-ivory text-amber">
            <HandHeart size={30} strokeWidth={1.7} aria-hidden />
          </span>
          <div>
            <h2 className="display-sm">Sponsor a child’s education</h2>
            <p className="mt-2 max-w-2xl text-muted">The way HHH began. Sponsors are matched with a child and receive updates on their progress. <span className="font-semibold">Sponsorship amounts to be confirmed by HHH.</span></p>
          </div>
          <ButtonLink to="/donate?purpose=Mission%20Education" variant="secondary" icon="arrow" size="sm">Sponsor</ButtonLink>
        </div>
      </section>

      <section id="partner" className="container-x section-y scroll-mt-20">
        <SectionHeading
          eyebrow="For companies"
          title="Partner with HHH"
          lede="Turn your CSR budget into measurable change — and get the same monthly, bill-by-bill reporting our individual donors trust."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-media)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {partnerWays.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="bg-ivory p-7">
              <Icon size={26} className="text-amber" strokeWidth={1.7} aria-hidden />
              <h3 className="font-display mt-6 text-xl">{title}</h3>
              <p className="mt-3 text-[0.95rem] text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="partner-form" className="on-dark bg-pine-900 text-linen section-y scroll-mt-20">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="display-lg mt-4 text-white">Partnership &amp; volunteer enquiry</h2>
            <p className="lede mt-5">Tell us about yourself or your organisation and the HHH team will be in touch.</p>
            <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-media)] border border-line-dark p-5">
              <Briefcase size={28} className="shrink-0 text-sun" aria-hidden />
              <p className="text-sm text-linen/80">Prefer to give financially? Donate once, monthly, or fulfil a requirement for HHH Homes.</p>
            </div>
            <div className="mt-5">
              <ButtonLink to="/donate" variant="light" size="sm">Ways to donate</ButtonLink>
            </div>
          </div>
          <div className="rounded-[22px] bg-ivory p-6 text-ink sm:p-9">
            <EnquiryForm
              showOrganisation
              topics={['CSR partnership', 'Sponsor students', 'Employee volunteering', 'Individual volunteering', 'In-kind donation']}
              submitLabel="Send enquiry"
              successTitle="Enquiry received"
            />
          </div>
        </div>
      </section>
    </>
  )
}
