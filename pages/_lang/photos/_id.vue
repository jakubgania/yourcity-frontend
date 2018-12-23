<template>
  <v-layout row wrap class="container-photo">

    <v-flex
      order-xs2
      xs12
      order-sm2
      sm12
      order-md1
      md4
      order-lg1
      lg3
    >
      <v-card class="details-section">
        <v-card-title class="title-text">
          <i class="material-icons" style="margin-right: 20px;">
            info_outline
          </i>
          {{ $t('photos.information') }}
        </v-card-title>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">title</i>
            {{ photoFullSizeDetails.title }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">schedule</i>
            {{ photoFullSizeDetails.creation_date }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">location_on</i>
            {{ photoFullSizeDetails.location }}
          </div>
        </v-card-text>
        <!-- <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">map</i>
            Pokaż na mapie
          </div>
        </v-card-text> -->
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">share</i>
            {{ $t('photos.share') }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">label</i>
            {{ $t('photos.tags') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-flex
            v-for="tag in photoFullSizeDetails.tags"
            :key="tag.id"
            lg12
            style="display:inline;"
          >
            <v-chip outline class="tag-chip details-tag">
              {{ tag }}
            </v-chip>
          </v-flex>
        </v-card-text>
        <router-link
          :to="$i18n.path('photos')"
          style="text-decoration:none;"
        >
          <v-card-text>
            <div class="card-text">
              <i class="material-icons card-icon">photo_camera</i>
              {{ $t('photos.gallery') }}
            </div>
          </v-card-text>
        </router-link>
      </v-card>
    </v-flex>

    <v-flex
      order-xs1
      xs12
      order-sm1
      sm12
      order-md2
      md8
      order-lg2
      lg9
      style="background-color:#ffffff;"
    >
      <v-img :src="imagePath" class="photo-section">
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate style="color:#252bfc;"/>
        </v-layout>
      </v-img>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  scrollToTop: true,
  data() {
    return {
      snackbar: false,
      mode: '',
      timeout: 2600,
      text: 'Link skopiowany',
      dialogShare: false,
    };
  },
  computed: {
    ...mapGetters('photos', [
      'photoFullSizeDetails',
    ]),
    ...mapGetters({
      basicClientAddress: 'basicClientAddress',
      basicServerAddressAPI: 'basicServerAddressAPI',
    }),
    // getCurrentURL() {
    //   return this.basicClientAddress + '/photos' + '/' + this.photoDetails['id'];
    // },
    imagePath() {
      if (this.photoFullSizeDetails.src) {
        return this.basicServerAddressAPI + this.photoFullSizeDetails.src;
      }

      return '';
    },
  },
  created() {
    this.$store.dispatch('photos/getPhotoDeatils', this.$route.params.id);
  },
  methods: {
    ...mapActions([
      'getProfilesData',
    ]),
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: `Yourcity - ${this.$t('photos.head.photo')} - ${this.photoFullSizeDetails.title}`,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/photos/id/lg.scss';
</style>
