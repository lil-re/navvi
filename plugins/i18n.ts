import { createI18n } from 'vue-i18n'
import en from '~/i18n/en.json'

// https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      // Add translations here
    }
  })

  vueApp.use(i18n)
})
