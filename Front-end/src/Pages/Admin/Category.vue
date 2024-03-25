<script setup>
import MainLayout from "@/Layouts/MainLayout/MainLayout.vue";
import { useCategoryStore } from "@/stores/Auth/Post/category";
import { onMounted, ref } from "vue";

const category = useCategoryStore();
import UpdateCategory from "@/components/Admin/UpdateCategory.vue";
import PopUpLayout from "@/Layouts/PopUpLayout.vue";
import AddCategory from "@/components/Admin/AddCategory.vue";
import DeletePopUp from "@/components/WebRelated/DeletePopUp.vue";
import SuccessMsg from "@/components/WebRelated/SuccessMsg.vue";
onMounted(() => {
  category.indexCategory();
});

const selectedId = ref(null);
const isModalOpen = ref(false);
const isModalUpdate = ref(false);
const isModalDelete = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const updateCat = async (id) => {
  (selectedId.value = id), (isModalUpdate.value = true);
  await category.showCategory(selectedId.value);
};
const deleteCategory = (id) => {
  selectedId.value = id;
  isModalDelete.value = true;
  console.log(isModalDelete.value);
};
const categoryDelete = async () => {
  await category.deleteCategory(selectedId.value);

  if (category.isSucces) {
    isModalDelete.value = false;
  }
};
</script>

<template>
  <MainLayout>
    <div class="grid justify-end relative" id="msg" v-if="category.isMessage">
      <successMsg />
    </div>
    <div class="m-5">
      <div class="mb-5">
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded flex gap-2"
          @click="openModal"
        >
          Add Category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <!-- component -->
      <table class="border-collapse w-full" v-if="!isModalOpen">
        <thead>
          <tr>
            <th
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              Category name
            </th>

            <th
              class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="categoryItem in category.categories"
            :key="categoryItem.id"
            class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
          >
            <td
              class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
            >
              {{ categoryItem.name }}
            </td>

            <td
              class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
            >
              <span
                class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
                >Actions</span
              >
              <div class="">
                <button class="mr-5" @click="updateCat(categoryItem.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button @click="deleteCategory(categoryItem.id)">
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <PopUpLayout v-if="isModalOpen">
      <AddCategory
        @categoryAdded="isModalOpen = false"
        @close="isModalOpen = false"
      />
    </PopUpLayout>

    <DeletePopUp
      v-if="isModalDelete"
      @cancelBtn="isModalDelete = false"
      @deleteBtn="categoryDelete"
    />

    <updateCategory
      v-if="isModalUpdate && category.category"
      @close="isModalUpdate = false"
      @updateCategory="isModalUpdate = false"
      :selectedId="selectedId"
    />
  </MainLayout>
</template>
<style scoped>
#msg {
  position: fixed;
  right: 20px; /* Adjutt as needed */
}
</style>