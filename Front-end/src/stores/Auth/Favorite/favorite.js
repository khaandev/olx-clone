import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
import { useProductStore } from "../Post/products";
export const useFavoriteStore = defineStore("favorite", () => {
  const favorites = ref([]);
  const favorite = ref({});

  const validationErrors = ref(null);

  async function getAllFavorites() {
    try {
      const response = await axios.get("/api/get/favorites");
      favorites.value = response.data;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  async function favoriteGet(id) {
    try {
      const response = await axios.post(`/api/favorite/${id}`);

      const productStore = useProductStore();
      productStore.product = response.data;
    } catch (error) {
      validationErrors.value = error.response;
    }
  }

  return {
    favoriteGet,
    favorite,
    getAllFavorites,
    favorites,
    validationErrors,
  };
});
