<!-- src/components/Navbar.vue -->
 <script setup>
 import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

 const menuItems = [
   { name: 'Explorer', path: '/' },
   { name: 'Shop', path: '/shop' },
   { name: 'Blog', path: '/blog' },
 ];
 // Ref để tham chiếu đến các phần tử menu
const tabRefs = ref([])

// Vị trí và kích thước của gạch dưới
const underlineStyle = ref({
  left: 0,
  width: 0,
})
  console.log('Route changed to:', route.path)
  console.log('Menu items:', tabRefs.value)
const updateUnderline = () => {
  nextTick(() => {
    const activeIndex = menuItems.findIndex(item => item.path === route.path)
    const activeTab = tabRefs.value[activeIndex]
    if (activeTab) {
      underlineStyle.value = {
        left: activeTab.offsetLeft,
        width: activeTab.clientWidth,
      }
    }
  })
}
// Xử lý resize
const handleResize = () => {
  updateUnderline()
}

onMounted(() => {
  updateUnderline()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
// Cập nhật khi route thay đổi
watch(
  () => route.path,
  () => {
    updateUnderline()
  }
)
</script>
<template>
  <nav class="navbar flex justify-between items-center p-4 bg-transparent">
    <div class="nav-brand">
      <router-link to="/" class="relative ml-5 ">
        MY<span class="font-semibold">BOOK</span>
        <span class="absolute top-0 w-[1px] h-5 mx-2 bg-red-600"></span>
      </router-link>
      <router-link to="/" class="ml-4"><font-awesome-icon :icon="['fa', 'cart-shopping']" /></router-link>

    </div>
    <ul class="nav-menu flex items-center gap-8 list-none mr-5 relative">
      <li v-for="(item, index) in menuItems" :key="item.name" ref="tabRefs" class="relative">
        <router-link 
        :to="item.path" 
        class="text-white tracking-wider font-semibold relative transition-colors duration-200 hover:text-gray-300"
        @click="updateUnderline"
        >{{ item.name }}</router-link>
      </li>
      <li class="bg-white rounded-3xl tracking-wider font-semibold hover:bg-slate-400 duration-300">
        <router-link to="/login" class="px-7 py-2 inline-block">Login</router-link>
      </li>
      <!-- Gạch dưới trượt -->
      <span
        class="absolute bottom-0 h-[2px] bg-white transition-all duration-300 rounded-md"
        :style="{ left: underlineStyle.left + 'px', width: underlineStyle.width + 'px' }"
      ></span>
    </ul>
  </nav>
</template>

