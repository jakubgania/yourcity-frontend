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
              <div class="profile-name">
                {{ section.name }}
              </div>
              <div class="profile-subtext">
                {{ section.description ?
                section.description.substring(0, 34) + '...' : 'Opis - Brak' }}
                <!-- {{ section.description.substring(0, 34) + '...' }} -->
                {{ index }}
              </div>
              <div class="profile-subtext">
                {{ section.single_line_address ?
                'Adres - ' + section.single_line_address : 'Adres - Brak' }}
              </div>
              <div class="profile-subtext">
                {{ section.overall_star_rating ?
                'Ocena - ' + section.overall_star_rating : 'Ocena - Brak' }}
              </div>
              <div class="profile-subtext">
                {{ section.rating_count ?
                'Liczba ocen - ' + section.rating_count : 'Liczba ocen - 0' }}
              </div>
              <div class="profile-subtext">
                {{ section.hours ?
                'Godziny otwarcia - Tak' : 'Godziny otwarcia - Brak' }}
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
                  image not available
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
            no image
          </div>
        </div>
        <v-card-actions style="height:64px;">
          <div class="">
            <!--  -->
          </div>
          <v-spacer/>
          <v-btn
            flat
            color="blue accent-3"
            class="dialog-close-button"
            @click.native="showFullSizePhotoDialog = false"
          >
            zamknij
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
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
