<template>
  <div v-if="this.$vuetify.breakpoint.name == 'xs'">
    <v-dialog
      v-model="searchDialogXsModel"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar class="toolbar-top-section">
          <v-btn icon dark>
            <v-icon
              class="close-icon"
              @click="$emit('updateSearchDialogXsModel', false)"
            >
              close
            </v-icon>
          </v-btn>
          <v-toolbar-title class="top-title">
            {{ $t('profiles_search.search_form.search_dialog_xs_title') }}
          </v-toolbar-title>
        </v-toolbar>
        <v-form @submit.prevent="submitSearchForm()">
          <v-layout row wrap>
            <v-flex xs12>
              <div class="query-input">
                <v-select
                  v-model="categoriesModelComputed"
                  :items="categoriesItems"
                  :placeholder="$t('profiles_search.search_form.input_category_placeholder')"
                  item-text="name"
                  item-value="id"
                  solo
                  clearable
                  prepend-inner-icon="label"
                  class="combobox-input"
                />
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="query-input">
                <v-combobox
                  v-model="queryModelComputed"
                  :items="queryItems"
                  :search-input.sync="queryInputSyncComputed"
                  :placeholder="$t('profiles_search.search_form.input_query_placeholder')"
                  solo
                  clearable
                  autocomplete="off"
                  spellcheck="false"
                  prepend-inner-icon="search"
                  class="combobox-input"
                />
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="query-input">
                <v-combobox
                  v-model="cityModelComputed"
                  :items="cityItems"
                  :search-input.sync="cityInputSyncComputed"
                  :placeholder="$t('profiles_search.search_form.input_city_placeholder')"
                  item-text="name"
                  item-value="name"
                  solo
                  clearable
                  autocomplete="off"
                  spellcheck="false"
                  prepend-inner-icon="location_on"
                  class="combobox-input"
                >
                  <template slot="item" slot-scope="cityItems">
                    {{ cityItems.item.name }}
                  </template>
                  <template slot="item" slot-scope="cityItems">
                    <template v-if="cityItems.item.value">
                      <v-list-tile-content @click="getCurrentLocation()">
                        <v-list-tile-title>
                          {{ $t('profiles_search.search_form.current_location') }}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </template>
                    <template v-else>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="cityItems.item"/>
                      </v-list-tile-content>
                    </template>
                  </template>
                </v-combobox>
              </div>
            </v-flex>
            <v-flex xs12>
              <button type="submit" class="submit-form-button">
                {{ $t('profiles_search.search_form.submit_button') }}
                <v-icon class="button-icon">keyboard_arrow_right</v-icon>
              </button>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    searchDialogXsModel: {
      type: Boolean,
      default: false,
    },
    categoriesModel: {
      type: Boolean,
      default: false,
    },
    categoriesItems: {
      type: Array,
      default: null,
    },
    queryModel: {
      type: String,
      default: null,
    },
    queryItems: {
      type: Array,
      default: null,
    },
    queryInputSync: {
      type: String,
      default: null,
    },
    cityModel: {
      type: String,
      default: null,
    },
    cityItems: {
      type: Array,
      default: null,
    },
    cityInputSync: {
      type: String,
      default: null,
    },
  },
  computed: {
    categoriesModelComputed: {
      get() {
        return this.categoriesModel;
      },
      set(value) {
        this.$emit('updateCategoriesModel', value);
      },
    },
    queryModelComputed: {
      get() {
        return this.queryModel;
      },
      set(value) {
        this.$emit('updateQueryModel', value);
      },
    },
    queryInputSyncComputed: {
      get() {
        return this.queryInputSync;
      },
      set(value) {
        this.$emit('updateQueryInputSync', value);
      },
    },
    cityModelComputed: {
      get() {
        return this.cityModel;
      },
      set(value) {
        this.$emit('updateCityModel', value);
      },
    },
    cityInputSyncComputed: {
      get() {
        return this.cityInputSync;
      },
      set(value) {
        this.$emit('updateCityInputSync', value);
      },
    },
  },
  methods: {
    submitSearchForm() {
      this.$emit('submitSearchForm');
      this.$emit('updateSearchDialogXsModel', false);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/search-dialog-xs.scss';
</style>
