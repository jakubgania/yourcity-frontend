<template>
  <v-layout
    row
    wrap
  >
    <div class="hidden-xs-only">
      <sidebar-menu-component/>
    </div>

    <container-results-component/>

    <no-ssr>
      <full-screen-loader-component
        :show-full-screen-loader="showFullScreenLoader"
      />
    </no-ssr>

  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarMenuComponent from '../../../components/profiles-search/sidebar-menu.vue';
import ContainerOfResultsComponent from '../../../components/profiles-search/container-results.vue';
import ShowFullScreenLoaderComponent from '../../../components/full-screen-loader.vue';

export default {
  components: {
    'sidebar-menu-component': SidebarMenuComponent,
    'container-results-component': ContainerOfResultsComponent,
    'full-screen-loader-component': ShowFullScreenLoaderComponent,
  },
  computed: {
    ...mapGetters('searchProfiles', [
      'showFullScreenLoader',
    ]),
  },
  head() {
    return {
      title: 'Yourcity - Wyszukiwanie profili',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
      ],
    };
  },
};
</script>
