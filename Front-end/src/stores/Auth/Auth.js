import { ref, computed } from "vue";
import axios from "@/http/Axios";
import { defineStore } from "pinia";
import { useCommonStore } from "../WebRelated/coman";

export const useAuthStore = defineStore("Auth", () => {
  const isAuthenticated = ref(false);
  const userInfo = ref(null);
  const comman = useCommonStore();

  // user Login

  async function attemptLogin(data) {
    try {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/login", data);
      isAuthenticated.value = true;
      userInfo.value = res.data;
    } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  // user register

  async function Register(data) {
    try {
      const res = await axios.post("/register", data);
      userInfo.value = res.data;

      resetValidationsErrors();
    } catch (error) {
      comman.validationError = error.response.data.errors;
    }
  }

  // user load
  async function loadUser() {
    try {
      const res = await axios.get("/api/user");
      isAuthenticated.value = true;
      userInfo.value = res.data;
    } catch (error) {
      comman.validationError = error.response;
    }
  }

  const userId = computed(() => {
    return userInfo.value ? userInfo.value.user.id : null;
  });

  // user update

  async function updateUserDetails(data) {
    try {
      const res = await axios.post(`/api/user/${userId.value}`, data);
      userInfo.value = res.data.user;
      resetValidationsErrors();
    } catch (error) {
      comman.validationError = error.response;
    }
  }

  // logout user

  async function logout() {
    try {
      await axios.post("/api/logout");
      isAuthenticated.value = false;
      userInfo.value = null;
    } catch (error) {
      comman.validationError = error.response;
    }
  }
  function resetValidationsErrors() {
    Validation.value = {};
  }

  return {
    isAuthenticated,
    attemptLogin,
    userInfo,
    resetValidationsErrors,
    loadUser,
    Register,
    updateUserDetails,
    logout,
  };
});
