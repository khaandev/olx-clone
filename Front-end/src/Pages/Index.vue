<script setup>
// import CategoryProduct from "@/components/WebRelated/IndexPageComponents/CategoryProduct.vue";
import CategoryProduct from "@/components/IndexPageComponents/CategoryProduct.vue";
import Card from "@/components/IndexPageComponents/Card.vue";



import NavBar from "@/components/WebRelated/NavBar.vue";
import Footer from "@/components/WebRelated/Footer.vue";
</script>

<template>
  <NavBar />

  <div class="mx-10">
    <div class="my-5">
      <img
        src="https://images.olx.com.pk/thumbnails/436059214-800x600.webp"
        alt=""
        class="rounded"
      />
    </div>
    <CategoryProduct />
    <Card />
  </div>
  <Footer />
</template>
