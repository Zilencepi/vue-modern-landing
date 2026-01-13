<template>
  <div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
    <h3 class="font-semibold mb-2 dark:text-gray-100">{{ title }}</h3>
    <p class="dark:text-gray-200">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

