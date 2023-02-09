<script setup lang="ts">
import { onMounted, ref, computed, watchEffect } from "vue";
import Loading from "../components/Loading.vue";
import store from "@/store";
import Default from "@/layouts/default.vue";
import Error from "@/components/Error.vue";
import ImageTile from "../components/ImageTile.vue";

const dogImages = ref<any | null>(store.getters.AllBreeds);
const loading = ref<boolean>(true);
const search = ref<string>("");
const error = ref<boolean>(false);
const imageLoad = ref<boolean>(true);

watchEffect(async () => {
  if (dogImages.value.length === 0) {
    await store.dispatch("fetchAllBreeds");
    dogImages.value = store.state.dogs;
    (loading.value = false), (imageLoad.value = false);
  }
  loading.value = false;
  return dogImages;
});

const searchBreed = computed(() => {
  return dogImages.value.filter((dogImage: string) => {
    return dogImage.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <main>
    <div class="min-h-screen w-full text-2xl">
      <Default>
        <h1 class="py-6 text-3xl text-center underline">Dog Gallery</h1>
        <div class="flex justify-center">
          <input
            type="text"
            class="p-2"
            placeholder="Search Images...."
            v-model="search"
          />
        </div>
        <Loading v-if="loading" />
        <Error v-if="error" />

        <div class="flex flex-wrap justify-center w-full py-10">
          <div
            class="w-full lg:w-11/12 justify-center flex flex-col lg:flex-row flex-wrap gap-2"
          >
            <ImageTile
              v-for="dogImage in searchBreed"
              :dogImage="dogImage"
              :searched="searchBreed"
            />
          </div>
        </div>

        <div
          class="w-full h-full flex items-center justify-center"
          v-if="searchBreed.length === 0"
        >
          <h1>
            <span class="font-medium">{{ search }}</span> wasn't found, please
            search for something else
          </h1>
        </div>
      </Default>
    </div>
  </main>
</template>
