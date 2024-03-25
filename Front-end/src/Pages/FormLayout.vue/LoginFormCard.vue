<script setup>
const loginGoogle = async () => {
  window.location.href = "http://127.0.0.1:8000/auth/redirect";
};
</script>
<template>
    <div class="flex flex-col items-center justify-center px-5 md:px-0">
      <div class="bg-gray-100 shadow rounded md:w-[30%] w-full p-5  md:my-24 my-16 border border-gray-300 ">
        <p
          tabindex="0"
          class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
        >
          Login to your account
        </p>
        <p
          tabindex="0"
          class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
        >
          Dont have account ? 
          <RouterLink :to="{name: 'Register'}"
            class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
          >
          <span class="text-blue-500"> Sign up here</span>   </RouterLink>
        </p>
      
        <slot></slot>
      </div>
    </div>
</template>
