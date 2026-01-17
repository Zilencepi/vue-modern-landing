<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <!-- Main raste da popuni ekran i gura footer na dno -->
    <main class="flex-1 flex flex-col">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/sections/Footer.vue'
</script>
