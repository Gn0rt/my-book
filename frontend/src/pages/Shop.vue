<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import Sidebar from '@/components/Sidebar.vue';
import ShopLayout from '@/layouts/ShopLayout.vue';
import {products} from '@/fakedata/products.js';
import { computed, ref } from 'vue';

const uniqueGenres = computed(() => {
  return [...new Set(products.map(product => product.genre))];
})
const selectedGenre = ref(uniqueGenres.value[0] || 'All');
console.log("uniquegenre: ",uniqueGenres);

console.log("genre: ",selectedGenre);
</script>

<template>
  <DefaultLayout>
    <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <img :src="MaskImg" alt="" class="absolute top-0 right-0 h-[500px] w-[650px] object-cover" />
      <img
        :src="PersonModal"
        alt=""
        class="absolute top-[100px] right-[10%] h-[400px] w-auto object-contain"
      />
    </div>

    <!-- Nội dung chữ -->
    <div class="relative z-10 max-w-4xl pb-20 pt-20 px-6 text-center lg:text-left lg:px-20 lg:pt-30">
      <h1 class="text-5xl md:text-6xl lg:text-[75px] font-bold uppercase mb-4">read and add your insight</h1>
      <p class="text-xl md:text-2xl font-light mb-8 capitalize">
        find your favorite book and read it here for free
      </p>
      <div class="flex justify-center lg:justify-start">
        <input
          type="text"
          v-model="searchBlog"
          placeholder="Search articles..."
          class="px-4 py-2 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div class="grid grid-cols-12 bg-[#F5F6F8]">
      <div class="col-span-2 w-full mt-10 pl-5">
        <Sidebar
          :genres="uniqueGenres"
          :selectedGenre="selectedGenre"
        />
      </div>

      <div class="col-span-10 w-full h-[200px] bg-red-400 mt-10 pr-5">
        <ShopLayout />
      </div>

    </div>

  </DefaultLayout>
</template>



<style scoped>

</style>