<script setup>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminHeader from '../components/AdminHeader.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const menuItems = [
  { name: 'Dashboard', path: 'dashboard' },
  { name: 'User', path: 'user' },
  { name: 'Product', path: 'product' },
]

const route = useRoute()
//computed → sẽ tự động cập nhật khi route thay đổi
const currentPath = computed(() => {
  return route.path.split('/').pop()
})
</script>

<template>
  <div class="admin-layout flex flex-col h-screen bg-gray-100">
    <!-- Header -->
    <AdminHeader />

    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <AdminSidebar :items="menuItems" :active-path="currentPath" />

      <!-- Nội dung chính -->
      <main class="flex-1 p-6 bg-white overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  font-family: 'Inter', sans-serif;
}
</style>