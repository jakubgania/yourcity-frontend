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
        {{ 'Wyniki' + ' : ' + resultCount() }}
      </div>
    </v-flex>

    <results-list-component
      :result="result"
      @setProfileDetails="setProfileDetails"
      @updateShowInformationDialog="updateShowInformationDialog"
      @updatepProfileDetailsMobileModel="updatepProfileDetailsMobileModel"
    />

    <layout-profile-details-desktop-component/>

    <!-- profile details mobile layout -->
    <!-- paging button section -->
    <!-- alert of empty results section -->
    <!-- alert of connection error component -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
      profileDetails: false,
      showInformationDialog: false,
      profileDetailsMobileModel: false,
    };
  },
  computed: {
    ...mapGetters('searchProfiles', [
      'result',
    ]),
  },
  created() {
    //
  },
  methods: {
    ...mapActions('searchProfiles', [
      //
    ]),
    resultCount() {
      // if (this.result.length === 0) {
      //   return 0;
      // }
      //
      // if (this.showPaginigButton) {
      //   // return this.result.length + '+';
      //   return `${this.result.length}+`;
      // }
      //
      // return this.result.length;
      return 22;
    },
    setProfileDetails(value) {
      this.profileDetails = this.result[value];
      this.profileDetails.index = value;
      this.setFullDescriptionFlag(this.profileDetails.description);
    },
    updateShowInformationDialog(value) {
      this.showInformationDialog = value;
    },
    updatepProfileDetailsMobileModel(value) {
      this.profileDetailsMobileModel = value;
    },
  },
};
</script>

<style lang='scss' scoped>
  @import '../../assets/scss/profiles-search/container-results/lg.scss';
  @import '../../assets/scss/profiles-search/container-results/xs.scss';
</style>
