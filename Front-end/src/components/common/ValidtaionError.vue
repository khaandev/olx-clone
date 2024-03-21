<template>
  <span
    v-if="common.validationError && common.validationError[props.field]"
    class="text-red-500 text-sm"
  >
    {{ common.validationError[props.field][0] }}
  </span>
</template>

<script setup>
import { useCommonStore } from "@/stores/WebRelated/coman";
import { computed } from "vue";

const props = defineProps({
  field: String,
});

const common = useCommonStore();
</script>
