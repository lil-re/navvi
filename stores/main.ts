// https://vueschool.io/articles/vuejs-tutorials/global-state-management-with-pinia-in-nuxt-3/
import {defineStore} from "pinia";
import {Post} from '~/composables/types'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      posts: <Array<Post>>[]
    }
  },
  getters: {
    getPostById(state) {
      return (id: string) => state.posts.find((post: Post) => post.id === id)
    }
  },
  actions: {
    setPosts (posts: Array<Post>) {
      this.posts = [...posts]
    }
  }
})
