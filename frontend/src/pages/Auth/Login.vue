<!-- <script setup>
import ImgLogin from "@/assets/images/login.png"
</script>
<template>
    <div class="bg-[#FF971D] w-full h-[100vh] relative">
        <div class="bg-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center rounded-lg">
            <div>
                <img :src="ImgLogin" alt="" class="h-[500px] rounded-l-lg">
            </div>
            <form action="" class="ml-5 mr-5 w-[500px]">
                <div class="flex items-center mb-5">
                    <div class="w-[120px]">
                        <label for="">Tên đăng nhập: </label>
                    </div>
                    <div class=" ml-3">
                        <input type="text" name="" id="" class="outline-none p-1 border focus:border-[#FF971D] rounded-lg w-[300px]">    
                    </div>
                </div>
                <div class="flex items-center" > 
                    <div class="w-[120px]">
                        <label for="">Mật khẩu: </label>
                    </div>
                    <div class=" ml-3">
                        <input type="password" class="outline-none p-1 border focus:border-[#FF971D] rounded-lg w-[300px]">
                    </div>
                </div>

                <button class="bg-[#FF971D] text-white p-4 mt-5 float-right rounded-lg hover:bg-[#faaa50] duration-500">Đăng nhập</button>
            </form>
        </div>
    </div>

</template>
 -->

 <!-- PageLogin.vue -->
<script setup>
import ImgLogin from "@/assets/images/login.png";
</script>

<template>
  <div class="bg-white w-full h-full rounded-2xl shadow-xl overflow-hidden flex">
    <!-- Hình ảnh bên trái -->
    <div class="w-1/2 h-full">
      <img :src="ImgLogin" alt="Login" class="h-full w-full object-cover" />
    </div>

    <!-- Form đăng nhập bên phải -->
    <form class="w-1/2 p-6 flex flex-col justify-center bg-white">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Đăng nhập</h2>

      <!-- Tên đăng nhập -->
      <div class="flex items-center mb-5">
        <label class="w-32 text-gray-700">Tên đăng nhập:</label>
        <input
          type="text"
          class="ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
      </div>

      <!-- Mật khẩu -->
      <div class="flex items-center mb-6">
        <label class="w-32 text-gray-700">Mật khẩu:</label>
        <input
          type="password"
          class="ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
      </div>

      <!-- Nút đăng nhập -->
      <button
        type="submit"
        class="bg-[#FF971D] text-white p-3 rounded-lg hover:bg-[#faaa50] transition-colors duration-300 self-end"
      >
        Đăng nhập
      </button>
    </form>
  </div>
</template>
