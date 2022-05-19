<template>
    <div class="gallery_card">
        <p class="gallery_card-heading">{{art.name}}</p>
       <img :src="getImage(art.imageName)" alt= "Image of a toy" class="gallery_card_image">
       <!-- <img :src="" alt= "Image of a toy" class="gallery_card_image"> -->

</div>
</template>

<script>
    export default {
           props:["art"],
           data() {
               return {
                   imgPath: " "
               }
           },

        //     computed:{
            
        //         getImage(){
        //            return {
        //                image: this.imgPath && require((`../assets/img/${this.art.imageName}`))           
        //         }
        //     }
        // }

        methods: {
            getImage(imageName){
               return "../../public/img/" + imageName
            }
        },
}
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss"; 
        .gallery_card{
            border:1px solid gray;
            border-radius: 5%;
            width:25rem;
            height:25rem;
            //position:relative;
            background-color:rgb(251, 248, 248);

            .gallery_card_image{
                //position: aboslute;
                //bottom:1rem;
                width:200px;
                height:250px;
                margin:0 25%;
                border: 2px solid;
            }

            .gallery_card-heading{
                font-family: $Lobster--regular-400;
                font-size: 1.5rem;
                width:fit-content;
                margin:2rem auto;
            }
        }

</style>