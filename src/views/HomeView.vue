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


const breeds = ref<any | null>([])
const loading = ref<boolean>(false)
  const search = ref<string>('')
  const error = ref<boolean>(false)


  watchEffect(() => {
    console.log(search)
  })



    


onMounted(() => {
  const fetchBreeds = async() => {
    try {
      loading.value = true
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(response.data.message.length)
    loading.value = false
    breeds.value = (Object.keys(response.data.message))
    } catch (e) {
      loading.value = false
      error.value = true
    }
   
    
  }
  fetchBreeds()
})

const searchedBreed = computed(() => {
  return breeds.value.filter((breed:any) => {
    return breed.toLowerCase().includes(search.value.toLowerCase())
  })
})


</script>

<template>
  <main>
  <div class="min-h-screen w-full   text-2xl">
    <Default>

   

<!-- <Vuex /> -->

    <input type="text" v-model="search" placeholder="search..."  />

   
      <div class="flex  gap-1 flex-wrap w-full">
        <!-- <Suspense> -->
          <BreedCard v-for="breed in breeds" :breed="breed" />
        <!-- </Suspense> -->
        
      
      
    </div>

    <Loading v-if="loading"/>
    <Error v-if="error" />
    </Default>
  </div>
  </main>
</template>
