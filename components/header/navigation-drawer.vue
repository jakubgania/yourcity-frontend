<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    fixed
    app
    temporary
    class="navigation-drawer-container"
  >
    <v-list class="list-section">
      <div class="list-section-logo">
        <v-icon
          class="close-menu-icon"
          @click="closeNavigationDrawer()"
        >
          close
        </v-icon>

        <logo-component/>

      </div>
      <v-divider/>
      <template v-for="menuItem in navigationMenuItems">
        <v-list-tile
          :key="menuItem.id"
          :to="$i18n.path(menuItem.path)"
        >
          <v-list-tile-action class="selected-icon">
            <v-icon class="list-menu-icon">keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="selected-text">
            <v-list-tile-title
              class="list-menu-text"
              v-html="menuItem.title"
            />
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import LogoComponent from '../logo-component.vue';
// import navigationMenuItems from '../../json/navigation-menu-items.json';

export default {
  components: {
    'logo-component': LogoComponent,
  },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // navigationMenuItems: navigationMenuItems.items,
      navigationMenuItems: [
        {
          title: this.$t('routes_names.home_page'),
          path: '',
        },
        {
          title: this.$t('routes_names.search_page'),
          path: 'search',
        },
        {
          title: this.$t('routes_names.photos_page'),
          path: 'cities/all',
        },
        {
          title: this.$t('routes_names.cities_page'),
          path: 'photos',
        },
        {
          title: this.$t('routes_names.projects_page'),
          path: 'contact',
        },
        {
          title: this.$t('routes_names.founder_page'),
          path: 'changelog',
        },
        {
          title: this.$t('routes_names.changelog_page'),
          path: 'business',
        },
        {
          title: this.$t('routes_names.agreements_page'),
          path: 'example-profile',
        },
        {
          title: this.$t('routes_names.contact_page'),
          path: 'project',
        },
        {
          title: this.$t('routes_names.business_page'),
          path: 'founder',
        },
        {
          title: this.$t('routes_names.example_profile'),
          path: 'agreements',
        },
      ],
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
  },
  watch: {
    drawer(value) {
      // !value && this.$emit('closeNavigationDrawer');
      if (!value) {
        this.$emit('closeNavigationDrawer');
      }
    },
  },
  methods: {
    closeNavigationDrawer() {
      this.$emit('closeNavigationDrawer');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/header/navigation-drawer.scss';
</style>
