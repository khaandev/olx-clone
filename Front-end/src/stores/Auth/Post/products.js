import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useProductStore = defineStore("product", () => {
  const product = ref({});
  const getProductById = ref({});

  const products = ref([]);

  const validationErrors = ref(null);
  const category = ref(null);

  async function getProducts(category) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products?category=${category}`
      );
      products.value = response.data.products;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  async function addProduct(data) {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product",
        data
      );
      product.value = response.data;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  async function productInfo(id) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/product/${id}`);
         getProductById.value = response.data;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  

  return {
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
