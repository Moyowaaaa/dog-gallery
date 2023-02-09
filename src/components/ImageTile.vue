<template>
    <div class="tile w-full lg:w-3/12 hover:shadow-2xl  h-[15rem]" @click="viewBreedDetails(breedname)">
        <div class="w-full h-full">
            <img :src="dogImage" :alt="`Image of a ${breedname}` " v-if="!imageLoad">
        </div>

        <div class="lazy-loader border-2 border-[red] h-full w-full" v-if="imageLoad"></div>
</div>
    
</template>

<script setup lang="ts">
import { watchEffect,ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const imageLoad = ref<boolean>(true)




type Image = {
    dogImage:string
}


const props = defineProps<Image>()
const breedname = (props.dogImage.split("/")[4])



const viewBreedDetails = (name:string):void => {
    router.push({name:'breed-name', params: {name} })
}

watchEffect(async() => {
if(props.dogImage){
    imageLoad.value = false
} else {
    imageLoad.value = true
}
})

</script>

<style scoped>
.tile{
    height: 400px;
}

img{
    border-radius: 12px;
    object-fit: fit;
    height: 100%;
    width: 100%;
}
.lazy-loader{
    background: linear-gradient(90deg, #929292 20%, #ffffff);
    background-size: 100%;
    animation: loader 1s linear 2s infinite alternate;
    border-radius: 12px;

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