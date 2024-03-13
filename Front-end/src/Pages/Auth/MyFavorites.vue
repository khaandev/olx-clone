<script setup>
import NavBar from "@/components/WebRelated/NavBar.vue";

import { useFavoriteStore } from "@/stores/Auth/Favorite/favorite";
import { useAuthStore } from "@/stores/Auth/Auth";
import { onMounted, ref } from "vue";
const myFav = useFavoriteStore();
const auth = useAuthStore();

onMounted(() => {
  myFav.getAllFavorites();
});
</script>

<template>
  <NavBar />
  <div class="mx-10">
    <h1 class="text-4xl mb-10" id="font">
      All Your <span class="text-pink-500"> Favorites </span> Here
    </h1>

    <div class="grid grid-cols-3 gap-5">
      <div class="bg-gray-100" v-for="favorite in myFav.favorites.Favorites">
        <img :src="favorite.product.images[0]" alt="" />
        
      </div>
    </div>
  </div>
</template>
