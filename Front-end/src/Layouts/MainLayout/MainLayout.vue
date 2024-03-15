<script setup>
import { ref } from "vue";
import SideBar from "@/Layouts/MainLayout/Partial/SideBar.vue";
import NavBar from "@/Layouts/MainLayout/Partial/NavBar.vue";

const SideBarOpen = ref(true);

const toggleSideBar = () => {
  SideBarOpen.value = !SideBarOpen.value;
};
</script>

<template>
  <div class="w-[100%] flex">
    <Transition name="slider">
      <div class="w-[18%]" v-if="SideBarOpen">
        <SideBar />
      </div>
    </Transition>

    <div :class="!SideBarOpen ? 'w-[100%]' : 'w-[82%]'">
      <NavBar @hamburger="toggleSideBar" />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.slider-enter-active,
.slider-leave-active {
  transition: all 0.4s linear;
}

.slider-enter-from,
.slider-leave-to {
  transform: translateX(-70%);
}

.slider-enter-to,
.slider-leave-from {
  transform: translateX(0%);
}
</style>
