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
    const query = getAllPosts()
    const posts = ref([])

    // async function fetchPosts () {
    //   try {
    //     const response = await $apollo.query({
    //       query,
    //       variables: {
    //         options: {
    //           paginate: {
    //             page: 1,
    //             limit: 5
    //           }
    //         }
    //       }
    //     })

    //     if (response) {
    //       posts.value = response.posts.data
    //     }
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }

    // fetchPosts()

    return {
      posts
    }
  }
}
</script>
  