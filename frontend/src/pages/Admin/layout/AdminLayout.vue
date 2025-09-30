<script setup>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminHeader from '../components/AdminHeader.vue'
import { useRoute } from 'vue-router';
const menuItems = [
  { name: 'Dashboard', path: 'dashboard' },
  { name: 'User', path: 'user' },
  { name: 'Product', path: 'product' },
]
// Lấy route hiện tại
const route = useRoute();
// Xác định item đang active dựa trên đường dẫn con (sau /admin/)
const currentPath = route.path.split('/').pop(); // ví dụ: 'user', 'dashboard'
</script>

<template>

  <div class="admin-layout">
     <AdminHeader /> 
     <AdminSidebar
      :items="menuItems"
      :active-path="currentPath"
    />
    <main> 
        <router-view /> 
    </main>

  </div>

</template>
