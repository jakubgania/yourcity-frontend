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

    <v-toolbar-title class="toolbar-title">
      <logo-component :logo-size="logoSize" :margin="6"/>
    </v-toolbar-title>

    <v-form
      class="search-form hidden-xs-only hidden-sm-only"
      @submit.prevent="submitSearchForm()"
    >
      <v-layout row wrap>
        <v-flex lg5>
          <div class="query-input">
            <v-combobox
              v-model="queryModelComp"
              :items="queryItems"
              :search-input.sync="queryInputSync"
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
        <v-flex lg4>
          <div class="query-input">
            <v-combobox
              v-model="cityModelComp"
              :items="cityItems"
              :search-input.sync="cityInputSync"
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
        <v-flex lg3>
          <button type="submit" class="submit-search-form-btn">
            {{ $t('profiles_search.search_form.submit_button') }}
            <v-icon class="btn-icon">keyboard_arrow_right</v-icon>
          </button>
        </v-flex>
      </v-layout>
    </v-form>

    <v-spacer/>

    <v-btn
      icon
      class="hidden-md-only hidden-lg-only mobile-search-icon"
      @click="$emit('updateSearchDialogXsModel', true)"
    >
      <v-icon>search</v-icon>
    </v-btn>

    <dropdown-menu-component/>

  </v-toolbar>
</template>

<script>
import LogoComponent from '../logo.vue';
import DropdownMenuComponent from './dropdown-menu.vue';

export default {
  components: {
    'logo-component': LogoComponent,
    'dropdown-menu-component': DropdownMenuComponent,
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
      type: Array,
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
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 120;
        case 'sm': return 140;
        case 'md': return 140;
        case 'lg': return 160;
        case 'xl': return 160;
        default: return 420;
      }
    },
  },
  watch: {
    queryInputSync(val) {
      if (val && val !== this.queryModelComp) {
        this.$emit('updateQueryInputSync', val);
      }

      this.$store.dispatch('searchProfiles/queryUpdate', val);
    },
    cityInputSync(val) {
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
  getCurrentLocation() {
    //
  },
};
</script>

<style lang="scss">
  @import '../../assets/scss/header/toolbar-search-header.scss';
</style>
