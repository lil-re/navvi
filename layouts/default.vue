<template>
  <v-app id="inspire">
      <navigation-menu v-model:drawer="drawer" />

      <client-only>
          <app-bar v-model:drawer="drawer" />
      </client-only>
  
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
  </v-app>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import AppBar from "../components/navigation/app-bar.vue";
import NavigationMenu from "../components/navigation/navigation-menu.vue";

export default {
  components: {
    AppBar,
    NavigationMenu
  },
  setup () {
    const theme = useTheme()
    const drawer = ref(false)
    
    onMounted(() => {
      if (window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.global.name.value = 'darkTheme'
      }
    })

    return {
      drawer
    }
  },
}
</script>
  