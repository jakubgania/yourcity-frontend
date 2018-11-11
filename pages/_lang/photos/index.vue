<template>
  <v-layout
    row
    wrap
    class="container-gallery"
  >
    <v-flex
      xs12
      lg4
      offset-lg4
    >
      <div class="title-section">
        {{ $t('home.gallery.title_section') }}
      </div>
    </v-flex>

    <v-flex lg12>
      <v-layout
        v-if="showErrorConnectionAlert"
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
        >
          <v-alert
            :value="true"
            outline
            type="error"
            style="letter-spacing:1px;font-weight:700;"
          >
            Network connection error.
          </v-alert>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex
      xs12
      lg10
      offset-lg1
      style="padding-left:10px;padding-right:10px;"
    >
      <v-container
        fluid
        grid-list-xs
      >
        <v-layout
          row
          wrap
          justify-left
        >
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
                <v-progress-circular
                  indeterminate
                  style="color:#252bfc;"
                />
              </v-layout>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <v-flex
      v-if="pagingPhotosURL"
      xs10
      offset-xs1
      sm6
      offset-sm3
      md4
      offset-md4
      lg4
      offset-lg4
    >
      <v-btn
        :loading="showPagingMoreButtonLoader"
        :disabled="showPagingMoreButtonLoader"
        block
        large
        class="paging-button"
        @click="loadMore(pagingPhotosURL)"
      >
        {{ $t('home.gallery.paging_button') }}
        <v-icon
          right
          dark
        >
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>

    <transition name="fade">
      <div
        v-if="fullScreenPhoto"
        tabindex="0"
        class="desktop-full-screen-photo"
        @keydown.esc="closePhotoDetails()"
      >
        <v-icon
          left
          class="info-icon"
          @click="dialog3 = true"
        >
          info_outline
        </v-icon>

        <v-dialog
          v-model="dialog3"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="headline">Informacje</span>
              <v-spacer/>
              <v-menu
                bottom
                left
              >
                <v-btn
                  icon
                  @click="dialog3=false"
                >
                  <v-icon>close</v-icon>
                </v-btn>
              </v-menu>
            </v-card-title>
            <v-card-text>
              title
            </v-card-text>
            <v-card-text>
              date and time
            </v-card-text>
            <v-card-text>
              location
            </v-card-text>
            <v-card-text>
              share
            </v-card-text>
            <v-card-text>
              tags
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                flat
                @click="dialog3=false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-icon
          right
          class="card-button"
          @click="closePhotoDetails()"
        >
          close
        </v-icon>
        <img
          :src="basicServerAddressAPI + src"
          alt=""
          class="full-size-photo"
        >
      </div>
    </transition>

  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      fullScreenPhoto: false,
      src: null,
      resourcePath: 'photos/',
      dialog3: false,
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
    loadMore(url) {
      this.$store.dispatch('photos/pagingPhotoGallery', url);
    },
    setDetailsPhoto(index) {
      const details = this.photoDetails[index];
      this.updateURL(`${this.checkLanguage()}/${this.resourcePath + details.id}`);
      this.src = details.src;
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
      if (this.$i18n.locale !== 'en') {
        return `/${this.$i18n.locale}`;
      }

      return '';
    },
  },
  head() {
    return {
      title: this.$t('photos.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/photos/lg.scss';
</style>
