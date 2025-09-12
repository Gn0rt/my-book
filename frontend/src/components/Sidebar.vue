<script setup>
import { ref } from 'vue';

const props = defineProps({
  genres: {
    type: Array,
    required: true
  },
  selectedGenre: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['selectGenre']);
const selectGenre = (genre) => {
  emit('selectGenre', genre);
}
</script>
<template>
    <div>
        <h4 class="font-semibold text-xl">Book by Genre</h4>
        <ul class="">
            <li v-for="genre in genres" :key="genre" 
            @click="selectGenre(genre)"
            class="px-3 py-2 rounded cursor-pointer transition-colors"
            :class="{
                'text-[#FF971D]': selectedGenre.toLowerCase() === genre.toLowerCase(),
                'hover:bg-gray-300': selectedGenre.toLowerCase() !== genre.toLowerCase()
            }"
            >
                {{ genre }}
            </li>
        </ul>
    </div>
</template>