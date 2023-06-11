<template>
  <v-navigation-drawer
    :model-value="drawer"
    color="white"
    @update:model-value="updateDrawer"
  >
    Coucou
  </v-navigation-drawer>
</template>
  
<script>
export default {
  name: "NavigationMenu",
  props: {
    drawer: Boolean
  },
  methods: {
    updateDrawer () {
      this.$emit('update:drawer', !this.drawer)
    }
  }
}
</script>
  