<template>
    <nav>
        <img class="logotype" src="../../public/img/artgallery_logo.png"  alt="">
        <!-- <NavigationLinks></NavigationLinks> -->
        <NavigationMobile></NavigationMobile>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import NavigationLinks from "./NavigationLinks.vue"
import NavigationMobile from './NavigationMobile.vue'
export default {
    components: { NavigationLinks, NavigationMobile }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
   nav{
            height: 10rem;
            background-color:black;
            margin:0;
            display:flex;
            gap:5em;

            .logotype{
                height:7rem;
                padding:1rem;
            }
    }
</style>