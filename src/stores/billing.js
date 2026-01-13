// Billing store
// Controls monthly / yearly pricing toggle

import { defineStore } from 'pinia'

export const useBillingStore = defineStore('billing', {
  state: () => ({
    yearly: false // false = monthly, true = yearly
  }),
  actions: {
    toggleBilling() {
      this.yearly = !this.yearly
    }
  }
})
