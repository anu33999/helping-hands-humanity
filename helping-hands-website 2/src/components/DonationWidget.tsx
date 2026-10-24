import { useId, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Heart, Loader2, Lock, RotateCcw } from 'lucide-react'
import { amountImpact, formatINR, monthlyAmounts, oneTimeAmounts } from '../data/site'
import { activeProvider, type Frequency, type PaymentResult } from '../lib/payments'
import { isEmail } from '../lib/validate'
import Dialog from './Dialog'
import { DemoTag } from './ui'

const MIN = 100
const MAX = 1000000
const purposes = ['Where it’s needed most', 'Mission Education', 'HHH Homes', 'Teaching Mission', 'Grama Seva', 'Sevarth & Sahaya']

type Props = {
  tone?: 'light' | 'dark'
  initialFrequency?: Frequency
  initialAmount?: number
  initialPurpose?: string
}

export default function DonationWidget({ tone = 'light', initialFrequency = 'one-time', initialAmount, initialPurpose }: Props) {
  const id = useId()
  const [frequency, setFrequency] = useState<Frequency>(initialFrequency)
  const amounts = frequency === 'monthly' ? monthlyAmounts : oneTimeAmounts
  const [selected, setSelected] = useState<number | null>(initialAmount ?? (initialFrequency === 'monthly' ? 1000 : 2500))
  const [custom, setCustom] = useState('')
  const [purpose, setPurpose] = useState(initialPurpose ?? purposes[0])
  const [amountError, setAmountError] = useState('')
  const [open, setOpen] = useState(false)

  const customValue = custom ? Number(custom) : NaN
  const amount = custom ? customValue : selected ?? 0
  const impact = !custom && selected ? amountImpact[selected] : undefined

  const switchFrequency = (f: Frequency) => {
    setFrequency(f)
    setCustom('')
    setAmountError('')
    setSelected(f === 'monthly' ? 1000 : 2500)
  }

  const validateAmount = (): boolean => {
    if (custom) {
      if (!Number.isInteger(customValue)) return fail('Please enter a whole number of rupees.')
      if (customValue < MIN) return fail(`The minimum gift is ${formatINR(MIN)}.`)
      if (customValue > MAX) return fail(`For gifts above ${formatINR(MAX)}, please contact our team directly.`)
    } else if (!selected) {
      return fail('Please choose or enter an amount.')
    }
    setAmountError('')
    return true
  }
  const fail = (msg: string) => {
    setAmountError(msg)
    return false
  }

  const dark = tone === 'dark'
  const chip = (active: boolean) =>
    `min-h-[52px] rounded-[var(--radius-ui)] border-[1.5px] px-3 text-[1rem] font-bold transition-all duration-200 ${
      active
        ? dark
          ? 'border-sun bg-sun text-pine-950 shadow-[0_8px_20px_-12px_rgb(232_176_75/0.9)]'
          : 'border-pine-800 bg-pine-800 text-white shadow-[0_8px_20px_-12px_rgb(76_22_11/0.8)]'
        : dark
          ? 'border-linen/25 bg-white/5 text-linen hover:border-linen/60 hover:bg-white/10'
          : 'border-line bg-white text-ink hover:border-pine-700/50 hover:bg-linen/40'
    }`

  return (
    <div className={dark ? 'on-dark text-linen' : 'text-ink'}>
      {/* Frequency */}
      <div role="radiogroup" aria-label="Donation frequency" className={`grid grid-cols-2 gap-1 rounded-[12px] p-1 ${dark ? 'bg-black/20' : 'bg-sand/70'}`}>
        {(['one-time', 'monthly'] as const).map((f) => {
          const active = frequency === f
          return (
            <button
              key={f}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => switchFrequency(f)}
              className={`flex min-h-[46px] items-center justify-center gap-2 rounded-[9px] text-[0.95rem] font-bold transition-all ${
                active ? (dark ? 'bg-linen text-pine-900 shadow-sm' : 'bg-white text-pine-900 shadow-sm') : dark ? 'text-linen/75 hover:text-white' : 'text-muted hover:text-pine-900'
              }`}
            >
              {f === 'monthly' && <RotateCcw size={15} aria-hidden />}
              {f === 'one-time' ? 'Give once' : 'Give monthly'}
            </button>
          )
        })}
      </div>

      {/* Amounts */}
      <fieldset className="mt-6">
        <legend className={`mb-3 text-sm font-bold ${dark ? 'text-linen' : 'text-ink'}`}>
          Choose an amount {frequency === 'monthly' && <span className="font-semibold opacity-70">(per month)</span>}
        </legend>
        <div className="grid grid-cols-3 gap-2.5">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              aria-pressed={!custom && selected === a}
              onClick={() => {
                setSelected(a)
                setCustom('')
                setAmountError('')
              }}
              className={chip(!custom && selected === a)}
            >
              {formatINR(a)}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-4">
        <label htmlFor={`${id}-custom`} className={`field-label ${dark ? 'text-linen!' : ''}`}>
          Or enter your own amount
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted">₹</span>
          <input
            id={`${id}-custom`}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Other amount"
            className="field pl-9!"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value.replace(/[^\d]/g, '').slice(0, 8))
              setAmountError('')
            }}
            onBlur={() => custom && validateAmount()}
            aria-invalid={!!amountError}
            aria-describedby={`${id}-amount-help`}
          />
        </div>
        <div id={`${id}-amount-help`} aria-live="polite">
          {amountError ? (
            <p className={`field-error ${dark ? 'text-sun!' : ''}`}>
              <AlertCircle size={15} aria-hidden /> {amountError}
            </p>
          ) : (
            <p className={`mt-2 text-xs ${dark ? 'text-linen/60' : 'text-muted'}`}>Minimum {formatINR(MIN)}. Whole rupees only.</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={`${id}-purpose`} className={`field-label ${dark ? 'text-linen!' : ''}`}>
          Direct my gift to
        </label>
        <select id={`${id}-purpose`} className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236f5b51%22 stroke-width=%222.5%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[position:right_1rem_center] bg-no-repeat pr-10" value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          {purposes.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Impact line */}
      <div className={`mt-5 rounded-[var(--radius-ui)] p-4 text-[0.95rem] ${dark ? 'bg-white/[0.06]' : 'bg-linen/60'}`}>
        {amount > 0 && !amountError ? (
          <p>
            <strong className={dark ? 'text-white' : 'text-pine-900'}>
              {formatINR(amount)}
              {frequency === 'monthly' ? ' a month' : ''}
            </strong>{' '}
            {impact ?? 'goes straight to education, care and community projects run by HHH'}.
          </p>
        ) : (
          <p className="opacity-80">Choose an amount to see how it could help.</p>
        )}
        <p className={`mt-1.5 text-xs ${dark ? 'text-linen/55' : 'text-muted'}`}>Illustrative examples — to be confirmed with HHH’s actual costs.</p>
      </div>

      <button
        type="button"
        className={`btn btn-block mt-5 ${dark ? 'btn-light' : 'btn-primary'}`}
        onClick={() => validateAmount() && setOpen(true)}
      >
        <Heart size={18} aria-hidden />
        Donate {amount > 0 && !amountError ? formatINR(amount) : ''}
        {frequency === 'monthly' ? ' monthly' : ''}
      </button>

      <p className={`mt-4 flex items-start gap-2 text-xs leading-relaxed ${dark ? 'text-linen/65' : 'text-muted'}`}>
        <Lock size={14} className="mt-0.5 shrink-0" aria-hidden />
        <span>
          Demo mode: no payment gateway is connected and no card or bank details are collected. A live site would hand off to a secure, PCI-compliant checkout.
        </span>
      </p>

      <CheckoutDialog open={open} onClose={() => setOpen(false)} amount={amount} frequency={frequency} purpose={purpose} />
    </div>
  )
}

