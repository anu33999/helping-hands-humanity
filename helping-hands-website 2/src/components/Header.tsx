import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Heart, Phone, Mail, MapPin } from 'lucide-react'
import { nav, org } from '../data/site'
import { ButtonLink } from './ui'

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const ink = tone === 'light' ? '#fff' : 'var(--color-pine-900)'
  return (
    <span className="flex items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden>
        <path d="M19 35 C 8 27.5, 2.5 20.5, 2.5 13.5 A 8.2 8.2 0 0 1 19 9.6 Z" fill="var(--color-amber)" />
        <path d="M21 35 C 32 27.5, 37.5 20.5, 37.5 13.5 A 8.2 8.2 0 0 0 21 9.6 Z" fill={tone === 'light' ? '#7fb08f' : 'var(--color-pine-700)'} />
        <circle cx="20" cy="5" r="2.6" fill="var(--color-sun)" />
      </svg>
      <span className="leading-none">
        <span className="font-display block text-[1.3rem] font-medium tracking-tight" style={{ color: ink }}>
          Helping Hands
        </span>
        <span
          className="mt-0.5 block text-[0.62rem] font-bold uppercase tracking-[0.18em]"
          style={{ color: tone === 'light' ? 'rgb(238 243 232 / 0.75)' : 'var(--color-muted)' }}
        >
          Humanity · Since 2012
        </span>
      </span>
    </span>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Lock background scroll, close on Escape, keep focus inside the menu.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const panel = panelRef.current
    panel?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panel) {
        const items = [...panel.querySelectorAll<HTMLElement>('a, button')]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-pine-900"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          solid ? 'border-b border-line bg-ivory/95 shadow-[0_8px_30px_-20px_rgb(54_16_10/0.35)] backdrop-blur-md' : 'border-b border-transparent bg-transparent on-dark'
        }`}
      >
        {/* Utility bar */}
        <div
          className={`hidden overflow-hidden bg-amber text-[0.8rem] font-semibold text-white transition-[max-height,opacity] duration-300 md:block ${
            solid ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          }`}
        >
          <div className="container-x flex h-10 items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a href={org.mapsHref} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline">
                <MapPin size={14} aria-hidden /> Secunderabad · Hyderabad
              </a>
              <a href={`mailto:${org.email}`} className="hidden items-center gap-1.5 hover:underline lg:flex">
                <Mail size={14} aria-hidden /> {org.email}
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a href={org.phoneHref} className="flex items-center gap-1.5 hover:underline">
                <Phone size={14} aria-hidden /> {org.phone}
              </a>
              <span className="hidden text-white/85 lg:inline">Every rupee reported, every month</span>
            </div>
          </div>
        </div>
        <div className="container-x flex h-[76px] items-center justify-between gap-6 md:h-[84px]">
          <Link to="/" aria-label="Helping Hands Humanity — home" className="shrink-0 rounded-md">
            <Logo tone={solid ? 'dark' : 'light'} />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.slice(1).map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative rounded-md px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${
                        solid ? 'text-ink/80 hover:text-pine-900' : 'text-linen/85 hover:text-white'
                      } ${isActive ? (solid ? '!text-pine-900' : '!text-white') : ''}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          aria-hidden
                          className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-sun transition-transform duration-300 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden rounded-md px-2 py-2 text-[0.92rem] font-semibold xl:inline ${solid ? 'text-ink/80 hover:text-pine-900' : 'text-linen/85 hover:text-white'}`}
            >
              Contact
            </Link>
            <ButtonLink to="/donate" variant={solid ? 'primary' : 'light'} size="sm" icon="none" className="hidden sm:inline-flex">
              <span className="flex items-center gap-2">
                <Heart size={15} strokeWidth={2.4} aria-hidden /> Donate
              </span>
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              className={`icon-btn lg:hidden ${solid ? 'text-pine-900' : 'border-linen/30! text-white hover:bg-white/10!'}`}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu" id="mobile-menu">
          <div className="animate-fade-in absolute inset-0 bg-pine-950/50" onClick={() => setOpen(false)} />
          <div
            ref={panelRef}
            className="animate-rise-in on-dark absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-pine-900 px-6 pb-8 pt-5 text-linen"
          >
            <div className="flex items-center justify-between">
              <Logo tone="light" />
              <button type="button" className="icon-btn border-linen/30! text-white hover:bg-white/10!" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={22} aria-hidden />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-10">
              <ul className="space-y-1">
                {[...nav, { label: 'Contact', to: '/contact' }, { label: 'Transparency', to: '/transparency' }].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `font-display flex items-center justify-between border-b border-line-dark py-3.5 text-[1.6rem] transition-colors ${
                          isActive ? 'text-sun' : 'text-linen hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8">
              <ButtonLink to="/donate" variant="primary" block icon="arrow">
                Donate to HHH
              </ButtonLink>
            </div>
            <div className="mt-auto space-y-2 pt-10 text-sm text-linen/75">
              <a href={org.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone size={15} aria-hidden /> {org.phone}
              </a>
              <a href={`mailto:${org.email}`} className="flex items-center gap-2 break-all hover:text-white">
                <Mail size={15} aria-hidden /> {org.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
