<template>
    <v-app-bar
        color="white"
        density="compact"
    >
        <v-btn
            class="mx-4"
            color="primary"
            variant="text"
            size="small"
            icon
            @click="updateDrawer"
        >
            <v-icon size="x-large">
                mdi-menu
            </v-icon>
        </v-btn>
    
        <v-spacer />
    </v-app-bar>
</template>

<script>
import {useCookie} from "#imports";

export default {
name: "AppBar",
props: {
    drawer: Boolean
},
methods: {
    updateDrawer() {
        this.$emit('update:drawer', !this.drawer)
    }
}
}

</script>
  