<script setup>
import { useCategoryStore } from "@/stores/Auth/Post/category";
import { useCommonStore } from "@/stores/WebRelated/coman";
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import multiselect from "@vueform/multiselect";
import { reactive, ref } from "vue";
import router from "@/router/index.js";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";
import { useProductStore } from "@/stores/Auth/Post/products";
import PopUpLayout from "@/Layouts/PopUpLayout.vue";

import { defineProps,defineEmits } from "vue";

const props = defineProps({
  selectedId: Number ,
});
const emit = defineEmits(['modalCancel'])

const cancelModal =  () => {
emit('modalCancel');
}




const product = useProductStore();
const { isLoading } = useProductStore();
const state = useCommonStore();
const category = useCategoryStore();

const selectedImages = ref([]);

const productState = reactive({
  category: product.product?.category?.id,
  location:  product.product?.location,
  title: product.product?.title,
  price: product.product?.price,
  description:product.product?.description,
});


const ImagesChange = async (event) => {
  const files = event.target.files;
  selectedImages.value = Array.from(files);
};

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("category_id", productState.category);
  formData.append("location", productState.location);
  formData.append("title", productState.title);
  formData.append("price", productState.price);
  formData.append("description", productState.description);
  formData.append('_method', 'PUT');


  for (const file of selectedImages.value) {
    formData.append("images[]", file);
  }

  await product.updateProduct(props.selectedId,formData);
  if(product.isMessage)
  {
    emit('modalupdate');
    router.go(-1);
  }

};

  
</script>

<template>

    <PopUpLayout>

  <div class="flex justify-center">
    <div class=" rounded-md">
        <div >
            <button class="bg-red-500 px-5 py-1 text-white" @click="cancelModal">x</button>
        </div>
      <form
        action=""
        @submit.prevent="handleSubmit"
        enctype="multipart/form-data"
        class="m-5"
      >
        <div class="grid grid-cols-12 gap-3">
          <label for="cat" class="col-span-6">

            <multiselect
              v-model="productState.category"
              :options="category.categories"
              value-prop="id"
              id="cat"
              label="name"
              :searchable="true"
              placeholder="Select Your Category"
            >
            </multiselect>
          </label>

          <label for="loc" class="col-span-6">

            <multiselect
              v-model="productState.location"
              :options="state.cityInfo?.data"
              value-prop="id"
              id="loc"
              label="name"
              :searchable="true"
              placeholder="Select Your Location"
            >
            </multiselect>
          </label>

          <BaseInput
            label="Title"
            type="text"
            class="col-span-6"
            v-model="productState.title"
          />
          <BaseInput
            label="Price"
            type="number"
            class="col-span-6"
            v-model="productState.price"
          />
          <label for="des" class="col-span-12 text-gray-600"
            >Description
            <textarea
              v-model="productState.description"
              name=""
              id="des"
              cols="30"
              rows="5"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            >
            </textarea>
          </label>

          <label
            id="select-image"
            class="col-span-6 cursor-pointer flex bg-white border p-2 rounded border-gray-300 justify-center"
          >
            <input type="file" @change="ImagesChange" multiple accept="image/jpeg, image/png"/>
          </label>

          <ButtonPrimary text="Add Post" class="col-span-6" :disabled="isLoading"/>
        </div>
      </form>
    </div>
  </div>
</PopUpLayout>

</template>
