<script setup>
import { ref } from "vue";
import BaseInput from "../WebRelated/BaseInput.vue";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";
import { useCategoryStore } from "@/stores/Auth/Post/category";
import { defineEmits } from "vue";

const emit = defineEmits(["categoryAdded", "close"]);
const category = useCategoryStore();

const stateCategory = ref("");

const handleForm = async () => {
  const data = {
    name: stateCategory.value,
  };
  await category.storeCategory(data);

  if (category.isMessage) {
    emit("categoryAdded");
  }
};

const close = () => {
  emit("close");
};
</script>

<template>
  <div class="bg-gray-100 py-5 px-10">
    <div class="flex justify-end">
      <ButtonPrimary
        text="X"
        class="bg-red-500 hover:bg-red-600"
        @click="close"
      />
    </div>

    <form action="" @submit.prevent="handleForm">
      <div>
        <BaseInput label="Enter Category" v-model="stateCategory"/>
        <span class="text-red-500" v-if="category.validation?.data?.message">{{ category.validation?.data?.message }}</span>
      </div>

      <ButtonPrimary text="Add" class="mt-5" />
    </form>
  </div>
</template>
