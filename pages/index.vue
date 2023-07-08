<template>
  <NuxtLayout name="default">
    <v-row
      align="center"
      class="hero"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          src="navvi.png"
          alt="navvi"
          class="logo"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        order-md="first"
      >
        <div class="text-h3 pb-4">
          <p class="text-primary pacifico">
            NAVVI
          </p>
          <p class="font-weight-bold">
            {{ $t('headline') }}
          </p>
        </div>
        
        <v-btn
          color="primary"
          rounded="pill"
          variant="flat"
          href="https://github.com/lil-re/navvi"
          target="_blank"
        >
          <v-icon start>
            mdi-github
          </v-icon>
          <strong>
            Github
          </strong>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        cols="12"
        md="3"
      >
        <v-card
          color="container"
          variant="flat"
          class="text-center pa-4"
          :href="item.url"
          target="_blank"
        >
          <v-card-title class="text-h4">
            {{ item.icon }}
          </v-card-title>
          <v-card-title class="font-weight-bold">
            {{ item.label }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script lang="ts">
import PostsList from '~/components/posts/posts-list.vue'

export default {
  components: {
    PostsList
  },
  setup () {
    const items = [
      {
        label: 'Nuxt 3',
        icon: '🏔️',
        url: 'https://nuxt.com/'
      },
      {
        label: 'Apollo',
        icon: '🕸️',
        url: 'https://apollo.vuejs.org/'
      },
      {
        label: 'Vuetify',
        icon: '🖌️',
        url: 'https://vuetifyjs.com/en/'
      },
      {
        label: 'Vitest',
        icon: '⚡️',
        url: 'https://vitest.dev/'
      }
    ]

    return {
      items,
    }
  }
}
</script>

<style>
  .hero {
    padding: 100px 0;
  }
</style>
  