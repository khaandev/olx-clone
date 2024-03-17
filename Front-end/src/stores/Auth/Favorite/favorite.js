import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
import { useProductStore } from "../Post/products";
export const useFavoriteStore = defineStore("favorite", () => {
  const favorites = ref([]);
  const favorite = ref(null);

  const validationErrors = ref(null);

  async function indexFavorite() {
    try {
      const response = await axios.get("/api/get/favorites");
      favorites.value = response.data;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  async function storeFavorite(id) {
    try {
      const response = await axios.post(`/api/favorite/${id}`);
      const productStore = useProductStore();
      productStore.product = response.data.product;
      console.log(response.data.product);
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  return {
    indexFavorite,
    favorite,
    storeFavorite,
    favorites,
    validationErrors,
  };
});
