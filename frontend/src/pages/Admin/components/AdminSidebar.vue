<script setup>

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  activePath: {
    type: String,
    required: true
  }
});
</script>

<template>
  <aside class="admin-sidebar">
    <nav>
      <router-link
        v-for="item in items"
        :key="item.path"
        :to="`/admin/${item.path}`"
        class="menu-item"
        :class="{ active: activePath === item.path }"
      >
        {{ item.name }}
      </router-link>
    </nav>
  </aside>
</template>
<style scoped>
.menu-item {
  display: block;
  padding: 12px;
  text-decoration: none;
  color: #333;
}
.menu-item.active {
  background-color: #007bff;
  color: white;
}</style>