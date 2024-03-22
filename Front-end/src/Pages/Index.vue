<script setup>
import NavBar from "@/components/WebRelated/NavBar.vue";
import Footer from "@/components/WebRelated/Footer.vue";
import ProductCardItem from "@/components/ProductCard/ProductCardItem.vue";
import ImagesSlider from '@/components/WebRelated/ImagesSlider.vue'
import CategoryProduct from "@/components/IndexPageComponents/CategoryProduct.vue";

</script>

<template>
  <NavBar />
  <div class="md:mx-10 mx-5">
   <ImagesSlider />
    <CategoryProduct />
    <hr>
    <ProductCardItem />
   
   
  </div>

  <Footer />
</template>
