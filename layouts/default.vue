<template>
    <v-app id="inspire">
        <navigation-menu v-model:drawer="drawer" />

        <client-only>
            <app-bar v-model:drawer="drawer" />
        </client-only>
    
        <v-main>
            <slot />
        </v-main>
    </v-app>
  </template>
  
  <script lang="ts">
  import AppBar from "../components/navigation/app-bar.vue";
  import NavigationMenu from "../components/navigation/navigation-menu.vue";
  
  export default {
    components: {
      AppBar,
      NavigationMenu
    },
    data () {
      return {
        drawer: false
      }
    }
  }
  </script>
  
  <style>
  main {
    background-color: #ECFFFC;
  }
  </style>
  