import { ref ,computed} from "vue";
import axios from "@/http/Axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("Auth", () => {
  const isAuthenticated = ref(false);
  // const registerSuccess = ref(false);
  const userInfo = ref(null);
  const Validation = ref(null);


  // user Login 
  async function attemptLogin(data) {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      const res = await axios.post("http://localhost:8000/login", data);
      isAuthenticated.value = true;
      userInfo.value = res.data;
    } catch (error) {
      Validation.value = error.response;
     
    } 
  }
  // user register
  async function Register(data) {
    try {
      const res = await axios.post("http://localhost:8000/register", data);
      userInfo.value = res.data;

      resetValidationsErrors();
    } catch (error) {
      Validation.value = error.response;
    } 
  }

  // user load 
  async function loadUser() {
    try {
      const res = await axios.get("http://localhost:8000/api/user");
      isAuthenticated.value = true;
      userInfo.value = res.data;
    } catch (error) {
      Validation.value = error.response;
    } 
  }

  const userId = computed(() => {
    return userInfo.value ? userInfo.value.user.id : null;
  });

// user update

  async function updateUserDetails(data) {
    try {
      const res = await axios.post(`http://localhost:8000/api/user/${userId.value}`, data);
      userInfo.value = res.data.user;
      resetValidationsErrors();
    } catch (error) {
      Validation.value = error.response;
    }
  }

  // logout user
  async function logout() {
    try {
      await axios.post("http://localhost:8000/api/logout");
      isAuthenticated.value = false;
      userInfo.value = null;
    } catch (error) {
      Validation.value = error.response;
    }
  }
  function resetValidationsErrors() {
    Validation.value = {};
  }

  return {
    isAuthenticated,
    attemptLogin,
    userInfo,
    Validation,
    resetValidationsErrors,
    loadUser,
    Register,
    updateUserDetails,
    logout,
  };
});
