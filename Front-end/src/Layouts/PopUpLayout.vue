<script setup>
</script>
<template>

<div class="faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 "  
>
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div class="w-[50%] mx-auto max-h-[90vh] relative rounded-xl shadow-lg bg-gray-200  overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>