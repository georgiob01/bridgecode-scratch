export interface Plan {
  name: string
  pricePerMonth: number
  features: string[]
}

export const plans: Plan[] = [
  { name: 'Starter', pricePerMonth: 9, features: ['1 project', 'Community support'] },
  { name: 'Pro', pricePerMonth: 29, features: ['10 projects', 'Email support', 'Analytics'] },
  { name: 'Team', pricePerMonth: 79, features: ['Unlimited projects', 'Priority support', 'SSO'] },
]
