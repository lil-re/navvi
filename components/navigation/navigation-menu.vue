<template>
  <v-navigation-drawer
    :model-value="drawer"
    @update:model-value="updateDrawer"
  >
    

    <v-divider></v-divider>

    <v-list
      :lines="false"
      density="compact"
      nav
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title
          v-text="item.text"
          class="font-weight-medium text-subtitle-2"
        />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
<script>
export default {
  name: "NavigationMenu",
  props: {
    drawer: Boolean
  },
  data () {
    return {
      items: [
        { text: this.$t('home'), icon: 'mdi-home-outline' },
        { text: this.$t('samplePage'), icon: 'mdi-poll' },
        { text: this.$t('settings'), icon: 'mdi-cog-outline' }
      ],
    }
  },
  methods: {
    updateDrawer () {
      this.$emit('update:drawer', !this.drawer)
    }
  }
}
</script>
  