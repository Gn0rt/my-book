// composables/useAdminAuth.js
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

export function useAdminAuth() {
  const currentAdmin = ref(null)
  const router = useRouter()

  const loadAdmin = () => {
    const savedAdmin = localStorage.getItem('adminSession') // ✅ adminSession
    if (savedAdmin) {
      currentAdmin.value = JSON.parse(savedAdmin)
    }
  }

  const logout = () => {
    localStorage.removeItem('adminSession')
    currentAdmin.value = null
    router.push('/admin/login')
  }

  const isAuthenticated = computed(() => !!currentAdmin.value)

  onMounted(() => {
    loadAdmin()
  })

  return {
    currentAdmin,
    isAuthenticated,
    logout,
    loadAdmin
  }
}