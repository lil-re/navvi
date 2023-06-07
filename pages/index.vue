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
import {useMainStore} from '~/stores/main'
import {getAllPosts} from '~/composables/graphql'
import {Post} from '~/composables/types'
import PostsList from '~/components/posts/posts-list.vue'

export default {
  components: {
    PostsList
  },
  setup () {
    const {$apollo} = useNuxtApp()
    const mainStore = useMainStore()
    const loading = ref<boolean>(false)
    const posts = ref<Array<Post>>([])

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
          mainStore.setPosts(response.data.posts.data)
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
  