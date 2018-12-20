<template>
  <div>

    <navigation-drawer-component
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
      @closeNavigationDrawer="closeNavigationDrawer"
    />

    <navigation-drawer-example-profile-component
      :drawer-example-profile="drawerExampleProfile"
      @switchNavigationDrawerExampleProfile="switchNavigationDrawerExampleProfile"
      @updateNavigationDrawerValueExampleProfile="updateNavigationDrawerValueExampleProfile"
      @closeNavigationDrawerExampleProfile="closeNavigationDrawerExampleProfile"
    />

    <toolbar-header-component
      :drawer="drawer"
      @showNavigationDrawer="showNavigationDrawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @switchNavigationDrawerExampleProfile="switchNavigationDrawerExampleProfile"
      @closeNavigationDrawer="closeNavigationDrawer"
    />

    <toolbar-search-header-component
      :drawer="drawer"
      :query-model="queryModel"
      :query-items="queryItems"
      :query-input-sync="queryInputSync"
      :city-model="cityModel"
      :city-items="cityItems"
      :city-input-sync="cityInputSync"
      @updateQueryModel="updateQueryModel"
      @updateQueryInputSync="updateQueryInputSync"
      @updateCityModel="updateCityModel"
      @updateCityInputSync="updateCityInputSync"
      @submitSearchForm="submitSearchForm"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
      @updateSearchDialogXsModel="updateSearchDialogXsModel"
    />

    <div v-if="this.$vuetify.breakpoint.name == 'sm' ">
      <search-dialog-sm-component
        :search-dialog-sm-model="searchDialogXsModel"
        :categories-model="categoriesModel"
        :categories-items="categoriesItems"
        :query-model="queryModel"
        :query-items="queryItems"
        :query-input-sync="queryInputSync"
        :city-model="cityModel"
        :city-items="cityItems"
        :city-input-sync="cityInputSync"
        @updateCategoriesModel="updateCategoriesModel"
        @updateQueryModel="updateQueryModel"
        @updateQueryInputSync="updateQueryInputSync"
        @updateCityModel="updateCityModel"
        @updateCityInputSync="updateCityInputSync"
        @submitSearchForm="submitSearchForm"
        @updateSearchDialogSmModel="updateSearchDialogSmModel"
      />
    </div>

    <div v-if="this.$vuetify.breakpoint.name == 'xs'">
      <search-dialog-xs-component
        :search-dialog-xs-model="searchDialogXsModel"
        :categories-model="categoriesModel"
        :categories-items="categoriesItems"
        :query-model="queryModel"
        :query-items="queryItems"
        :query-input-sync="queryInputSync"
        :city-model="cityModel"
        :city-items="cityItems"
        :city-input-sync="cityInputSync"
        @updateCategoriesModel="updateCategoriesModel"
        @updateQueryModel="updateQueryModel"
        @updateQueryInputSync="updateQueryInputSync"
        @updateCityModel="updateCityModel"
        @updateCityInputSync="updateCityInputSync"
        @submitSearchForm="submitSearchForm"
        @updateSearchDialogXsModel="updateSearchDialogXsModel"
      />
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationDrawerComponent from './navigation-drawer.vue';
import NavigationDrawerExampleProfileComponent from './navigation-drawer-example-profile.vue';
import ToolbarHeaderComponent from './toolbar-header.vue';
import ToolbarSearchHeaderComponent from './toolbar-search-header.vue';
import SearchDialogSmComponent from './toolbar-search-header-sm.vue';
import SearchDialogXsComponent from '../profiles-search/search-dialog-xs.vue';
import categoriesItems from '../../json/categories-menu-items.json';

