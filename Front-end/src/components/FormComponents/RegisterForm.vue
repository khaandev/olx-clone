<script setup>
import BaseInput from "@/components/WebRelated/BaseInput.vue";
import FormCard from "@/Pages/FormLayout.vue/FormCard.vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";

import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import router from "@/router/index.js";
const auth = useAuthStore();
const years = ref([]);

for (let i = 2023; i > 2000; i--) {
  years.value.push(i);
}
const registerState = reactive({
  name: "",
  email: "",
  password: "",
  c_password: "",
  gender: "",
  bio: "",
  phone: "",
  day: "",
  month: "",
  year: "",
});
const handleForm = async () => {
  const formData = {
    name: registerState.name,
    email: registerState.email,
    password: registerState.password,
    c_password: registerState.c_password,
    gender: registerState.gender,
    bio: registerState.bio,
    phone: registerState.phone,
    day: registerState.day,
    month: registerState.month,
    year: registerState.year,
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
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-6" title="name">
          <BaseInput
            label="Enter your Name "
            type="text"
            v-model="registerState.name"
          />
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.name?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.name[0] }}</span
          >
        </div>
        <div class="col-span-6" title="email">
          <BaseInput
            label="Enter your E-mail"
            type="email"
            v-model="registerState.email"
          />
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.email?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.email[0] }}</span
          >
        </div>
        <div class="col-span-6" title="password">
          <BaseInput
            label="Enter your password"
            type="password"
            v-model="registerState.password"
          />
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.password?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.password[0] }}</span
          >
        </div>
        <div class="col-span-6" title="c_password">
          <BaseInput
            label="Confirom-Password"
            type="password"
            v-model="registerState.c_password"
          />
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.c_password?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.c_password[0] }}</span
          >
        </div>
        <div class="col-span-8" title="phone">
          <BaseInput
            label="Enter your Name "
            type="number"
            v-model="registerState.phone"
          />
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.phone?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.phone[0] }}</span
          >
        </div>
        <div class="col-span-4" title="gender">
          <label for="g">
            <h1 class="text-gray-600">Select Your Gender</h1>
            <select
              v-model="registerState.gender"
              name=""
              id="g"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            >
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
          </label>
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.gender?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.gender[0] }}</span
          >
        </div>
        <div class="col-span-4" title="day">
          <label for="d">
            <h1 class="text-gray-600 mb-2">Chose Day</h1>
            <select
              v-model="registerState.day"
              name=""
              id="d"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            >
              <option
                :value="day + 1"
                v-for="day in Array(31).keys()"
                :key="day"
              >
                {{ day + 1 }}
              </option>
            </select>
          </label>
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.day?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.day[0] }}</span
          >
        </div>
        <div class="col-span-4" title="month">
          <label for="m">
            <h1 class="text-gray-600 mb-2">Chose month</h1>
            <select
              name=""
              id="m"
              v-model="registerState.month"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            >
              <option
                :value="month + 1"
                v-for="month in Array(12).keys()"
                :key="month"
              >
                {{ month + 1 }}
              </option>
            </select>
          </label>
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.month?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.month[0] }}</span
          >
        </div>
        <div class="col-span-4" title="year">
          <label for="y">
            <h1 class="text-gray-600 mb-2">Chose Year</h1>
            <select
              name=""
              id="y"
              v-model="registerState.year"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            >
              <option :value="yyyy + 1" v-for="yyyy in years" :key="yyyy">
                {{ yyyy + 1 }}
              </option>
            </select>
          </label>
          <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.year?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.year[0] }}</span
          >
        </div>
        <div class="col-span-12">
          <label for="bio" class="mb-2">
            <h1 class="text-gray-600 mb-2">Add Your Boi</h1>
            <textarea
              v-model="registerState.bio"
              name=""
              id="bio"
              cols="30"
              rows="5"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            >
            </textarea>
            <span
            v-if="auth.AuthValidactionErrors?.data?.errors?.bio?.length"
            class="text-red-500"
            >*{{ auth.AuthValidactionErrors.data.errors.bio[0] }}</span
          >
          </label>
        </div>
        <div>
          <ButtonPrimary text="Register" />
        </div>
      </div>
    </form>
  </FormCard>
</template>
