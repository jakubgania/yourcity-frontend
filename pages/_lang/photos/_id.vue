<template>
  <v-layout row wrap class="container-photo">

    <v-flex order-xs2 xs12 order-sm2 sm12 order-md1 md4 order-lg1 lg3>
      <v-card class="details-section">
        <v-card-title class="title-text">
          <i class="material-icons" style="margin-right: 20px;">
            info_outline
          </i>
          {{ $t('photos.dialog.information') }}
        </v-card-title>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">title</i>
            {{ details.title }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">schedule</i>
            {{ details.creation_date }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">location_on</i>
            {{ details.location }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">map</i>
            Pokaż na mapie
          </div>
        </v-card-text>
        <v-card-text>
          <div
            v-clipboard:copy="linkToCopy"
            class="card-text"
            @click="handleCopyStatus(true)"
          >
            <i class="material-icons card-icon">share</i>
            {{ $t('photos.dialog.share') }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="card-text">
            <i class="material-icons card-icon">label</i>
            {{ $t('photos.dialog.tags') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-flex
            v-for="tag in details.tags"
            :key="tag.id"
            lg12
            style="display:inline;"
          >
            <v-chip outline class="tag-chip details-tag">
              {{ tag }}
            </v-chip>
          </v-flex>
        </v-card-text>
        <router-link :to="$i18n.path('photos')" style="text-decoration:none;">
          <v-card-text>
            <div class="card-text">
              <i class="material-icons card-icon">photo_camera</i>
              {{ $t('photos.gallery') }}
            </div>
          </v-card-text>
        </router-link>
      </v-card>
    </v-flex>

    <v-flex order-xs1 xs12 order-sm1 sm12 order-md2 md8 order-lg2 lg9>
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

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      bottom
      color="blue lighten-1"
    >
      Link copied
      <v-btn color="black" flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  scrollToTop: true,
  async asyncData({ params, redirect }) {
    try {
      const { data } = await axios.get('https://api.yourcity.io/api/photos/details', {
        params: {
          id: params.id,
        },
      });

      if (data.length !== 0) {
        return { details: data };
      }

      return redirect('/photos');
    } catch (e) {
      return redirect('/photos');
    }
  },
  data() {
    return {
      snackbar: false,
      timeout: 2200,
      text: 'Link skopiowany',
      dialogShare: false,
      linkToCopy: null,
      pageTitle: null,
    };
  },
  computed: {
    ...mapGetters('photos', [
      'photoFullSizeDetails',
    ]),
    ...mapGetters({
      basicClientAddress: 'basicClientAddress',
      basicServerPhotosAddress: 'basicServerPhotosAddress',
    }),
    imagePath() {
      if (this.details.src) {
        return this.basicServerPhotosAddress + this.details.src;
      }

      return '';
    },
  },
  created() {
    this.linkToCopy = this.basicClientAddress + this.$route.fullPath;
  },
  methods: {
    ...mapActions([
      'getProfilesData',
    ]),
    handleCopyStatus(status) {
      this.snackbar = status;
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: `Yourcity - ${this.$t('photos.head.photo')} - ${this.details.title}`,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/photos/id/lg.scss';
</style>
