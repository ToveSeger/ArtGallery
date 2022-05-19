<template>
<div>
    <div @click="hamburgerPressed=!hamburgerPressed" class="hamburger">
        |||
    </div>
    <div v-if="hamburgerPressed">
        <MobileDropDown></MobileDropDown>
    </div>
</div>
</template>

<script>
import MobileDropDown from "./MobileDropDown.vue";
    export default {
    data: () => ({
        hamburgerPressed: false
    }),
    components: { MobileDropDown }
}
</script>

<style lang="scss" scoped>
    .hamburger{
        font-size:2rem;
        width:2rem;
        height:2rem;
        transform: rotate(90deg);
        position:absolute;
        right:0;
        top:0;
        color:white;
        margin:1rem;
    }
</style>