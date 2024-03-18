<script setup>
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import LoginFormCard from "@/Pages/FormLayout.vue/LoginFormCard.vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";
import ValidtaionError from "../common/ValidtaionError.vue";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import router from "@/router/index.js";

const auth = useAuthStore();

const isLoading = ref(false);

const loginState = reactive({
  email: "test@example.com",
  password: "password",
});

const handleForm = async () => {
  isLoading.value = true;

  const formData = {
    email: loginState.email,
    password: loginState.password,
  };

  await auth.attemptLogin(formData);

  if (auth.isAuthenticated) {
    router.push({ name: "Profile" });
  }
  isLoading.value = false;
};
</script>

<template>
  <LoginFormCard>
    <form action="" @submit.prevent="handleForm" class="mt-8">
      <div>
        <BaseInput
          label="Enter E-mail"
          type="email"
          v-model="loginState.email"
        />
        <ValidtaionError field="email" />
      </div>
      <div class="mt-6 w-full">
        <BaseInput
          label="Enter Password"
          type="password"
          class="rounded-lg"
          v-model="loginState.password"
        />
        <ValidtaionError field="password" />
      </div>
      <div class="mt-8">
        <ButtonPrimary :text="isLoading ? 'Logging in...' : 'Login'" :disabled="isLoading" />
      </div>
    </form>
  </LoginFormCard>
</template>
