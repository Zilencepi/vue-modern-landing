<template>
  <section class="min-h-screen flex flex-col justify-start py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">{{ title }}</h1>
      <p class="mb-4" v-for="(paragraph, idx) in content" :key="idx">{{ paragraph }}</p>

      <!-- Back to Home Button -->
      <button
        @click="$router.push('/')"
        class="mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-150"
      >
        Back to Home
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Terms of Service - VueLanding',
  meta: [
    { name: 'description', content: 'Read the terms of service of VueLanding template.' },
    { name: 'keywords', content: 'terms, Vue 3, template, landing page' },
    { property: 'og:title', content: 'Terms of Service - VueLanding' },
    { property: 'og:description', content: 'Read the terms of service of VueLanding template.' },
    { property: 'og:type', content: 'website' }
  ]
})

const title = 'Terms of Service'

const content = ref([
  'By using this website, you agree to comply with our terms and conditions.',
  'You are responsible for any actions you take while using our services.',
  'We reserve the right to update these terms at any time without prior notice.',
  'Continued use of the website after changes constitutes acceptance of the new terms.'
])
</script>
