<script setup>
import { ref } from "vue";
import router from "@/router/index.js";    

const categoriesProduct = ref([
  {
    id: 1,
    text: "Mobiles",
    img: "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
    path: "/mobiles",
  },
  {
    id: 2,
    text: "Cars",
    img: "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png",
    path: "/cars",
  }, {
    id: 3,
    text: "Propertys",
    img: "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png",
    path: "/property",

  }, {
    id: 4,
    text: "Electronic",
    img: "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png",
    path: "/electronic",

  }, {
    id: 5,
    text: "Bikes",
    img: "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
    path: "/bikes",

  }, {
    id: 6,
    text: "Animals",
    img: "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png",
    path: "/animals",

  }, 
]);


const navigateTo = (path) => {
  categoriesProduct.value.forEach((item) => {
    item.Active = item.path === path;
  });

  router.push(path);
};
</script>

<template>
 <div>
      <h1 class="text-2xl font-bold">All categories</h1>
    </div>
<div class="grid md:grid-cols-6 grid-cols-3 my-10">
      <div v-for="productItem in categoriesProduct" :key="productItem.id">
        <div class=" grid justify-center">
          <div   @click="navigateTo(productItem.path)" class="cursor-pointer">
            <img :src="productItem.img" alt="" class="md:w-full w-[100px] hover:scale-110 transition duration-500 cursor-pointer object-cover  "/>
          <h2 class="my-2 text-center font-bold">{{ productItem.text }}</h2>
          </div>
        
        </div>
      </div>
    </div>
</template>