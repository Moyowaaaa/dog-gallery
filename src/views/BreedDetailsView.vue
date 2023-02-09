<template>
     <defaultVue>
    <div class="">
       
        <Loading v-if="loading" />

        <div class="h-screen w-full bg-white text-black p-4" v-if="!loading">
            <div class="link flex gap-2 items-center text-xl w-max" @click="router.back()">
            &larr;
            <p>Back</p>
        </div>

        <div class="w-full ">
 <h1 class="py-6 text-5xl underline">{{ route.params.name }}</h1>

 <div class="flex flex-col lg:flex-row pt-24 w-full items-center">
    <ImageCard v-for="breedImage in breedImages" :breedImage="breedImage" :imageLoad="imageLoad"/>
    <h1 v-if="breedImages && imageLoad">Loading</h1>

    <BreedEmptyState v-if="breedImages.length === 0 && !loading"/> 

 </div>
        </div>

     

        </div>
      
    </div>
</defaultVue> 
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { onMounted,ref } from 'vue';
import ImageCard from '../components/ImageCard.vue'
import Loading from '@/components/Loading.vue';
import BreedEmptyState from '@/components/BreedEmptyState.vue';
import  defaultVue from '@/layouts/default.vue';

const route = useRoute();
const router = useRouter();

const loading = ref<boolean>(true)
const breedImages= ref<string[]>([])
    const imageLoad = ref<boolean>(true)



onMounted(async() => {
    const response = await axios.get(`https://dog.ceo/api/breed/${route.params.name}/images/random/5`)
    console.log(response.data.message)
    imageLoad.value = false
    loading.value = false
    breedImages.value = response.data.message
    
})


</script>

<style scoped>
.lazy-loader {
    border-radius: 12px;
    height: 300px;
    width: 300px;
    background: linear-gradient(90deg, #929292 20%, #ffffff);
    background-size: 300%;
    animation: loader 1s linear 2s infinite alternate;
  }
  .lazy-container-info {
    border-radius: 12px;
    height: 20px;
    width: 250px;
    background: linear-gradient(90deg, black 20%, #ffffff);
    background-size: 300%;
    animation: loader 1s linear 2s infinite alternate;
  }
  @keyframes loader {
    0% {
      background-position: 300% 0%;
    }
    100% {
      background-position: 350% 0%;
    }
  }
</style>