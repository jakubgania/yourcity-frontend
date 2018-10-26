<template>
  <div class="container-results">
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        lg12
      >
        <div class="results-section">

          <!-- filter section -->

          <tags-section-component
            @searchByTag="searchByTag"
          />

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
            @dialog="updateShowInformationDialog"
            @updatepProfileDetailsMobileModel="updatepProfileDetailsMobileModel"
          />

          <layout-profile-details-desktop-component
            :show-information-dialog="showInformationDialog"
            :profile-details="profileDetails"
            :profile-posts="profilePosts"
            :show-full-description="showFullDescription"
            :show-full-description-button="showFullDescriptionButton"
            @closeShowInformationDialog="closeShowInformationDialog"
          />

          <!-- profile details mobile layout -->
          <!-- paging button section -->
          <!-- alert of empty results section -->
          <!-- alert of connection error component -->
        </div>
      </v-flex>
    </v-layout>
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
      showInformationDialog: false,
      profileDetails: {},
      showFullDescription: false,
      showFullDescriptionButton: false,
      filterSectionValue: true,
      profileDetailsMobileModel: false,
    };
  },
  computed: {
    ...mapGetters('searchProfiles', [
      'query',
      'city',
      'result',
      'category',
      'showPaginigButton',
      'showPagingButtonLoader',
      'pagingURL',
      'profilePosts',
      'showEmptyResultsAlert',
      'showErrorConnectionAlert',
    ]),
  },
  created() {
    //
  },
  methods: {
    ...mapActions('searchProfiles', [
      'getPagingProfilesData',
      'getProfilePosts',
      'setProposedTags',
      'queryUpdate',
    ]),
    resultCount() {
      if (this.result.length === 0) {
        return 0;
      }

      // if (this.showPaginigButton) {
      //   // return this.result.length + '+';
      //   return `${this.result.length}+`;
      // }

      return this.result.length;
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
    setFullDescriptionFlag(description) {
      if (description) {
        if (description.length > 300) {
          this.showFullDescription = false;
          this.showFullDescriptionButton = true;
        } else {
          this.showFullDescription = true;
          this.showFullDescriptionButton = false;
        }
      } else {
        this.showFullDescription = true;
        this.showFullDescriptionButton = false;
      }
    },
    closeShowInformationDialog() {
      this.showInformationDialog = false;
    },
    searchByTag(tag) {
      const parameters = {};
      const tagNormalized = tag.replace(/\s/g, '+');

      // update url

      parameters.query = tagNormalized;
      parameters.city = this.city;

      this.$store.dispatch('searchProfiles/queryUpdate', tag);
      this.$store.dispatch('searchProfiles/getProfilesData', parameters);
    },
  },
};
</script>

<style lang='scss' scoped>
  @import '../../assets/scss/profiles-search/container-results/lg.scss';
  @import '../../assets/scss/profiles-search/container-results/xs.scss';
</style>
