<!-- src/pages/Home.vue -->
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlogSkeleton from '@/components/BlogSkeleton.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import BlogLayout from '@/layouts/BlogLayout.vue';
import { blogs } from '@/fakedata/blog.js';
import { ref, onMounted, computed } from 'vue';

const isLoaded = ref(false);
console.log("blogs:", blogs)
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 3000); // Giả lập thời gian tải dữ liệu
});

const searchBlog = ref('');
console.log(searchBlog);

const filteredBlogs = computed(() => {
  if (!searchBlog.value) {
    return blogs;
  }
  const query = searchBlog.value.toLowerCase().trim();
  return blogs.filter(blog =>
    blog.title.toLowerCase().includes(query) ||
    (blog.content && blog.content.toLowerCase().includes(query))
  );
});
</script>

<template>
  <DefaultLayout>
    <!-- Background hình ảnh -->
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
      <h1 class="text-5xl md:text-6xl lg:text-[75px] font-bold uppercase mb-4">Blog my book</h1>
      <p class="text-xl md:text-2xl font-light mb-8">
        Lightweight article where discussing matters relating to the book
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

    <div
      class="transition-opacity duration-300 ease-in"
      :class="{ 'opacity-0': !isLoaded, 'opacity-100': isLoaded }"
    >
      <BlogLayout v-if="isLoaded" :blogs="filteredBlogs" />
    </div>

    <!-- Hiển thị Skeleton Loading nếu chưa load -->
    <div v-if="!isLoaded" class="w-full px-6 pb-10 pt-10 bg-[#F5F6F8]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <BlogSkeleton v-for="n in 6" :key="n" />
        </div>
    </div>

  </DefaultLayout>

</template>


<style scoped>

</style>