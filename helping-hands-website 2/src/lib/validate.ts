export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
export const isIndianMobile = (v: string) => /^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ''))

/** Simulates a network round-trip for forms that have no backend in this demo. */
export const simulateSubmit = (ms = 900) => new Promise<void>((r) => setTimeout(r, ms))
