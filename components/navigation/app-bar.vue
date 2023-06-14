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

    <v-btn
      class="ml-2"
      color="primary"
      variant="tonal"
      size="x-small"
      icon
    >
      <v-icon size="x-large">
        mdi-translate
      </v-icon>
    </v-btn>

    <app-bar-theme-button />

    <v-btn
      class="ml-2"
      color="primary"
      variant="tonal"
      size="x-small"
      icon
    >
      <v-icon size="x-large">
        mdi-account
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import AppBarThemeButton from './app-bar-theme-button.vue';

export default {
  name: "AppBar",
  components: {
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
  