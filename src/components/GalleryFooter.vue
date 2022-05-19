<template>
    <footer>
        <div class="footer-text">
            Art Gallery &copy;
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

    footer{
        background-color:black;
        height:10rem;
        position:relative;
        width:100vw;
        bottom:0;

        .footer-text{
            width:fit-content;
            margin: auto;
            padding-top:4.5rem;
            font-weight:600;
            color:white;
            letter-spacing: 0.15rem;
        }
    }
    
</style>