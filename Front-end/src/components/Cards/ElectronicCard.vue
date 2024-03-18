<script setup>
import { useProductStore } from "@/stores/Auth/Post/products";
const cardProduct = useProductStore();
import { onMounted } from "vue";

onMounted(() => {
  cardProduct.indexProduct("Electronic");
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">
      <RouterLink :to="{ name: 'Cars' }"
        ><span class="cursor-pointer"
          ><span class="text-3xl text-pink-500">Recently added </span> more in
          Electronic</span
        >
      </RouterLink>
    </h1>
  </div>

  <div
    class="grid grid-cols-2 my-5 gap-3"
    id="font"
    v-if="cardProduct.products.length"
  >
    <div v-for="productItem in cardProduct.products" :key="productItem.id">
      <div class="border border-gray-400 rounded shadow-md shadow-gray-500">
        <div class="grid grid-cols-2">
          <div>
            <img
              :src="productItem.images[0]"
              alt=""
              class="h-[250px] object-cover w-full"
            />
          </div>
          <div class="m-5">
            <h1 class="font-bold mb-3">
              PKR :
              <span class="text-blue-500"> {{ productItem.price }}</span>
            </h1>
            <h1 class="font-bold mb-1">
              Title :
              <span class="text-blue-500"> {{ productItem.title }}</span>
            </h1>
            <h1 class="text-gray-800 mb-1 font-bold">
              Description :
              <span class="text-blue-500">{{ productItem.description }}</span>
            </h1>
            <h1 class="text-gray-800 text-md font-bold mb-2">
              Location :
              <span class="text-blue-500">{{ productItem.location }}</span>
            </h1>
            <hr />
            <div class="flex mt-5">
              <RouterLink :to="{ path: `/product/detailes/${productItem.id}` }">
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

  <div class="flex justify-center" v-else>
    <img src="https://hhrf.in/images/nodatafound.png" alt="" />
  </div>
</template>
