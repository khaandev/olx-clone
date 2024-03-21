import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
import { useCommonStore } from "@/stores/WebRelated/coman";
const comman = useCommonStore()
export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const myProducts = ref([]);
  const productWithCategory = ref([]);


  const product = ref(null)
  const validation = ref(null);
  const category = ref(null);
  const isLoading = ref(false);
  const isMessage = ref(false);

  async function indexMyProduct() {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `/api/myproduct`
      );
      myProducts.value = response.data;
      isLoading.value = false;
     } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  async function indexMyProductWithCategory() {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `/api/recent_products`
      );
      productWithCategory.value = response.data;
      isLoading.value = false;
     } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  async function indexProduct(category) {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `/api/products?category=${category}`
      );
      products.value = response.data;
      isLoading.value = false;
     } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  async function storeProduct(data) {
    try {
      isLoading.value = true;
      const response = await axios.post(
      `/api/product`, data);
      product.value = response.data;
      products.value.push(response.data);
      isMessage.value = true;
      isLoading.value = false;
      comman.validationError = null
    } catch (error) {
      isLoading.value = false;
      isMessage.value = false;
      if(error.response){
        comman.validationError = error.response.data.errors;

      }else{
        console.log('some thing went Worng');
      }
    }
  }

  async function showProduct(id) {
    try {
      isLoading.value = true;
        const response = await axios.get(
        `/api/product/${id}`);
        product.value = response.data;
        isLoading.value = false;

       } catch (error) {

      comman.validationError = error.response.data.errors;
    }
  }
  async function updateProduct(id,data) {
    try {
      isLoading.value = true;
      const response = await axios.post(
      `/api/product/${id}`, data);
      product.value = response.data;
      isLoading.value = false;
      resetValidationsErrors()
    } catch (error) {

      comman.validationError = error.response.data.errors;
    }
  }
  async function deleteProduct(id){
    try {
      isLoading.value = true;
      const res = await axios.delete(`/api/product/${id}`);
      isMessage.value = true;
      isLoading.value = false;
    } catch (error) {
      if (error.response) {
        isMessage.value = false;

        comman.validationError = error.response.data.errors;
      } else {
        console.error(error); 
      }
    }
  }
  



 

  return {
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
    indexProduct,
    products,
    validation,
    category,
    myProducts,
  };
});
