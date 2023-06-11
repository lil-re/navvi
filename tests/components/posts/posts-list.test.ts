import { VueWrapper } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { MountOptions, useMount } from '~/composables/tests'
import PostsLists from '../../../components/posts/posts-list.vue'

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

    const rows = body.findAll('tr')
    expect(rows.length).toBe(3)

    rows.forEach((row, index) => {
      const cells = row.findAll('td')
      expect(cells[0].text()).toBe(posts[index].id)
      expect(cells[1].text()).toBe(posts[index].title)
      expect(cells[2].text()).toBe(posts[index].user.name)
    })
  })
})
 