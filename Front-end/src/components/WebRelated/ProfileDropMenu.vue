<script setup>
import { ref } from "vue";
import router from "@/router/index.js";
import { useAuthStore } from "@/stores/Auth/Auth";

const auth = useAuthStore();
const dropDown = ref([
  {
    id: 1,
    text: " Profile",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" /></svg>`,
    path: "/profile/info",
    Active: false,
  },
  {
    id: 2,
    text: "My Adds",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>
`,
    path: "/myAdds",
    Active: false,
  },
  {
    id: 3,
    text: "My Favorites",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
`,
    path: "/myFavorites",
    Active: false,
  },
  
]);
const navigateTo = (path) => {
  dropDown.value.forEach((item) => {
    item.Active = item.path === path;
  });

  router.push(path);
};

const logoutAuth = async () => {
  await auth.logout();
  if (!auth.isAuthenticated) {
    router.push({ name: "Login" });
  }
};
</script>

<template>
  <div
    class="bg-white p-2 absolute w-[150px]  md:w-[200px] top-14 md:right-0  rounded-md shadow-lg"
  >
    <div class="my-2">
      <p class="font-mono text-left text-sm">Hello.</p>
      <h1 class="text-md font-bold text-left text-sm">{{ auth.userInfo.user.name }}</h1>
    </div>

    <hr />
    <ul class="my-3  md:gap-0 gap-3" v-if="auth.userInfo?.user?.role === 'user'">
      <li
        v-for="item in dropDown"
        :key="item.id"
        @click="navigateTo(item.path)"
        class="text-left text-sm mt-1 bg-gray-100 rounded-md md:p-2 p-1 border border-gray-400 hover:bg-gray-200"
        id="font"
      >
        <div class="flex">
          <component
            :is="item.icon ? 'div' : 'span'"
            v-if="item.icon"
            class="mr-2"
            v-html="item.icon"
          ></component>
          {{ item.text }}
        </div>
      </li>
    </ul>
    <ul class="my-3" v-else>
      <RouterLink :to="{ name: 'Profile' }">
        <li
          class="text-left mt-1 flex gap-2 mb-2 bg-gray-100 rounded-md p-2 border border-gray-400 hover:bg-gray-200"
          id="font"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clip-rule="evenodd"
            />
          </svg>
          Profile
        </li>
      </RouterLink>
      <RouterLink :to="{ name: 'Dashboard' }">
        <li
          class="text-left mt-1 flex gap-2 bg-gray-100 rounded-md p-2 border border-gray-400 hover:bg-gray-200"
          id="font"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clip-rule="evenodd"
            />
          </svg>
          Dashboard
        </li>
      </RouterLink>
    </ul>

    <div>
      <hr />

      <button
        @click="logoutAuth"
        class="text-left w-full flex gap-2 mt-2 bg-gray-100 rounded-md p-2 font-serif border border-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
        Logout
      </button>
    </div>
  </div>
</template>
