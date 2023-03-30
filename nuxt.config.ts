// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
        transpile: [
            '@apollo/client', // https://dev.to/joshwcorbett/nuxt-3-apollo-client-h6
            'ts-invariant/process',
        ],
    },
    modules: [
        '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    ],
    pinia: { // https://pinia.vuejs.org/ssr/nuxt.html
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
