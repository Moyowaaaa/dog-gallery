<template>
    <div class="h-[20rem] w-[20rem] border-2 flex ">
        <img :src="breedImage" />
    </div>
</template>

<script setup lang="ts">
defineProps(['breedImage'])
</script>

<style scoped>

</style>