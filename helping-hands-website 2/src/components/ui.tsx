import { useEffect, useRef, useState, type ReactNode, type ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Info } from 'lucide-react'

/* ---------------- Buttons ---------------- */

type Variant = 'primary' | 'secondary' | 'light' | 'outline-light'

const cls = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ')

type ButtonLinkProps = {
  to: string
  variant?: Variant
  size?: 'md' | 'sm'
  icon?: 'arrow' | 'up-right' | 'none'
  block?: boolean
  className?: string
  children: ReactNode
}

/** Internal routes render a router Link; http(s)/mailto/tel render an anchor. */
export function ButtonLink({ to, variant = 'primary', size = 'md', icon = 'up-right', block, className, children }: ButtonLinkProps) {
  const classes = cls('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', block && 'btn-block', className)
  const Icon = icon === 'arrow' ? ArrowRight : icon === 'up-right' ? ArrowUpRight : null
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={size === 'sm' ? 16 : 18} strokeWidth={2.2} aria-hidden />}
    </>
  )
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const external = to.startsWith('http')
    return (
      <a href={to} className={classes} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {content}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}

type ButtonProps = ComponentProps<'button'> & {
  variant?: Variant
  size?: 'md' | 'sm'
  block?: boolean
}

export function Button({ variant = 'primary', size = 'md', block, className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={cls('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', block && 'btn-block', className)} {...rest} />
}

export function TextLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={cls('link-arrow', className)}>
      {children}
      <ArrowRight size={16} strokeWidth={2.2} aria-hidden />
    </Link>
  )
}

/* ---------------- Type helpers ---------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cls('eyebrow', className)}>{children}</p>
}

/** Hand-drawn gold underline beneath a phrase — the signature accent. */
export function Underlined({ children, color = 'var(--color-sun)' }: { children: ReactNode; color?: string }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        className="squiggle pointer-events-none absolute -bottom-[0.14em] left-0 h-[0.32em] w-full"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M3 13 C 60 5, 120 4, 180 8 S 270 15, 297 7" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function DemoTag({ children = 'Demo content', className }: { children?: ReactNode; className?: string }) {
  return (
    <span className={cls('demo-tag', className)}>
      <Info size={12} strokeWidth={2.5} aria-hidden />
      {children}
    </span>
  )
}

/* ---------------- Media ---------------- */

type SafeImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  eager?: boolean
  sizes?: string
}

/** Image with a reserved box and a warm fallback panel if the asset fails to load. */
export function SafeImage({ src, alt, className, imgClassName, eager }: SafeImageProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  // Cached images can finish before React attaches onLoad — check on mount.
  useEffect(() => {
    const el = imgRef.current
    if (el?.complete) el.naturalWidth ? setLoaded(true) : setFailed(true)
  }, [src])
  return (
    <div className={cls('media', className)}>
      {failed ? (
        <div role="img" aria-label={alt} className="flex h-full w-full items-center justify-center bg-sand p-6 text-center">
          <span className="font-display text-lg text-pine-700/70">HHH</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cls('transition-opacity duration-700', loaded ? 'opacity-100' : 'opacity-0', imgClassName)}
        />
      )}
    </div>
  )
}

/* ---------------- Motion ---------------- */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' | 'section' | 'article' }) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref as never}
      className={cls('reveal', visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export function CountUp({ value, display, duration = 1600 }: { value: number; display?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [n, setN] = useState(0)
  const [done, setDone] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setN(value)
      setDone(true)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
        else setDone(true)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])
  return (
    <span ref={ref} aria-label={display ?? value.toLocaleString('en-IN')}>
      <span aria-hidden>{done && display ? display : n.toLocaleString('en-IN')}</span>
    </span>
  )
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cls(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {eyebrow && <Eyebrow className={align === 'center' ? 'justify-center' : undefined}>{eyebrow}</Eyebrow>}
      <h2 className="display-lg mt-4">{title}</h2>
      {lede && <p className="lede mt-5">{lede}</p>}
    </div>
  )
}
