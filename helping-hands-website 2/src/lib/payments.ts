/**
 * Payment layer for the donation flow.
 *
 * This demo ships only `demoProvider`, which never collects card or bank
 * details and never moves money. To go live, implement `PaymentProvider`
 * for a real gateway (create the order on a server you control, then open
 * the gateway's hosted checkout) and swap it in `activeProvider`.
 */

export type Frequency = 'one-time' | 'monthly'

export type DonationIntent = {
  amount: number
  frequency: Frequency
  purpose: string
  donor: { name: string; email: string; wantsStatement: boolean }
}

export type PaymentResult =
  | { status: 'simulated'; reference: string }
  | { status: 'success'; reference: string }
  | { status: 'error'; message: string }

export interface PaymentProvider {
  id: string
  label: string
  isLive: boolean
  checkout(intent: DonationIntent): Promise<PaymentResult>
}

export const demoProvider: PaymentProvider = {
  id: 'demo',
  label: 'Demonstration mode',
  isLive: false,
  async checkout(intent) {
    await new Promise((r) => setTimeout(r, 1100))
    if (!intent.amount || intent.amount < 1) return { status: 'error', message: 'Please choose an amount.' }
    const ref = 'DEMO-' + Math.random().toString(36).slice(2, 8).toUpperCase()
    return { status: 'simulated', reference: ref }
  },
}

export const activeProvider: PaymentProvider = demoProvider
