<template>
  <div class="default-layout flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>



</style>