<template>
  <v-toolbar
    v-if="displayHeader()"
    color="white"
    app
    height="64"
    absolute
    clipped-left
    class="toolbar-header"
  >
    <v-toolbar-side-icon @click.native="switchNavigationDrawer()"/>

    <v-toolbar-title class="toolbar-title">
      <logo-component/>
    </v-toolbar-title>

    <div
      v-if="displayLogoBusinessName()"
      class="business-logo-text"
    >
      for business
    </div>

    <v-spacer/>

    <v-toolbar-side-icon
      v-if="displayNavigationDrawerExampleProfile() && this.$vuetify.breakpoint.name == 'xs'"
      @click.native="switchNavigationDrawerExampleProfile()"
    />

    <dropdown-menu-component/>

  </v-toolbar>
</template>

<script>
import LogoComponent from '../logo-component.vue';
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
  },
  watch: {
    drawer(value) {
      if (!value) {
        this.$emit('closeNavigationDrawer');
      }
    },
  },
  methods: {
    displayHeader() {
      return this.$route.name !== 'lang-search' || this.$route.name === 'search';
    },
    displayLogoBusinessName() {
      return this.$route.name === 'lang-business' || this.$route.name === 'business';
    },
    switchNavigationDrawer() {
      this.$emit('switchNavigationDrawer');
    },
    switchNavigationDrawerExampleProfile() {
      this.$emit('switchNavigationDrawerExampleProfile');
    },
    displayNavigationDrawerExampleProfile() {
      return this.$route.name === 'lang-example-profile'
          || this.$route.name === 'lang-example-profile-posts'
          || this.$route.name === 'lang-example-profile-photos'
          || this.$route.name === 'lang-example-profile-comments'
          || this.$route.name === 'lang-example-profile-related-profiles'
          || this.$route.name === 'example-profile'
          || this.$route.name === 'example-profile-posts'
          || this.$route.name === 'example-profile-photos'
          || this.$route.name === 'example-profile-comments'
          || this.$route.name === 'example-profile-related-profiles';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/header/toolbar-header.scss';
</style>
