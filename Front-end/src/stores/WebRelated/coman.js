import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useCommonStore = defineStore("common", () => {
  const cityInfo = ref(null);
  const validationError = ref(null);

  async function getCitys() {
    try {
      const response = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/cities',
        { country: "pakistan",  }
      );
      const data = response.data;
      cityInfo.value = data;

    } catch (error) {
      validationError.value = error.response;
    } 
  }

  return {
    getCitys,
    cityInfo,
    validationError,
  };
});
