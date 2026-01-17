<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <!-- Main sa flex-grow i display flex za vertikalno centriranje contenta -->
    <main class="flex-grow flex flex-col">
      <router-view class="flex-grow" />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/sections/Footer.vue'
</script>
