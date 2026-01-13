<template>
  <section id="hero" class="bg-white dark:bg-gray-900 py-24">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        {{ heroContent.title }}
      </h1>

      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        {{ heroContent.subtitle }}
      </p>

      <Button variant="primary" size="lg">
        {{ heroContent.ctaText }}
      </Button>
    </div>
  </section>
</template>


<script setup>
import { heroContent } from '@/data/hero'
import Button from '@/components/ui/Button.vue'
</script>
