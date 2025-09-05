
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export function useAuth() {
  const currentUser = ref(null)
  const router = useRouter()

  // Kiểm tra đăng nhập
  const loadUser = () => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      currentUser.value = JSON.parse(savedUser)
    }
  }

  // Đăng xuất
  const logout = () => {
    localStorage.removeItem('currentUser')
    currentUser.value = null
    router.push('/login')
  }

  onMounted(() => {
    loadUser()
  })

  return {
    currentUser,
    logout,
    loadUser
  }
}