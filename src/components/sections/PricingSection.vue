<template>
  <section id="pricing" class="bg-white dark:bg-gray-900 py-24 text-gray-900 dark:text-gray-100">
    <Container>
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4 dark:text-gray-100">
          Simple, transparent pricing
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Choose the plan that fits your needs.
        </p>
      </div>

      <!-- Billing toggle -->
      <div class="flex justify-center items-center gap-4 mb-16">
        <span class="text-sm dark:text-gray-300">Monthly</span>
        <button
          @click="billing.toggleBilling"
          class="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative"
        >
          <span
            class="absolute top-1 left-1 w-4 h-4 bg-white dark:bg-gray-300 rounded-full transition-transform duration-150"
            :class="billing.yearly ? 'translate-x-6' : ''"
          ></span>
        </button>
        <span class="text-sm dark:text-gray-300">Yearly</span>
      </div>

      <!-- Pricing cards -->
      <div class="grid gap-8 md:grid-cols-3">
        <PricingCard
          v-for="(plan, index) in pricingPlans"
          :key="index"
          :name="plan.name"
          :description="plan.description"
          :price="(billing.yearly ? plan.yearlyPrice : plan.monthlyPrice).toString()"
          :features="plan.features"
          :yearly="billing.yearly"
          :popular="plan.popular"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from '@/components/ui/Container.vue'
import PricingCard from '@/components/ui/PricingCard.vue'
import { pricingPlans } from '@/data/pricing'
import { useBillingStore } from '@/stores/billing'

const billing = useBillingStore()
</script>
