<template>
    <div class="h-[20rem] w-[20rem] border-2 flex w-full ">
        <img :src="breedImage" />
        <div class="lazy-loader" v-if="imageLoad"></div>
    </div>
</template>

<script setup lang="ts">
defineProps(['breedImage', 'imageLoad'])
</script>

<style scoped>

</style>