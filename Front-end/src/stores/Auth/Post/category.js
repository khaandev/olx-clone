import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
import { useCommonStore } from "@/stores/WebRelated/coman";
const common = useCommonStore();
export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const category = ref(null);
  const validation = ref(null);
  const isMessage = ref(false);
  const isSucces = ref(false);

  async function indexCategory() {
    try {
      const res = await axios.get(`/api/category`);
      categories.value = res.data;
    } catch (error) {
      if (error.response) {
        common.validationError = error.response.data.errors;
      } else {
        console.log("some thing went Worng");
      }
    }
  }

  async function storeCategory(data) {
    try {
      const res = await axios.post(`/api/category`, data);
      category.value = res.data;
      categories.value.push(res.data.category);
      validation.value = {};
      isSucces.value = true;
      isMessage.value = true;

      setTimeout(() => {
        isMessage.value = false;
      }, 3000);
    } catch (error) {
      isMessage.value = false;
      isSucces.value = false;

      if (error.response) {
        common.validationError = error.response.data.errors;
        isSucces.value = false;
      } else {
        console.log("some thing went Worng");
        isSucces.value = false;
      }
    }
  }
  async function showCategory(id) {
    try {
      const res = await axios.get(`/api/category/${id}`);
      category.value = res.data;
    } catch (error) {
      if (error.response) {
        common.validationError = error.response.data.errors;
      } else {
        console.log("some thing went Worng");
      }
    }
  }
  async function updateCategory(id, data) {
    try {
      const res = await axios.post(`/api/category/${id}`, data);
      const cat = [...categories.value];
      const index = cat.findIndex(
        (Category) => Category.id == res.data.category.id
      );
      cat.splice(index, 1, res.data.category);
      categories.value = cat;
      isSucces.value = true;
    } catch (error) {
      isSucces.value = false;

      if (error.response) {
        common.validationError = error.response.data.errors;
        isSucces.value = false;

      } else {
        console.log("some thing went Worng");
        isSucces.value = false;

      }
    }
  }

  async function deleteCategory(id) {
    try {
      const res = await axios.delete(`/api/category/${id}`);
      categories.value = categories.value.filter(
        (categoryItem) => categoryItem.id !== id
      );
      isSucces.value = true;

    } catch (error) {
      isSucces.value = false;

      if (error.response) {

        common.validationError = error.response.data.errors;
      } else {
        console.log("some thing went Worng");
      }
    }
  }

  return {
    indexCategory,
    isSucces,
    storeCategory,
    updateCategory,
    isMessage,
    category,
    deleteCategory,
    showCategory,
    categories,
    validation,
  };
});
