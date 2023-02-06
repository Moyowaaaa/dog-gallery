<template>

    <div class="h-auto w-auto">
<RouterLink :to="('breed/' + breed)">


        <div @mouseenter="display" class="image h-[20rem] border-2 w-[30rem] flex items-end" :style="{ backgroundImage: `url('${dogImage}')` }">

<div class="hidden  h-[5rem] w-full bg-white" :class="{details:show}">
    <p class="text-black text-center py-4 w-full">{{ breed }}</p>
</div>
</div>
</RouterLink>

    </div>
 
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted,ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';



const router = useRouter()

const props = defineProps(['breed'])
const dogImage = ref<string>('')

watchEffect(async() => {
    const response = await axios.get(`https://dog.ceo/api/breed/${props.breed}/images/random`)
    console.log(response.data)
    dogImage.value = response.data.message
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
</style>