// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import defaultTheme from '~/themes/defaultTheme'

// https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
        defaultTheme: 'defaultTheme',
        themes: {
            defaultTheme,
            // Add themes here
        }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
