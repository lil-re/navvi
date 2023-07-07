<template>
  <v-dialog
    :model-value="modelValue"
    :fullscreen="$vuetify.display.smAndDown"
    max-width="700"
    @update:modelValue="updateModelValue"
  >
    <v-card :loading="loading">
      <v-card-title class="search-dialog-header bg-surface">
        <v-row
          align-content="center"
          dense
        >
          <v-col>
            <v-text-field
              v-model="searchValue"
              :placeholder="$t('search')"
              ref="searchField"
              color="primary"
              variant="outlined"
              density="compact"
              hide-details
              clearable
              autofocus
              @update:model-value="search"
            >
              <template #prepend-inner>
                <v-icon> mdi-magnify </v-icon>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="auto">
            <v-btn
              variant="tonal"
              color="primary"
              density="compact"
              height="40"
              width="40"
              icon
              @click="updateModelValue(false)"
            >
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text v-if="hasResults">
        <!-- <app-bar-search-list
          :items="searchData"
          :query="searchValue"
          :loading="loading"
        /> -->
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, toRefs, defineEmits } from 'vue'
import { useNuxtApp } from '#imports'
// import AppBarSearchList from '~/components/shared/navigation/app-bar/search/app-bar-search-list.vue'

export default {
  name: 'AppBarSearchWindow',
  components: {
    // AppBarSearchList
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const { modelValue } = toRefs(props)
    const { $apollo } = useNuxtApp()
    const emit = defineEmits(['update:modelValue'])

    const timeout = ref(null)
    const loading = ref(false)
    const hasResults = ref(false)
    const searchValue = ref('')
    const searchData = ref({})

    function search(value) {
      clearTimeout(timeout.value)
      
      timeout.value = setTimeout(async () => {
        console.log(value)
        const response = await $apollo.query({
          query: getSearchData(),
          variables: {
            options: {
              search: {
                q: value
              }
            }
          }
        })
        console.log(response);
      }, 500)
    }

    function updateModelValue(value) {
      emit('update:modelValue', value)
    }

    return {
      modelValue,
      loading,
      hasResults,
      searchValue,
      searchData,
      search,
      updateModelValue
    }
  }
}
</script>

<style scoped>
.search-dialog-header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
