<script setup>
import Pagination from '@/components/Pagination.vue';
import {ref, computed} from 'vue'
const props = defineProps({
    blogs: {
        type: Array,
        required: true
    }
});

console.log(props.blogs);
const currentPage = ref(1);
//số sản phẩm mỗi trang
const postPerPage = ref(6);
const totalPages = computed(() => Math.ceil(props.blogs.length / postPerPage.value));
console.log("totalPages: ", totalPages);

//tính toán hiển thị sản phẩm trên trang hiện tại
const displayedBlogs = computed(() => {
    const start = (currentPage.value - 1) * postPerPage.value;
    const end = start + postPerPage.value;
    return props.blogs.slice(start, end);
})
const handleChangePage = (page) => {
    currentPage.value = page;
    console.log("Current page changed to:", currentPage.value);
}
</script>
<template>
    <div class="w-full py-10 px-10 bg-[#F5F6F8]">
        <div>
            <div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <router-link 
                        v-for="blog in displayedBlogs" 
                        :key="blog.id" 
                        class="bg-white h-[400px] rounded-lg shadow-lg"
                        :to="`/detail-blog/${blog.id}`"
                    >
                        <img :src="blog.image" alt="" class="w-full h-[200px] object-cover rounded-t-lg">
                        <div class="p-4 text-center">
                            <h2 class="text-xl font-bold mb-2">{{ blog.title }}</h2>
                            <p class="text-gray-700 text-base">{{ blog.content }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div>
                <Pagination 
                :current-page="currentPage"
                :total-pages="totalPages"
                @handle-change-page="handleChangePage"
                />
            </div>
        </div>
    </div>
</template>