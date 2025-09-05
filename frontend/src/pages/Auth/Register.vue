<script setup>
import ImgLogin from "@/assets/images/login.png";
import { ref, watch } from "vue";

const props = defineProps(['users']);
const userStorage = props.users;

const checkEmail = ref(false);
const checkPassword = ref(false);
const passwordConfirm = ref(false);


const errorEmail = ref('');
const errorPassword = ref('');
const errorPasswordConfirm = ref('');

const showPassword = ref(false);
const showPasswordConfirm = ref(false);


const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
}

const toggleShowPasswordConfirm = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value;
}


const formData = ref({
  emailLogin: '',
  passwordLogin: '',
  passwordConfirm: ''
})
// console.log(userStorage[0].email)

const handleSubmit = () => {
  if(!formData.value.emailLogin.trim()) {
    console.log("Email không được để trống!");
    checkEmail.value = true;
    errorEmail.value = "Email không được để trống!";
  }else if(!/^\S+@\S+\.\S+$/.test(formData.value.emailLogin)) {
    checkEmail.value = true;
    errorEmail.value = "Email sai định dạng!";
    console.log("Email sai định dạng");
  }

  if(!formData.value.passwordLogin.trim()) {
    checkPassword.value = true;
    errorPassword.value = "Password không được để trống!";
    console.log("Password không được để trống!");
  }
  if(!formData.value.passwordConfirm.trim()) {
    passwordConfirm.value = true;
    errorPasswordConfirm.value = "Password Confirm không được để trống!";
    console.log("Password Confirm không được để trống!");
  } else if(formData.value.passwordConfirm !== formData.value.passwordLogin) {
    passwordConfirm.value = true;
    errorPasswordConfirm.value = "Password Confirm không khớp!";
    console.log("Password Confirm không khớp!");
  }
}

watch(() => [ formData.value.emailLogin, formData.value.passwordLogin, formData.value.passwordConfirm], ([newEmail, newPassword, newPasswordConfirm]) => {
  if(newEmail.trim()) {
    checkEmail.value = false;
    errorEmail.value = '';
  }
  if(newPassword.trim()) {
    checkPassword.value = false;
    errorPassword.value = '';
  }
  if(newPasswordConfirm.trim()) {
    passwordConfirm.value = false;
    errorPasswordConfirm.value = '';
  }
})
</script>

<template>
  <div class="bg-white w-full h-full rounded-2xl shadow-xl overflow-hidden flex">
    <!-- Hình ảnh bên trái -->
    <div class="w-1/2 h-full">
      <img :src="ImgLogin" alt="Login" class="h-full w-full object-cover" />
    </div>

    <!-- Form đăng nhập bên phải -->
    <form @submit.prevent="handleSubmit" class="w-1/2 p-6 flex flex-col justify-center bg-white">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Đăng ký</h2>

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

      <!-- password -->
      <div class="flex items-center mb-5 flex-wrap relative">
        <input
          v-model="formData.passwordLogin"
          id="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder=" "
          class="inp ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
        <label for="password" class="text-label bg-white text-gray-300 absolute top-2 left-8 cursor-text">Mật khẩu</label>
        <button type="button" @click="toggleShowPassword" class="absolute bg-gray-200 py-2 px-4 right-0 rounded-lg">
          <font-awesome-icon :icon="showPassword ? ['fa', 'fa-eye-slash'] : ['fa', 'fa-eye'] " />
        </button>
        <p v-if="checkPassword" class="ml-4 text-xs text-red-500 w-full">{{ errorPassword }}</p>
      </div>

      <!-- password confirm -->
      <div class="flex items-center mb-5 flex-wrap relative">
        <input
          v-model="formData.passwordConfirm"
          id="passwordConfirm"
          :type="showPasswordConfirm ? 'text' : 'password'"
          placeholder=" "
          class="inp ml-3 flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
        />
        <label for="passwordConfirm"  class="text-label bg-white text-gray-300 absolute top-2 left-8 cursor-text">Nhập lại mật khẩu</label>
        <button type="button" @click="toggleShowPasswordConfirm" class="absolute bg-gray-200 py-2 px-4 right-0 rounded-lg">
          <font-awesome-icon :icon="showPasswordConfirm ? ['fa', 'fa-eye-slash'] : ['fa', 'fa-eye'] " />
        </button>
        <p v-if="passwordConfirm" class="ml-4 text-xs text-red-500 w-full">{{ errorPasswordConfirm }}</p>
      </div>

      <!-- Nút đăng ký -->
      <button
        type="submit"
        class="bg-[#FF971D] text-white p-3 rounded-lg hover:bg-[#faaa50] transition-colors duration-300 self-end"
      >
        Đăng ký
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
