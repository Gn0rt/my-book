<!-- components/InputPassword.vue -->
<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: {
    type: String,
    default: ' '
  },
  error: String
})

// Emits
const emit = defineEmits(['update:modelValue'])

// State: show password
const showPassword = ref(false)

// Toggle
const toggle = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="relative">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      class="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-[#FF971D] transition-colors"
    />
    <label
      class="text-label bg-white text-gray-300 absolute top-2 left-3 pointer-events-none transition-all"
    >
      {{ label }}
    </label>
    <button
      type="button"
      @click="toggle"
      class="absolute bg-gray-200 py-2 px-4 right-0 top-0 h-full rounded-r-lg"
    >
      <font-awesome-icon :icon="showPassword ? ['fa', 'eye-slash'] : ['fa', 'eye']" />
    </button>
    <p v-if="error" class="mt-1 ml-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<style scoped>
.text-label {
  transition: transform 0.2s ease, color 0.2s;
}
input:focus + .text-label,
input:not(:placeholder-shown) + .text-label {
  transform: translateY(-22px);
  color: #000;
}
</style>