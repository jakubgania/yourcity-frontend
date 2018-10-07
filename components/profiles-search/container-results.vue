<template>
  <div class="container-results">
    container results component
    <!-- filter section -->
    <tags-section-component/>

    <v-flex
      lg12
      class="result-counter-section"
    >
      <div class="title-section">
        <!-- {{ 'Wyniki' + ' : ' + resultCount() }} -->
        {{ 'Wyniki : 20' }}
      </div>
    </v-flex>

    <results-list-component/>

    <layout-profile-details-desktop-component/>

    <!-- profile details mobile layout -->
    <!-- paging button section -->
    <!-- alert of empty results section -->
    <!-- alert of connection error component -->
  </div>
</template>

<script>
import TagsSectionComponent from './tags-section.vue';
import ResultsListComponent from './results-list.vue';
import LayoutProfileDetailsDesktopComponent from './layout-profile-details-desktop.vue';

export default {
  components: {
    'tags-section-component': TagsSectionComponent,
    'results-list-component': ResultsListComponent,
    'layout-profile-details-desktop-component': LayoutProfileDetailsDesktopComponent,
  },
  data() {
    return {
    //
    };
  },
};
</script>

<style lang='scss' scoped>
  @import '../../assets/scss/profiles-search/container-results/lg.scss';
  @import '../../assets/scss/profiles-search/container-results/xs.scss';
</style>
