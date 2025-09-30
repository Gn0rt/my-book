<!-- src/pages/Home.vue -->
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import ImgDetail from '@/assets/images/detailblogimg.png';
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})
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
      
      </div>


      <div class="mt-[230px] p-5">
        <!-- Welcome -->
        <h3 class="text-3xl font-semibold mt-10 mb-4">Welcome to MYBOOK's Shop</h3>
        <div class="flex flex-col items-center">
          <p class="text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem dolorem, quibusdam, nostrum culpa accusamus 
            magni sint rerum libero illum totam soluta error corporis facilis 
            quo et nobis natus modi, consectetur quod. Eligendi reprehenderit 
            quod nulla iste vitae reiciendis debitis eum eos atque veniam fugit 
            illum rerum corrupti ducimus ipsam numquam id tenetur error dicta at, 
            dignissimos explicabo nam? Reprehenderit, explicabo!
          </p>
          <div>
            <img :src="ImgDetail" alt="">
            <p class="text-center opacity-60">Image: Detail Img</p>
          </div>
        </div>

        <!-- Recommended -->
        <div>

        </div>

        <!-- People likes -->
          <div>
            
          </div>


      </div>
    </template>

  </DefaultLayout>
</template>


<style scoped>

</style>