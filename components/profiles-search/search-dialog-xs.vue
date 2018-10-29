<template>
  <v-dialog
    v-model="searchDialogXsModel"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar class="toolbar-top-section">
        <v-btn
          icon
          dark
        >
          <v-icon
            class="close-icon"
            @click="$emit('updateSearchDialogXsModel', false)"
          >
            close
          </v-icon>
        </v-btn>
        <v-toolbar-title class="top-title">
          szukaj
        </v-toolbar-title>
      </v-toolbar>
      <v-form @submit.prevent="submitSearchForm()">
        <v-layout
          row
          wrap
        >
          <v-flex xs12>
            <div class="query-input">
              <v-select
                v-model="categoriesModelComputed"
                :items="categoriesItems"
                item-text="name"
                item-value="id"
                solo
                clearable
                prepend-inner-icon="label"
                placeholder="Kategoria"
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
                solo
                clearable
                autocomplete="off"
                spellcheck="false"
                prepend-inner-icon="search"
                placeholder="Czego szukasz ?"
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
                solo
                clearable
                autocomplete="off"
                spellcheck="false"
                prepend-inner-icon="location_on"
                placeholder="Lokalizacja"
                class="combobox-input"
              />
            </div>
          </v-flex>
          <v-flex xs12>
            <button
              type="submit"
              class="submit-form-button"
            >
              search
              <v-icon class="button-icon">keyboard_arrow_right</v-icon>
            </button>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-dialog>
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
  data() {
    return {
    };
  },
  // },
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
  // watch: {
  // },
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
