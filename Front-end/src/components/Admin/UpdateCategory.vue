<script setup>
import { onMounted, reactive, ref } from "vue";
import BaseInput from "../WebRelated/BaseInput.vue";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";
import { useCategoryStore } from "@/stores/Auth/Post/category";

import { defineEmits, defineProps } from "vue";
import PopUpLayout from "@/Layouts/PopUpLayout.vue";
const prop = defineProps(["selectedId"]);
const emit = defineEmits(["updateCategory", "close"]);
const category = useCategoryStore();

const stateCategory = reactive({
  name: category.category?.name,
});

const handleForm = async () => {
  const data = {
    name: stateCategory.name,
    _method: "PUT",
  };
  await category.updateCategory(prop.selectedId, data);

  if (category.isMessage == "Category updated successfully") {
    emit("updateCategory");
  }
};

const close = () => {
  emit("close");
};

category.$subscribe((mutation, state) => {
  stateCategory.name = state.category?.name;
});
</script>

<template>
  <PopUpLayout>
    <div class="bg-gray-100 py-5 px-10">
      <div class="flex justify-end">
        <ButtonPrimary
          text="X"
          class="bg-red-500 hover:bg-red-600"
          @click="close"
        />
      </div>

      <form action="" @submit.prevent="handleForm">
        <BaseInput label="Enter Category" v-model="stateCategory.name" />

        <ButtonPrimary text="Update" class="mt-5" />
      </form>
    </div>
  </PopUpLayout>
</template>
