<template>
  <transition name="fade-bounce">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-4 rounded-full shadow-lg
             bg-gray-900 bg-opacity-80 text-white backdrop-blur-sm
             dark:bg-white dark:bg-opacity-80 dark:text-gray-900
             hover:scale-110 hover:shadow-2xl
             transform transition-all duration-300 z-50"
      aria-label="Back to top"
    >
      ↑
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Fade in + bounce animation */
.fade-bounce-enter-active,
.fade-bounce-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-bounce-enter-from,
.fade-bounce-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-bounce-enter-to,
.fade-bounce-leave-from {
  opacity: 1;
  transform: translateY(0);
}
/* Bounce effect on enter */
.fade-bounce-enter-active {
  animation: bounceIn 0.4s;
}
@keyframes bounceIn {
  0% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(-10px);
  }
  70% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
