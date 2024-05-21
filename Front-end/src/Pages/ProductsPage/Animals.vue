<script setup>
import NavBar from "@/components/WebRelated/NavBar.vue";
import { useProductStore } from "@/stores/Auth/Post/products";
import { onMounted, reactive, ref } from "vue";
const product = useProductStore();
import Fillter from "@/components/WebRelated/Fillter.vue";
import ButtonPrimary from "@/components/WebRelated/ButtonPrimary.vue";
import { useAuthStore } from "@/stores/Auth/Auth";
import { useReportStore } from "@/stores/WebRelated/productReport";


import useTimeAgo from "@/Composables/useTimeAgo";
const { formatTimeAgo ,truncateDescription} = useTimeAgo();


const auth = useAuthStore();
const report = useReportStore();

import LoadinSpiner from "@/components/WebRelated/LoadinSpiner.vue";

const paginate = ref(5);
const hookState = reactive({
  inputValue: "",
  location: "",
  min_price: 0,
  mixi_price: 0,
});
const currentUserReport = ref(null);

onMounted(() => {
  report.indexReport();
  product.indexProduct(
    "Animal",
    paginate.value,
    hookState.inputValue,
    hookState.location,
    hookState.min_price,
    hookState.mixi_price
  );
});

const loadMore = () => {
  paginate.value += paginate.value;
  product.indexProduct(
    "Animal",
    paginate.value,
    hookState.inputValue,
    hookState.location,
    hookState.min_price,
    hookState.mixi_price
  );
 };


const detailes = (id) => {
  const currentUserReportValue = report.reports.find(
    (report) =>
      report.user_id === auth.userInfo.user.id && report.product_id === id
  );
  if (currentUserReportValue) {
    currentUserReport.value = true;
  }
};

</script>

<template>
  <NavBar />
  <Fillter />

  <LoadinSpiner v-if="product.isLoading" />

  <div class="md:mx-10 mx-5" v-else>
    <h1 class="md:text-4xl text-2xl mb-10" id="font">
      Find Your Dream <span class="text-pink-500">Animal </span> in Low budget
    </h1>

    <div
      class="grid md:grid-cols-2 grid-cols-1 my-5 gap-3"
      id="font"
      v-if="product.products?.data?.length"
    >
      <div v-for="productItem in product.products?.data" :key="productItem.id">
        <div class="border border-gray-300 rounded shadow-md">
          <div class="grid md:grid-cols-2">
            <div>
              <img
                :src="productItem.images[0]"
                alt=""
                class="h-[250px] object-cover w-full"
              />
            </div>
            <div class="m-5">
              <h1 class="font-bold mb-3">
                PKR :
                <span class="text-blue-500 text-sm"> {{ productItem.price }}</span>
              </h1>
              <h1 class="font-bold mb-1">
                Title :
                <span class="text-blue-500  text-sm"> {{ productItem.title }}</span>
              </h1>
              <h1 class="text-gray-800 mb-1 font-bold">
                Description :
                <span class="text-blue-500  text-sm">{{ truncateDescription(productItem.description) }}</span>
              </h1>
              <h1 class="text-gray-800 text-md font-bold mb-2">
                Location :
                <span class="text-blue-500  text-sm">{{ productItem.location }}</span>
              </h1>
              <h1 class="text-gray-800 text-md font-bold mb-2">
               
                <span class="text-gray-500  text-sm">{{formatTimeAgo(productItem.created_at) }}</span>
              </h1>
              <hr />
              <div class="flex mt-5">
                <RouterLink
                  :to="{ path: `/product/detailes/${productItem.id}`, query: { currentUserReport: currentUserReport }}"
                >
                  <button
                    class="bg-gray-600 text-white py-2 px-4 rounded"
                    @click="detailes(productItem.id)"
                  >
                    Read More..
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center" v-else>
      <img src="https://hhrf.in/images/nodatafound.png" alt="" />
    </div>
    <div class="my-5" v-if="product.products.total > paginate">
      <ButtonPrimary
        :text="product.isLoading ? 'Loading...' : 'Load More'"
        @click="loadMore"
      />
    </div>
  </div>
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
