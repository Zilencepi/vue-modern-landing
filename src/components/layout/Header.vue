<template>
  <header class="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <span class="text-lg font-semibold">VueLanding</span>

      <nav class="space-x-6 text-sm">
        <a href="#features" class="hover:text-gray-900 dark:hover:text-gray-300">Features</a>
        <a href="#pricing" class="hover:text-gray-900 dark:hover:text-gray-300">Pricing</a>
        <a href="#testimonials" class="hover:text-gray-900 dark:hover:text-gray-300">Contact</a>
      </nav>

      <button
        @click="theme.toggleTheme"
        class="
          ml-6 px-3 py-1 border rounded-md
          bg-gray-200 text-gray-900 hover:bg-gray-300
          dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600
          transition-colors duration-150
        "
      >
        {{ theme.dark ? 'Light' : 'Dark' }} Mode
      </button>
    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'
const theme = useThemeStore()
</script>
