<script setup lang="ts">
import ImgLogin from "@/assets/images/login.png";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { userApi, LoginDto } from "../../api/user.api";

const router = useRouter();

const checkEmail = ref(false);
const checkPassword = ref(false);

const errorEmail = ref('');
const errorPassword = ref('');
const apiError = ref('');

const formData = ref({
  emailLogin: '',
  passwordLogin: ''
})

const showPassword = ref(false);
const loading = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
}

const handleSubmit = async () => {
    // Reset lỗi
  checkEmail.value = false;
  checkPassword.value = false;
  apiError.value = '';
  let hasError = false;
  
  if(!formData.value.emailLogin.trim()) {
    console.log("Email không được để trống!");
    checkEmail.value = true;
    errorEmail.value = "Email không được để trống!";
    hasError = true;
  }else if(!/^\S+@\S+\.\S+$/.test(formData.value.emailLogin)) {
    checkEmail.value = true;
    errorEmail.value = "Email sai định dạng!";
    console.log("Email sai định dạng");
    hasError = true;
  }

  if(!formData.value.passwordLogin.trim()) {
    checkPassword.value = true;
    errorPassword.value = "Password không được để trống!";
    console.log("Password không được để trống!");
    hasError = true;
  }
  if(hasError) return;

  //goi api
  loading.value = true;
  try {
    const info: LoginDto = {
      email: formData.value.emailLogin,
      password: formData.value.passwordLogin
    };

    const response = await userApi.login(info);
    const user = response.data;
    // Lưu user vào localStorage (không có password)
    localStorage.setItem('userSession', JSON.stringify(user));
    router.push('/'); // Chuyển hướng sau khi đăng nhập thành công
  }
  catch(error) {
    apiError.value = 'Email hoặc mật khẩu không đúng!';
    console.error('Login failed:', error);
  }finally {
    loading.value = false;
  }
}

watch(() => [ formData.value.emailLogin, formData.value.passwordLogin], ([newEmail, newPassword]) => {
  if(newEmail.trim()) {
    checkEmail.value = false;
    errorEmail.value = '';
  }
  if(newPassword.trim()) {
    checkPassword.value = false;
    errorPassword.value = '';
  }
  apiError.value = '';
})

</script>

<template>
  <div class="bg-white w-full sm:h-full rounded-2xl shadow-xl sm:overflow-hidden sm:flex">
    <!-- Hình ảnh bên trái -->
    <div class="sm:w-1/2 sm:h-full">
      <img :src="ImgLogin" alt="Login" class="sm:h-full h-[300px] w-full object-cover " />
    </div>

    <!-- Form đăng nhập bên phải -->
    <form @submit.prevent="handleSubmit" class="sm:w-1/2 p-6 flex flex-col justify-center bg-white">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Đăng nhập</h2>

      <!-- Tên đăng nhập -->
      <div class="flex items-center mb-5 flex-wrap relative">
        <input
          v-model="formData.emailLogin"
          id="emailLogin"
          type="text"
          placeholder=" "
          class="inp ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
        <label for="emailLogin" class="text-label bg-white text-gray-300 absolute top-2 left-8 cursor-text">Email</label>
        <p v-if="checkEmail" class="ml-4 text-xs text-red-500 w-full">{{ errorEmail }}</p>
      </div>

      <!-- Mật khẩu -->
      <div class="flex items-center mb-6 mt-5 flex-wrap relative">
        <input
          v-model="formData.passwordLogin"
          id="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder=" "
          class="inp ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
        <label for="password"class="text-label bg-white text-gray-300 absolute top-2 left-8 cursor-text">Mật khẩu</label>
        <button type="button" @click="toggleShowPassword" class="absolute bg-gray-200 py-2 px-4 right-0 rounded-lg mr-[1px]">
          <font-awesome-icon :icon="showPassword ? ['fa', 'fa-eye-slash'] : ['fa', 'fa-eye'] " />
        </button>
        <p v-if="checkPassword" class="ml-4 text-xs text-red-500 w-full">{{ errorPassword }}</p>
      </div>

      <!-- Lỗi API -->
      <p v-if="apiError" class="text-red-500 text-sm mb-4">{{ apiError }}</p>

      <!-- Nút đăng nhập -->
      <button
        type="submit"
        :disabled="loading"
        class="bg-[#FF971D] text-white p-3 rounded-lg hover:bg-[#faaa50] transition-colors duration-300 self-end"
      >
        {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.text-label {
  transition: transform 0.2s ease, color 0.2s;
}
.inp:focus+.text-label {
  transform: translateY(-22px);
  color: #000;
}
/* Hiển thị label ở trên nếu input có nội dung (không rỗng) */
.inp:not(:placeholder-shown) + .text-label {
  transform: translateY(-22px);
  color: #000;
}

</style>
