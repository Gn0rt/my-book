<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import MaskImg from '@/assets/images/mask.png';
import PersonModal from '@/assets/images/personModal.png';
import ProfileLayout from '@/layouts/ProfileLayout.vue';
import {ref , onMounted} from 'vue';
import {userApi, User} from '../api/user.api'
const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})

const user = ref<User | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

const loadProfile = async ()  => {
    try {
        //lay thong tin tu localStorage
        const storedUser = localStorage.getItem("userSession");
        if(storedUser) {
            const userData = JSON.parse(storedUser);
            user.value = userData;
            console.log("User data: ", user.value);
        }
    }catch(err) {
        error.value = "Khong lay duoc thong tin tai khoan!";
        console.error(err);
    }finally{
        loading.value = false;
    }
}

onMounted(() => {
    loadProfile();
})
</script>

<template>
    <DefaultLayout>
        <template #default="{ isMobile }">
            <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <img :src="MaskImg" alt="" class="absolute top-0 right-0 h-[500px] w-[650px] object-cover" />
                <img
                :src="PersonModal"
                alt=""
                class="absolute top-[100px] sm:right-[10%] right-0 h-[400px] w-auto object-contain"
                />
            </div>

            <!-- Nội dung chữ -->
            <div class="relative sm:mt-0 mt-[100px] z-10 max-w-4xl text-center lg:text-left sm:px-20 sm:py-30 px-5">
                <h1 
                class="text-5xl font-bold uppercase mb-4"
                :class="[isMobile ? 'text-white': 'text-black, text-[75px]']"
                >read and add your insight</h1>
                <p class="text-xl sm::text-2xl sm:text-black text-white font-light mb-8 capitalize">
                find your favorite book and read it here for free
                </p>
            
            </div>

            <div class="mt-[150px]">
                <ProfileLayout v-if="!loading && user" :user="user" />
                <div v-else-if="loading">Loading...</div>
                <div v-else-if="error">{{ error }}</div>
            </div>


        </template>

    </DefaultLayout>
</template>