<script setup>
defineProps({
  genres: {
    type: Array,
    required: true
  },
  selectedGenre: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selectGenre'])

const handleChange = (event) => {
  emit('selectGenre', event.target.value)
}
</script>
<template>
  <div class="relative w-full max-w-xs">
    <select
      :value="selectedGenre"
      @change="handleChange"
      class="appearance-none bg-white border border-gray-300 rounded-lg py-3 px-4 pr-10 w-full text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
    >
      <option v-for="genre in genres" :key="genre" :value="genre">
        {{ genre }}
      </option>
    </select>
    <!-- Icon dropdown chevron -->
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</template>
<style scoped>
/* Tùy chọn: nếu muốn chevron đẹp hơn hoặc animation */
select {
  background-image: none;
}
</style>