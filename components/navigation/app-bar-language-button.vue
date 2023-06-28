<template>
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

    <v-menu activator="parent">
      <v-list>
        <v-list-item
          v-for="language in languages"
          :key="language.id"
          :value="language.id"
          @click="selectLanguage(language.id)"
        >
          <v-list-item-title>{{ language.label }}</v-list-item-title>
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
    const { t, locale } = useI18n()

    const languages = computed(() => ([
      {
        id: 'en',
        label: t('english')
      },
      {
        id: 'fr',
        label: t('french')
      }
    ]))
    
    function selectLanguage (language) {
      return locale.value = language
    }

    return {
      languages,
      selectLanguage
    }
  },
}
</script>