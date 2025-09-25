<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import Cart from '@/assets/images/cart.png';
import CartLayout from '@/layouts/CartLayout.vue';
</script>
<template>
    <DefaultLayout>
        <template #default="{isMobile}">
            <!-- Background hình ảnh -->
            <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <img :src="MaskImg" alt="" class="absolute top-0 right-0 h-[500px] w-[650px] object-cover" />
                <img
                :src="Cart"
                alt=""
                class="absolute top-[100px] sm:right-[10%] right-0 h-[400px] w-auto object-contain"
                />
            </div>

            <!-- Nội dung chữ -->
            <div class="relative z-10 max-w-4xl pb-20 pt-20 px-6 text-center lg:text-left lg:px-20 lg:pt-30">
                <h1 
                class="text-5xl font-bold uppercase mb-4"
                :class="[isMobile ? 'text-white': 'text-black, text-[75px]']"
                >Your Cart</h1>
                <p class="text-xl sm::text-2xl sm:text-black text-white font-light mb-8 capitalize">
                Have a great day and enjoy your shopping!
                </p>
            </div>

            <div class="mt-[150px]">
                <CartLayout />
            </div>
        </template>
    </DefaultLayout>
</template>