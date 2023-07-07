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
        :to="item.path"
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
import { defineEmits, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: "NavigationMenu",
  props: {
    drawer: Boolean
  },
  setup (props) {
    const { t } = useI18n()
    const { drawer } = toRefs(props)
    const emit = defineEmits(['update:drawer'])

    const items = computed(() => ([
      { text: t('home'), icon: 'mdi-home-outline', path: '/' },
      { text: t('samplePage'), icon: 'mdi-poll', path: '/sample-page' },
      { text: t('about'), icon: 'mdi-cog-outline', path: '/about' }
    ]))

    function updateDrawer () {
      emit('update:drawer', !drawer.value)
    }

    return {
      drawer,
      items,
      updateDrawer
    }
  }
}
</script>
  