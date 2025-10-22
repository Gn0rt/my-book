<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
// import { blogs } from '@/fakedata/blog';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { blogApi, Blog } from '../api/blog.api';
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})
const route = useRoute();
const blog = ref<Blog | null>(null);


onMounted( async () => {
    const id = route.params.id as string;
    if (id) {
        try {
        const response = await blogApi.getById(id);
        blog.value = response.data;
        } catch (error) {
        console.error('Failed to fetch blog:', error);
        } finally {
        
        }
    }
})
</script>

<template>
    <DefaultLayout>
        <template #default="{isMobile}">
            <!-- Background hình ảnh -->
            <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <img :src="MaskImg" alt="" class="absolute top-0 right-0 h-[500px] w-[650px] object-cover" />
                <img
                :src="PersonModal"
                alt=""
                class="absolute top-[100px] sm:right-[10%] right-0 h-[400px] w-auto object-contain"
                />
            </div>

            <!-- Nội dung chữ -->
            <div class="relative top-20 sm:mt-0 mt-[100px] z-10 max-w-4xl text-center lg:text-left sm:px-20 sm:py-30 px-5">
                <h1 
                class="text-5xl font-bold uppercase mb-4"
                :class="[isMobile ? 'text-white': 'text-black, text-[75px]']"
                >Details Blog</h1>
                <p class="text-xl sm::text-2xl sm:text-black text-white font-light mb-8 capitalize">
                    Lightweight article where discussing matters relating to the book
                </p>
            </div>

            <div v-if="blog" class="w-full px-6 pb-10 pt-10 bg-[#F5F6F8] mt-[230px] flex flex-col items-center">
                <div>
                    <img 
                    :src="blog.image" 
                    class="h-[400px]" alt="Image Blog"
                    :class="[isMobile ? 'h-auto' : '']"
                    >
                    <p class="text-center">Hình ảnh Image Description</p>  
                </div>
                <div class="mt-10">
                    <div>
                        <h3 class="font-bold text-3xl">
                            {{blog.title}}
                        </h3>  
                        <p>
                            Ngày đăng: {{ new Date(blog.createdAt).toLocaleDateString('vi-VN') }}
                        </p>     
                        <p>
                            Tác giả: {{blog.author}}
                        </p> 
                        <div class="mt-5 text-justify">
                          <div v-html="blog.content"></div>
                        </div> 
                    </div>
                </div>
            </div>
            <!-- Hiển thị lỗi nếu không tìm thấy -->
            <div v-else class="p-10 text-red-500 text-xl">
                Không tìm thấy bài viết!
            </div>
        </template>
    </DefaultLayout>
</template>