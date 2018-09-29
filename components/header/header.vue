<template>
  <div>
    <navigation-drawer-component
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
      @closeNavigationDrawer="closeNavigationDrawer"
    >
      <!--  -->
    </navigation-drawer-component>

    <toolbar-header-component
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @closeNavigationDrawer="closeNavigationDrawer"
    />
  </div>
</template>

<script>
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */
import NavigationDrawerComponent from './navigation-drawer.vue';
import ToolbarHeaderComponent from './toolbar-header.vue';

export default {
  components: {
    'navigation-drawer-component': NavigationDrawerComponent,
    'toolbar-header-component': ToolbarHeaderComponent,
  },
  data: () => ({
    drawer: false,
  }),
  watch: {
  //
  },
  methods: {
    closeNavigationDrawer() {
      this.drawer = false;
    },
    switchNavigationDrawer() {
      console.log(this.drawer);
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
