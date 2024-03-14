<script setup>
import { useCategoryStore } from "@/stores/Auth/Post/category";
import { useCommonStore } from "@/stores/WebRelated/coman";
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import multiselect from "@vueform/multiselect";
import { onMounted, reactive, ref } from "vue";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";
import { useProductStore } from "@/stores/Auth/Post/products";
import router from "@/router";
const product = useProductStore();
const { isLoading } = useProductStore();

const state = useCommonStore();
const category = useCategoryStore();

const selectedImages = ref([]);

const productState = reactive({
  category: "",
  location: "",
  title: "",
  price: "",
  description: "",
});

onMounted(() => {
  category.indexCategory();
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

  for (const file of selectedImages.value) {
    formData.append("images[]", file);
  }

  await product.storeProduct(formData);

  if(product.isMessage){
    router.push({name: 'MyAdds'})
  }
};
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[50%] my-10 bg-gray-100 p-5 rounded-md">
      <form
        action=""
        @submit.prevent="handleSubmit"
        enctype="multipart/form-data"
      >
        <div class="grid grid-cols-12 gap-3">
          <label for="cat" class="col-span-6">
            <span class="text-gray-600">Select Your Category</span>

            <multiselect
              v-model="productState.category"
              :options="category.categories"
              value-prop="id"
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
</template>
