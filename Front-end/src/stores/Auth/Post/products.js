import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const product = ref(null)
  const validation = ref(null);
  const category = ref(null);
  const isLoading = ref(false);
  const isMessage = ref(null);



  async function indexProduct(category) {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `/api/products?category=${category}`
      );
      products.value = response.data;
      isLoading.value = false;
     } catch (error) {
      validation.value = error.response;
    }
  }

  async function storeProduct(data) {
    try {
      isLoading.value = true;
      const response = await axios.post(
      `/api/product`, data);
      product.value = response.data;
      isMessage.value = response.data.message
      isLoading.value = false;
      pushClasse(response.data)
      resetValidationsErrors()

    } catch (error) {
      if(error.response){
        validation.value = error.response;

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
      validation.value = error.response;
    }
  }
  async function updateProduct(id,data) {
    try {
      isLoading.value = true;
      const response = await axios.post(
        `/api/product/${id}`, data);
      const productItem = [...products.value]
      const index = productItem.findIndex((ProductItem) => ProductItem.id == response.data.id)
      productItem.splice(index, 1, response.data)
      product.value = productItem
      isLoading.value = false;

      resetValidationsErrors()
    } catch (error) {
      validation.value = error.response;
    }
  }
  async function deleteProduct(id){
    try {
      isLoading.value = true;
      const res = await axios.delete(`/api/product/${id}`);
      isMessage.value = res.data;
      console.log(res.data);
      isLoading.value = false;
    } catch (error) {
      if (error.response) {
        validation.value = error.response;
      } else {
        console.error(error); 
      }
    }
  }
  

  
  function resetValidationsErrors() {
    validation.value = {}
  }

  function pushProducat(newProduct) {
    products.value.push(newProduct)
  }

  return {
    isLoading,
    updateProduct,
    isMessage,
    resetValidationsErrors,
    storeProduct,
    deleteProduct,
    product,
    pushProducat,
    showProduct,
    indexProduct,
    products,
    validation,
    category,
  };
});
