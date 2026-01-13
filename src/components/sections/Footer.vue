<template>
  <footer class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

      <!-- Brand / Info -->
      <div>
        <span class="font-bold text-xl">VueLanding</span>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          The ultimate Vue 3 Tailwind template for modern projects.
        </p>
      </div>

      <!-- Links -->
      <div class="flex flex-col md:items-end space-y-2">
        <router-link to="/privacy-policy" class="hover:underline">
          Privacy Policy
        </router-link>
        <router-link to="/terms-of-service" class="hover:underline">
          Terms of Service
        </router-link>


      </div>
    </div>

    <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
      © {{ new Date().getFullYear() }} VueLanding. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// Footer with legal links and Back to Top button
</script>
