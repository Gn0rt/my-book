<script setup>

const props = defineProps({
    blogs: {
        type: Array,
        required: true
    }
});

console.log(props.blogs);

</script>
<template>
    <div class="w-full py-10 px-10 bg-[#F5F6F8]">
        <div>
            <div>
                <router-link class="grid grid-cols-3 gap-5">
                    <div v-for="blog in blogs" :key="blog.id" class="bg-white h-[400px] rounded-lg shadow-lg">
                        <img :src="blog.image" alt="" class="w-full h-[200px] object-cover rounded-t-lg">
                        <div class="p-4 text-center">
                            <h2 class="text-xl font-bold mb-2">{{ blog.title }}</h2>
                            <p class="text-gray-700 text-base">{{ blog.content }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>