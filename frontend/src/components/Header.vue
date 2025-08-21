<!-- src/components/Header.vue -->
<template>
  <header class="page-header">
    <Navbar />
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style scoped>
.page-header {
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}
</style>