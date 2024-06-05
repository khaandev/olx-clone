import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
import { useCommonStore } from "@/stores/WebRelated/coman";
const comman = useCommonStore();
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const myProducts = ref([]);
  const productWithCategory = ref([]);
  const currentCategory = ref(null);
  const product = ref(null);
  const productDeleted = ref(null);
  const productUpdate = ref(null);


  const category = ref(null);
  const isLoading = ref(false);

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

  async function storeProduct(data, productState) {
    try {
      isLoading.value = true;
      const response = await axios.post(`/api/product`, data);
      product.value = response.data;
      products.value.push(response.data);

      toast.success("Product Added ! ", {
        position: toast.POSITION.TOP_CENTER,
      });
      Object.keys(productState).forEach((key) => {
        productState[key] = "";
      });
      isLoading.value = false;
      comman.validationError = null;
    } catch (error) {
      if (error.response) {
        comman.validationError = error.response.data.errors;
        toast.error("Validation Error ! ", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Some thing went Wrong !", {
          position: toast.POSITION.TOP_CENTER,
        });
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
      productUpdate.value = response.data[0];

      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      comman.validationError = error.response?.data?.errors;
    }
  }

  async function deleteProduct(id) {
    try {
      isLoading.value = true;
     const res =  await axios.delete(`/api/product/${id}`);
      isLoading.value = false;
      productDeleted.value = res.data
    } catch (error) {
      isLoading.value = false;

      if (error.response) {
        isLoading.value = false;
        comman.validationError = error.response?.data?.errors;
      } else {
        console.error(error);
      }
    }
  }

  return {
    indexMyProductWithCategory,
    isLoading,
    productUpdate,
    updateProduct,
    productWithCategory,
    storeProduct,
    productDeleted,
    deleteProduct,
    indexMyProduct,
    product,
    showProduct,
    currentCategory,
    indexProduct,
    products,
    category,
    myProducts,
  };
});
