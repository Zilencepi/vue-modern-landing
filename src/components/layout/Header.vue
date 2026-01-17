<template>
  <header class="relative z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <span class="text-lg font-semibold">VueLanding</span>
    


      <nav class="hidden md:flex space-x-6 text-sm">
        <a href="#features" class="hover:text-gray-900 dark:hover:text-gray-300">Features</a>
        <a href="#pricing" class="hover:text-gray-900 dark:hover:text-gray-300">Pricing</a>
        <a href="#testimonials" class="hover:text-gray-900 dark:hover:text-gray-300">Testimonials</a>
      </nav>

<transition
  enter-active-class="transition duration-200 ease-out"
  enter-from-class="opacity-0 -translate-y-2"
  enter-to-class="opacity-100 translate-y-0"
  leave-active-class="transition duration-150 ease-in"
  leave-from-class="opacity-100 translate-y-0"
  leave-to-class="opacity-0 -translate-y-2"
>
  <div
    v-if="isOpen"
    class="absolute left-0 top-full w-full bg-white dark:bg-gray-900 border-t border-b dark:border-gray-800 md:hidden"
  >
    <div class="flex flex-col gap-4 px-6 py-6">
      <a href="#features" @click="closeMenu">Features</a>
      <a href="#pricing" @click="closeMenu">Pricing</a>
      <a href="#testimonials" @click="closeMenu">Testimonials</a>
      <a href="#" @click="closeMenu">Contact</a>
    </div>
  </div>
</transition>


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

<button
  class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
  @click="toggleMenu"
  aria-label="Toggle menu"
>
  <!-- Hamburger icon -->
  <svg
    v-if="!isOpen"
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>

  <!-- X icon -->
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>

    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'
import { ref } from 'vue'
const theme = useThemeStore()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}


const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}
</script>
