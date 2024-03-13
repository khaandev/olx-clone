import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const category = ref(null);
  const validation = ref(null);

  async function indexCategory() {
    try {
      const response = await axios.get("/api/category");
      categories.value = response.data.categories;
    } catch (error) {
      validation.value = error.response;
    }
  }

  async function storeCategory(data) {
    try {
      const res = await axios.post(`/api/category`,data)
      category.value = res.data;
      pushClasse(response.data)
      resetValidationsErrors()
    } catch {
      (error)
      validation.value = error.response;
    }
  }
  async function showCategory(id) {
    try {
      const res = await axios.post(`/api/category/${id}`)
      category.value = res.data;
    } catch(error) {
      validation.value = error.response;
    }
  }
  async function updateCategory(id,data) {
    try {
      const res = await axios.post(`/api/category/${id}`,data)
      category.value = res.data;
      updateCategoryPush(res.data);

    } catch(error) {
      validation.value = error.response;
    }
  }

  async function deleteCategory(id) {
    try {
      const res = await axios.post(`/api/category/${id}`);
      categories.value = categories.value.filter((categoryItem) => categoryItem.id !== id);
    } catch(error) {
      validation.value = error.response;
    }
  }



  function pushClasse(data){
    categories.value.push(data);
  }
  function updateCategoryPush(data){
    categories.value.push(data);
  }
  function resetValidationsErrors(){
  validation.value = {}
  }

  return {
    indexCategory,
    storeCategory,
    updateCategory,
    deleteCategory,
    showCategory,
    categories,
    validation,
  };
});
