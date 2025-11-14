<script setup lang="ts">
import { reactive, ref } from "vue";
import PageLogin from "./Login.vue";
import PageRegister from "./Register.vue";

const isFlipped = ref(false);

</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-[#FF971D] p-4">
    <!-- Container 3D -->
    <div class="relative w-[800px] h-[700px] [perspective:1000px]">
      <!-- Flip Container -->
      <div
        class="relative w-full h-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
        :class="{ 'rotate-y-180': isFlipped }"
      >
        <!-- Mặt trước: Đăng nhập -->
        <div
          class="absolute inset-0 [backface-visibility:hidden]"
        >
          <PageLogin  />
          <!-- Nút chuyển sang Đăng ký -->
          <div class="absolute sm:bottom-6 right-6 bottom-[60px]">
            <button
              @click="isFlipped = true"
              class="text-sm underline hover:text-gray-200 transition-colors"
            >
              Bạn chưa có tài khoản? <span class="font-medium">Đăng ký</span>
            </button>
          </div>
        </div>

        <!-- Mặt sau: Đăng ký -->
        <div
          class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <PageRegister />
          <!-- Nút quay lại Đăng nhập -->
          <div class="absolute bottom-6 right-6">
            <button
              @click="isFlipped = false"
              class="text-sm underline hover:text-gray-200 transition-colors"
            >
              Đã có tài khoản? <span class="font-medium">Đăng nhập</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>