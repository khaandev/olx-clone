<script setup>
import { useCategoryStore } from "@/stores/Auth/Post/ProductCategory";
import { useCommonStore } from "@/stores/WebRelated/coman";
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import multiselect from "@vueform/multiselect";
import { onMounted, reactive, ref } from "vue";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";

const state = useCommonStore();
const category = useCategoryStore();

const selectedImages = ref([]);
const imageInput = ref(null);

const productState = reactive(
  {
    category: '',
    location: '',
    title: '',
    price: '',
    discriptions: '',
    images: '',

  }
);


const handleSubmit = async () => {
  const formData = new FormData();
  formData.append('category', productState.category);
  formData.append('location', productState.location);
  formData.append('title', productState.title);
  formData.append('price', productState.price);
  formData.append('discriptions', productState.discriptions);

  // Append each image to the FormData
  selectedImages.value.forEach((image, index) => {
    formData.append(`image${index + 1}`, image);
  });

  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log(formDataObject);

};

onMounted(() => {
  category.getCategories();
});

const handleImageChange = async (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    selectedImages.value = await Promise.all(
      Array.from(files, (file) => URL.createObjectURL(file))
    );
  }
};

const removeImage = (index) => selectedImages.value.splice(index, 1);



</script>

<template>
  <div class="flex justify-center">
    <div class="w-[50%] my-10 bg-gray-100 p-5 rounded-md">
    <form action="" @submit.prevent="handleSubmit">

      <div class="grid grid-cols-12 gap-3">
        <label for="cat" class="col-span-6">
          <span class="text-gray-600">Select Your Category</span>

          <multiselect
            v-model="productState.category"
            :options="category.categories"
            value-prop="name"
            id="cat"
            label="name"
            :searchable="true"
            placeholder="Select Your Location"
          >
          </multiselect>
        </label>

        <label for="loc" class="col-span-6">
          <span class="text-gray-600">Select Your Location</span>

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

        <BaseInput label="Title" type="text" class="col-span-6"     
                v-model="productState.title"
 />
        <BaseInput label="Price" type="text" class="col-span-6"
        v-model="productState.price"

         />
        <label for="des" class="col-span-12 text-gray-600">Discriptions
          <textarea
          v-model="productState.discriptions"

          name=""
          id="des"
          cols="30"
          rows="5"
          class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
        >
        </textarea>
        </label>

        <div v-if="selectedImages.length" class="col-span-12">
          <div class="grid grid-cols-3 gap-3">
            <template v-for="(image, index) in selectedImages">
              <div class="relative">
                <img
                  :src="image"
                  :alt="'Preview ' + (index + 1)"
                  class="w-full h-auto my-2 rounded-md"
                />
                <button
                  @click="() => removeImage(index)"
                  type="button"
                  class="absolute top-0 right-0 text-red-500 -mr-3 rounded-full py-1 px-3 mt-1 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </template>
          </div>
        </div>

        <label id="select-image" class="col-span-6 cursor-pointer flex bg-white border p-2 rounded border-gray-300 justify-center">
          <svg
            class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <input
            hidden
            type="file"
            multiple
            ref="imageInput"
            @change="handleImageChange"
          />
          <span class="text-gray-500">Uplde Picture</span>
        </label>

        <ButtonPrimary  text="Add Post" class="col-span-6"/>

       
      </div>
  </form>

    </div>
    
  </div>
</template>
