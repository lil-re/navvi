<template>
  <NuxtLayout name="default">
    <div
      v-if="loading"
      class="text-center"
    >
      <v-progress-circular
        model-value="20"
        color="primary"
        indeterminate
      />
    </div>

    <posts-list
      v-else
      :loading="loading"
      :posts="posts"
    />
  </NuxtLayout>
</template>

<script lang="ts">
import {useNuxtApp} from '#imports'
import {getAllPosts} from '~/composables/graphql'
import PostsList from '~/components/posts/posts-list.vue'

export default {
  components: {
    PostsList
  },
  setup () {
    const {$apollo} = useNuxtApp()
    const loading = ref<boolean>(false)
    const posts = ref<Array<Record<string, any>>>([])

    async function fetchPosts () {
      loading.value = true

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
      loading.value = false
    }

    fetchPosts()

    return {
      loading,
      posts
    }
  }
}
</script>
  