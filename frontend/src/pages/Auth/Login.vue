<script setup>
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

