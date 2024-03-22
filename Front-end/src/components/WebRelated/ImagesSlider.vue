<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";


const images = ([
    {
        id: 1,
        img: 'https://images.olx.com.pk/thumbnails/441593869-800x600.webp',
    },
    {
        id: 2,
        img: 'https://images.olx.com.pk/thumbnails/436059214-800x600.webp',
    },
])
</script>
<template>

          <carousel :items-to-show="1">
            <slide
              v-for="(image, imgIndex) in images"
              :key="imgIndex"
            >
              <img
                :src="image.img"
                alt=""
                class="rounded w-full object-cover"
              />
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
       

</template>