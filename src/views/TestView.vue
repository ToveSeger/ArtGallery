<template>
    <div>
        <Carousel
        :carouselData= "carouselData"
        />
    </div>
</template>

<script>
//import Carousel from '../components/Carousel.vue'
    export default {
          data:()=> ({
    carouselData:[]
    }),

    async mounted(){
    const res = await fetch('../../public/artists.json')
    const data =  await res.json()
    this.carouselData = data

    },

        components: {Carousel}
    }
</script>

<style lang="scss" scoped>

</style>