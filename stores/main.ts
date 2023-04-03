// https://vueschool.io/articles/vuejs-tutorials/global-state-management-with-pinia-in-nuxt-3/
import {defineStore} from "pinia";

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      posts: []
    }
  },
  getters: {

  },
  actions: {

  }
})
