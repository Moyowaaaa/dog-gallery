<template>
    <div class="tile w-full lg:w-3/12 hover:shadow-2xl  h-[15rem]" @click="viewBreedDetails(breedname)">
        <img :src="dogImage" alt="">

    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';



const router = useRouter()


const props = defineProps(['dogImage'])
const breedname = (props.dogImage.split("/")[4])

const viewBreedDetails = (name:string) => {
    router.push({name:'breed-name', params: {name} })
}

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
</style>