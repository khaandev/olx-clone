<script setup>
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import FormCard from "@/Pages/FormLayout.vue/FormCard.vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";
import { reactive } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import router from "@/router/index.js";

const auth = useAuthStore()


const loginState = reactive({
  email: "",
  password: "",
});
const handleForm = async () => {
  const formData = {
    email: loginState.email,
    password: loginState.password,
  };
  await auth.attemptLogin(formData);

  if (auth.isAuthenticated) {
    router.push({ name: "Profile" });
  }
};
</script>
<template>
  <FormCard>
    <form action="" @submit.prevent="handleForm">
      <div>
        <BaseInput
          label="Enter E-mail"
          type="email"
          v-model="loginState.email"
        />
        <span v-if="auth.AuthValidactionErrors?.data?.errors?.email?.length" class="text-red-500">*{{ auth.AuthValidactionErrors.data.errors.email[0] }}</span>
      </div>
      <div class="mt-6 w-full">
        <BaseInput
          label="Enter Password"
          type="password"
          class="rounded-lg"
          v-model="loginState.password"
        />
        <span v-if="auth.AuthValidactionErrors?.data?.errors?.password?.length" class="text-red-500">*{{ auth.AuthValidactionErrors.data.errors.password[0] }}</span>

      </div>
      <div class="mt-8">
        <ButtonPrimary text="Login" />
      </div>
    </form>
  </FormCard>
</template>
