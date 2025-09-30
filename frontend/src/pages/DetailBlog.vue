<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import { blogs } from '@/fakedata/blog';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})
const route = useRoute();
const blogId = ref(null);
const blog = ref(null);
onMounted(() => {
    blogId.value = route.params.id; //lấy id từ url
    console.log("id", blogId.value);

    blog.value = blogs.find(b => b.id === parseInt(blogId.value));
    console.log("blog", blog.value);

    if(!blog.value) {
        console.error("Blog not found");
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
                    :src="blog.imgBlogDetail" 
                    class="h-[400px]" alt="Image Blog"
                    :class="[isMobile ? 'h-auto' : '']"
                    >
                    <p class="text-center">Hình ảnh Image Description</p>  
                </div>
                <div class="mt-10">
                    <div>
                        <h3 class="font-bold text-3xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>        
                        <div class="mt-5 text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Obcaecati consequuntur optio possimus atque. 
                            Mollitia ullam alias quaerat? Ad labore, suscipit magnam illum 
                            laudantium doloribus perspiciatis delectus nihil voluptatum esse, 
                            ullam explicabo aliquam nulla expedita voluptate qui dolorem facilis 
                            placeat dolore repellendus assumenda soluta minima! Est, reiciendis maxime, omnis 
                            repellendus exercitationem sunt praesentium illum enim, quaerat aut suscipit veniam. 
                            Autem voluptatum modi eveniet necessitatibus illo aperiam facere repudiandae veritatis, 
                            fuga, explicabo, nobis in inventore? Dolorem quaerat ipsam sunt adipisci amet ex repellendus 
                            facere quae fugit, rem aliquam similique reprehenderit quis expedita nam deserunt itaque, 
                            nobis eos ab accusamus minus dolores recusandae! Corporis nesciunt qui modi dolorem architecto 
                            quis similique, delectus sit voluptatum! Ullam soluta esse magni. Ducimus, quas laboriosam. 
                            Distinctio numquam natus corporis iusto suscipit laboriosam! Nobis expedita fugit sapiente modi hic 
                            repudiandae nisi rerum similique nemo enim. Officia, eaque enim quaerat temporibus harum accusantium
                            molestias perspiciatis. Neque hic, quo velit obcaecati soluta tempore ipsum quod placeat eligendi laboriosam 
                            aliquid nulla minus ad. Quia dolor quidem consectetur id ab mollitia nihil expedita laborum minima quasi repudiandae, 
                            architecto, at veritatis tempora aliquam autem ut nisi nulla, cumque ad cupiditate! Recusandae nostrum quae harum aut 
                            voluptatem ipsum qui. Voluptas autem explicabo enim aspernatur?
                        </div> 
                    </div>
                    <div class="mt-10">
                        <h3 class="font-bold text-3xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>        
                        <div class="mt-5 text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Obcaecati consequuntur optio possimus atque. 
                            Mollitia ullam alias quaerat? Ad labore, suscipit magnam illum 
                            laudantium doloribus perspiciatis delectus nihil voluptatum esse, 
                            ullam explicabo aliquam nulla expedita voluptate qui dolorem facilis 
                            placeat dolore repellendus assumenda soluta minima! Est, reiciendis maxime, omnis 
                            repellendus exercitationem sunt praesentium illum enim, quaerat aut suscipit veniam. 
                            Autem voluptatum modi eveniet necessitatibus illo aperiam facere repudiandae veritatis, 
                            fuga, explicabo, nobis in inventore? Dolorem quaerat ipsam sunt adipisci amet ex repellendus 
                            facere quae fugit, rem aliquam similique reprehenderit quis expedita nam deserunt itaque, 
                            nobis eos ab accusamus minus dolores recusandae! Corporis nesciunt qui modi dolorem architecto 
                            quis similique, delectus sit voluptatum! Ullam soluta esse magni. Ducimus, quas laboriosam. 
                            Distinctio numquam natus corporis iusto suscipit laboriosam! Nobis expedita fugit sapiente modi hic 
                            repudiandae nisi rerum similique nemo enim. Officia, eaque enim quaerat temporibus harum accusantium
                            molestias perspiciatis. Neque hic, quo velit obcaecati soluta tempore ipsum quod placeat eligendi laboriosam 
                            aliquid nulla minus ad. Quia dolor quidem consectetur id ab mollitia nihil expedita laborum minima quasi repudiandae, 
                            architecto, at veritatis tempora aliquam autem ut nisi nulla, cumque ad cupiditate! Recusandae nostrum quae harum aut 
                            voluptatem ipsum qui. Voluptas autem explicabo enim aspernatur?
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