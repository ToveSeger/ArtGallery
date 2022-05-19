<template>
    <div class="art-gallery__hero">
        <h1>First class art</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.art-gallery__hero{
    height:30rem;
    width:100vw;
    margin:auto;
    background-color:inherit;
    padding:2rem;
    background-image: url(../../public/img/hero_bg.jpg);

    background-repeat:no-repeat;

    h1 {
        font-size:10rem;
        width:fit-content;
        margin: 4rem auto;
        color:black;
        padding:3rem;
        background:white;
    }

    h1::after{
        display: inline-block;
        width: 0.14em;
        height: 0.14em;
        max-width: 16px;
        max-height: 16px;
        background: #e6b237;
        content: '';
        margin-left: 0.08em;
        border-radius: 100%;
    }
}
</style>