<script setup lang="ts">
// import {products} from '@/fakedata/products.js';
import Pagination from '@/components/Pagination.vue';
import { computed, ref, onMounted } from 'vue';
import { productApi, Product } from '../../../api/product.api';


const products = ref<Product[]>([]);
const loading = ref(false);
const loadProducts = async () => {
  loading.value = true;
  try {
    const response = await productApi.getAll();
    products.value = response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    loading.value = false;
  }
};

const uniqueGenres = computed(() => {
  return ['All',...new Set(products.value.map(product => product.genre))];
})
const currentPage = ref(1);
//số sản phẩm mỗi trang
const postPerPage = ref(8);
const totalPages = computed(() => Math.ceil(products.value.length / postPerPage.value));
//tính toán hiển thị sản phẩm trên trang hiện tại
const displayedProducts = computed(() => {
    const start = (currentPage.value - 1) * postPerPage.value;
    const end = start + postPerPage.value;
    return products.value.slice(start, end);
})
const handleChangePage = (page: number) => {
    currentPage.value = page;
    console.log("Current page changed to:", currentPage.value);
}
onMounted(() => {
  loadProducts();
});
</script>

<template>
        <div class="hidden sm:block p-6">
                <table class="table-auto w-full border-collapse rounded-xl shadow-md overflow-hidden">
                        <thead class="bg-gray-100 text-gray-700 text-center">
                                <tr>
                                        <th>#</th>
                                        <th class="px-4 py-3 border-b">Tên SP</th>
                                        <th class="px-4 py-3 border-b">Giá</th>
                                        <th class="px-4 py-3 border-b">Số lượng kho</th>
                                        <th class="px-4 py-3 border-b">Danh gia</th>
                                        <th class="px-4 py-3 border-b">Tac gia</th>
                                        <th class="px-4 py-3 border-b"></th>
                                </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                                <tr v-for="(pd,index) in displayedProducts" :key="pd.id" class="hover:bg-gray-50">
                                        <td class="px-4 py-3 text-center">{{ (currentPage - 1) * postPerPage + index + 1 }}</td>
                                        <td class="px-4 py-3">{{ pd.name }}</td>
                                        <td class="px-4 py-3 text-center">{{pd.price}}</td>
                                        <td class="px-4 py-3 text-center">{{ pd.stock }}</td>
                                        <td class="px-4 py-3 text-center">{{ pd.avgRating }}</td>
                                        <td class="px-4 py-3 text-center">{{pd.author}}</td>
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
                :products="products" 
                :currentPage="currentPage" 
                :totalPages="totalPages"
                @handleChangePage="handleChangePage"
         />
</template>