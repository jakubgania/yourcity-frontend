<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap class="container-gallery">
    <v-flex xs12 lg4 offset-lg4 xl2 offset-xl5>
      <div class="title-page">
        {{ $t('home.gallery.title_section') }}
      </div>
    </v-flex>

    <network-connection-error-alert-component
      :show-error-connection-alert="showErrorConnectionAlert"
    />

    <v-flex
      xs12
      lg10
      offset-lg1
      xl8
      offset-xl2
      class="photos-grid-section"
    >
      <v-container fluid grid-list-xs>
        <v-layout row wrap justify-left>
          <v-flex
            v-for="(thumbnail, index) in photoDetails"
            :key="thumbnail.id"
            xs12
            sm6
            md4
            lg3
            class="image-section"
          >
            <v-img
              :src="basicServerAddressAPI + photoDetails[index].thumbnail"
              height="220px"
              @click="setDetailsPhoto(index)"
            >
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
      </v-container>
    </v-flex>

    <v-flex
      v-if="pagingPhotosURL"
      xs12
      sm6
      offset-sm3
      md4
      offset-md4
      lg4
      offset-lg4
      xl2
      offset-xl5
      class="paging-button-section"
    >
      <v-btn
        :loading="showPagingMoreButtonLoader"
        :disabled="showPagingMoreButtonLoader"
        depressed
        block
        large
        class="paging-button"
        @click="loadMore(pagingPhotosURL)"
      >
        {{ $t('home.gallery.paging_button') }}
        <v-icon right dark>
          cached
        </v-icon>
      </v-btn>
    </v-flex>


    <v-dialog
      v-model="fullScreenPhoto"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      @keydown.esc="closeDialogESC('fullScreenPhoto')"
    >
      <v-card>
        <v-toolbar dark color="white" style="box-shadow:none;">
          <v-btn icon dark style="color:black;" @click="closePhotoDetails()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-spacer/>
          <v-toolbar-items>
            <v-btn icon style="color:black;" @click="dialog = true">
              <v-icon>info_outline</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <img
          :src="basicServerAddressAPI + src"
          alt=""
          class="full-size-photo"
        >
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" max-width="500px" @keydown.esc="closeDialogESC('dialog')">
      <v-card>
        <v-card-title>
          <span class="title">
            <v-icon style="margin-right:6px;">info_outline</v-icon>
            {{ $t('photos.dialog.information') }}
          </span>
          <v-spacer/>
          <v-menu bottom left>
            <v-btn icon @click="dialog=false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-menu>
        </v-card-title>
        <v-card-text>
          <div class="dialog-subtitle">
            {{ $t('photos.dialog.title') }}
          </div>
          <div class="dialog-text">
            {{ photoFullSizeDetails['title'] }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="dialog-subtitle">
            {{ $t('photos.dialog.date_added') }}
          </div>
          <div class="dialog-text">
            {{ photoFullSizeDetails['creation_date'] }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="dialog-subtitle">
            {{ $t('photos.dialog.location') }}
          </div>
          <div class="dialog-text">
            {{ photoFullSizeDetails['location'] }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="dialog-subtitle">
            {{ $t('photos.dialog.share') }}
          </div>
          <div class="dialog-text">
            <v-btn
              depressed
              small
              color="blue darken-2"
              style="color:#ffffff;font-sieze:12px;letter-spacing:1px;margin-left:0px;"
            >
              {{ $t('photos.dialog.copy') }} <v-icon style="margin-left:6px;">link</v-icon>
            </v-btn>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="dialog-subtitle">
            {{ $t('photos.dialog.tags') }}
          </div>
          <div
            v-for="tag in photoFullSizeDetails['tags']"
            :key="tag.id"
            style="display:inline;"
          >
            <v-chip class="tag">
              {{ tag }}
            </v-chip>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="blue accent-3"
            class="dialog-close-button"
            flat
            @click="dialog=false"
          >
            {{ $t('photos.dialog.close-button') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NetworkConnectionErrorAlertComponent from '../../../components/network-connection-error-alert.vue';

export default {
  components: {
    'network-connection-error-alert-component': NetworkConnectionErrorAlertComponent,
  },
  data() {
    return {
      fullScreenPhoto: false,
      src: null,
      resourcePath: 'photos/',
      dialog: false,
    };
  },
  computed: {
    ...mapGetters('photos', [
      'thumbnails',
      'photoDetails',
      'photoFullSizeDetails',
      'pagingPhotosURL',
      'showPagingMoreButtonLoader',
      'showErrorConnectionAlert',
    ]),
    ...mapGetters({
      basicClientAddress: 'basicClientAddress',
      basicServerAddressAPI: 'basicServerAddressAPI',
    }),
  },
  created() {
    this.$store.dispatch('photos/getPhotos', '/api/photos?start=0&offset=8&fields=id,thumbnail,src');
  },
  methods: {
    ...mapActions('photos', [
      'getPhotoDeatils',
    ]),
    loadMore(url) {
      this.$store.dispatch('photos/pagingPhotoGallery', url);
    },
    setDetailsPhoto(index) {
      const details = this.photoDetails[index];
      this.updateURL(`${this.checkLanguage()}/${this.resourcePath + details.id}`);
      this.src = details.src;
      this.$store.dispatch('photos/getPhotoDeatils', details.id);
      this.fullScreenPhoto = true;
    },
    closePhotoDetails() {
      this.fullScreenPhoto = false;
      this.updateURL(`${this.checkLanguage()}/${this.resourcePath}`);
    },
    updateURL(url) {
      const stateObject = { foo: 'bar' };
      history.pushState(stateObject, 'page', url); // eslint-disable-line
    },
    checkLanguage() {
      if (this.$i18n.locale === 'en') {
        return '/en';
      }

      if (this.$i18n.locale !== 'en') {
        return `/${this.$i18n.locale}`;
      }

      return '';
    },
    closeDialogESC(value) {
      if (this.fullScreenPhoto && value === 'dialog') {
        this.dialog = false;
      } else if (!this.dialog && value === 'fullScreenPhoto') {
        this.closePhotoDetails();
      }
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('photos.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('photos.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('photos.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/photos/photos.scss';
  @import './assets/scss/photos/lg.scss';
  @import './assets/scss/photos/sm.scss';
  @import './assets/scss/photos/xs.scss';
</style>
