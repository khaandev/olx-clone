import { ref, computed } from "vue";
import axios from "@/http/Axios";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useCommonStore } from "../WebRelated/coman";

export const useAuthStore = defineStore("Auth", () => {
  const isAuthenticated = ref(false);
  const userInfo = ref(null);
  const comman = useCommonStore();
  const isSuccess = ref(false);

  // user Login

  async function attemptLogin(data) {
    try {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/login", data);
      isAuthenticated.value = true;
      userInfo.value = res.data;
    } catch (error) {
      comman.validationError = error.response.data.errors;
      toast.error("Error !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  // user register

  async function Register(data, registerState) {
    try {
      await axios.post("/register", data);
      comman.validationError = null;
      toast.success("Register Success ", {
        position: toast.POSITION.TOP_CENTER,
      });
      Object.keys(registerState).forEach((key) => {
        registerState[key] = "";
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        comman.validationError = error.response.data.errors;
        toast.error("Validation Error !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Some thing went Wrong !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
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
    comman.validationError = {};
  }

  return {
    isSuccess,
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
