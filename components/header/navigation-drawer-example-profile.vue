<template>
  <v-navigation-drawer
    v-if="this.$vuetify.breakpoint.name == 'xs'"
    v-model="drawerFlagPro"
    fixed
    right
    temporary
  >
    <v-list
      class="list-section"
    >
      <div class="list-section-logo">
        <v-icon
          class="close-menu-icon-example-profile"
          @click="closeNavigationDrawer()"
        >
          close
        </v-icon>
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
            {{ $t(`${menuItem.nameKey}`) }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawerExampleProfile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navigationMenuItems: [
        {
          nameKey: 'example-profile.menu.information',
          path: 'example-profile',
        },
        {
          nameKey: 'example-profile.menu.posts',
          path: 'example-profile/posts',
        },
        {
          nameKey: 'example-profile.menu.photos',
          path: 'example-profile/photos',
        },
        {
          nameKey: 'example-profile.menu.comments',
          path: 'example-profile/comments',
        },
        {
          nameKey: 'example-profile.menu.related-profiles',
          path: 'example-profile/related-profiles',
        },
      ],
    };
  },
  computed: {
    drawerFlagPro: {
      get() {
        return this.drawerExampleProfile;
      },
      set(value) {
        this.$emit('updateNavigationDrawerValueExampleProfile', value);
      },
    },
  },
  watch: {
    drawerExampleProfile(value) {
      // !value && this.$emit('closeNavigationDrawer');

      if (!value) {
        this.$emit('closeNavigationDrawerExampleProfile');
      }
    },
  },
  methods: {
    closeNavigationDrawer() {
      this.$emit('closeNavigationDrawerExampleProfile');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/header/navigation-drawer.scss';
</style>
