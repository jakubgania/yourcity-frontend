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
      <logo-component :logo-size="logoSize" :margin="8"/>
    </v-toolbar-title>

    <div v-if="displayLogoBusinessName()" class="business-logo-text">
      for business
    </div>

    <v-spacer/>

    <no-ssr>
      <v-toolbar-side-icon
        v-if="displayNavigationDrawerExampleProfile() &&
        (this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm')"
        @click.native="switchNavigationDrawerExampleProfile()"
      />
    </no-ssr>

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
  },
  computed: {
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
