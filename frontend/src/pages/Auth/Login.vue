<script setup>
import ImgLogin from "@/assets/images/login.png";
import { ref } from "vue";

const props = defineProps(['users']);
const userStorage = props.users;

const formData = ref({
  emailLogin: '',
  passwordLogin: ''
})
// console.log(userStorage[0].email)

const handleSubmit = () => {
  if(!formData.value.emailLogin.trim()) {
    console.log("Email không được để trống!");
  }else if(!/^\S+@\S+\.\S+$/.test(formData.value.emailLogin)) {
    console.log("Email sai định dạng");
  }

  if(!formData.value.passwordLogin.trim()) {
    console.log("Password không được để trống!");
  }
}
</script>

<template>
  <div class="bg-white w-full h-full rounded-2xl shadow-xl overflow-hidden flex">
    <!-- Hình ảnh bên trái -->
    <div class="w-1/2 h-full">
      <img :src="ImgLogin" alt="Login" class="h-full w-full object-cover" />
    </div>

    <!-- Form đăng nhập bên phải -->
    <form @submit.prevent="handleSubmit" class="w-1/2 p-6 flex flex-col justify-center bg-white">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Đăng nhập</h2>

      <!-- Tên đăng nhập -->
      <div class="flex items-center mb-5">
        <label class="w-32 text-gray-700">Email: </label>
        <input
          v-model="formData.emailLogin"
          type="text"
          class="ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
      </div>

      <!-- Mật khẩu -->
      <div class="flex items-center mb-6">
        <label class="w-32 text-gray-700">Mật khẩu:</label>
        <input
          v-model="formData.passwordLogin"
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
