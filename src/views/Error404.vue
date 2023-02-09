<template>
    <div class="min-h-screen w-11/12 mx-auto lg:w-full flex items-center justify-center">

        <div class="full flex flex-col gap-8">
             
                <div class="link flex gap-2  w-max text-center text-2xl" @click="router.back()">
                    &larr;

                    <p>Back</p>
                </div>
              


            <h1 class="text-3xl">Nothing Found here, Please go back chief :)</h1>
        </div>
       
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style scoped>

</style>