import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);
  const category = ref(null);
  const validation = ref(null);
  const isMessage = ref(null);


  async function indexCategory() {
    try {
      const res = await axios.get(`/api/category`);
       categories.value = res.data;

    } catch (error) {
      validation.value = error.response;
    }
  }

  async function storeCategory(data) {
    try {
      const res = await axios.post(`/api/category`,data)
      category.value = res.data;
      isMessage.value = res.data.message;
      categories.value.push(res.data.category);
      validation.value = {}
       } catch(error) {
      
      validation.value = error.response;
    }
  }
  async function showCategory(id) {
    try {
      const res = await axios.get(`/api/category/${id}`)
      category.value = res.data;
    } catch(error) {
      validation.value = error.response;
    }
  }
  async function updateCategory(id,data) {
    try {
      const res = await axios.post(`/api/category/${id}`,data)
      const cat = [...categories.value]
      const index = cat.findIndex((Category) => Category.id == res.data.category.id)
      cat.splice(index, 1, res.data.category)
      categories.value = cat
      isMessage.value = res.data.message;

    } catch(error) {
      validation.value = error.response;
    }
  }

  async function deleteCategory(id) {
    try {
      const res = await axios.delete(`/api/category/${id}`);
      isMessage.value = res.data.message;
      categories.value = categories.value.filter((categoryItem) => categoryItem.id !== id);
    } catch(error) {
      validation.value = error.response;
    }
  }



 
 

  return {
    indexCategory,
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
