<script setup>
import BaseInput from '@/components/WebRelated/BaseInput.vue';
import FormCard from '@/Pages/FormLayout.vue/FormCard.vue';
import ButtonPrimary from '@/components/WebRelated/ButtonPrimary.vue';

import { reactive } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import router from "@/router/index.js";
const auth = useAuthStore()

const registerState = reactive({
  name: "",
  email: "",
  password: "",
  c_password: "",

});
const handleForm = async () => {
  const formData = {
    name: registerState.name,
    email: registerState.email,
    password: registerState.password,
    c_password: registerState.c_password,

  };
  await auth.Register(formData);

  if (auth.registerSuccess) {
    router.push({ name: "Login" });
  }
};
</script>
<template>
  <FormCard>
    <form action="" @submit.prevent="handleForm">

        
<div>

<BaseInput label="Enter your Name " type="text" v-model="registerState.name"/>
<span v-if="auth.AuthValidactionErrors?.data?.errors?.name?.length" class="text-red-500">*{{ auth.AuthValidactionErrors.data.errors.name[0] }}</span>

</div>
      
<div class="mt-6 w-full">

<BaseInput label="Enter your E-mail" type="email"  v-model="registerState.email"/>
<span v-if="auth.AuthValidactionErrors?.data?.errors?.email?.length" class="text-red-500">*{{ auth.AuthValidactionErrors.data.errors.email[0] }}</span>

</div>      
<div class="mt-6 w-full">

<BaseInput label="Enter your password" type="password" v-model="registerState.password"/>
<span v-if="auth.AuthValidactionErrors?.data?.errors?.password?.length" class="text-red-500">*{{ auth.AuthValidactionErrors.data.errors.password[0] }}</span>

</div>
<div class="mt-6 w-full">
<BaseInput label="Confirom-Password" type="password"  v-model="registerState.c_password"/>
<span v-if="auth.AuthValidactionErrors?.data?.errors?.c_password?.length" class="text-red-500">*{{ auth.AuthValidactionErrors.data.errors.c_password[0] }}</span>

 
</div>
<div class="mt-8">
 <ButtonPrimary text="Register"/>
</div>

</form>
  </FormCard>

   
</template>