<script setup>
const loginGoogle = async () => {
  window.location.href = "http://127.0.0.1:8000/auth/redirect";
};
</script>
<template>
  <div class="flex flex-col items-center justify-center px-5 md:px-0">
    <div
      class="shadow-md rounded md:w-[50%] w-full p-5 md:my-10 my-5 border border-gray-200"
    >
      <p
        tabindex="0"
        class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mb-5"
      >
        Create your account
      </p>

      <slot></slot>
      <p
        tabindex="0"
        class="focus:outline-none  my-5 font-medium leading-none text-gray-500"
      >
        i have already account
        <RouterLink
          :to="{ name: 'Login' }"
          class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
        >
          <span class="text-blue-500"> Login here</span>
        </RouterLink>
      </p>
    </div>
  </div>
</template>
