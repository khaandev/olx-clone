<script setup>
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import RegisterFormCard  from "@/Pages/FormLayout.vue/RegisterFormCard .vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";

import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import router from "@/router/index.js";
const auth = useAuthStore();

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
  
};
</script>
<template>
  <RegisterFormCard >
    <form action="" @submit.prevent="handleForm">
       <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <BaseInput
            title="name"
            type="text"
            label="Name"
            v-model="registerState.name"
          />
        </div>
        <div class="col-span-6">
          <BaseInput
            title="email"
            type="email"
            label="E-mail"
            v-model="registerState.email"
          />
        </div>

        <div class="col-span-6">
          <BaseInput
            title="password"
            type="password"
            label="Password"
            v-model="registerState.password"
          />
        </div>

        <div class="col-span-6">
          <BaseInput
            title="c_password"
            type="password"
            label="c-password"
            v-model="registerState.confirmPassword"
          />
        </div>

        <div class="col-span-6">
          <BaseInput
            title="phone"
            type="number"
            label="Phone"
            v-model="registerState.phone"
          />
        </div>

        <div class="col-span-6">
          <BaseInput
            title="dob"
            type="date"
            label="Date of Barth"
            v-model="registerState.dob"
          />
        </div>

        <div class="col-span-12">
          <div
            class="bg-gray-100 px-2 py-2 rounded  flex gap-2 border border-gray-400"
          >
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
          </div>
        </div>

        <div class="col-span-12">
          <textarea
          v-model="registerState.bio"
          name=""
          id=""
          cols="30"
          rows="5"
          class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
        >
      </textarea>
     </div>
     <div>
      <ButtonPrimary text="Register" class="bg-gray-600"/>
     </div>
      </div>
    </form>
  </RegisterFormCard >
</template>
