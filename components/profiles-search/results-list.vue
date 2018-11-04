<template>
  <div>
    <v-layout
      v-for="(section, index) in result"
      :key="section.id"
      row
      wrap
      class=""
    >
      <v-flex
        xs12
        sm12
        lg12
      >
        <v-layout
          row
          wrap
          class="container-profile"
        >
          <v-flex
            xs12
            order-xs2
            sm8
            order-sm1
            md8
            order-md1
            lg8
            order-lg1
          >
            <div class="">
              <div
                class="profile-name"
                @click="moreProfileInfo(index)"
              >
                {{ section.name }}
              </div>
              <div class="profile-subtext">
                {{ section.description ?
                section.description.substring(0, 34) + '...' : 'Opis - Brak' }}
                {{ index }}
              </div>
              <div class="profile-subtext">
                {{ section.single_line_address ?
                  $t('profiles_search.results_list.address') + ' - ' +
                section.single_line_address : 'Adres - Brak' }}
              </div>
              <div class="profile-subtext">
                {{ section.overall_star_rating ?
                  $t('profiles_search.results_list.rating') + ' - ' +
                section.overall_star_rating : 'Ocena - Brak' }}
              </div>
              <div class="profile-subtext">
                {{ section.rating_count ?
                  $t('profiles_search.results_list.rating_count') + ' - ' +
                section.rating_count : 'Liczba ocen - 0' }}
              </div>
              <div class="profile-subtext">
                {{ section.hours ?
                  $t('profiles_search.results_list.hours') :
                $t('profiles_search.results_list.hours') }}
              </div>
            </div>

            <v-layout class="">
              <div class="">
                <!-- vbtn -->
              </div>
            </v-layout>
          </v-flex>
          <v-flex
            xs12
            order-xs1
            sm4
            order-sm2
            md4
            order-md2
            lg4
            order-lg2
          >
            <div class="profile-image-section">
              <div
                v-if="section.cover"
                :style="{'background-image': 'url(' + section.cover.source + ')'}"
                class="profile-image"
                @click="showFullSizePhoto(section.name, section.cover, section.cover.source)"
              />
              <div
                v-else
                class="profile-image-not-available"
                @click="showFullSizePhoto(section.name, null, null)"
              >
                <div class="no-picture-text">
                  {{ $t('profiles_search.results_list.image_not_available') }}
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="showFullSizePhotoDialog"
      max-width="800"
      @keydown.esc="showFullSizePhotoDialog = false"
    >
      <v-card>
        <v-card-title class="headline">
          {{ fullSizePhotoName }}
        </v-card-title>
        <div
          v-if="fullSizePhotoCover"
          :style="{'background-image': 'url(' + fullSizePhotoCoverSource + ')'}"
          class="card-profile-image"
        />
        <div
          v-else
          class="dialog-profile-image-not-available"
        >
          <div class="no-picture-text">
            {{ $t('profiles_search.results_list.image_not_available') }}
          </div>
        </div>
        <v-card-actions style="height:64px;">
          <div v-if="fullSizePhotoCover">
            <powered-by-facebook-component/>
          </div>
          <v-spacer/>
          <v-btn
            flat
            color="blue accent-3"
            class="dialog-close-button"
            @click.native="showFullSizePhotoDialog = false"
          >
            {{ $t('profiles_search.results_list.image_dialog.close_button') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PoweredByFacebookComponent from '../powered-by-facebook.vue';

export default {
  components: {
    'powered-by-facebook-component': PoweredByFacebookComponent,
  },
  props: {
    result: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      showFullSizePhotoDialog: false,
      fullSizePhotoCover: null,
      fullSizePhotoName: null,
      fullSizePhotoCoverSource: null,
    };
  },
  methods: {
    moreProfileInfo(index) {
      if (this.$vuetify.breakpoint.xs) {
        this.$emit('dialog', false);
        this.$emit('updatepProfileDetailsMobileModel', true);
      } else {
        this.$emit('dialog', true);
        this.$emit('updatepProfileDetailsMobileModel', false);
      }

      this.$emit('setProfileDetails', index);
    },
    showFullSizePhoto(name, cover, coverSource) {
      this.showFullSizePhotoDialog = true;
      this.fullSizePhotoName = name;
      this.fullSizePhotoCover = cover;
      this.fullSizePhotoCoverSource = coverSource;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/container-results/results-list/lg.scss';
  @import '../../assets/scss/profiles-search/container-results/results-list/xs.scss';
</style>
