<template>
  <div class="default-layout flex flex-col min-h-screen">
    <Header />
    <main class="main-content flex-1">
      <slot :isMobile="isMobile" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted, onUnmounted } from 'vue';
const isMobile = ref(window.innerWidth < 640);
console.log("Width: ", isMobile.value)

const updateMobileStatus = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  window.addEventListener("resize", updateMobileStatus);
})

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileStatus);
})
</script>
