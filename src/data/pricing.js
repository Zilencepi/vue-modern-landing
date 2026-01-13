// Pricing plans data
// EDIT THIS FILE to change pricing plans and prices
// Supports monthly and yearly billing

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'For individuals and small projects',
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: [
      'Basic features',
      'Email support',
      'Single user'
    ]
  },
  {
    name: 'Pro',
    description: 'Best for growing teams',
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      'All Starter features',
      'Priority support',
      'Up to 5 users'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      'All Pro features',
      'Dedicated support',
      'Unlimited users'
    ]
  }
]
