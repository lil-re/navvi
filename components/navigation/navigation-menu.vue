<template>
  <v-navigation-drawer
    :model-value="drawer"
    @update:model-value="updateDrawer"
  >

    <div class="py-5">
      <v-img
        src="navvi.png"
        alt="navvi logo"
        class="logo"
      />
    </div>
  
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: "NavigationMenu",
  props: {
    drawer: Boolean
  },
  setup (props, { emit }) {
    const { t } = useI18n()
    const { drawer } = toRefs(props)

    const items = computed(() => ([
      { text: t('home'), icon: 'mdi-home-outline', path: '/' },
      { text: t('samplePage'), icon: 'mdi-poll', path: '/sample-page' }
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

<style>
.logo {
  height: 30px;
}
</style>
  