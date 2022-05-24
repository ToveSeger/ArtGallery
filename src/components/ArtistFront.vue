<template>
    <div  class="artist-front"> 
    <div v-for="a in artistObject.slice(0,4)" :key="a" class="artist-front--inner_container">
         <ArtistCard 
         :artistObject="a"/>
        </div> 
    </div>
</template>

<script>

import ArtistCard from "./ArtistCard.vue"

export default {
    data:()=> ({
    artistObject:[]
    }),

    async mounted(){
    const res = await fetch('../../public/artists.json')
    const data =  await res.json()
    this.artistObject = data

    },
    components:{ ArtistCard }
}

</script>

<style lang="scss" scoped>

 .artist-front{
        display: flex;
        gap:2rem;
        width:80%;
        margin:4rem auto;
        flex-wrap:wrap;
        justify-content:flex-start;
}
.asrtist-front--inner_container{
    margin-left:2.5rem;
}
</style>