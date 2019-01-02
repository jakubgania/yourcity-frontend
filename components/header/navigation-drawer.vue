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
        <logo-component :logo-size="logoSize" :margin="logoMargin"/>
      </div>

      <v-list-tile
        v-for="menuItem in navigationMenuItems"
        :key="menuItem.id"
        :to="$i18n.path(menuItem.path)"
      >
        <v-list-tile-action class="selected-icon">
          <v-icon class="list-menu-icon">keyboard_arrow_right</v-icon>
        </v-list-tile-action>
        <v-list-tile-content class="selected-text">
          <v-list-tile-title
            class="list-menu-text"
          >
            {{ $t(`routes_names.${menuItem.nameKey}`) }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import LogoComponent from '../logo.vue';
import navigationMenuItems from '../../json/navigation-menu-items.json';

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
      navigationMenuItems: navigationMenuItems.items,
    };
  },
  computed: {
    drawerFlag: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('updateNavigationDrawerModel', value);
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
    logoMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 16;
        case 'sm': return 14;
        case 'md': return 14;
        case 'lg': return 12;
        case 'xl': return 12;
        default: return 16;
      }
    },
  },
  watch: {
    drawer(value) {
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
