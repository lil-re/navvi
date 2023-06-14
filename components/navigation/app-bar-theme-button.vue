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
      mdi-moon-waning-crescent
    </v-icon>
  </v-btn>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  name: 'AppBarThemeButton',
  setup () {
    const theme = useTheme()
    
    function toggleTheme () {
      return theme.global.name.value = theme.global.current.value.dark ? 'defaultTheme' : 'darkTheme'
    }

    return {
      theme,
      toggleTheme
    }
  },
}
</script>