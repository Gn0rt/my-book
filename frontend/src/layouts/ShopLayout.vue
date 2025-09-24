<script setup>
import NotFound from '@/components/404NotFound.vue';
import Pagination from '@/components/Pagination.vue';
import {computed, ref} from 'vue';

const props = defineProps({
    books: {
        type: Array,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});
const currentPage = ref(1);
//số sản phẩm mỗi trang
const postPerPage = ref(6);
const totalPages = computed(() => Math.ceil(props.books.length / postPerPage.value));
console.log("totalPages: ", totalPages);

//tính toán hiển thị sản phẩm trên trang hiện tại
const displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * postPerPage.value;
    const end = start + postPerPage.value;
    return props.books.slice(start, end);
})
const handleChangePage = (page) => {
    currentPage.value = page;
    console.log("Current page changed to:", currentPage.value);
}
const formatPrice = (value) => {
  return new Intl.NumberFormat('vi-VN').format(value);
};
</script>
<template>
    <div>
        <div>
            <NotFound v-if="books.length === 0" />
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-4">Sách thể loại {{ genre }} </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="book in displayedProducts" :key="book.id" class="bg-white p-4 rounded-lg shadow-md">
                    <img :src="book.image" :alt="book.title" class="w-full h-48 object-cover mb-4 rounded" />
                    <h3 class="text-lg font-semibold mb-2">{{ book.title }}</h3>
                    <p class="text-gray-400 text-xs">{{ book.description }}</p>
                    <p class="text-gray-600 mb-1">Tác giả: {{ book.author }}</p>
                    <p class="text-gray-600">Giá: {{ formatPrice(book.price) }} VNĐ</p>
                    <p>Đánh giá: {{ book.avgRating }} / 5</p>
                    <div class="flex items-center">
                        <router-link :to="`/books/${book.id}`" class="flex-[0.8] mt-3 mr-1 px-3 py-2 text-center text-[#FF971D] bg-[#FF971D]/20 hover:bg-[#FF971D] hover:text-white duration-200 border border-[#FF971D] rounded-md">Mua ngay</router-link>
                        <button class="flex-[0.2] bg-[#FFE5B4] hover:bg-[#FAD7A0] py-2 mt-3 rounded-md duration-200"><font-awesome-icon :icon="['fa', 'cart-shopping']" /></button>
                    </div>
                </div>
            </div>
        </div>
        <div>
          <Pagination 
          :products="books" 
          :currentPage="currentPage" 
          :totalPages="totalPages"
          @handleChangePage="handleChangePage"
          />
        </div>
    </div>
</template>