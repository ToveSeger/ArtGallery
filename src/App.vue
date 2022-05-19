<template>
  <main>
      <div v-if="mobile">
      <NavigationMobile/>
    </div>
    <div v-else>
      <NavigationDesktop/>
    </div>
    <router-view/>
  <GalleryFooter/>
  </main>
</template>

<script>
import NavigationDesktop from './components/NavigationDesktop.vue';
import GalleryFooter from './components/GalleryFooter.vue';
import NavigationMobile from './components/NavigationMobile.vue';


  export default{
      data:()=> ({
          mobile: true
    }),

  mounted() {  
        this.mobile = window.innerWidth<1100    
        window.onresize = () => {
        this.mobile = window.innerWidth<1100
        }

  }, 

  components: {NavigationDesktop, NavigationMobile, GalleryFooter}

}

</script>

