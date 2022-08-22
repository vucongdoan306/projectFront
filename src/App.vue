<template>
  <the-nav :isCloseNav="isCloseNavigation"  @is-opennav="toggleNav"></the-nav>
  <the-header :isCloseNav="isCloseNavigation" @is-closenav="toggleNav"></the-header>
  <the-content :isCloseNav="isCloseNavigation"></the-content>
  <base-toast></base-toast>
</template>

<script>

import TheNav from "./components/layout/TheNav.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";
export default {
  name: 'App',
  components: {
    TheNav,TheHeader,TheContent
  },
  data() {
    return {
      isCloseNavigation : false,
    }
  },
  methods: {
    toggleNav(val){
      this.isCloseNavigation = !val;
    }
  },
}
</script>

<style>
  @import url(./styles/main.css);
</style>
