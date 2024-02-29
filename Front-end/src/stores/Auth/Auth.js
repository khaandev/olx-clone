import { ref } from "vue";
import axios from "@/http/Axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("Auth", () => {
  const isAuthenticated = ref(false);
  const UserWrongeInfo = ref(null);
  const userInfo = ref(null);
  const AuthValidactionErrors = ref(null);

   // user Login handel
   async function attemptLogin(data) {
    try {
      const res = await axios.post(`/api/login`, data);
      isAuthenticated.value = true;
      userInfo.value = res.data.data.user;
      localStorage.setItem("token", res.data.data.token);
      resetValidationsErrors()
    } catch (error) {
      AuthValidactionErrors.value = error.response;
    } finally {
      UserWrongeInfo.value = "Something went wrong";
    }
  }
  // user Login handel
  async function Register(data) {
    try {
      const res = await axios.post(`/api/register`, data);
      userInfo.value = res.data.data.user;
      resetValidationsErrors()
    } catch (error) {
      AuthValidactionErrors.value = error.response;
    } finally {
      UserWrongeInfo.value = "Something went wrong";
    }
  }

  // user load in hardRefresh
  async function loadUser() {
    try {
      const res = await axios.get(`/api/user`);
      isAuthenticated.value = true;
      userInfo.value = res.data.data.user;
    } catch (error) {
      AuthValidactionErrors.value = error.response;
    } finally {
      UserWrongeInfo.value = "Something went wrong";
    }
  }

  // logout user
  async function logout() {
    try {
      await axios.post(`/api/logout`);
      isAuthenticated.value = false;
      userInfo.value = null;
      localStorage.removeItem("token");
    } catch (error) {
      AuthValidactionErrors.value = error.response.data;
    }
  }
  function resetValidationsErrors() {
    AuthValidactionErrors.value = {}
  }

  return {
    isAuthenticated,
    userInfo,
    AuthValidactionErrors,
    attemptLogin,
    resetValidationsErrors,
    loadUser,
    Register,
    logout,
  };
});