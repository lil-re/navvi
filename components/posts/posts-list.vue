<template>
  <v-card>
    <v-container>
      <v-row
        align="center"
        justify="space-between"
      >
        <v-col class="text-uppercase font-weight-bold text-subtitle-1">
          Posts
        </v-col>
        <v-col class="text-right">
          <v-btn
            size="x-small"
            color="primary"
            variant="tonal"
            icon
          >
            <v-icon size="large">
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-divider></v-divider>

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
import { toRefs } from 'vue'

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