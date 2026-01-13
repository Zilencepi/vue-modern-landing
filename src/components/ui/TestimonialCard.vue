<template>
  <div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
    <p class="dark:text-gray-200">"{{ quote }}"</p>
    <h4 class="mt-4 font-semibold dark:text-gray-100">{{ name }}</h4>
    <span class="text-sm text-gray-600 dark:text-gray-300">{{ role }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  quote: String
})
</script>
