<script setup>
import ArtistFront from '@/components/ArtistFront.vue'
import Hero from '@/components/Hero.vue'
import {getArtistData} from "../stores/artists.js"

const store = getArtistData()

const getArtists = computed(() => {
  return store.getArtists
})
</script>

<template>
  <main>   
    <!-- <Hero/>
    <Carousel/> -->
    {{getArtists}}
  </main>
</template>
