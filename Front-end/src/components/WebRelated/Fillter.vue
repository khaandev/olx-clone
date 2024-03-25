<script setup>
  import { ref,reactive } from 'vue';
import BaseInput from './BaseInput.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import { useProductStore } from "@/stores/Auth/Post/products";
const product = useProductStore();
const paginate = ref(5);
const hookState = reactive({
      inputValue: '',
      location: '',
      min_price: 0,
      mixi_price:0,

});
 
const handleForm = () => {

  product.indexProduct(
  product.currentCategory, 
  paginate.value,
  hookState.inputValue,
  hookState.location,
  hookState.min_price,
  hookState.mixi_price,
  )};
  const handleInput = (event) => {
  if (event.target.value < 0) {
    hookState.min_price = 0;
  }
};
</script>

<template>
  <div class=" mx-auto px-4 sm:px-8 justify-end md:flex my-5 bg-gray-100 py-3 border border-gray-300">
    
    <form @submit.prevent="handleForm">

    <div class="flex justify-center items-center py-auto gap-1">
        <BaseInput  type="number"  v-model="hookState.min_price" label="minimum Price"
        :class="{ 'text-red-500': hookState.min_price <= 0 }" @input="handleInput"/>
      <BaseInput  type="number"  v-model="hookState.mixi_price" 
        :class="{ 'text-red-500': hookState.mixi_price <= 0 }"
       label="Miximum Price"  @input="handleInput"/>
      <ButtonPrimary text="search" class="mt-5" />
    

    </div>
  </form>

  </div>
</template>
