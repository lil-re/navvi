<template>
  <NuxtLayout name="default">
    {{ posts }} 
  </NuxtLayout>
</template>

<script lang="ts">
import {useNuxtApp} from '#imports'
import {getAllPosts} from '~/composables/graphql'

export default {
  setup () {
    const {$apollo} = useNuxtApp()
    const posts = ref([])

    async function fetchPosts () {
      console.log('coucou');
      
      try {
        const response = await $apollo.query({
          query: getAllPosts(),
          variables: {
            options: {
              paginate: {
                page: 1,
                limit: 5
              }
            }
          }
        })

        if (response) {
          posts.value = response.data.posts.data
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts()

    return {
      posts
    }
  }
}
</script>
  