function CheckoutDialog({ open, onClose, amount, frequency, purpose }: { open: boolean; onClose: () => void; amount: number; frequency: Frequency; purpose: string }) {
  const id = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [wantsStatement, setWantsStatement] = useState(true)
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [state, setState] = useState<'form' | 'loading' | PaymentResult>('form')

  const close = () => {
    onClose()
    setTimeout(() => setState('form'), 200)
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const next: typeof errors = {}
    if (name.trim().length < 2) next.name = 'Please enter your name.'
    if (!isEmail(email)) next.email = 'Please enter a valid email for your receipt.'
    setErrors(next)
    if (Object.keys(next).length) return
    setState('loading')
    const result = await activeProvider.checkout({ amount, frequency, purpose, donor: { name, email, wantsStatement } })
    setState(result)
  }

  const summary = (
    <div className="flex items-center justify-between rounded-[var(--radius-ui)] bg-linen/70 px-4 py-3">
      <div>
        <p className="text-sm text-muted">{frequency === 'monthly' ? 'Monthly gift' : 'One-time gift'} · {purpose}</p>
        <p className="font-display text-2xl text-pine-900">
          {formatINR(amount)}
          {frequency === 'monthly' && <span className="text-base text-muted"> / month</span>}
        </p>
      </div>
      <DemoTag>Demo</DemoTag>
    </div>
  )

  const done = typeof state === 'object'

  return (
    <Dialog open={open} onClose={close} title={done && state.status !== 'error' ? 'Thank you' : 'Complete your gift'}>
      {done && state.status !== 'error' ? (
        <div role="status" className="text-center">
          <CheckCircle2 size={52} className="mx-auto text-amber" aria-hidden />
          <p className="font-display mt-4 text-3xl text-pine-900">Thank you, {name.split(' ')[0]}.</p>
          <p className="mx-auto mt-3 max-w-sm text-muted">
            This was a <strong className="text-ink">simulated donation</strong> of {formatINR(amount)}
            {frequency === 'monthly' ? ' a month' : ''}. No payment was taken and no data was stored.
          </p>
          <p className="mt-4 inline-block rounded-md bg-sand px-3 py-1.5 font-mono text-sm text-pine-900">Reference: {state.reference}</p>
          <p className="mx-auto mt-4 max-w-sm text-sm text-muted">
            On the live site, {email} would receive a receipt{wantsStatement ? ', plus HHH’s monthly statement of funds and expenses' : ''}.
          </p>
          <button type="button" className="btn btn-secondary mt-6" onClick={close}>
            Back to the site
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-5">
          {summary}
          {done && state.status === 'error' && (
            <p role="alert" className="field-error">
              <AlertCircle size={15} aria-hidden /> {state.message}
            </p>
          )}
          <div>
            <label htmlFor={`${id}-name`} className="field-label">Full name</label>
            <input id={`${id}-name`} autoComplete="name" className="field" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-err` : undefined} />
            {errors.name && <p id={`${id}-name-err`} className="field-error"><AlertCircle size={15} aria-hidden /> {errors.name}</p>}
          </div>
          <div>
            <label htmlFor={`${id}-email`} className="field-label">Email for your receipt</label>
            <input id={`${id}-email`} type="email" autoComplete="email" className="field" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-err` : undefined} />
            {errors.email && <p id={`${id}-email-err`} className="field-error"><AlertCircle size={15} aria-hidden /> {errors.email}</p>}
          </div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
            <input type="checkbox" checked={wantsStatement} onChange={(e) => setWantsStatement(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-amber)]" />
            <span>Email me HHH’s monthly statement showing funds received and every rupee spent.</span>
          </label>
          <div className="rounded-[var(--radius-ui)] border border-dashed border-sun/70 bg-sun-soft/40 p-4 text-sm text-[#6b4a0d]">
            <strong>Demonstration only.</strong> Pressing the button below simulates a successful gift. A real integration would redirect to the payment provider’s secure hosted page here.
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={state === 'loading'}>
            {state === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden /> Processing demo…
              </>
            ) : (
              <>Simulate donation of {formatINR(amount)}</>
            )}
          </button>
        </form>
      )}
    </Dialog>
  )
}
