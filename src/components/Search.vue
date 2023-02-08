<template>
    <div>
        <!-- <input type="text" v-model="search" placeholder="search..."  class="p-2" @change="$emit(search)"/> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps(['search'])
</script>

<style scoped>

</style>