<template>
  <v-toolbar
    v-if="displaySearchHeader()"
    color="white"
    app
    height="64"
    absolute
    clipped-left
    class="toolbar-search-header"
  >
    <v-toolbar-side-icon @click.stop="drawerFlag = !drawerFlag"/>

    <v-toolbar-title>
      <logo-component/>
    </v-toolbar-title>

    <form
      class="search-form"
      @submit.prevent="submitSearchForm()"
    >
      <v-layout
        row
        wrap
      >
        <v-flex lg5>
          <div class="query-input">
            <v-combobox
              v-model="queryModelComp"
              :items="queryItems"
              :search-input.sync="queryInputSync"
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
        <v-flex lg4>
          <div class="query-input">
            <v-combobox
              v-model="cityModelComp"
              :items="cityItems"
              :search-input.sync="cityInputSync"
              item-text="name"
              item-value="name"
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
        <v-flex lg3>
          <button
            type="submit"
            class="submit-search-form-btn"
          >
            szukaj
            <v-icon class="btn-icon">keyboard_arrow_right</v-icon>
          </button>
        </v-flex>
      </v-layout>
    </form>

    <v-spacer/>

    <v-btn
      class="hidden-md-only hidden-lg-only"
    >
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
import LogoComponent from '../logo-component.vue';

export default {
  components: {
    'logo-component': LogoComponent,
  },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
    queryModel: {
      type: String,
      default: null,
    },
    queryItems: {
      type: Object,
      default: null,
    },
    cityModel: {
      type: String,
      default: null,
    },
    cityItems: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      queryInputSync: null,
      cityInputSync: null,
    };
  },
  computed: {
    drawerFlag: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value);
      },
    },
    queryModelComp: {
      get() {
        return this.queryModel;
      },
      set(value) {
        if (value != null) {
          this.$emit('updateQueryModel', value);
        }
      },
    },
    cityModelComp: {
      get() {
        return this.cityModel;
      },
      set(value) {
        if (value != null) {
          this.$emit('updateCityModel', value);
        }
      },
    },
  },
  watch: {
    queryInputSync(val) {
      // val && val !== this.queryModelComp && this.$emit('updateQueryInputSync', val);

      if (val && val !== this.queryModelComp) {
        this.$emit('updateQueryInputSync', val);
      }

      this.$store.dispatch('searchProfiles/queryUpdate', val);
    },
    cityInputSync(val) {
      // val && val !== this.cityModelComp && this.$emit('updateCityInputSync', val);

      if (val && val !== this.cityModelComp) {
        this.$emit('updateCityInputSync', val);
      }

      this.$store.dispatch('searchProfiles/cityUpdate', val);
    },
  },
  methods: {
    displaySearchHeader() {
      return this.$route.name === 'lang-search' || this.$route.name === 'search';
    },
    submitSearchForm() {
      this.$emit('submitSearchForm');
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/header/toolbar-search-header.scss';
</style>
