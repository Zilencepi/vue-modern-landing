<template>
  <DefaultLayout>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <TestimonialsSection />
    <Footer />
     <BackToTopButton />


  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import Header from '@/components/layout/Header.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import Footer from '@/components/sections/Footer.vue'  // Footer sa Dark Mode
import BackToTopButton from '@/components/ui/BackToTopButton.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'VueLanding - Modern Vue 3 Landing Page',
  meta: [
    { name: 'description', content: 'A modern Vue 3 landing page template with dark mode, responsive design, and smooth scrolling.' },
    { name: 'keywords', content: 'Vue 3, landing page, Tailwind CSS, dark mode, template, responsive' },
    { property: 'og:title', content: 'VueLanding - Modern Vue 3 Landing Page' },
    { property: 'og:description', content: 'A modern Vue 3 landing page template with dark mode, responsive design, and smooth scrolling.' },
    { property: 'og:type', content: 'website' }
  ]
})

// Back to Top logic
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
