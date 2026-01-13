<template>
  <button
    class="rounded-lg font-medium px-6 py-3
           bg-gray-900 text-white hover:bg-gray-700
           dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
           transition-colors duration-150"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
// Button component
// Dark mode handled by Tailwind 'dark:' classes
// No reactive :style or computed required
</script>
