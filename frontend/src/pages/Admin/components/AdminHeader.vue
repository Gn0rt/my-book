<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const adminSession = ref(null);
onMounted(() => {
  const session = localStorage.getItem('adminSession');
  if (session) {
    adminSession.value = JSON.parse(session);
  }
});
const adminName = computed(() => adminSession.value?.name);
const isAuthenticated = computed(() => !!adminSession.value);
const handleLogout = () => {
  localStorage.removeItem('adminSession');
  adminSession.value = null;
  router.push('/admin-login');
};

</script>

<template>
  <header class="bg-white shadow-sm h-16 flex items-center justify-between px-6">
    <div class="text-xl font-semibold text-gray-800">Quản trị hệ thống</div>
    <div class="flex items-center gap-4">
      <span class="text-gray-600">Xin chào, {{ adminName }}</span>
      <button
        @click="handleLogout"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Đăng xuất
      </button>
    </div>
  </header>
</template>