// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true }
            ]
        }
    },
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
    runtimeConfig: { // https://v3.nuxtjs.org/guide/going-further/runtime-config/
        public: {
            API_URL: process.env.API_URL,
            GTAG_ID: process.env.GTAG_ID,
        }
    },
    sourcemap: {
        server: false,
        client: false,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/settings.scss";',
                },
            },
        },
        define: {
            'process.env.DEBUG': false,
        },
    },
})
