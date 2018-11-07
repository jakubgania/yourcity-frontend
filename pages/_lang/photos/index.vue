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
        Zdjęcia
      </div>
    </v-flex>

    <!-- <v-flex lg12>
      network connection error
    </v-flex> -->

    <v-flex
      xs12
      lg12
    >
      <v-container
        fluid
        grid-list-lg
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
            <v-card tile>
              <v-img
                :src="photoDetails[index].thumbnail"
                height="220px"
                @click="setDetailsPhoto(index)"
              />
            </v-card>
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
        WIĘCEJ
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
          right
          class="card-button"
          @click="closePhotoDetails()"
        >
          close
        </v-icon>
        <img
          :src="src"
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
      resourcePath: '/photos/',
      titleHeaderPage: 'Yourcity - Galeria',
    };
  },
  computed: {
    ...mapGetters('photos', [
      'thumbnails',
      'photoDetails',
      'pagingPhotosURL',
      'showPagingMoreButtonLoader',
      'showErrorConnectionAlert',
    ]),
    ...mapGetters({
      basicClientAddress: 'basicClientAddress',
    }),
  },
  created() {
    this.$store.dispatch('photos/getPhotos', '/api/photos?start=0&offset=4&fields=id,thumbnail,src');
  },
  methods: {
    loadMore(url) {
      this.$store.dispatch('photos/pagingPhotoGallery', url);
    },
    setDetailsPhoto(index) {
      const details = this.photoDetails[index];
      this.updateURL(`${this.basicClientAddress}/${this.$i18n.locale + this.resourcePath + details.id}`);
      this.src = details.src;
      this.titleHeaderPage = `Yourcity - ${details.id}`;
      this.fullScreenPhoto = true;
    },
    closePhotoDetails() {
      this.fullScreenPhoto = false;
      this.titleHeaderPage = 'Yourcity - Galeria';
      this.updateURL(`${this.basicClientAddress}/${this.$i18n.locale + this.resourcePath}`);
    },
    updateURL(url) {
      const stateObject = { foo: 'bar' };
      history.pushState(stateObject, 'page', url); // eslint-disable-line
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
