<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import Sidebar from '@/components/Sidebar.vue';
import SidebarMobile from '@/components/SidebarMobile.vue';
import ShopLayout from '@/layouts/ShopLayout.vue';
// import {products} from '@/fakedata/products.js';
import { computed, ref, onMounted } from 'vue';
import BlogSkeleton from '@/components/BlogSkeleton.vue';
import { productApi, Product } from '../api/product.api';
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})
const products = ref<Product[]>([]);
const loading = ref(false);
const loadProducts = async () => {
  loading.value = true;
  try {
    const response = await productApi.getAll();
    products.value = response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    loading.value = false;
  }
};
//trả về một mảng thể loại
const uniqueGenres = computed(() => {
  const genres = products.value
    .map(p => (p.genre || '').trim())
    .filter(genre => genre); // loại bỏ genre rỗng
  return ['All',...new Set(genres)];
})
//thể loại được chọn mặc định là thể loại đầu tiên trong mảng
const selectedGenre = ref('All');
//đếm số sản phẩm của thể loại được chọn
const currentProducts = computed(() => {
  if (selectedGenre.value.toLocaleLowerCase().trim() === 'All'.toLocaleLowerCase().trim()) {
    return products.value; // Trả về tất cả sản phẩm
  }
  const targetGenre = selectedGenre.value.trim().toLowerCase();
  return products.value.filter(book => {
    const bookGenre = (book.genre || '').trim().toLowerCase();
    return bookGenre === targetGenre;
  });
  // return products.value.filter(book => book.genre === selectedGenre.value);
});

//xuwr lý sự kiện chọn thể loại
const handleSelectGenre = (genre: string) => {
  selectedGenre.value = genre;
  console.log("Selected genre:", selectedGenre.value);
  console.log("currentBooks after selection:", currentProducts.value);
};

onMounted(() => {
  loadProducts();
});
</script>

<template>
  <DefaultLayout>
    <template #default="{ isMobile }">
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
          <BlogSkeleton v-if="loading" />
          <ShopLayout v-else :books="currentProducts" :genre="selectedGenre" />
        </div>

      </div>
    </template>


  </DefaultLayout>
</template>



<style scoped>

</style>