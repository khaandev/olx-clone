<script setup>
import { defineProps } from 'vue'
const props = defineProps(['text', 'type'])
</script>
<template>
    
    <button
      :type="type"
      class="bg-blue-500 hover:bg-blue-60  text-white font-semibold rounded-md   py-2 px-4 "
    >
      {{ text }}
    </button>
</template>