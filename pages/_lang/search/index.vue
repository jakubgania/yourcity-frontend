<template>
  <v-layout
    row
    wrap
  >
    <div class="hidden-sm-only hidden-xs-only">
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
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('profiles_search.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('profiles_search.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('profiles_search.head.keywords'),
        },
      ],
    };
  },
};
</script>
