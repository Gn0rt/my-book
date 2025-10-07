<!-- src/components/Navbar.vue -->
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useAuth } from '@/composable/useAuth'

const {currentUser, logout} = useAuth();

const isMobile = ref(window.innerWidth < 640);
const updateMobileStatus = () => {
  isMobile.value = window.innerWidth < 640;
};

const isMenuOpen = ref(false);

const route = useRoute()

const menuItems = [
   { name: 'Explorer', path: '/' },
   { name: 'Shop', path: '/shop' },
   { name: 'Blog', path: '/blog' },
   { name: 'About us', path: '/about'}
 ];
 // Ref để tham chiếu đến các phần tử menu
const tabRefs = ref([])

// Vị trí và kích thước của gạch dưới
const underlineStyle = ref({
  left: 0,
  width: 0,
});
// Dropdown
const isDropdownOpen = ref(false)
const userMenuRef = ref(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Đóng dropdown khi click ngoài
const handleClickOutside = (event) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}
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
const closeMenuOnClickOutside = (event) => {
  const menu = document.querySelector('.mobile-menu-wrapper') // ta sẽ bọc menu vào 1 wrapper
  if (menu && !menu.contains(event.target)) {
    isMenuOpen.value = false
  }
}
// Xử lý resize
const handleResize = () => {
  updateUnderline()
}

onMounted(() => {
  updateUnderline();document.addEventListener('click', closeMenuOnClickOutside)
  window.addEventListener('resize', handleResize);
  window.addEventListener("resize", updateMobileStatus);
  document.addEventListener('click', closeMenuOnClickOutside);
  document.addEventListener('click', handleClickOutside)

})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener("resize", updateMobileStatus);
  document.removeEventListener('click', closeMenuOnClickOutside);
  document.removeEventListener('click', handleClickOutside)


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
  <!-- PC -->
  <nav v-if="!isMobile" class="navbar flex justify-between items-center p-4 bg-transparent">
    <div class="nav-brand text-[16px] flex">
      <router-link to="/" class="relative ml-5 ">
        MY<span class="font-semibold">BOOK</span>
        <span class="inline-block absolute top-0 w-[1px] h-5 mx-2 bg-red-600"></span>
      </router-link>
      <router-link to="/cart" class="ml-4"><font-awesome-icon :icon="['fa', 'cart-shopping']" /></router-link>
    </div>
    <ul class="nav-menu flex items-center gap-8 list-none mr-5 relative text-[16px]">
      <li v-for="(item, index) in menuItems" :key="item.name" ref="tabRefs" class="relative">
        <router-link 
        :to="item.path" 
        class="text-white tracking-wider font-semibold relative transition-colors duration-200 hover:text-gray-300"
        @click="updateUnderline"
        >{{ item.name }}</router-link>
      </li>
      
      <li class="relative" ref="userMenuRef">
        <div
          v-if="currentUser"
          class="flex items-center gap-2 cursor-pointer text-white hover:text-gray-300 font-semibold"
          @click="toggleDropdown"
        >
          <span>{{ currentUser.name }}</span>
          <svg
            class="w-4 h-4 ml-1 transition-transform"
            :class="{ 'rotate-180': isDropdownOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

        <router-link
          v-else
          to="/login"
          class="px-4 py-2 bg-white text-gray-800 rounded-3xl font-semibold hover:bg-slate-200 transition"
        >
          Login
        </router-link>

        <!-- Dropdown menu -->
        <div
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-10"
        >
          <router-link
            to="/profile"
            class="block px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </router-link>
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Đăng xuất
          </button>
        </div>
      </li>

      <!-- Gạch dưới trượt -->
      <span
        class="absolute bottom-0 h-[2px] bg-white transition-all duration-300 rounded-md"
        :style="{ left: underlineStyle.left + 'px', width: underlineStyle.width + 'px' }"
      ></span>
    </ul>
  </nav>

  <!-- Mobile -->
  <nav v-if="isMobile" class="navbar flex justify-between items-center p-2 bg-transparent">
    <div class="nav-brand text-xs flex">
      <router-link to="/" class="relative ">
        MY<span class="font-semibold">BOOK</span>
      </router-link>
      <router-link to="/cart" class="ml-4"><font-awesome-icon :icon="['fa', 'cart-shopping']" /></router-link>
    </div>
    <ul>
      <li class="relative z-20 p-1 mobile-menu-wrapper">
        <font-awesome-icon :icon="['fa', 'bars']"
          @click="isMenuOpen = !isMenuOpen"
        />
        <ul 
          class="bg-white absolute right-0 top-9 text-right"
          :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
        >
          <li v-for="item in menuItems" :key="item.name" class="text-[14px] p-2">
            <router-link :to="item.path" class="py-1 inline-block w-[100px] active:bg-slate-400" tabindex="0">
              {{ item.name }}
            </router-link>
          </li>
          <li class="text-[14px] p-2">
            <router-link v-if="currentUser" to="/profile" class="">Hello, {{ currentUser.name }}</router-link>
            <router-link v-else to="/login" class="">Login</router-link>
         </li>
         <li v-if="currentUser" class="text-[14px] p-2 ">
            <button @click="logout" class="py-1 inline-block w-[100px] active:bg-slate-400 text-right" tabindex="0">
              Dang xuat
            </button>
         </li>
        </ul>
        <div 
          class="arrow-down absolute -bottom-1"
          :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}"       
        ></div>
      </li>
    </ul>
  </nav>
</template>

