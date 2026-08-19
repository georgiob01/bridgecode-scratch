import { PricingTable } from '../../components/PricingTable'
import { plans } from '../../lib/plans'

export const metadata = { title: 'Pricing' }

// The pricing page: renders subscription tiers from lib/plans.ts
export default function PricingPage() {
  return (
    <main>
      <h1>Pricing</h1>
      <p>Every plan includes email support.</p>
      <p>Simple monthly plans. Cancel anytime.</p>
      <PricingTable plans={plans} />
    </main>
  )
}
