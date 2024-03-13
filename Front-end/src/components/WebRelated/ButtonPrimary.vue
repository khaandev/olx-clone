<!-- ButtonPrimary.vue -->

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['text', 'type', 'disabled']);
const buttonClass = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4';
</script>

<template>
  <button :type="props.type" :class="{ [buttonClass]: true, 'cursor-not-allowed': props.disabled }" :disabled="props.disabled">
    {{ props.text }}
  </button>
</template>
