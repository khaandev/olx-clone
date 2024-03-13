<script setup>
import { ref } from 'vue';
import SideBar from '@/Layouts/MainLayout/Partial/SideBar.vue';
import NavBar from '@/Layouts/MainLayout/Partial/NavBar.vue';


const SideBarOpen = ref(true)

const toggleSideBar = () => {
    SideBarOpen.value = !SideBarOpen.value;
};
</script>

<template>
  <div class="w-[100%] flex">
    <div :class="`lg:w-[20%] w-[80%]`"  v-if="SideBarOpen">
     <SideBar />
    </div>
    <div :class="`lg:w-[80%]-${!SideBarOpen}  w-[100%]`">
        <NavBar @hamburger="toggleSideBar" />
        <slot></slot>
    </div>
  </div>
</template>