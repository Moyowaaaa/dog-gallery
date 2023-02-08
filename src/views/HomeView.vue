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


  // console.log('casches', breeds.value)
  // console.log(breeds.value.length === 0 )

// onMounted(async() => {
//   try {
//     const responsefirst:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
//     const responseSecond:any = await axios.get('https://dog.ceo/api/breeds/image/random/50')
//      dogImages.value = [...responsefirst.data.message,...responseSecond.data.message]
//     // console.log(("/")[4];)
//   } catch (error) {
//     console.log(error) 
//   }
// })

// onMounted(async() => {
//   await store.dispatch('fetchAllBreeds')
//   console.log(store.getters.AllBreeds)

// })

const fetchImages = async() => {
  await store.dispatch('fetchAllBreeds')
}

watchEffect(async() => {
  if(dogImages.value.length === 0){
    await store.dispatch('fetchAllBreeds')
    dogImages.value = store.state.dogs
    loading.value = false
  }
  loading.value = false
  return dogImages
})



</script>

<template>
  <main>
  <div class="min-h-screen w-full   text-2xl">
    <Default>

    <Loading v-if="loading"/>
    <Error v-if="error" />

    <div class="flex flex-wrap justify-center w-full  py-10">
      <div class="w-11/12 justify-center  flex flex-wrap gap-2">
        <ImageTile v-for="dogImage in dogImages" :dogImage="dogImage"/>

      </div>

      <!-- <ImageTile v-for="dogImage in dogImages" :dogImage="dogImage"/> -->


    </div>
      
    
    </Default>
  </div>
  </main>
</template>
