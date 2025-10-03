<!-- AdminLogin.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps(['admin']);
console.log(props)
const router = useRouter()
const formData = ref({ email: '', password: '' })
const error = ref('')

const handleSubmit = () => {
  const admin = props.admin.find(u => 
    u.email === formData.value.email && 
    u.password === formData.value.password &&
    u.role === 'admin' // ← chỉ cho admin
  )

  if (admin) {
    // ✅ Lưu vào session ADMIN
    localStorage.setItem('adminSession', JSON.stringify({
      email: admin.email,
      name: admin.name,
      role: admin.role
    }))
    router.push('/admin/dashboard')
  } else {
    error.value = 'Tài khoản không có quyền quản trị'
    alert("Tài khoản không có quyền quản trị")
  }
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Tài khoản</label>
      <input 
      v-model="formData.email"
      type="text"
      id="email"
      >
    </div>
    <div>
      <label for="password">Mat khau</label>
      <input 
      v-model="formData.password"
      type="text"
      id="password"
      >
    </div>

    <button type="submit">
      Đăng nhập
    </button>
  </form>
</template>