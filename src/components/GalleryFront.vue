<template>
    <div  class="gallery-front"> 
    <div v-for="a in art.slice(0,10)" :key="a" class="gallery-front_inner_container">
         <GalleryCard 
         :art="a"/>
        </div> 
    </div>
</template>

<script>

import GalleryCard from "./GalleryCard.vue"

export default {
    data:()=> ({
    art:[]
    }),

    async mounted(){
    const res = await fetch('../../public/art.json')
    const data =  await res.json()
    this.art = data

    },
    components:{ GalleryCard }
}

</script>

<style lang="scss" scoped>

 .gallery-front{
        display: flex;
        gap:2rem;
        width:80%;
        margin:4rem auto;
        flex-wrap:wrap;
        justify-content:flex-start;
    .gallery-front_inner_container{
        margin-left:2.5rem;
    }
}
</style>