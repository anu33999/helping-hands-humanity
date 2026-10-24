import { ClipboardList as Clock, Mail, MapPin, Phone } from 'lucide-react'
import { org } from '../data/site'
import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import EnquiryForm from '../components/EnquiryForm'
import { Eyebrow } from '../components/ui'

export default function Contact() {
  useSeo('Contact', 'Contact Helping Hands Humanity about donations, volunteering, sponsorship or partnerships. West Marredpally, Secunderabad.')
  const cards = [
    { icon: Mail, label: 'Email', value: org.email, href: `mailto:${org.email}` },
    { icon: Phone, label: 'Phone', value: org.phone, href: org.phoneHref },
    { icon: MapPin, label: 'Address', value: org.address, href: org.mapsHref },
    { icon: Clock, label: 'Volunteer registration', value: 'Fill in HHH’s online registration form', href: org.volunteerFormHref },
  ]
  return (
    <>
      <PageHero
        eyebrow="Talk with us"
        title="We’d love to hear from you."
        lede="Contact the HHH team about donations, sponsoring a child, volunteering or partnerships."
      />
      <section className="container-x pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-4 lg:-mt-10">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-linen text-amber">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</span>
                    <span className="mt-1 block break-words font-semibold text-ink">{value}</span>
                  </span>
                </>
              )
              return href ? (
                <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="relative z-10 flex gap-4 rounded-[var(--radius-media)] border border-line bg-white p-5 transition-colors hover:border-amber/40">
                  {inner}
                </a>
              ) : (
                <div key={label} className="relative z-10 flex gap-4 rounded-[var(--radius-media)] border border-line bg-white p-5">{inner}</div>
              )
            })}
            <p className="text-xs text-muted">Contact details as published on helpinghandshumanity.com.</p>
          </div>
          <div className="pt-6 lg:pt-14">
            <Eyebrow>How can we help?</Eyebrow>
            <h2 className="display-md mb-8 mt-4">Send us a message</h2>
            <EnquiryForm topics={['General question', 'Donations & statements', 'Sponsor a child', 'Volunteering', 'CSR partnership', 'HHH Homes requirements', 'Media']} />
          </div>
        </div>
      </section>
      <section className="border-t border-line">
        <iframe
          title="Map showing HHH’s address in West Marredpally, Secunderabad"
          src="https://www.google.com/maps?q=West+Marredpally,+Secunderabad,+Telangana+500026&output=embed"
          className="block h-[380px] w-full border-0 grayscale-[35%] sepia-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
