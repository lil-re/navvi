// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import defaultTheme from '~/themes/defaultTheme'
import darkTheme from '~/themes/darkTheme'

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
            darkTheme
            // Add themes here
        }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
