<script setup>
import { reactive, ref } from "vue";
import BaseInput from "../WebRelated/BaseInput.vue";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";
const years = ref([]);

for (let i = 2024; i > 2000; i--) {
  years.value.push(i);
}
</script>
<template>
  <div class="px-40 my-10 drop-shadow-lg ">
    <div class="bg-gray-100 border border-gray-300 p-5 rounded-lg">
      <div>
        <h1 class="text-xl font-bold mb-5">Edit profile</h1>
        <h2 class="text-sm font-bold mb-3">Profile Photo</h2>

        <div class="flex gap-5">
          <div class="my-auto">
            <img
              src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
              alt=""
              class="w-[100px]"
            />
          </div>
          <div class="my-auto">
            <ButtonPrimary text="Uplode Image" class="bg-gray-700 py-3" />
            <p class="text-sm mt-3">* JPG, JPEG, PNG Min: 400px, Max: 1024px</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 mt-10">
        <div>
          <BaseInput label="Name" />
          <h1 class="my-2">Date of birth</h1>
          <div class="grid grid-cols-3 mt-2 gap-2">
            <div>
              <select
                name=""
                id=""
                class="w-full p-2 bg-white border border-gray-400 rounded-md"
              >
                <option value="" v-for="day in Array(31).keys()" :key="day">
                  {{ day + 1 }}
                </option>
              </select>
            </div>
            <div>
              <select
                name=""
                id=""
                class="w-full p-2 bg-white border border-gray-400 rounded-md"
              >
                <option value="" v-for="month in Array(12).keys()" :key="month">
                  {{ month + 1 }}
                </option>
              </select>
            </div>
            <div>
              <select
                name=""
                id=""
                class="w-full p-2 bg-white border border-gray-400 rounded-md"
              >
                <option value="" v-for="year in years" :key="year">
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
          <div class="mt-5">
            <select
              name=""
              id=""
              class="w-full p-2 bg-white border border-gray-400 rounded-md"
            >
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div class="mt-5">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="bg-white p-10 my-5 rounded-md">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <BaseInput label="Phone " />
          </div>
          <div class="">
            <p class="text-sm mt-5">
              This is the number for buyers contacts, reminders, and other
              notifications.
            </p>
          </div>
          <div>
            <BaseInput label="E-mail " />
          </div>
          <div>
            <p class="text-sm  mt-8 ">
                We won't reveal your email to anyone else nor use it to send you spam

            </p>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 p-3 flex justify-end rounded-md">
        <ButtonPrimary text="Save Changes" />

      </div>
    </div>
  </div>
</template>
