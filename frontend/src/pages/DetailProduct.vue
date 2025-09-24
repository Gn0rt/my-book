<script setup>
import BgDetail from "@/assets/images/bgdetail.png";
import ProductImg from "@/assets/images/product1.png"
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(window.innerWidth < 640);
const updateMobileStatus = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  window.addEventListener("resize", updateMobileStatus);
})

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileStatus);
})
</script>
<template>
    <div>
        <img :src="BgDetail" alt="" class="h-[700px] w-full">
    </div>

    <div class="grid grid-cols-12 px-4 pb-5 absolute top-[15%] sm:top-[25%] gap-4">
        <div class="col-span-12 sm:col-span-8 bg-[#F5F6F8]">
            <div class="flex items-center ">
                <div class="">
                    <img :src="ProductImg" alt="" class="h-[350px] object-contain sm:h-[500px]">
                </div>
                <div class="mb-5 sm:mt-10 sm:mb-10">
                    <h2 
                    class="text-3xl sm:text-6xl my-2 text-wrap w-[600px] line-clamp-2"
                    :class="[isMobile ? 'truncate w-[200px]' : '']"
                    >Garis Waktu ssssssssssss ssssssssssssssssssssssssssssssssssss</h2>
                    <div class="text-xs sm:text-base">
                        <span >By Author</span>
                        <span>1 Juli 2016</span>
                    </div>
                    <p class="my-2 text-xs sm:text-base">Rating</p>
                    <div class="mt-7 sm:mt-[100px]">
                        <button class="bg-[#FF971D] text-white py-1 px-10 rounded-md text-sm sm:text-base">Mua ngay</button>
                        <button class="text-[#FF971D] border-[1px] border-[#FF971D] text-sm sm:text-base rounded-md py-1 px-10 mt-2 sm:ml-5 sm:mt-0">Them <font-awesome-icon :icon="['fa', 'cart-shopping']" /></button>
                    </div>
                </div>
            </div>

            <div class="p-3">
                <h3 class="text-4xl">
                   Sinopsis
                </h3>
                <p class="opacity-60 mt-2 text-justify">
                     Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Sed, laboriosam obcaecati tempora impedit
                      delectus, natus voluptatibus alias in dignissimos expedita 
                      aspernatur et. Illum atque asperiores temporibus assumenda 
                      earum sit praesentium impedit facilis ab at, maiores beatae 
                      dolore perspiciatis dignissimos corrupti magni blanditiis iste 
                      iure veritatis deleniti ipsum aliquam optio quis recusandae! 
                      Fugit maxime consequuntur non optio illum beatae voluptates 
                      earum repellendus nulla error. Illo ut quaerat placeat sequi 
                      dolor eius eligendi, expedita sint sapiente aliquam autem temporibus 
                      tempora architecto qui repellat facilis quia laboriosam maiores quo 
                      laudantium. Inventore, quasi, labore ipsam sed, laboriosam dicta 
                      dolorum delectus illum amet accusantium voluptates.
                </p>
            </div>
        </div>

        <div class="hidden sm:block sm:col-span-4">
            <h3 class="text-2xl text-white pt-2 pb-5 font-semibold">Tham khao</h3>

            <div class="flex items-center justify-center mt-5 bg-[#F5F6F8] object-contain px-4">
                <div>
                    <img :src="ProductImg" alt="" class="h-[300px] max-w-none">
                </div>
                <div>
                    <h4 class="text-2xl">All the light we cannot see</h4>
                    <p class="opacity-70">By Author</p>
                    <p class="text-[14px]">Rating</p>
                    <p class="opacity-50 text-xs line-clamp-4">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Itaque necessitatibus, 
                        reiciendis impedit voluptate voluptates culpa! Ex 
                        dolorum quisquam, reprehenderit sed tempora facere
                         omnis molestiae assumenda, atque distinctio magni,
                         ad eum.
                    </p>
                </div>
            </div>
            
            <div class="flex items-center justify-center mt-5 bg-[#F5F6F8] object-contain px-4">
                <div>
                    <img :src="ProductImg" alt="" class="h-[300px] max-w-none">
                </div>
                <div>
                    <h4 class="text-2xl">All the light we cannot see</h4>
                    <p class="opacity-70">By Author</p>
                    <p class="text-[14px]">Rating</p>
                    <p class="opacity-50 text-xs line-clamp-4">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Itaque necessitatibus, 
                        reiciendis impedit voluptate voluptates culpa! Ex 
                        dolorum quisquam, reprehenderit sed tempora facere
                         omnis molestiae assumenda, atque distinctio magni,
                         ad eum.
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-center mt-5 bg-[#F5F6F8] object-contain px-4">
                <div>
                    <img :src="ProductImg" alt="" class="h-[300px] max-w-none">
                </div>
                <div>
                    <h4 class="text-2xl">All the light we cannot see</h4>
                    <p class="opacity-70">By Author</p>
                    <p class="text-[14px]">Rating</p>
                    <p class="opacity-50 text-xs line-clamp-4">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Itaque necessitatibus, 
                        reiciendis impedit voluptate voluptates culpa! Ex 
                        dolorum quisquam, reprehenderit sed tempora facere
                         omnis molestiae assumenda, atque distinctio magni,
                         ad eum.
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-center mt-5 bg-[#F5F6F8] object-contain px-4">
                <div>
                    <img :src="ProductImg" alt="" class="h-[300px] max-w-none">
                </div>
                <div>
                    <h4 class="text-2xl">All the light we cannot see</h4>
                    <p class="opacity-70">By Author</p>
                    <p class="text-[14px]">Rating</p>
                    <p class="opacity-50 text-xs line-clamp-4">
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Itaque necessitatibus, 
                        reiciendis impedit voluptate voluptates culpa! Ex 
                        dolorum quisquam, reprehenderit sed tempora facere
                         omnis molestiae assumenda, atque distinctio magni,
                         ad eum.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <RouterLink to="/shop" class="sm:hidden absolute top-3 left-1 p-4 text-white">
        <font-awesome-icon :icon="['fa', 'arrow-left']" />
    </RouterLink>

</template>