<template>
    <div class="links">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link"> About</RouterLink>
        <RouterLink to="/artists" class="nav-link">Artists</RouterLink>
        <RouterLink to="/events" class="nav-link">Events</RouterLink>
    </div>
</template>

<script> 
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";
.links{
    display:flex;
    gap:2rem;
    font-size:2rem;
    margin: auto;
  
    .nav-link{
      text-decoration: none;
      color:white;
      font-weight:600;
      
     &:hover{
         color: $color-gray-dark;
     }
    }
}
</style>