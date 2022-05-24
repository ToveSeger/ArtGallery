<template>
   <div class="artist-card">
        <p class="artist-card--heading"> {{artistObject.name}}</p> 
        <img :src="getImage(artistObject.imageName)" alt= "Image of artist" class="artist-card--image">
        <p class="artist-card-description">{{artistObject.description}}</p>  
    </div>
</template>
<script>
    export default {
        props:["artistObject"],

           data() {
               return {
                   imgPath: " "
               }
           },

            computed:{
            
                getImageComputed(){
                   return {
                       image: "../../public/img/artists/" + this.art.imageName          
                }
            }
               
        },

        methods: {
            getImage(imageName){
               return "../../public/img/artists/" + imageName
            }
        },
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss"; 
        .artist-card{
            border:1px solid gray;
            border-radius: 5%;
            width:40rem;
            height:30rem;
            background-color:rgb(251, 248, 248);

            .artist-card--image{
                width:auto;
                height:300px;
                margin: 0 33%;
                border: 2px solid;
            }

            .artist-card--heading{
                font-family: $Lobster--regular-400;
                font-size: 1.5rem;
                width:fit-content;
                margin:2rem auto;
            }

            .artist-card-description{
                width:fit-content;
                margin:auto;
                padding:1rem;
            }
        }

</style>