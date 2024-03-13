<script setup>
import router from '@/router/index.js';
import { ref } from 'vue';

 const menuItem = ref([
    {
        id: 1,
        text: 'Dashboard',
        path: '/dashboard',
        active: window.location.pathname === "/dashboard",

    },
    {
        id: 2,
        text: 'Catgory',
        path: '/category',
        active: window.location.pathname === "/category",

    },
 ])

const navigateTo = (path) => {
  router.push(path);
};

</script>

<template>
  <div class="bg-gray-300 h-[100vh]">
    <div class="grid justify-center items-center">
      <img
        src="https://img.icons8.com/?size=50&id=11225&format=png"
        alt=""
        class="mt-10"
      />
      <h1 class="text-gray-700 font-bold text-lg">X-Plode</h1>
    </div>
    
    <div class="mt-12"> 
        <ul class="px-1" v-for="menu in menuItem" :key="menu.id">
        <li
        class="bg-gray-200 border border-gray-400 text-gray-500
         font-bold rounded-md p-2 hover:bg-gray-300 hover:text-gray-600 
         hover:cursor-pointer mb-2" 
         :class="{ 'text-blue-400 border border-blue-500': menu.active }"
          @click="navigateTo(menu.path)">
        {{ menu.text }}
      </li>
     
    </ul>
    </div>
 
  </div>
</template>