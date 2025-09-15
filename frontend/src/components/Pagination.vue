<script setup>
import { faF } from '@fortawesome/free-solid-svg-icons';
import {computed} from 'vue';
const props = defineProps({
    products: {
        type: Array,
        required: true
    },
    currentPage: {
        type: Number,
        default: 1
    },
    totalPages: {
        type: Number,
        default: 1
    }
})
//phát ra sự kiện thay đổi trang
const emit = defineEmits(['handleChangePage']);

//timh các trang hiển thị
const visiblePages = computed(() => {
  const pages = []
  const delta = 1 // Số trang hiển thị xung quanh trang hiện tại
  
  for (let i = Math.max(1, props.currentPage - delta); 
       i <= Math.min(props.totalPages, props.currentPage + delta); 
       i++) {
    pages.push(i)
  }
  
  return pages
})

const chanePage = (page) => {
    if(page !== props.currentPage) {
        emit('handleChangePage', page);
    }
}
</script>

<template>
    <nav>
        <ul class="flex justify-center items-center mt-6">
            <li>
                <button
                    @click="chanePage(currentPage - 1)"
                    :class="[
                        currentPage === 1 
                        ? 'hidden' 
                        : 'block'
                    ]"
                ><font-awesome-icon :icon="['fa', 'arrow-left']" /></button>
            </li>
            <li v-for="page in visiblePages" :key="page">
                <button 
                @click="chanePage(page)"
                class="mx-1 px-3 py-1 border rounded hover:bg-gray-200"
                :class="[
                    page === currentPage
                    ? 'border-b-[#b67e53] text-[#b67e53] font-semibold'
                    : 'hover:border-b-[#b67e53] hover:text-[#b67e53] hover:font-semibold'
                ]"
                >{{ page }}</button>
            </li>
            <li>
                <button
                    @click="chanePage(currentPage + 1)"
                    :class="[
                        currentPage === totalPages
                        ? 'hidden' 
                        : 'block'
                    ]">
                    <font-awesome-icon :icon="['fa', 'arrow-right']" />
                </button>
            </li>
        </ul>
    </nav>
</template>