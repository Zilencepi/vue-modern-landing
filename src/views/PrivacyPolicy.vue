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
  title: 'Privacy Policy - VueLanding',
  meta: [
    { name: 'description', content: 'Read the privacy policy of VueLanding template.' },
    { name: 'keywords', content: 'privacy, Vue 3, template, landing page' },
    { property: 'og:title', content: 'Privacy Policy - VueLanding' },
    { property: 'og:description', content: 'Read the privacy policy of VueLanding template.' },
    { property: 'og:type', content: 'website' }
  ]
})

const title = 'Privacy Policy'

const content = ref([
  'We value your privacy and strive to protect your personal information.',
  'All data collected is used solely to improve your experience on our website.',
  'We do not share your information with third parties without your consent.',
  'You can contact us anytime for questions regarding your data and privacy.'
])
</script>
