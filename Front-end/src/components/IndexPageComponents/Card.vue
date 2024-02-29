<script setup>
import { ref } from "vue";
const cardProduct = ref([
  {
    id: 1,
    price: "12,1000",
    location: "karachi",
    date: "1 week ago",
    description: "Honda Civic full genuien condition Lush",
    img: "https://images.olx.com.pk/thumbnails/434884078-800x600.webp",
  },
  {
    id: 2,
    price: "12,1000",
    location: "karachi",
    date: "1 week ago",
    description: "Honda Civic full genuien condition Lush",
    img: "https://images.olx.com.pk/thumbnails/434884078-800x600.webp",
  },{
    id: 3,
    price: "12,1000",
    location: "karachi",
    date: "1 week ago",
    description: "Honda Civic full genuien condition Lush",
    img: "https://images.olx.com.pk/thumbnails/434884078-800x600.webp",
  },{
    id: 4,
    price: "12,1000",
    location: "karachi",
    date: "1 week ago",
    description: "Honda Civic full genuien condition Lush",
    img: "https://images.olx.com.pk/thumbnails/434884078-800x600.webp",
  },
]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">More in Vehicles</h1>
  </div>

  <div class="grid grid-cols-4 my-10 gap-3">
    <div v-for="cardtItem in cardProduct" :key="cardtItem.id">
      
      <div class="border border-gray-300 rounded">
        <img :src="cardtItem.img" alt="" class="h-[250px] object-cover  w-full" />
        <div class="m-5">
          <h1 class="font-bold mb-3">Rs {{ cardtItem.price }}</h1>
          <h1  class="text-gray-800 mb-3">{{ cardtItem.description }}</h1>
          <h1 class="text-gray-600 text-md"> {{ cardtItem.location }}</h1>
          <h1 class="text-gray-600 text-sm  font-mono   "> {{ cardtItem.date }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
