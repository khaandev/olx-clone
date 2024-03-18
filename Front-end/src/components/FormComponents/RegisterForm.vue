<script setup>
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import RegisterFormCard  from "@/Pages/FormLayout.vue/RegisterFormCard .vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";
import ValidtaionError from "../common/ValidtaionError.vue";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import router from "@/router/index.js";
const auth = useAuthStore();
const isLoading =ref(false)
const registerState = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  bio: "",
  phone: "",
  dob: "",
});
const handleForm = async () => {
  isLoading.value = true
  const formData = {
    name: registerState.name,
    email: registerState.email,
    password: registerState.password,
    password_confirmation: registerState.confirmPassword,
    gender: registerState.gender,
    bio: registerState.bio,
    phone: registerState.phone,
    dob: registerState.dob,
  };
  await auth.Register(formData);
  // console.log(formData);

  if (auth.registerSuccess) {
    router.push({ name: "Login" });
  }
  isLoading.value = false
  
};
</script>
<template>
  <RegisterFormCard>
    <form action="" @submit.prevent="handleForm">
       <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <BaseInput
            placeholder="Name"
            type="text"
            label="Name"
            v-model="registerState.name"
          />
          <ValidtaionError field="name" />
        </div>
        <div class="col-span-6">
          <BaseInput
            placeholder="E-mail"
            type="email"
            label="E-mail"
            v-model="registerState.email"
          />
          <ValidtaionError field="email" />

        </div>

        <div class="col-span-6">
          <BaseInput
            placeholder="Password"
            type="password"
            label="Password"
            v-model="registerState.password"
          />
          <ValidtaionError field="password" />

        </div>

        <div class="col-span-6">
          <BaseInput
            placeholder="Confirm Password"
            type="password"
            label="Confirm Password"
            v-model="registerState.password_confirmation"
          />
          <ValidtaionError field="confirmPassword" />

        </div>

        <div class="col-span-6">
          <BaseInput
            placeholder="Phone"
            type="number"
            label="Phone"
            v-model="registerState.phone"
          />
        </div>

        <div class="col-span-6">
          <BaseInput
            placeholder="Date of Birth"
            type="date"
            label="Date of Birth"
            v-model="registerState.dob"
          />
          <ValidtaionError field="dob" />

        </div>

        <div class="col-span-12">
          <div class="bg-gray-100 px-2 py-2 rounded  flex gap-2 border border-gray-400">
            <label>
              <input
                type="radio"
                v-model="registerState.gender"
                value="Male"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                v-model="registerState.gender"
                value="Female"
              />
              Female
            </label>
            <ValidtaionError field="gender" />
          </div>
        </div>

        <div class="col-span-12">
          <textarea
            v-model="registerState.bio"
            placeholder="Bio"
            cols="30"
            rows="5"
            class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>
        <div class="col-span-12">
          <ButtonPrimary :text="isLoading ? 'Registering...' : 'Register'" :disabled="isLoading" />
        </div>
      </div>
    </form>
  </RegisterFormCard>
</template>

