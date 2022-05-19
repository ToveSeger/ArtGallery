<template>
    <div class="mobile-drop-down">
        <NavigationLinks></NavigationLinks>
    </div>
</template>

<script>
import NavigationLinks from "./NavigationLinks.vue";
    export default {
    components: { NavigationLinks }
}
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.mobile-drop-down{
    z-index:999;
    position:fixed;
    top:3rem;
    right:1rem;
    width: 35vw;
    border: 1.5px solid $color-gray-light;
    border-radius:1rem;
    padding:2em;
    text-align:center;
    background-color:$color-gray-light;

    .links{
        display:flex;
        flex-direction: column; 
        gap:1.5em;
    }


}
</style>