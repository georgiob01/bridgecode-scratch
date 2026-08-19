import type { Plan } from '../lib/plans'

export function PricingTable({ plans }: { plans: Plan[] }) {
  return (
    <section>
      {plans.map((plan) => (
        <div key={plan.name} style={{ border: '1px solid #ddd', margin: 8, padding: 16 }}>
          <h2>{plan.name}</h2>
          <p>
            <strong>${plan.pricePerMonth}</strong> / month
          </p>
          <ul>
            {plan.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
