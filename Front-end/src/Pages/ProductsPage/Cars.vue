<script setup>
import NavBar from "@/components/WebRelated/NavBar.vue";
import { useProductStore } from "@/stores/Auth/Post/products";
import { onMounted, reactive, ref } from "vue";
const product = useProductStore();
import Fillter from "@/components/WebRelated/Fillter.vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";

import LoadinSpiner from '@/components/WebRelated/LoadinSpiner.vue';

const isLoading = ref(false);

const paginate = ref(5);
const hookState = reactive({
      inputValue: '',
      location: '',
      min_price: 0,
      mixi_price:0,

});
onMounted(() => {
  isLoading.value = true;
  product.indexProduct("Car", 
  paginate.value,
  hookState.inputValue,
  hookState.location,
  hookState.min_price,
  hookState.mixi_price,

  );
  isLoading.value = false;

});




const loadMore = () => {
  isLoading.value = true;
  paginate.value += paginate.value;
  product.indexProduct(
  "Car", 
  paginate.value,
  hookState.inputValue,
  hookState.location,
  hookState.min_price,
  hookState.mixi_price,
  );

  isLoading.value = false;

};

</script>

<template>
  <NavBar />
  <Fillter />

  <LoadinSpiner v-if="isLoading" />
  
  <div class="md:mx-10 mx-5" v-else>
    <h1 class="md:text-4xl text-2xl mb-10" id="font">
      Find Your Dream <span class="text-pink-500">Cars </span> in Low budget
    </h1>

    <div
      class="grid md:grid-cols-2 grid-cols-1 my-5 gap-3"
      id="font"
      v-if="product.products?.data?.length"
    >
      <div v-for="productItem in product.products?.data" :key="productItem.id">
        <div class="border border-gray-300 rounded shadow-md">
          <div class="grid md:grid-cols-2">
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
                <RouterLink
                  :to="{ path: `/product/detailes/${productItem.id}` } "
                >
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
    <div class="my-5" v-if="product.products.total > paginate">
      <ButtonPrimary
        :text="isLoading ? 'Loading...' : 'Load More'"
        @click="loadMore"
      />
    </div>
  </div>


  
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
