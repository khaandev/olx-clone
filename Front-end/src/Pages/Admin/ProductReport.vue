<script setup>
import MainLayout from "@/Layouts/MainLayout/MainLayout.vue";
import { useReportStore } from "@/stores/WebRelated/productReport";
const report = useReportStore();
import { onMounted } from "vue";

onMounted(() => {
  report.indexReport();
});
</script>

<template>
  <MainLayout>
    <div class="m-5 bg-gray-100 p-5 rounded-sm">
      <div v-for="reportProduct in report.reports">
        <div class="border border-pink-500 p-5 rounded mb-5">
          <div class="mb-4">
            <h1 class="text-2xl">Product Report</h1>
          </div>
          <div class="grid grid-cols-3 gap-5">
            <div>
              <h1
                class="text-pink-500 mb-2 font-bold text-center bg-pink-200 border border-pink-300"
              >
                Reported Product
              </h1>

              <img
                :src="reportProduct.product.images[0]"
                alt=""
                class="rounded-lg h-[100px] w-full object-cover"
              />
              <div class="border border-gray-300 mt-2 p-2 rounded-lg">
                <h1 class="text-gray-500">
                  Title :
                  <span class="text-blue-500">{{
                    reportProduct.product.title
                  }}</span>
                </h1>
                <h1 class="text-gray-500">
                  Price :
                  <span class="text-blue-500">{{
                    reportProduct.product.price
                  }}</span>
                </h1>
                <h1 class="text-gray-500">
                  Description :
                  <span class="text-blue-500">{{
                    reportProduct.product.description
                  }}</span>
                </h1>
                <h1 class="text-gray-500">
                  Location :
                  <span class="text-blue-500">{{
                    reportProduct.product.location
                  }}</span>
                </h1>
                <div class="flex mt-5">
                  <RouterLink
                    :to="{
                      path: `/product/detailes/${reportProduct.product.id}`,
                    }"
                  >
                    <button class="bg-gray-700 text-white py-1 px-2 rounded">
                      Read More..
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>

            <div>
              <h1
                class="text-pink-500 mb-2 font-bold text-center bg-pink-200 border border-pink-300"
              >
                Product owner
              </h1>

              <div class="flex gap-2 border">
                <img
                  src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                  alt=""
                  class="w-[50px]"
                />
                <h2 class="my-auto">
                  Name :
                  <span class="text-blue-500">
                    {{ reportProduct.product.user.name }}
                  </span>
                </h2>
              </div>
              <div class="border mt-5 p-2">
                <h2 class="my-auto mb-2">
                  Email :<span class="text-blue-500">
                    {{ reportProduct.product.user.email }}
                  </span>
                </h2>
                <h2 class="my-auto mb-2">
                  Phone :
                  <span class="text-blue-500">{{
                    reportProduct.product.user.phone
                  }}</span>
                </h2>
                <h2 class="my-auto mb-2">
                  Gender :
                  <span class="text-blue-500">{{
                    reportProduct.product.user.gender
                  }}</span>
                </h2>
              </div>
            </div>
            <div>
              <h1
                class="text-pink-500 mb-2 font-bold text-center bg-pink-200 border border-pink-300"
              >
                Reported User
              </h1>

              <div class="flex gap-2 border">
                <img
                  src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                  alt=""
                  class="w-[50px]"
                />
                <h2 class="my-auto">
                  Name :
                  <span class="text-blue-500">
                    {{ reportProduct.user.name }}
                  </span>
                </h2>
              </div>
              <div class="border mt-5 p-2">
                <h2 class="my-auto mb-2">
                  Email :<span class="text-blue-500">
                    {{ reportProduct.user.email }}
                  </span>
                </h2>
                <h2 class="my-auto mb-2">
                  Phone :
                  <span class="text-blue-500">{{
                    reportProduct.user.phone
                  }}</span>
                </h2>
                <h2 class="my-auto mb-2">
                  Gender :
                  <span class="text-blue-500">{{
                    reportProduct.user.gender
                  }}</span>
                </h2>
              </div>
              <div class="gap-2 border mt-2 p-2">
                <p class="bg-red-500 text-center text-white rounded">Whats Wronge with It !</p>
                <h2 class="my-auto mb-2">
                  <span class="text-blue-500">{{ reportProduct.resion }}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
