<script setup>
import { defineEmits } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
const Auth = useAuthStore();
const emit = defineEmits(["hamburger"]);
import router from "@/router/index.js";

const emitUpdate = () => {
  emit("hamburger");
};

const logoutAuth = async () => {
  await Auth.logout();
  if (!Auth.isAuthenticated) {
    router.push({ name: "Login" });
  }
};
</script>

<template>
  <div class="bg-gray-200 p-2">
    <div class="flex justify-between">
      <button @click="emitUpdate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <button
        class="flex gap-1 my-auto bg-gray-700 p-1 rounded text-white"
        @click="logoutAuth"
        v-if="Auth.isAuthenticated"
      >
        Logout
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      </button>
    </div>
  </div>
</template>