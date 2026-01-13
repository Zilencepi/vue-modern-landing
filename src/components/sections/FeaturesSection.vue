<template>
  <section id="features" class="bg-gray-50 dark:bg-gray-800 py-24 text-gray-900 dark:text-gray-100">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">
          Everything you need to get started
        </h2>
        <p>
          A modern feature set designed for real-world projects.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import { features } from '@/data/features'
import FeatureCard from '@/components/ui/FeatureCard.vue'
import Container from '@/components/ui/Container.vue'
</script>
