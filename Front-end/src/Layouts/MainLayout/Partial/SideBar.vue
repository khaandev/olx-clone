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
    {
        id: 3,
        text: 'Reports',
        path: '/report',
        active: window.location.pathname === "/report",

    },
 ])


const navigateTo = (path) => {
  router.push(path);
};

</script>

<template>
  <div class="bg-gray-300 h-screen ">
    <div class="grid justify-center items-center">
      <img
        src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
        alt=""
        class="mt-10 w-[100px]"
      />
      <h1 class="text-gray-500 font-bold text-lg text-center ">Olx Clone</h1>
    </div>
    
    <div class="mt-12"> 
        <ul class="px-1" >
        <li
        v-for="menu in menuItem" :key="menu.id"
        class="bg-gray-200 border border-gray-400 text-gray-500
         font-bold rounded-md p-2 hover:bg-gray-300 hover:text-gray-600 
         hover:cursor-pointer mb-2" 
         :class="{ '!text-pink-400 border !border-pink-500': menu.active }"
          @click="navigateTo(menu.path)">
        {{ menu.text }}
      </li>
     
    </ul>
    </div>
 
  </div>
</template>