<!-- src/pages/Home.vue -->
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';

</script>

<template>
  <DefaultLayout>
    <div class="absolute top-0 right-0 left-0 h-full">
      <div class="absolute top-20 left-20 z-10">
        <h1>Read and add your insight</h1>
        <p>Find Your Favorite Book And React It Here For Free</p>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="absolute top-0 right-0 -z-10">
        <img :src="MaskImg" alt="" class="h-[500px] w-[650px]" >
        <img :src="PersonModal" alt="" class="absolute top-[100px] right-[25%] h-[400px]">
      </div>
    </div>
  </DefaultLayout>
</template>


<style scoped>

</style>