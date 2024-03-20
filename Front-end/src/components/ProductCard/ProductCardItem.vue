<script setup>
import { onMounted, ref } from "vue";
import { useProductStore } from "@/stores/Auth/Post/products";

const product = useProductStore();

onMounted(() => {
  product.indexMyProductWithCategory();
});
</script>

<template>
  <div class="mx-10">
    <h1 class="text-4xl mb-10 mt-5" id="font">
      New Product Listed <span class="text-pink-500">in </span> Low budget
    </h1>

    <div id="font" v-if="product.productWithCategory.length">
      <div v-for="category in product.productWithCategory" :key="category.id">
        <h1 class="text-xl my-2" v-if="category">
          Here Is some Latest Products In
          <span class="text-pink-500 text-2xl">{{ category.name }}</span>
        </h1>
        <div class="grid grid-cols-3 gap-2">
          <div
            class="border border-gray-400 rounded shadow-md shadow-gray-500 m-2 w-full"
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
                  <span class="text-blue-500"> {{ product.price }}</span>
                </h1>
                <h1 class="font-bold mb-1">
                  Title :
                  <span class="text-blue-500"> {{ product.title }}</span>
                </h1>
                <h1 class="text-gray-800 mb-1 font-bold">
                  Description :
                  <span class="text-blue-500">{{ product.description }}</span>
                </h1>
                <h1 class="text-gray-800 text-md font-bold mb-2">
                  Location :
                  <span class="text-blue-500">{{ product.location }}</span>
                </h1>
                <hr />
                <div class="flex mt-5">
                  <RouterLink :to="{ path: `/product/detailes/${product.id}` }">
                    <button class="bg-gray-600 text-white py-2 px-4 rounded">
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
