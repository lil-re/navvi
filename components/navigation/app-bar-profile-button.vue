<template>
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

    <v-menu activator="parent">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          @click="selectLanguage(item.id)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppBarLanguageButton',
  setup () {
    const { t } = useI18n()

    const items = computed(() => ([
      { id: 'profile', label: t('profile') },
      { id: 'settings', label: t('settings') },
      { id: 'help', label: t('helpCenter') },
      { id: 'logout', label: t('logout') },
    ]))

    return {
      items
    }
  },
}
</script>