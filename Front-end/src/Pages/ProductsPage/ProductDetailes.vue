<script setup>
import { ref, defineEmits, onMounted } from "vue";
const emit = defineEmits(["modelClose"]);
import { useProductStore } from "@/stores/Auth/Post/products";
import { useAuthStore } from "@/stores/Auth/Auth";
import { useFavoriteStore } from "@/stores/Auth/Favorite/favorite";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import DeletePopUp from "@/components/WebRelated/DeletePopUp.vue";
import NavBar from "@/components/WebRelated/NavBar.vue";
import UpdateProdect from "@/components/Product/UpdateProduct.vue";
import ProductReport from '@/components/WebRelated/ProductReport.vue'
const product = useProductStore();
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/Auth/Post/category";
import router from "@/router/index.js";
const category = useCategoryStore();
const favorite = useFavoriteStore();
import { useReportStore } from "@/stores/WebRelated/productReport";
const report = useReportStore()


const auth = useAuthStore();
const isModalOpen = ref(false);
const openEmail = () => {
  const emailAddress = product.product.user.email;
  const subject = "Subject of the email";
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;


  window.location.href = mailtoLink;
};



const selectedId = ref(null);
const isReportModal = ref(false)
const fav = ref(false);

const isDeletePopUp = ref(false);
const isNumber = ref(false);

const mobielClicked = () => {
  isNumber.value = !isNumber.value;
};

const clickefav = async (id) => {
  fav.value = !fav.value;

  await favorite.storeFavorite(id);
};


const deleteProductItem = async (id) => {
  selectedId.value = id;
  isDeletePopUp.value = true;
};
const deleteBtn = async () => {
  await product.deleteProduct(selectedId.value);
  isDeletePopUp.value = false;

  if (product.isMessage) {
    router.go(-1);
  }
};

onMounted(() => {
  category.indexCategory();
  const route = useRoute();
  const productId = route.params.id;
  product.showProduct(productId);
});

const UpdateProductItem = async (id) => {
  selectedId.value = id;
  isModalOpen.value = true;
};
const goBack = () => {
  router.go(-1);
};

const clickReport = async (id) => {
  selectedId.value = id;
  isReportModal.value = true;
  await report.showReport(selectedId.value);
  console.log('hy');

}
</script>

<template>
  <NavBar />
  <div class="mt-5 bg-gray-200 text-gray-00">
    <button class="flex gap-2 mx-10 py-3" @click="goBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-lg font-bold">Back To Product</span>
    </button>
  </div>

  <div class="text-gray-700" v-if="product.validation?.statusText">
    <h1 class="text-xl mt-5 mx-10">No Product Detailes</h1>
  </div>

  <div class="mx-10 my-5 bg-gray-100 rounded-md" v-else>
    <div class="grid md:grid-cols-12 gap-5 p-5">
      <div class="md:col-span-8 col-span-12">
        <div>
          <carousel :items-to-show="1">
            <slide
              v-for="(image, imgIndex) in product.product?.images"
              :key="imgIndex"
            >
              <img
                :src="image"
                alt=""
                class="rounded w-full h-[400px] object-cover"
              />
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>
      </div>
      <div class="md:col-span-4 col-span-12" id="font">
        <div class="bg-gray-100 p-5 rounded border border-gray-400">

          <div class="flex gap-2 border">
            <img
              src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
              alt=""
              class="w-[50px]"
            />
            <h2 class="my-auto">
              Name :
              <span class="text-blue-500">
                {{ product.product?.user?.name }}
              </span>
            </h2>
          </div>
          <div class="border mt-5 p-2">
            <h2 class="my-auto mb-2">
              Price :
              <span class="text-blue-500">{{ product.product?.price }} </span>
            </h2>
            <h2 class="my-auto mb-2">
              Title :<span class="text-blue-500">
                {{ product.product?.title }}
              </span>
            </h2>
            <h2 class="my-auto mb-2">
              Description :
              <span class="text-blue-500">{{
                product.product?.description
              }}</span>
            </h2>
          </div>

          <div class="border mt-5 p-2" v-if="product.product?.user_id === auth.userInfo?.user?.id">
            <div class="grid grid-cols-2">
              <div class="flex justify-center">
                <button @click="deleteProductItem(product.product.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex justify-center">
                <button @click="UpdateProductItem(product.product.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
        
        
          </div>
          <div class="border mt-5" v-else-if="!auth.userInfo?.user?.id">
            <RouterLink :to="{ name : 'Login' }">
            <div class="grid grid-cols-1 bg-blue-500 text-white p-2">
              
             
              <div class="flex justify-center">
              Login..
              </div>
            </div>
          </RouterLink>

          </div>
          <div class="border mt-5" v-else-if="auth.userInfo?.user?.role === 'admin'">
            <div class="flex justify-center bg-red-500 text-white p-2">
                <button @click="deleteProductItem(product.product.id)" class="w-full">
                 Delete Product
                </button>
              </div>
          </div>
          <div class="border mt-5 p-2" v-else>
            <div class="grid grid-cols-4">
              <div class="flex justify-center">
                <button @click="openEmail">
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
                <button @click="mobielClicked">
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
                <button @click="clickefav(product.product.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                    :class="
                      product.product?.is_favorite
                        ? 'text-red-500'
                        : 'text-black'
                    "
                  >
                    <path
                      d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex justify-center">
                <button @click="clickReport(product.product.id)"
                
                 :class="
                      report.reports?.user_id === auth.userInfo.user.id &&  report.reports?.product_id === product.product?.id
                        ? 'text-red-500'
                        : 'text-black'
                    ">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93ZM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 0 1 3.75 21Z"
                    />
                  </svg>

                </button>
              </div>
            </div>
          </div>

          <div v-if="isNumber" class="mt-3">
            <p class="text-md text-gray-600">Here is Seller Phone Number</p>
          </div>
          <div
            class="border border-gray-300 rounded text-gray-600 bg-gray-200 p-1 mt-1"
            v-if="isNumber"
          >
            {{ product.product?.user?.phone }}
          </div>



        </div>
      </div>
    </div>
  </div>
<button @click="showdata"> show</button>
  <DeletePopUp
    @cancelBtn="isDeletePopUp = false"
    v-if="isDeletePopUp"
    @deleteBtn="deleteBtn"
  />
  <UpdateProdect
    v-if="isModalOpen"
    :selectedId="selectedId"
    @modalCancel="isModalOpen = false"
    @modalupdate="isModalOpen = false"
  />
<ProductReport v-if="isReportModal"  @cancleBtn="isReportModal=false"  :selectedId="selectedId" @ReportModal="isReportModal=false"/>
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
