import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useProductStore = defineStore("product", () => {
  const product = ref({});
  const getProductById = ref({});
  const products = ref([]);
  const validationErrors = ref(null);
  const category = ref(null);
  const isLoading = ref(false);


  async function getProducts(category) {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `http://localhost:8000/api/products?category=${category}`
      );
      products.value = response.data.products;
      isLoading.value = false;
     } catch (error) {
      validationErrors.value = error.response;
    }
  }

  async function addProduct(data) {
    try {
      isLoading.value = true;
      const response = await axios.post(
        "http://localhost:8000/api/product",
        data);
      product.value = response.data;
      isLoading.value = false;


    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  async function productInfo(id) {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `http://localhost:8000/api/product/${id}`);
         getProductById.value = response.data;
        isLoading.value = false;


    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  

  return {
    isLoading,
    addProduct,
    getProductById,
    product,
    getProducts,
    products,
    validationErrors,
    category,
    productInfo,
  };
});
