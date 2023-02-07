<template>
    <div class="breedCard">
        <img :src="dogImage"  v-if="!imageLoad"/>

        <div class="lazy-loader" v-if="imageLoad">

        </div>
    </div>

    <!-- <div class="h-auto w-auto">
<RouterLink :to="('breed/' + breed)">


        <div @mouseenter="display" class="image h-[20rem] border-2 w-[30rem] flex items-end" :style="{ backgroundImage: `url('${dogImage}')` }" v-if="breed && dogImage">

<div class="hidden  h-[5rem] w-full bg-white" :class="{details:show}">
    <p class="text-black text-center py-4 w-full">{{ breed }}</p>
</div>
</div>

<div
        v-if="imageLoad"
        class="flex list flex-col items-center justify-center w-full"
      >
        <div class="lazy-container"></div>
        <div class="lazy-container-info mt-4"></div>
      </div>

</RouterLink>

    </div> -->
 
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted,ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';



const router = useRouter()

const props = defineProps(['breed'])
const dogImage = ref<string>('')
const imageLoad = ref<boolean>(true)

watchEffect(async() => {
    const response = await axios.get(`https://dog.ceo/api/breed/${props.breed}/images/random`)
    console.log(response.data)
    dogImage.value = response.data.message
    imageLoad.value = false
})


let show = ref<boolean>(false)

const display = () => {
    show.value = !show.value

    setTimeout(() => {
        show.value = false
    },1000)
}

const viewBreedDetails = (breed:any) => {
router.push({name:'breed-name',params:breed})
}

</script>

<style scoped>
.image{
    background-size: cover;
    background-repeat: no-repeat;
}
.details{
    display: flex;
}
img{
    border-radius: 12px;
    object-fit: cover;
    height: 300px;
    width: 300px;
}

.breedCard{
    flex: 1 1 25%;
}

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
    background: linear-gradient(90deg, #929292 20%, #ffffff);
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