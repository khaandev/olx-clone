<script setup>
import NavBar from "@/components/WebRelated/NavBar.vue";
import PopUpLayout from "@/Layouts/PopUpLayout.vue";
import { ref, defineEmits } from "vue";
const emit = defineEmits(["modelClose"]);
import { useProductStore } from "@/stores/Auth/Post/products";

const product = useProductStore();

const cancelEmit = () => {
  emit("modelClose");
};

const getGridColumnsClass = (imageCount) => {
  if (imageCount === 1) {
    return "grid-cols-1";
  } else if (imageCount === 2) {
    return "grid-cols-2";
  } else {
    return "grid-cols-3";
  }
};
</script>

<template>
  <NavBar />

  <PopUpLayout>
    <div class="flex justify-end mx-4 mt-2 sticky top-0">
      <button @click="cancelEmit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-red-500"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="m-10">
      <div class="grid md:grid-cols-12 mt-10 gap-5">
        <div class="md:col-span-8 col-span-12">
          <div
            v-for="(productItem, index) in product.getProductById"
            :key="index"
            class="grid gap-2"
            :class="getGridColumnsClass(productItem.images.length)"
          >
            <img
              v-for="(image, imgIndex) in productItem.images"
              :src="image"
              :key="imgIndex"
              alt=""
              class="rounded"
            />
          </div>
        </div>
        <div class="md:col-span-4 col-span-12" id="font">
          <div
            class="bg-gray-100 p-5 rounded border border-gray-400"
            v-for="productItem in product.getProductById"
            :key="productItem.id"
          >
            <div class="flex gap-2 border">
              <img
                src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                alt=""
                class="w-[50px]"
              />
              <h2 class="my-auto">  Name : <span class="text-blue-500"> {{productItem.user.name}} </span> </h2>
            </div>
            <div class="border mt-5 p-2">
              <h2 class="my-auto mb-2">
                Price :
                <span class="text-blue-500">{{ productItem.price }} </span>
              </h2>
              <h2 class="my-auto mb-2">
                Title :<span class="text-blue-500">
                  {{ productItem.title }}
                </span>
              </h2>
              <h2 class="my-auto mb-2">
                Description :
                <span class="text-blue-500">{{ productItem.description }}</span>
              </h2>
            </div>

            <div class="border mt-5 p-2">
              <div class="grid grid-cols-3">
                <div class="flex justify-center">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex justify-center">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex justify-center">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PopUpLayout>
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
