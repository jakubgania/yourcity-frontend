<template>
  <div class="container-results">
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm12
        lg12
      >
        <div class="results-section">

          <filter-component/>

          <tags-section-component
            @searchByTag="searchByTag"
          />

          <v-flex
            lg12
            class="result-counter-section"
          >
            <div class="title-section">
              {{ $t('profiles_search.result_count') + ' : ' + resultCount() }}
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
            @updateShowFullDescription="updateShowFullDescription"
            @closeShowInformationDialog="closeShowInformationDialog"
          />

          <layout-profile-details-mobile-component
            :profile-details-mobile-model="profileDetailsMobileModel"
            :profile-details="profileDetails"
            :show-full-description="showFullDescription"
            :show-full-description-button="showFullDescriptionButton"
            :number-results="numberResults"
            :profile-posts="profilePosts"
            @loadProfilePosts="loadProfilePosts"
            @setProfileDetails="setProfileDetails"
            @facebookMenuRedirect="facebookMenuRedirect"
            @updateShowFullDescription="updateShowFullDescription"
            @updatepProfileDetailsMobileModel="updatepProfileDetailsMobileModel"
          />

          <v-layout
            v-if="showPaginigButton && filterSectionValue"
            row
            wrap
          >
            <v-flex
              xs10
              offset-xs1
              sm6
              offset-sm3
              lg4
              offset-lg4
              class="paging-button-section"
            >
              <v-btn
                :loading="showPagingButtonLoader"
                :disabled="showPagingButtonLoader"
                class="paging-button"
                depressed
                large
                block
                @click.native="getPagingProfilesData(pagingURL)"
              >
                {{ $t('profiles_search.paging_button') }}
                <v-icon class="icon">cached</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>

          <empty-results-alert-component
            :show-empty-results-alert="showEmptyResultsAlert"
          />

          <network-connection-error-alert-component
            :show-error-connection-alert="showErrorConnectionAlert"
            :margin="100"
          />

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
import LayoutProfileDetailsMobileComponent from './layout-profile-details-mobile.vue';
import FilterComponent from './filter.vue';
import EmptyResultsAlertComponent from './empty-results-alert.vue';
import NetworkConnectionErrorAlertComponent from '../network-connection-error-alert.vue';

export default {
  components: {
    'tags-section-component': TagsSectionComponent,
    'results-list-component': ResultsListComponent,
    'layout-profile-details-desktop-component': LayoutProfileDetailsDesktopComponent,
    'layout-profile-details-mobile-component': LayoutProfileDetailsMobileComponent,
    'filter-component': FilterComponent,
    'network-connection-error-alert-component': NetworkConnectionErrorAlertComponent,
    'empty-results-alert-component': EmptyResultsAlertComponent,
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
    numberResults() {
      return this.result.length;
    },
  },
  created() {
    let queryInput = '';
    let cityInput = '';

    if (this.$route.query.query) {
      queryInput = this.$route.query.query;
    }

    if (this.$route.query.city) {
      cityInput = this.$route.query.city;
    }

    queryInput = queryInput.replace(/\s/g, '+');
    cityInput = cityInput.replace(/\s/g, '+');

    const parameters = {
      query: queryInput,
      city: cityInput,
    };

    if (queryInput.length !== 0 || cityInput.length !== 0) {
      this.$store.dispatch('searchProfiles/getProfilesData', parameters);
    }
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
    loadProfilePosts() {
      //
    },
    facebookMenuRedirect() {
      //
    },
    updateShowFullDescription() {
      this.showFullDescription = !this.showFullDescription;
    },
    getPagingProfilesData(pagingURL) {
      const parameters = {
        query: this.query,
        city: this.city,
        category: this.category,
        url: pagingURL,
      };

      this.$store.dispatch('searchProfiles/getPagingProfilesData', parameters);
      this.$store.dispatch('searchProfiles/setProposedTags', this.result);
    },
  },
};
</script>

<style lang='scss' scoped>
@import '../../assets/scss/profiles-search/container-results/lg.scss';
@import '../../assets/scss/profiles-search/container-results/sm.scss';
@import '../../assets/scss/profiles-search/container-results/xs.scss';
</style>
