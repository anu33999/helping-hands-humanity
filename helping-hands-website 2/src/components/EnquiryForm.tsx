import { useId, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { isEmail, isIndianMobile, simulateSubmit } from '../lib/validate'

type Field = 'name' | 'email' | 'phone' | 'organisation' | 'topic' | 'message'

type Props = {
  topics: string[]
  defaultTopic?: string
  showOrganisation?: boolean
  submitLabel?: string
  successTitle?: string
}

/** Contact / partnership / volunteer enquiry. Submissions are simulated in this demo. */
export default function EnquiryForm({ topics, defaultTopic, showOrganisation, submitLabel = 'Send message', successTitle = 'Message received' }: Props) {
  const id = useId()
  const empty = { name: '', email: '', phone: '', organisation: '', topic: defaultTopic ?? topics[0], message: '' }
  const [values, setValues] = useState(empty)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<Field | 'consent', string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const set = (k: Field) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e: typeof errors = {}
    if (values.name.trim().length < 2) e.name = 'Please tell us your name.'
    if (!values.email.trim()) e.email = 'Please enter your email address.'
    else if (!isEmail(values.email)) e.email = 'Please enter a valid email address.'
    if (values.phone && !isIndianMobile(values.phone)) e.phone = 'Enter a 10-digit Indian mobile number, or leave blank.'
    if (showOrganisation && values.organisation.trim().length < 2) e.organisation = 'Please enter your organisation’s name.'
    if (values.message.trim().length < 15) e.message = 'Please share a little more (at least 15 characters).'
    if (!consent) e.consent = 'Please agree so we can reply to you.'
    return e
  }

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    const first = Object.keys(e)[0]
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }
    setStatus('loading')
    await simulateSubmit(1000)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div role="status" className="animate-rise-in rounded-[var(--radius-media)] bg-white p-8 text-center shadow-[0_30px_60px_-40px_rgb(76_22_11/0.35)]">
        <CheckCircle2 size={48} className="mx-auto text-amber" aria-hidden />
        <h3 className="display-sm mt-4">{successTitle}, {values.name.split(' ')[0]}.</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Thank you for reaching out about <strong className="text-ink">{values.topic.toLowerCase()}</strong>. In this demo nothing was sent or stored — on the live site, the HHH team would reply to {values.email}.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-6"
          onClick={() => {
            setValues(empty)
            setConsent(false)
            setStatus('idle')
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  const err = (k: Field | 'consent') =>
    errors[k] ? (
      <p id={`${id}-${k}-err`} className="field-error">
        <AlertCircle size={15} aria-hidden /> {errors[k]}
      </p>
    ) : null
  const aria = (k: Field) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${id}-${k}-err` : undefined })

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className="field-label">Full name *</label>
        <input id={`${id}-name`} autoComplete="name" className="field" value={values.name} onChange={set('name')} {...aria('name')} />
        {err('name')}
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="field-label">Email address *</label>
        <input id={`${id}-email`} type="email" autoComplete="email" className="field" value={values.email} onChange={set('email')} {...aria('email')} />
        {err('email')}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="field-label">Mobile number <span className="font-semibold text-muted">(optional)</span></label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-muted">+91</span>
          <input id={`${id}-phone`} type="tel" inputMode="numeric" autoComplete="tel-national" className="field pl-14!" value={values.phone} onChange={set('phone')} {...aria('phone')} />
        </div>
        {err('phone')}
      </div>
      {showOrganisation ? (
        <div>
          <label htmlFor={`${id}-organisation`} className="field-label">Organisation *</label>
          <input id={`${id}-organisation`} autoComplete="organization" className="field" value={values.organisation} onChange={set('organisation')} {...aria('organisation')} />
          {err('organisation')}
        </div>
      ) : (
        <div>
          <label htmlFor={`${id}-topic`} className="field-label">I’m getting in touch about</label>
          <select id={`${id}-topic`} className="field" value={values.topic} onChange={set('topic')}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      )}
      {showOrganisation && (
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-topic`} className="field-label">Area of interest</label>
          <select id={`${id}-topic`} className="field" value={values.topic} onChange={set('topic')}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      )}
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className="field-label">Message *</label>
        <textarea id={`${id}-message`} rows={5} className="field min-h-[140px] resize-y" value={values.message} onChange={set('message')} {...aria('message')} />
        {err('message')}
      </div>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            id={`${id}-consent`}
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (errors.consent) setErrors((er) => ({ ...er, consent: undefined }))
            }}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-amber)]"
          />
          <span>I agree that HHH may use these details to respond to my enquiry, as described in the privacy policy.</span>
        </label>
        {err('consent')}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Demo form — submissions are simulated and not sent anywhere.</p>
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              {submitLabel} <Send size={16} aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
