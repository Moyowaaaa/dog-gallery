<template>
    <div class="">

        <Loading v-if="loading" />

        <div class="h-screen w-full bg-black text-white p-10">
            <div class="flex gap-2 items-center text-xl" @click="router.back()">
            &larr;
            <p>Back</p>
        </div>
        <h1 class="py-6 text-5xl underline">{{ route.params.name }}</h1>

        <div class="flex gap-2">
            <ImageCard v-for="breedImage in breedImages" :breedImage="breedImage" />
        </div>
        
        </div>
      
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { onMounted,ref } from 'vue';
import ImageCard from '../components/ImageCard.vue'
import Loading from '@/components/Loading.vue';

const route = useRoute();
const router = useRouter();

const loading = ref<boolean>(true)
const breedImages= ref<string[]>([])

onMounted(async() => {
    const response = await axios.get(`https://dog.ceo/api/breed/${route.params.name}/images/random/5`)
    console.log(response.data.message)
    loading.value = false
    breedImages.value = response.data.message
})

</script>

<style scoped>

</style>