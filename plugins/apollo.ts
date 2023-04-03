import { defineNuxtPlugin } from "#app"
import { ApolloClient, ApolloLink, HttpLink, concat, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"
import {ErrorResponse, onError} from '@apollo/client/link/error'

// https://dev.to/joshwcorbett/nuxt-3-apollo-client-h6
export default defineNuxtPlugin((nuxtApp) => {
  // const runtimeConfig = useRuntimeConfig()
  
  // const httpLink: HttpLink = new HttpLink({
  //   uri: runtimeConfig.public.API_URL
  // });
  
  // const authLink: ApolloLink = new ApolloLink((operation, forward) => {
  //   operation.setContext({
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Content-Language': 'en',
  //       // Authorization: 'AUTHENTICATION_TOKEN',
  //     },
  //   });
  //   return forward(operation);
  // });

  // const errorLink: ApolloLink = onError((error: ErrorResponse) => {
  //   // Handle errors here
  // })

  
  const apolloClient = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache()
    // configuration
  })

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
  nuxtApp.provide('apollo', apolloClient)
})
