<template>
    <div class="h-[20rem] w-auto flex  flex justify-center my-2">
        <img :src="breedImage" v-if="breedImage"/>
        <div class="lazy-loader" v-if="!breedImage"></div>
    </div>
</template>

<script setup lang="ts">
defineProps(['breedImage', 'imageLoad'])
</script>

<style scoped>

</style>