import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
        transpile: [
            '@apollo/client',
            '@vue/apollo-composable',
            'ts-invariant/process',
            'vuetify'
        ],
    },
    css: [
        '@mdi/font/css/materialdesignicons.min.css',
        'vuetify/lib/styles/main.sass'
    ],
    hooks: {
        'vite:extendConfig': (config) => {
            config.plugins?.push(
                vuetify({
                    styles: {
                        configFile: resolve('./settings.scss')
                    },
                })
            )
        },
    },
    imports: {
        dirs: [
            'stores',
            'composables/**'
        ],
    },
    modules: [
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
