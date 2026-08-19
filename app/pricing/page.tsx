import { PricingTable } from '../../components/PricingTable'
import { plans } from '../../lib/plans'

export const metadata = { title: 'Pricing' }

// The pricing page: renders subscription tiers from lib/plans.ts
export default function PricingPage() {
  return (
    <main>
      <h1>Pricing</h1>
      <p>Cancel anytime, no questions asked</p>
      <p>Simple monthly plans.</p>
      <PricingTable plans={plans} />
    </main>
  )
}
