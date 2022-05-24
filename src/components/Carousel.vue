<template>
<div class="slideshow--container">
    <!-- <div class="carousel--item">
       <ArtistCard 
       :artistObject="get.carouselObject"/>
   </div> 
      <button @click="decreaseIndex">prev (index:{{slideIndex}})</button>
      <button @click="increaseIndex">next (index:{{slideIndex}})</button> -->

</div>  
             
</template>

<script>
import ArtistCard from './ArtistCard.vue'


    export default {
        props:["carouselData"],     
        
       data:()=> ({
          slideIndex:0,
          showCard:false
        }),

        mounted(){
               
        },

        
            computed:{           
                get(){
                   return {
                       carouselObject: this.carouselData[this.slideIndex]         
                }
            }
        },

        methods:{
          increaseIndex(){
            this.slideIndex++;
          },

          decreaseIndex(){
            if (this.slideIndex>0 && this.slideIndex<this.carouselData.length){
              this.slideIndex--;
            }
          }
           
        },
        components:{ArtistCard}
    }
</script>

<style lang="scss" scoped>

.slideshow--container{
  border:solid;
  width:fit-content;
  margin: 3rem auto;
}


</style>