<script setup>
import PopUpLayout from '@/Layouts/PopUpLayout.vue';
</script>

<template>
  <div class="faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 gap-1">
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <span class='sr-only'>Loading...</span>
  	<div class='h-8 w-8 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-8 w-8 bg-gray-900 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-8 w-8 bg-gray-900 rounded-full animate-bounce'></div>
  </div>
</template>
