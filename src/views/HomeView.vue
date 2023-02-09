<script setup lang="ts">
import { onMounted,ref,computed,watchEffect } from 'vue';
import axios from 'axios'
import BreedCard from '@/components/BreedCard.vue'
import Loading from '../components/Loading.vue'
import Search from '@/components/Search.vue';
import store from '@/store';
import Vuex from '@/components/Vuex.vue';
import Default from '@/layouts/default.vue';
import Error from '@/components/Error.vue'
import BreedModal from '@/components/BreedModal.vue';
import ImageTile from '../components/ImageTile.vue'

const dogImages = ref<any | null>(store.getters.AllBreeds)
const loading = ref<boolean>(true)
  const search = ref<string>('')
  const error = ref<boolean>(false)
  const imageLoad = ref<boolean>(true)
  const names = ref<any>('')


watchEffect(async() => {
  if(dogImages.value.length === 0){
    await store.dispatch('fetchAllBreeds')
    dogImages.value = store.state.dogs
    loading.value = false,
    imageLoad.value = false
  }
  loading.value = false
  return dogImages
})

watchEffect(async() => {
  const breedNames =  ([...dogImages.value])
console.log({breedNames})
 names.value = breedNames.map((breed) =>{
  return breed.split("/")[4]
})
console.log(names.value)
})








</script>

<template>
  <main>
    <h1 class="py-6 text-3xl text-center underline">Dog Gallery</h1>
  <div class="min-h-screen w-full   text-2xl">
    <Default>

    <Loading v-if="loading"/>
    <Error v-if="error" />

    <div class="flex flex-wrap justify-center w-full  py-10">
      <div class="w-full lg:w-11/12 justify-center  flex flex-col lg:flex-row flex-wrap gap-2">
       
        <ImageTile v-for="dogImage in dogImages" :dogImage="dogImage"/>
        
      </div>

     
    </div>
      
    
    </Default>
  </div>
  </main>
</template>
