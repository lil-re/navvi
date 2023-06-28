<template>
  <v-app-bar
    density="compact"
  >
    <v-btn
      class="mx-4"
      color="primary"
      variant="text"
      size="small"
      icon
      @click="updateDrawer"
    >
      <v-icon size="x-large">
        mdi-menu
      </v-icon>
    </v-btn>

    <v-spacer />

    <app-bar-language-button />

    <app-bar-theme-button />

    <app-bar-profile-button />
  </v-app-bar>
</template>

<script>
import AppBarThemeButton from './app-bar-theme-button.vue';
import AppBarLanguageButton from './app-bar-language-button.vue';
import AppBarProfileButton from './app-bar-profile-button.vue';

export default {
  name: "AppBar",
  components: {
    AppBarProfileButton,
    AppBarLanguageButton,
    AppBarThemeButton
  },
  props: {
    drawer: Boolean
  },
  methods: {
    updateDrawer() {
      this.$emit('update:drawer', !this.drawer)
    }
  }
}
</script>
  