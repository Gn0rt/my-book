<!-- src/pages/Admin/components/AdminSidebar.vue -->
<script setup>
const props = defineProps({
  items: { type: Array, required: true },
  activePath: { type: String, required: true }
})
</script>

<template>
  <aside class="admin-sidebar w-60 bg-gray-800 text-white flex flex-col">
    <div class="p-4 border-b border-gray-700">
      <h1 class="text-xl font-bold">Admin Panel</h1>
    </div>
    <nav class="flex-1 p-4 space-y-2">
      <router-link
        v-for="item in items"
        :key="item.path"
        :to="`/admin/${item.path}`"
        class="flex items-center px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-700"
        :class="{ 'bg-blue-600': activePath === item.path }"
      >
        <!-- Bạn có thể thêm icon ở đây (dùng FontAwesome, Heroicons...) -->
        <span>{{ item.name }}</span>
      </router-link>
    </nav>
  </aside>
</template>