import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

// https://dev.to/joshwcorbett/nuxt-3-apollo-client-h6
export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache()
    // configuration
  })
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
  nuxtApp.provide('apollo', apolloClient)
})
