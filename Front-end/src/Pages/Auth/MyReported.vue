<script setup>
import NavBar from "@/components/WebRelated/NavBar.vue";
import { onMounted } from "vue";
import { useReportStore } from "@/stores/WebRelated/productReport";
const report = useReportStore();

onMounted(() => {
    report.indexMyReport();
});

const removeReport = async (id) => {
  await report.deletereporte(id);
}

</script>

<template>
  <NavBar />
  <div class="mx-10">
    <h1 class="text-4xl mb-10" id="font">
     My Reported <span class="text-pink-500">Products </span>
    </h1>

    <div
      class="grid grid-cols-2 my-5 gap-3"
      id="font"
      v-if="report.myReports.length">
      <div v-for="reportedItem in report.myReports" :key="reportedItem.id">
        <div class="border border-gray-300 rounded shadow-md">
          <div class="grid grid-cols-2">
            <div class="bg-red-500">
              <img
                :src="reportedItem.product.images[0]"
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <div class="m-5">
              <h1 class="font-bold mb-3">
                PKR :
                <span class="text-gray-500 text-sm"> {{ reportedItem.product.price }}</span>
              </h1>
              <h1 class="font-bold mb-1">
                Title :
                <span class="text-gray-500 text-sm"> {{ reportedItem.product.title }}</span>
              </h1>
              <h1 class="text-gray-800 mb-1 font-bold">
                Description :
                <span class="text-gray-500 text-sm">{{ reportedItem.product.description }}</span>
              </h1>
              <h1 class="text-gray-800 text-md font-bold mb-2">
                Location :
                <span class="text-gray-500 text-sm">{{ reportedItem.product.location }}</span>
              </h1>
              <hr />
              <div class="flex mt-5">
               
                <button
                  class="bg-red-600 text-white py-2 px-4 rounded"
                  @click="removeReport(reportedItem.id)"
                >
                  Reported
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center" v-else >
      <img src="https://hhrf.in/images/nodatafound.png" alt=""  />
    </div>
  </div>


</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
