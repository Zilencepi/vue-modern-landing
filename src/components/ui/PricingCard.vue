<template>
  <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
    <h3 class="text-lg font-semibold mb-2 dark:text-gray-100">{{ name }}</h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
    <span class="text-2xl font-bold mb-4 dark:text-gray-100">{{ price }}</span>
    <ul class="mb-4 space-y-1 text-gray-700 dark:text-gray-300">
      <li v-for="(feature, idx) in features" :key="idx">• {{ feature }}</li>
    </ul>
    <button
      class="mt-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700
             dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-150"
    >
      Get Started
    </button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  price: String,  
  features: Array,
  yearly: Boolean,
  popular: Boolean
})
</script>
