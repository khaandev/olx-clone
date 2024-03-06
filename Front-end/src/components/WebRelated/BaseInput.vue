<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps([
  "label",
  "modelValue",
  "placeholder",
  "type",
  "disabled",
]);
const emit = defineEmits(["update:modelValue"]);

const emitUpdate = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  <div id="input" class="flex flex-col w-full">
    <label for="username" class="block text-gray-600">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="emitUpdate"
      :type="type"
      :disabled="disabled"
      class="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500"
      autocomplete="off"
      style="transition: border-color 0.3s ease-in-out"
    />
  </div>
</template>
