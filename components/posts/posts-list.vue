<template>
  <v-sheet>
    <v-container>
      <v-row
        align="center"
        justify="space-between"
      >
        <v-col class="text-uppercase font-weight-bold text-subtitle-1">
          {{ $t('posts') }}
        </v-col>
        <v-col cols="auto">
          <v-row dense>
            <v-col cols="auto">
              <v-btn
                size="x-small"
                color="primary"
                variant="tonal"
                icon
              >
                <v-icon size="large">
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
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
        </v-col>
      </v-row>
    </v-container>

    <v-divider />

    <div
      v-if="loading"
      class="text-center py-2"
    >
      <v-progress-circular
        model-value="20"
        color="primary"
        indeterminate
      />
    </div>

    <v-table v-else>
      <thead>
        <tr>
          <th class="text-left">
            {{ $t('id') }}
          </th>
          <th class="text-left">
            {{ $t('title') }}
          </th>
          <th class="text-left">
            {{ $t('author') }}
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
  </v-sheet>
</template>

<script>
import { toRefs } from 'vue'

export default {
  name: 'PostsList',
  props: {
    loading: true,
    posts: {
      type: Array,
      default: () => ([])
    }
  },
  setup (props) {
    const { loading, posts } = toRefs(props)

    return {
      loading,
      posts
    }
  }
}
</script>