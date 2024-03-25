import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
import { useCommonStore } from "@/stores/WebRelated/coman";
const comman = useCommonStore();
export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const myProducts = ref([]);
  const productWithCategory = ref([]);
  const currentCategory = ref(null)
  const product = ref(null);
  const validation = ref(null);
  const category = ref(null);
  const isLoading = ref(false);
  const isMessage = ref(false);
  const isSuccess = ref(false);


  async function indexMyProduct() {
    try {
      isLoading.value = true;
      const response = await axios.get(`/api/myproduct`);
      myProducts.value = response.data;
      isLoading.value = false;
    } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  async function indexMyProductWithCategory() {
    try {
      isLoading.value = true;
      const response = await axios.get(`/api/recent_products`);
      productWithCategory.value = response.data;
      isLoading.value = false;
    } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  async function indexProduct(
    category,
    per_page,
    title,
    location,
    min_price,
    max_price
  ) {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `/api/products?category=${category}&per_page=${per_page}&search_title=${title}&search_location=${location}&min_price=${min_price}&max_price=${max_price}`
      );
      products.value = response.data;
      currentCategory.value = category;
      isLoading.value = false;
    } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  async function storeProduct(data) {
    try {
      isLoading.value = true;
      const response = await axios.post(`/api/product`, data);
      product.value = response.data;
      products.value.push(response.data);
      isSuccess.value = true;
      isMessage.value = true;
      isLoading.value = false;
      comman.validationError = null;
      setTimeout(() => {
        isMessage.value = false;
      }, 3000);
    } catch (error) {
      isLoading.value = false;
      isMessage.value = false;
      isSuccess.value = false;


      if (error.response) {
        comman.validationError = error.response.data.errors;
      } else {
        console.log("some thing went Worng");
      }
    }
  }

  async function showProduct(id) {
    try {
      isLoading.value = true;
      const response = await axios.get(`/api/product/${id}`);
      product.value = response.data;
      isLoading.value = false;
    } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }


  async function updateProduct(id, data) {
    try {
      isLoading.value = true;
      const response = await axios.post(`/api/product/${id}`, data);
      product.value = response.data;

      isLoading.value = false;
      isSuccess.value = true;
      
    } catch (error) {
      isLoading.value = false;
      isSuccess.value = false;

      comman.validationError = error.response?.data?.errors;
    }
  }
  async function deleteProduct(id) {
    try {
      isLoading.value = true;
      const res = await axios.delete(`/api/product/${id}`);
      isMessage.value = true;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      isMessage.value = false;
      
      if (error.response) {
        isLoading.value = false;
        isMessage.value = false;
        comman.validationError = error.response?.data?.errors;
      } else {
        console.error(error);
      }
    }
  }

  return {
    isSuccess,
    indexMyProductWithCategory,
    isLoading,
    updateProduct,
    isMessage,
    productWithCategory,
    storeProduct,
    deleteProduct,
    indexMyProduct,
    product,
    showProduct,
    currentCategory,
    indexProduct,
    products,
    validation,
    category,
    myProducts,
  };
});
