<template>
  <section id="testimonials" class="bg-gray-50 dark:bg-gray-800 py-24 text-gray-900 dark:text-gray-100">
    <Container>
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4 dark:text-gray-100">
          Loved by teams worldwide
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          See what people are saying about this template.
        </p>
      </div>

      <!-- Testimonials grid -->
      <div class="grid gap-8 md:grid-cols-3">
        <TestimonialCard
          v-for="(item, index) in testimonials"
          :key="index"
          :name="item.name"
          :role="item.role"
          :quote="item.quote"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import { testimonials } from '@/data/testimonials'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'
import Container from '@/components/ui/Container.vue'
</script>
