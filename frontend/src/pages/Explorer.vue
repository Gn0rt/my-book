<!-- src/pages/Home.vue -->
<template>
  <DefaultLayout>
    <div class="home">
      <h1>🏠 Trang Chủ</h1>
      <p>Xin chào! Đây là trang Home được hiển thị trong DefaultLayout.</p>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>