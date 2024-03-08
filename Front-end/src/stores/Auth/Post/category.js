import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);



  const validationErrors = ref(null);

  async function getCategories() {
    try {
      const response = await axios.get("http://localhost:8000/api/category");
      categories.value = response.data.categories;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

 
  return {
    getCategories,
    categories,
    validationErrors,
  };
});
