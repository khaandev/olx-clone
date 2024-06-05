

<script setup>
import { useCommonStore } from "@/stores/WebRelated/coman";


const props = defineProps({
  field: String,
});

const common = useCommonStore();
</script> 

<template>
  <div class="flex h-2 text-xs py-1 text-red-500 font-[500]">
    <span
      v-if="
        common.validationError &&
        common.validationError[props.field]
      "
    >
      {{ common.validationError[props.field][0] }}</span
    >
  </div>
</template>