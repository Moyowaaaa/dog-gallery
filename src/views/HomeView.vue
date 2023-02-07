<script setup lang="ts">
import { onMounted,ref,computed } from 'vue';
import axios from 'axios'
import BreedCard from '@/components/BreedCard.vue'
import Loading from '../components/Loading.vue'
import Search from '@/components/Search.vue';
import store from '@/store';
import Vuex from '@/components/Vuex.vue';
import Default from '@/layouts/default.vue';

const breeds = ref<any | null>([])
const loading = ref<boolean>(false)
  const search = ref<string>('')


  console.log(search)

onMounted(() => {
  const fetchBreeds = async() => {
    loading.value = true
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(response.data.message.length)
    loading.value = false
    breeds.value = (Object.keys(response.data.message))
    
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

    <h1>Vue 3 + tailwind</h1>

<!-- <Vuex /> -->

    <!-- <input type="text" v-model="search" placeholder="search..."  /> -->

    <div  class="flex gap-2 w-full justify-center px-6">
      <div class="flex gap-2 flex-wrap w-full">
        <!-- <Suspense> -->
          <BreedCard v-for="breed in breeds" :breed="breed" />
        <!-- </Suspense> -->
        
      </div>
      
    </div>

    <Loading v-if="loading"/>
    </Default>
  </div>
  </main>
</template>
