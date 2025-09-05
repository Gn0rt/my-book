<!-- src/pages/Home.vue -->
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import BlogLayout from '@/layouts/BlogLayout.vue';
import BlogImage1 from '@/assets/images/blogImg1.png';
import BlogImage2 from '@/assets/images/blogImg2.png';
import BlogImage3 from '@/assets/images/blogImg3.png';

import { ref } from 'vue';

const blogs = ref([
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
    image: BlogImage1,
  },
    {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
    image: BlogImage2,
  },
    {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
    image: BlogImage3,
  },
    {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
    image: BlogImage3,
  },
    {
    id: 5,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
    image: BlogImage2,
  },
    {
    id: 6,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
    image: BlogImage1,
  }
]);

</script>

<template>
  <DefaultLayout>
    <div class="absolute top-0 right-0 left-0 h-full -z-10">
      <div class="absolute top-20 left-20 z-10 w-[600px]">
        <h1 class="text-[75px] font-bold uppercase">Blog my book</h1>
        <p class="text-[25px] font-light">Lightweight article where discussing matters relating to the book</p>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="absolute top-0 right-0 -z-10">
        <img :src="MaskImg" alt="" class="h-[500px] w-[650px]" >
        <img :src="PersonModal" alt="" class="absolute top-[100px] right-[25%] h-[400px]">
      </div>
    </div>

    <BlogLayout :blogs="blogs" />
  </DefaultLayout>

</template>


<style scoped>

</style>