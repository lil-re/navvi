import { VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { MountOptions, useMount } from '~/composables/tests'
import PostsLists from '~/components/posts/PostsLists.vue'

const posts = [{
  "id": "1",
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "user": {
    "id": "1",
    "name": "Leanne Graham"
  }
}, {
  "id": "2",
  "title": "qui est esse",
  "user": {
    "id": "1",
    "name": "Leanne Graham"
  }
}, {
  "id": "3",
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "user": {
    "id": "1",
    "name": "Leanne Graham"
  }
}]

describe('PostsLists', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = useMount(<MountOptions>{
      component: PostsLists,
      props: {
        posts
      }
    })
  })

  // Test if table is displayed correctly
  it('displays posts inside a VTable', () => {
    const table = wrapper.findComponent({ name: 'VTable' })
    expect(table.exists()).toBeTruthy()

    const body = table.find('tbody')
    expect(body.exists()).toBeTruthy()

    const row = body.findAll('tbody')
    expect(row.length).toBe(3)
  })
})
