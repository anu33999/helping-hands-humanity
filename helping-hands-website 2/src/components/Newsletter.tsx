import { useId, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { isEmail, simulateSubmit } from '../lib/validate'

type Status = 'idle' | 'loading' | 'success'

/** Newsletter sign-up. Nothing is transmitted or stored in this demo. */
export default function Newsletter({ tone = 'light', compact = false }: { tone?: 'light' | 'dark'; compact?: boolean }) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return setError('Please enter your email address.')
    if (!isEmail(email)) return setError('That email doesn’t look quite right — please check it.')
    if (!consent) return setError('Please confirm you’d like to receive updates.')
    setError('')
    setStatus('loading')
    await simulateSubmit()
    setStatus('success')
  }

  const dark = tone === 'dark'

  if (status === 'success') {
    return (
      <div role="status" className={`flex items-start gap-3 rounded-[var(--radius-ui)] p-4 ${dark ? 'bg-white/10 text-linen' : 'bg-white text-ink'}`}>
        <CheckCircle2 className={dark ? 'mt-0.5 text-sun' : 'mt-0.5 text-amber'} size={22} aria-hidden />
        <div>
          <p className="font-bold">You’re on the list — thank you.</p>
          <p className={`text-sm ${dark ? 'text-linen/75' : 'text-muted'}`}>
            Demo only: no email was sent or stored. A live site would connect this to HHH’s mailing tool.
          </p>
          <button type="button" className={`mt-2 text-sm font-bold underline underline-offset-4 ${dark ? 'text-sun' : 'text-pine-800'}`} onClick={() => { setStatus('idle'); setEmail(''); setConsent(false) }}>
            Use a different email
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor={`${id}-email`} className={compact ? 'sr-only' : `field-label ${dark ? 'text-linen!' : ''}`}>
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="field flex-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!error && !isEmail(email)}
          aria-describedby={error ? `${id}-err` : undefined}
        />
        <button type="submit" className={`btn ${dark ? 'btn-light' : 'btn-primary'} shrink-0`} disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden /> Subscribing…
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </div>
      <label className={`mt-3 flex cursor-pointer items-start gap-2.5 text-sm ${dark ? 'text-linen/80' : 'text-muted'}`}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-amber)]" />
        <span>Send me stories and updates from Helping Hands Humanity. I can unsubscribe at any time.</span>
      </label>
      {error && (
        <p id={`${id}-err`} role="alert" className={`field-error ${dark ? 'text-sun!' : ''}`}>
          <AlertCircle size={15} aria-hidden /> {error}
        </p>
      )}
    </form>
  )
}
