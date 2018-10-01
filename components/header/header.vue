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

    <toolbar-search-header-component/>

  </div>
</template>

<script>
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
  }),
  watch: {
  //
  },
  methods: {
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
