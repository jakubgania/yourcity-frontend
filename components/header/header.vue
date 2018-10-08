<template>
  <div>
    <navigation-drawer-component
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
      @closeNavigationDrawer="closeNavigationDrawer"
    />

    <toolbar-header-component
      :drawer="drawer"
      @showNavigationDrawer="showNavigationDrawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @closeNavigationDrawer="closeNavigationDrawer"
    />

    <toolbar-search-header-component
      :drawer="drawer"
      :queryModel="queryModel"
      :queryItems="queryItems"
      :queryInputSync="queryInputSync"
      :cityModel="cityModel"
      :cityItems="cityItems"
      :cityInputSync="cityInputSync"
      @submitSearchForm="submitSearchForm"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
    />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavigationDrawerComponent from './navigation-drawer.vue';
import ToolbarHeaderComponent from './toolbar-header.vue';
import ToolbarSearchHeaderComponent from './toolbar-search-header.vue';

export default {
  components: {
    'navigation-drawer-component': NavigationDrawerComponent,
    'toolbar-header-component': ToolbarHeaderComponent,
    'toolbar-search-header-component': ToolbarSearchHeaderComponent,
  },
  data: () => ({
    drawer: false,
    cityInputSync: null,
    queryInputSync: null,
    queryItems: null,
    cityItems: null,
  }),
  computed: {
    ...mapGetters('searchProfiles', [
      'query',
      'city',
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
  //
  },
  methods: {
    ...mapActions('searchProfiles', [
      'queryUpdate',
      'cityUpdate',
    ]),
    submitSearchForm() {
      // let query = '';
      // let city = '';

      const { query } = this.query;
      const { city } = this.city;

      const parameters = {
        query,
        city,
      };

      window.scrollTo(0, 0);
      // update url
      this.$store.dispatch('searchProfiles/getProfilesData', parameters);
      // update current category
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
  },
};
</script>

<style lang="scss" scoped>
</style>
