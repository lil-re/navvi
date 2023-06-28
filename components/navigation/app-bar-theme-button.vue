<template>
  <v-btn
    class="ml-2"
    color="primary"
    variant="tonal"
    size="x-small"
    icon
    @click="toggleTheme"
  >
    <v-icon size="x-large">
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

export default {
  name: 'AppBarThemeButton',
  setup () {
    const theme = useTheme()
    
    function toggleTheme () {
      return theme.global.name.value = theme.global.current.value.dark ? 'defaultTheme' : 'darkTheme'
    }

    const icon = computed(() => theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent')

    return {
      toggleTheme,
      icon
    }
  },
}
</script>