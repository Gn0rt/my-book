<script setup lang="ts">
// import {products} from '@/fakedata/products.js';
import Pagination from '@/components/Pagination.vue';
import { computed, ref, onMounted } from 'vue';
import { blogApi, Blog } from '../../../api/blog.api';


const blogs = ref<Blog[]>([]);
const loading = ref(false);
const loadBlogs = async () => {
  loading.value = true;
  try {
    const response = await blogApi.getAll();
    blogs.value = response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    loading.value = false;
  }
};

const currentPage = ref(1);
//số sản phẩm mỗi trang
const postPerPage = ref(8);
const totalPages = computed(() => Math.ceil(blogs.value.length / postPerPage.value));
//tính toán hiển thị sản phẩm trên trang hiện tại
const displayedBlogs = computed(() => {
    const start = (currentPage.value - 1) * postPerPage.value;
    const end = start + postPerPage.value;
    return blogs.value.slice(start, end);
})
const handleChangePage = (page: number) => {
    currentPage.value = page;
    console.log("Current page changed to:", currentPage.value);
}
onMounted(() => {
  loadBlogs();
});
</script>

<template>
        <div class="hidden sm:block p-6">
                <table class="table-auto w-full border-collapse rounded-xl shadow-md overflow-hidden">
                        <thead class="bg-gray-100 text-gray-700 text-center">
                                <tr>
                                        <th>#</th>
                                        <th class="px-4 py-3 border-b">Tiêu đề</th>
                                        <th class="px-4 py-3 border-b">Tác giả</th>
                                        <th class="px-4 py-3 border-b">Tắt</th>
                                        <th class="px-4 py-3 border-b">Ngày tạo</th>
                                        <th class="px-4 py-3 border-b">Cập nhật</th>
                                        <th class="px-4 py-3 border-b"></th>
                                </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                                <tr v-for="(bl,index) in displayedBlogs" :key="bl.id" class="hover:bg-gray-50">
                                        <td class="px-4 py-3 text-center">{{ (currentPage - 1) * postPerPage + index + 1 }}</td>
                                        <td class="px-4 py-3">{{ bl.title }}</td>
                                        <td class="px-4 py-3 text-center">{{bl.author}}</td>
                                        <td class="px-4 py-3 text-center">{{ bl.excerpt }}</td>
                                        <td class="px-4 py-3 text-center">{{ new Date(bl.createdAt).toLocaleDateString("vi-VN")  }}</td>
                                        <td class="px-4 py-3 text-center">{{ new Date(bl.updatedAt).toLocaleDateString("vi-VN") }}</td>
                                        <td class="px-4 py-3 text-center">
                                                <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                                                        Xoá
                                                </button>
                                                <button class="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                                                        Sua
                                                </button>
                                        </td>
                                </tr>
                        </tbody>
                </table>
                <!-- Buttons -->
                <div class="flex justify-end gap-3 mt-4">
                        <button class="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                                Them san pham
                        </button>
                </div>
        </div>
        <Pagination
                :products="blogs" 
                :currentPage="currentPage" 
                :totalPages="totalPages"
                @handleChangePage="handleChangePage"
         />
</template>