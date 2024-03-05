<script setup>
import { reactive, ref } from "vue";
import BaseInput from "../WebRelated/BaseInput.vue";
import ButtonPrimary from "../WebRelated/ButtonPrimary.vue";
import { useAuthStore } from "@/stores/Auth/Auth";
const auth = useAuthStore();


 
const authInfo = reactive({
  name: auth.userInfo?.user.name || "",
  phone: auth.userInfo?.user.phone || "",
  email: auth.userInfo?.user.email || "",
  bio: auth.userInfo?.user.bio || "",
  gender: auth.userInfo?.user.gender || "",
  dob: auth.userInfo?.user.dob || "",
});
const handleForm  = async () => {
  const formHandle = reactive({
    name: authInfo.name,
    phone: authInfo.phone,
    email: authInfo.email,
    bio: authInfo.bio,
    gender: authInfo.gender,
    dob: authInfo.dob,
    _method: 'PUT'
  });
  // console.log(formHandle, userId.value);
  await auth.updateUserDetails(formHandle)

};
</script>
<template>
  <div class="px-40 my-10">
    <div class="bg-gray-100 border border-gray-300 p-5 rounded-lg shadow-lg">
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

      <form action="" @submit.prevent="handleForm">
     <div class="grid grid-cols-2 gap-5 mt-10">


      <BaseInput  type="text" title="name"  v-model="authInfo.name" />
      <BaseInput  type="text"  title="email"  v-model="authInfo.email" />
      <BaseInput type="date" title="dob" v-model="authInfo.dob" />
      <BaseInput type="number" title="dob" v-model="authInfo.phone" />
      <textarea
          v-model="authInfo.bio"
          name=""
          id=""
          cols="30"
          rows="5"
          class="w-full border border-gray-500 py-2 px-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
        >
      </textarea>
      
      <div>
    <p class="text-lg my-2">Selected gender : <span class="text-blue-500"> {{ authInfo.gender }}</span> </p>

    <label>
      <input type="radio" v-model="authInfo.gender" value="male" />
      Male
    </label>
    <label>
      <input type="radio" v-model="authInfo.gender" value="female" />
      Female
    </label>

      </div>
     </div>

     <div class="bg-gray-200 p-3 flex justify-end rounded-md mt-5">
    <ButtonPrimary text="Save Changes" />
  </div>

    </form>

    </div>
  </div>
</template>
