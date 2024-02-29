<script setup>
import { useAuthStore } from "@/stores/Auth/Auth";
import { ref } from "vue";
const auth = useAuthStore();
const menuItem = ref(false)
</script>

<template>
  <div class="bg-gray-100 p-10 drop-shadow-md">
    <div class="grid grid-cols-12 gap-3">
      <div class="col-span-4 my-auto">
        <select
          name=""
          id=""
          class="w-full border border-gray-500 focus:brder-none p-2 focus:outline-none rounded-md focus:border-blue-500"
        >
          <option value="">Karachi</option>
          <option value="">Lahore</option>
          <option value="">Islamabad</option>
        </select>
      </div>
      <div class="col-span-5 my-auto flex">
        <input
          type="text"
          id="searchInput"
          placeholder="Find Cars, Mobiles, And More.."
          class="w-full border border-gray-500 py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <button
          id="btn"
          class="bg-blue-500 hover:bg-blue-60 text-white font-semibold rounded-md py-2 px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="col-span-3 my-auto flex gap-3">
        <div class="my-auto">
          <button
            class="bg-blue-500 flex gap-2 hover:bg-blue-60 text-white font-semibold rounded-md py-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
              />
            </svg>
            sell
          </button>
        </div>

        <div v-if="!auth.isAuthenticated">
          <RouterLink :to="{ name: 'Login' }">
            <button
              class="bg-blue-500 flex gap-2 hover:bg-blue-60 text-white font-semibold rounded-md py-2 px-4"
            >
              Login
            </button>
          </RouterLink>
        </div>

        <div v-if="!auth.isAuthenticated">
          <RouterLink :to="{ name: 'Register' }">
            <button
              class="bg-blue-500 flex gap-2 hover:bg-blue-60 text-white font-semibold rounded-md py-2 px-4"
            >
              Register
            </button>
          </RouterLink>
        </div>
        <div v-if="auth.isAuthenticated">
         <button @click="menuItem  =!  menuItem">
            <div class="flex">
              <img
                src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                alt=""
                class="w-[50px] my-auto"
              /><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 my-auto font-bold"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="my-5 text-gray-700 font-bold">
    <div class="flex gap-5 mx-10">
      <h2>Mobile Phones</h2>
      <h2>Cars</h2>
      <h2>Motorcycles</h2>
      <h2>Houses</h2>
      <h2>Tablets</h2>
      <h2>Land & Plots</h2>
    </div>
  </div>
<div class="bg-red-500 p-10" v-if="menuItem">

</div>
 
</template>


<style>
#btn {
  border-radius: 0px 5px 5px 0px;
}
#searchInput {
  border-radius: 5px 0px 0px 5px;
}
</style>
