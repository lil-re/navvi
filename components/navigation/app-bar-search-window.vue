<template>
  <v-dialog
    :model-value="modelValue"
    :fullscreen="$vuetify.display.smAndDown"
    max-width="1000"
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

      <v-card-text>
        <v-row>
          <v-col
          v-for="(value, key) in searchData"
          :key="key"
          cols="12"
          md="4"
        >
          <div class="text-subtitle-1 text-uppercase font-weight-bold">
            {{ $t(key) }}
          </div>
          <v-card
            color="#FCE3E2"
            variant="outlined"
          >
            <v-list
              class="py-0"
              dense
            >
              <template
                v-for="(item, i) in value.data"
                :key="i"
              >
                <v-divider v-if="i > 0" />
                <v-list-item>
                  <v-list-item-title>
                    {{ item.name ?? item.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.email ?? item.user.name }}
                  </v-list-item-subtitle>
                </v-list-item>
              </template>

              <div
                v-if="value.data.length === 0"
                class="text-center py-4"
              >
                {{ $t('noResult') }}
              </div>
            </v-list>
          </v-card>
        </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, toRefs } from 'vue'
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
  setup (props, { emit }) {
    const { modelValue } = toRefs(props)
    const { $apollo } = useNuxtApp()

    const timeout = ref(null)
    const loading = ref(false)
    const searchValue = ref('')
    const searchData = ref({})

    function search(value) {
      clearTimeout(timeout.value)
      
      timeout.value = setTimeout(async () => {
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
        searchData.value = response.data
      }, 500)
    }

    function updateModelValue(value) {
      emit('update:modelValue', value)
    }

    return {
      modelValue,
      loading,
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