export default {
  components: {
    'navigation-drawer-component': NavigationDrawerComponent,
    'navigation-drawer-example-profile-component': NavigationDrawerExampleProfileComponent,
    'toolbar-header-component': ToolbarHeaderComponent,
    'toolbar-search-header-component': ToolbarSearchHeaderComponent,
    'search-dialog-sm-component': SearchDialogSmComponent,
    'search-dialog-xs-component': SearchDialogXsComponent,
  },
  data: () => ({
    drawer: false,
    drawerExampleProfile: false,
    cityInputSync: null,
    queryInputSync: null,
    searchDialogSmModel: true,
    searchDialogXsModel: false,
    categoriesModel: null,
    categoriesItems: categoriesItems.categories,
  }),
  computed: {
    ...mapGetters('searchProfiles', [
      'query',
      'city',
    ]),
    ...mapGetters('autocomplete', [
      'queryItems',
      'cityItems',
    ]),
    queryModel: {
      get() {
        return this.$store.state.searchProfiles.query;
      },
      set(value) {
        this.$store.dispatch('searchProfiles/queryUpdate', value);
      },
    },
    cityModel: {
      get() {
        return this.$store.state.searchProfiles.city;
      },
      set(value) {
        this.$store.dispatch('searchProfiles/cityUpdate', value);
      },
    },
  },
  watch: {
    cityInputSync(value) {
      if (value) {
        this.$store.dispatch('autocomplete/autocompleteCity', value);
      }

      this.cityModel = this.checkIsNullWatch(value);
    },
    queryInputSync(value) {
      if (value) {
        this.$store.dispatch('autocomplete/autocompleteQuery', value);
      }

      this.queryModel = this.checkIsNullWatch(value);
    },
  },
  methods: {
    ...mapActions('searchProfiles', [
      'getProfilesData',
      'queryUpdate',
      'cityUpdate',
    ]),
    ...mapActions('autocomplete', [
      'autocompleteQuery',
      'autocompleteCity',
    ]),
    submitSearchForm() {
      const parameters = {};

      window.scrollTo(0, 0);

      parameters.query = this.checkIsNull(this.query);
      parameters.city = this.checkIsNull(this.city);

      document.title = `Yourcity - wyszukiwanie - ${parameters.query} - ${parameters.city}`;

      this.updateURL(`${this.checkLanguage()}/search?query=${parameters.query}&city=${parameters.city}`);
      this.$store.dispatch('searchProfiles/getProfilesData', parameters);
      // update current category
    },
    updateURL(url) {
      const stateObj = { foo: 'bar' };
      history.pushState(stateObj, 'page', url); // eslint-disable-line
    },
    checkLanguage() {
      if (this.$i18n.locale !== 'en') {
        return `/${this.$i18n.locale}`;
      }

      return '';
    },
    checkIsNull(value) {
      if (value == null) {
        return '';
      }

      return value;
    },
    checkIsNullWatch(value) {
      if (value != null) {
        return value;
      }

      return '';
    },
    closeNavigationDrawer() {
      this.drawer = false;
    },
    showNavigationDrawer() {
      this.drawer = true;
    },
    switchNavigationDrawer() {
      this.drawer = !this.drawer;
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value;
    },
    switchNavigationDrawerExampleProfile() {
      this.drawerExampleProfile = !this.drawerExampleProfile;
    },
    closeNavigationDrawerExampleProfile() {
      this.drawerExampleProfile = false;
    },
    showNavigationDrawerExampleProfile() {
      this.drawerExampleProfile = true;
    },
    updateNavigationDrawerValueExampleProfile(value) {
      this.drawerExampleProfile = value;
    },
    updateQueryModel(value) {
      this.queryModel = value;
    },
    updateQueryInputSync(value) {
      this.queryInputSync = value;
    },
    updateCityModel(value) {
      this.cityModel = value;
    },
    updateCityInputSync(value) {
      this.cityInputSync = value;
    },
    updateCategoriesModel(value) {
      this.categoriesModel = value;
    },
    updateSearchDialogSmModel(value) {
      this.searchDialogXsModel = value;
    },
    updateSearchDialogXsModel(value) {
      this.searchDialogXsModel = value;
    },
  },
};
</script>
