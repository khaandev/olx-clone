<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/Auth/Post/products";

import useTimeAgo from "@/Composables/useTimeAgo";
const { formatTimeAgo, truncateDescription } = useTimeAgo();
const product = useProductStore();

onMounted(() => {
  product.indexMyProductWithCategory();
});
</script>

<template>
  <div class="md:mx-10 my-5">
    <h1
      class="md:text-4xl text-2xl mb-10 mt-5"
      id="font"
      v-if="product.productWithCategory?.length"
    >
      New Product Listed <span class="text-pink-500">in </span> Low budget
    </h1>

    <div id="font" v-if="product.productWithCategory.length">
      <div v-for="category in product.productWithCategory" :key="category.id">
        <h1 class="text-xl my-2" v-if="category.products.length">
          Here Is some Latest Products In
          <span class="text-pink-500 text-2xl">{{ category.name }}</span>
        </h1>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-2">
          <div
            class="border border-gray-300 rounded shadow-md w-full"
            id="font"
            v-for="product in category.products"
          >
            <div>
              <div>
                <img
                  :src="product.images[0]"
                  alt=""
                  class="h-[250px] object-cover w-full"
                />
              </div>
              <div class="m-5">
                <h1 class="font-bold mb-3">
                  PKR :
                  <span class="text-gray-500 text-sm">
                    {{ product.price }}</span
                  >
                </h1>
                <h1 class="font-bold mb-1">
                  Title :
                  <span class="text-gray-500 text-sm">
                    {{ product.title }}</span
                  >
                </h1>
                <h1 class="text-gray-800 mb-1 font-bold">
                  Description :
                  <span class="text-gray-500 text-sm">{{
                    truncateDescription(product.description)
                  }}</span>
                </h1>
                <h1 class="text-gray-800 text-md font-bold mb-2">
                  Location :
                  <span class="text-gray-500 text-sm">{{
                    product.location
                  }}</span>
                </h1>
                <h1 class="text-gray-800 text-md font-bold mb-2">
                  <span class="text-gray-500 text-sm">{{
                    formatTimeAgo(product.created_at)
                  }}</span>
                </h1>
                <hr />
                <div class="flex mt-5">
                  <RouterLink :to="{ path: `/product/detailes/${product.id}` }">
                    <button class="bg-gray-600 text-white py-1 px-4 rounded">
                      Read More..
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center" v-else>
      <img src="https://hhrf.in/images/nodatafound.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
