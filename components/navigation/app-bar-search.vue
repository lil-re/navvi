<template>
  <div>
    <v-card
      v-if="$vuetify.display.mdAndUp"
      class="pa-1"
      variant="tonal"
      color="primary"
      rounded="pill"
      width="300"
      flat
      @click="dialog = true"
    >
      <v-icon
        class="px-3"
        color="primary"
        size="small"
      >
        mdi-magnify
      </v-icon>
      <span class="text-primary text-subtitle-2">
        {{ $t('search') }}
      </span>
    </v-card>

    <v-btn
      v-else
      color="primary"
      variant="tonal"
      size="small"
      icon
      @click="dialog = true"
    >
      <v-icon size="x-large"> mdi-magnify </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AppBarSearch",
  data() {
    return {
      dialog: false
    }
  }
}
</script>
