<script setup>
import { useAuthStore } from "@/stores/Auth/Auth";
import { useCommonStore } from "@/stores/WebRelated/coman";
import ProfileDropMenuVue from "./ProfileDropMenu.vue";
import multiselect from "@vueform/multiselect";
import router from "@/router/index.js";
import { onMounted, ref,reactive } from "vue";
const auth = useAuthStore();
import { useProductStore } from "@/stores/Auth/Post/products";
const product = useProductStore();
const comans = useCommonStore();
onMounted(() => {
  comans.getCitys();
});
const paginate = ref(5);

const secoundMenuLink = ref([
  {
    id: 1,
    name: "Mobiles",
    path: "/mobiles",
    active: window.location.pathname === "/mobiles",
  },
  {
    id: 2,
    name: "Cars",
    path: "/cars",
    active: window.location.pathname === "/cars",
  },
  {
    id: 3,
    name: "Propertys",
    path: "/property",
    active: window.location.pathname === "/property",
  },
  {
    id: 4,
    name: "Electronics",
    path: "/electronic",
    active: window.location.pathname === "/electronic",
  },
  {
    id: 5,
    name: "Bikes",
    path: "/bikes",
    active: window.location.pathname === "/bikes",
  },
  {
    id: 6,
    name: "Animals",
    path: "/animals",
    active: window.location.pathname === "/animals",
  },
]);

const isNavOpen = ref(true)

const hookState = reactive({
      inputValue: '',
      location: '',
      min_price: 0,
      mixi_price:0,
    });

const navigateTo = (path) => {
  router.push(path);
};
const menuItem = ref(false);

const formHandle = async() => {

   await  product.indexProduct(
    product.currentCategory,
    paginate.value,
    hookState.inputValue,
    hookState.location,
    hookState.min_price,
    hookState.mixi_price,
    );

}  

const searchByLocation = async () => {
   await  product.indexProduct(
    product.currentCategory,
    paginate.value,
    hookState.inputValue,
    hookState.location,
    hookState.min_price,
    hookState.mixi_price,
    );
}
</script>


<template>
  <div
    class="sticky top-0 bg-gray-100 md:py-5 py-2 bg-opacity-70 shadow-md md:px-10 backdrop-blur-md z-50"
  >
    <div class="md:hidden flex justify-between">
      <div class="p-2">
        <RouterLink :to="{ path: '/' }">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
            alt=""
            class="w-[50px]"
          />
        </RouterLink>
      </div>
      <div class="p-2">
        <button @click="isNavOpen =! isNavOpen" >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
        </button>
      
      </div>
    </div>

    <div class="grid grid-cols-12 gap-3 md:mx-0 mx-2 " v-if="isNavOpen">
      <div class="md:col-span-1 col-span-12 my-auto md:grid justify-center hidden" >
        <RouterLink :to="{ path: '/' }">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
            alt=""
            class="w-[100px]"
          />
        </RouterLink>
      </div>
      <div class="md:col-span-4 col-span-12 my-auto">
        <label for="name" class="text-gray-600 hover:cursor-pointer">
          <multiselect
            v-model="hookState.location"
            :options="comans.cityInfo?.data"
            label="name"
            id="name"
            track-by="id"
            @select="searchByLocation"
            :searchable="true"
            placeholder="Select Your Location"
            class="focus:border-blue-500 focus:outline-none"
            style="transition: border-color 0.3s ease-in-out"
          >
          </multiselect>
        </label>
      </div>
      <div class="md:col-span-5 col-span-12 my-auto ">
        <form @submit.prevent="formHandle" class="flex">

        <input
          v-model="hookState.inputValue"
          type="text"
          placeholder="Find Cars, Mobiles, And More.."
          class="w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          style="transition: border-color 0.3s ease-in-out"
        />
        <button
          id="btn"
          class="bg-blue-500 hover:bg-blue-60 text-white font-semibold py-2 px-4"
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
      </form>

      </div>

      <div
        :class="`md:col-span-2 col-span-5 my-auto  flex gap-3 ${
          auth.isAuthenticated && 'justify-between'
        }`"
    
      >
        <div
          class="my-auto"
          v-if="auth.isAuthenticated && auth.userInfo?.user?.role !== 'admin'"
        >
          <RouterLink :to="{ name: 'SellProduct' }">
            <button
              class="bg-gray-500 flex gap-1 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4"
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
              Sell
            </button>
          </RouterLink>
        </div>

      
        <div v-if="auth.isAuthenticated" >
          <button @click="menuItem = !menuItem" class="relative">
            <div class="flex ">
              <img
                src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                alt=""
                class="md:w-[50px]"
              />
              <span class="my-auto" v-if="!menuItem">
                <svg
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
              </span>
              <span class="my-auto" v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <ProfileDropMenuVue v-if="menuItem" />
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
      </div>
    </div>

  </div>

  <!-- secound nav bar -->
  <div class="my-5 text-gray-600" id="font">
    <ul
      class="md:gap-5 gap-1 md:mx-10 mx-5 text-center md:flex grid grid-cols-3"
    >
      <li
        v-for="navLink in secoundMenuLink"
        :key="navLink"
        @click="navigateTo(navLink.path)"
        class="cursor-pointer md:text-lg text-md"
        :class="{ 'text-blue-500': navLink.active }"
      >
        {{ navLink.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
#searchInput {
  border-radius: 5px 0px 0px 5px;
}
#btn {
  border-radius: 0px 5px 5px 0px;
}
</style>
