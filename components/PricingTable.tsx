import type { Plan } from '../lib/plans'

export function PricingTable({ plans }: { plans: Plan[] }) {
  // Visually highlight the middle plan as the recommended choice.
  const recommendedIndex = plans.length > 1 ? 1 : 0

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 24,
        alignItems: 'start',
      }}
    >
      {plans.map((plan, i) => {
        const recommended = i === recommendedIndex
        return (
          <div
            key={plan.name}
            style={{
              background: 'var(--card, #fff)',
              border: recommended
                ? '2px solid var(--accent, #1a1a2e)'
                : '1px solid var(--line, #e7e5e0)',
              borderRadius: 16,
              padding: '32px 28px',
              boxShadow: recommended
                ? '0 16px 40px rgba(26, 26, 46, 0.12)'
                : '0 4px 16px rgba(26, 26, 46, 0.05)',
            }}
          >
            {recommended && (
              <p
                style={{
                  margin: '0 0 12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent, #1a1a2e)',
                }}
              >
                Most popular
              </p>
            )}
            <h2 style={{ margin: '0 0 8px', fontSize: '1.35rem' }}>{plan.name}</h2>
            <p style={{ margin: '0 0 20px' }}>
              <strong style={{ fontSize: '2rem', letterSpacing: '-0.02em' }}>
                ${plan.pricePerMonth}
              </strong>{' '}
              <span style={{ color: 'var(--muted, #5c6470)' }}>/ month</span>
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted, #5c6470)' }}>
              {plan.features.map((f) => (
                <li key={f} style={{ marginBottom: 8 }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
