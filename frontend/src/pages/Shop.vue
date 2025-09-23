<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import Sidebar from '@/components/Sidebar.vue';
import SidebarMobile from '@/components/SidebarMobile.vue';
import ShopLayout from '@/layouts/ShopLayout.vue';
import {products} from '@/fakedata/products.js';
import { computed, ref, onMounted } from 'vue';
import BlogSkeleton from '@/components/BlogSkeleton.vue';
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})
//trả về một mảng thể loại
const uniqueGenres = computed(() => {
  return ['All',...new Set(products.map(product => product.genre))];
})
//thể loại được chọn mặc định là thể loại đầu tiên trong mảng
const selectedGenre = ref('All');
console.log("uniquegenre: ",uniqueGenres);
console.log("genre: ",selectedGenre);

//đếm số sản phẩm của thể loại được chọn
const currentProducts = computed(() => {
  if (selectedGenre.value.toLocaleLowerCase().trim() === 'All'.toLocaleLowerCase().trim()) {
    return products; // ✅ Trả về tất cả sản phẩm
  }
  return products.filter(book => book.genre === selectedGenre.value);
});
console.log("currentBooks: ",currentProducts);

//xuwr lý sự kiện chọn thể loại
const handleSelectGenre = (genre) => {
  selectedGenre.value = genre;
  console.log("Selected genre:", selectedGenre.value);
  console.log("currentBooks after selection:", currentProducts.value);
};

const isLoaded = ref(false);
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 3000); // Giả lập thời gian tải dữ liệu
});
</script>

<template>
  <DefaultLayout>
    <template #default="{isMobile}">

      <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <img :src="MaskImg" alt="" class="absolute top-0 right-0 h-[500px] w-[650px] object-cover" />
        <img
          :src="PersonModal"
          alt=""
          class="absolute top-[100px] sm:right-[10%] right-0 h-[400px] w-auto object-contain"
        />
      </div>

      <!-- Nội dung chữ -->
      <div class="relative sm:mt-0 mt-[100px] z-10 max-w-4xl text-center lg:text-left sm:px-20 sm:py-30 px-5">
        <h1 
        class="text-5xl font-bold uppercase mb-4"
        :class="[isMobile ? 'text-white': 'text-black, text-[75px]']"
        
        >read and add your insight</h1>
        <p class="text-xl sm::text-2xl sm:text-black text-white font-light mb-8 capitalize">
          find your favorite book and read it here for free
        </p>
        <div class="flex justify-center lg:justify-start">
          <input
            type="text"
            v-model="searchBlog"
            placeholder="Search articles..."
            class="px-4 py-2 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="[isMobile ? 'hidden' : '']"
          />
        </div>
      </div>

      <div 
        class="grid grid-cols-12 bg-[#F5F6F8] mt-[100px]"
      >
        <div class="hidden sm:block sm:col-span-2 w-full my-10 pl-5">
          <Sidebar
            :genres="uniqueGenres"
            :selectedGenre="selectedGenre"
            @selectGenre="handleSelectGenre"
          />
        </div>

        <div class="col-span-12 sm:col-span-10 w-full my-10 pr-5 pl-5 sm:pl-0">
          <div class="flex justify-end">
            <SidebarMobile
              v-if="isMobile"
              :genres="uniqueGenres"
              :selectedGenre="selectedGenre"
              @selectGenre="handleSelectGenre"
            />
          </div>
          <ShopLayout v-if="isLoaded" :books="currentProducts" :genre="selectedGenre" />
          <BlogSkeleton v-if="!isLoaded" />
        </div>

      </div>
    </template>


  </DefaultLayout>
</template>



<style scoped>

</style>