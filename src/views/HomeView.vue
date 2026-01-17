<template>
  <HeroSection />
  <FeaturesSection />
  <PricingSection />
  <TestimonialsSection />
  <BackToTopButton />
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import BackToTopButton from '@/components/ui/BackToTopButton.vue'

import { useHead } from '@vueuse/head'
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'VueLanding - Modern Vue 3 Landing Page',
  meta: [
    { name: 'description', content: 'A modern Vue 3 landing page template with dark mode, responsive design, and smooth scrolling.' },
    { name: 'keywords', content: 'Vue 3, landing page, Tailwind CSS, dark mode, template, responsive' }
  ]
})

// Back to Top logic
const showButton = ref(false)
const handleScroll = () => { showButton.value = window.scrollY > 300 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
