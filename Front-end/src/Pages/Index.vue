<script setup>
import CategoryProduct from "@/components/IndexPageComponents/CategoryProduct.vue";
import NavBar from "@/components/WebRelated/NavBar.vue";
import Footer from "@/components/WebRelated/Footer.vue";
import CarCard from "@/components/Cards/CarCard.vue";
// import MobileCard from "@/components/Cards/MobileCard.vue";
// import BikeCard from "@/components/Cards/BikeCard.vue";
// import AnimalCard from "@/components/Cards/AnimalCard.vue";
// import ElectronicCard from "@/components/Cards/ElectronicCard.vue";
// import PropertyCard from "@/components/Cards/PropertyCard.vue";


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
    <CarCard />
    <hr>
    <!-- <MobileCard /> -->
    <!-- 
    <hr>
    <BikeCard />
    <hr>
    <AnimalCard />
    <hr>
    <ElectronicCard />
    <hr>
    <PropertyCard /> -->
  </div>

  <Footer />
</template>
