<script setup>
import Card from "@/components/IndexPageComponents/Card.vue";
import NavBar from "@/components/WebRelated/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="mx-10">
    <h1 class="text-4xl mb-10" id="font">
      Find Your Dream <span class="text-pink-500">Car,s </span> in Low Buged
    </h1>


    <Card />
  </div>
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
