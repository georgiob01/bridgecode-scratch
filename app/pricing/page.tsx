import { PricingTable } from '../../components/PricingTable'
import { plans } from '../../lib/plans'

export const metadata = { title: 'Pricing' }

// The pricing page: renders subscription tiers from lib/plans.ts
export default function PricingPage() {
  return (
    <main
      style={{
        maxWidth: 1040,
        margin: '0 auto',
        padding: '80px 24px 96px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ marginBottom: 12 }}>Pricing</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.15rem', margin: 0 }}>
          Simple monthly plans. Cancel anytime.
        </p>
      </div>
      <PricingTable plans={plans} />
    </main>
  )
}
