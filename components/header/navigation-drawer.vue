<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    fixed
    app
    temporary
    class=""
  >
    <v-list>
      <div class="">
        <!-- logo section -->
      </div>
      <v-divider/>
      <template
        v-for="menuItem in navigationMenuItems"
      >
        <v-list-tile
          :key="menuItem.id"
          :href="menuItem.href"
        >
          <v-list-tile-action class="">
            <v-icon class="">keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="">
            <v-list-tile
              class="list-menu-text"
              v-html="menuItem.title"
            />
          </v-list-tile-content>
          <!-- {{ $i18n.locale }} -->
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import navigationMenuItems from '../../json/navigation-menu-items.json';

export default {
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
        this.$emit('updateNavigationDrawerVal', value);
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
};
</script>
