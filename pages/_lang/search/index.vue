<template>
  <v-layout
    row
    wrap
  >
    <div class="hidden-xs-only">
      <sidebar-menu-component/>
    </div>

    <container-results-component/>

    <!-- full screen loader component -->

  </v-layout>
</template>

<script>
import SidebarMenuComponent from '../../../components/profiles-search/sidebar-menu.vue';
import ContainerOfResultsComponent from '../../../components/profiles-search/container-results.vue';

export default {
  components: {
    'sidebar-menu-component': SidebarMenuComponent,
    'container-results-component': ContainerOfResultsComponent,
  },
};
</script>
