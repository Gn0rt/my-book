
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

export function useAuth() {
  const currentUser = ref(null)
  const router = useRouter()

  // Kiểm tra đăng nhập
  const loadUser = () => {
    const savedUser = localStorage.getItem('userSession')
    if (savedUser) {
      currentUser.value = JSON.parse(savedUser)
    }
  }
  // Đăng xuất
  const logout = () => {
    localStorage.removeItem('userSession')
    currentUser.value = null
    router.push('/login')
  }

  // Kiểm tra đã đăng nhập chưa
  const isAuthenticated = computed(() => {
    return !!currentUser.value;
  });

  onMounted(() => {
    loadUser()
  })

  return {
    currentUser,
    isAuthenticated,
    logout,
    loadUser
  }
}