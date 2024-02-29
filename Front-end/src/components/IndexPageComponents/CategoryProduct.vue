<script setup>
import { ref } from "vue";
const categoriesProduct = ref([
  {
    id: 1,
    text: "Mobiles",
    img: "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
  },
  {
    id: 2,
    text: "Vehicles",
    img: "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png",
  }, {
    id: 3,
    text: "Property For Sale",
    img: "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png",
  }, {
    id: 4,
    text: "Property For Rent",
    img: "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png",
  }, {
    id: 5,
    text: "Bikes",
    img: "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
  }, {
    id: 6,
    text: "Animals",
    img: "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png",
  }, 
]);
</script>

<template>
 <div>
      <h1 class="text-2xl font-bold">All categories</h1>
    </div>
<div class="grid grid-cols-6 my-10">
      <div v-for="productItem in categoriesProduct" :key="productItem.id">
        <div class=" grid justify-center">
          <img :src="productItem.img" alt="" />
          <h2 class="my-2 text-center font-bold">{{ productItem.text }}</h2>
        </div>
      </div>
    </div>
</template>