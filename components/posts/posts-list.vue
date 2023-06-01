<template>
  <v-card>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Author
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="post in posts"
          :key="post.id"
        >
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.user.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
export default {
  name: 'PostsList',
  props: {
    posts: {
      type: Array,
      default: () => ([])
    }
  },
  setup (props) {
    const { posts } = toRefs(props)

    return {
      posts
    }
  }
}
</script>