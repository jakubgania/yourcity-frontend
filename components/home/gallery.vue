<template>
  <v-layout
    row
    wrap
    class="gallery-container"
  >
    <v-flex
      xs10
      offset-xs1
      lg11
      offset-lg1
    >
      <div
        class="title-section"
        data-aos="fade-right"
        data-aos-delay="240"
        data-aos-once="true"
      >
        {{ $t('home.gallery.title_section') }}
      </div>
    </v-flex>

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

    <v-flex
      xs12
      sm12
      md12
      lg12
      style="padding-left:10px;padding-right:10px;"
    >
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout
          row
          wrap
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
              :src="photoDetails[index].thumbnail"
              height="220px"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <v-flex
      xs10
      offset-xs1
      sm8
      offset-sm2
      md4
      offset-md4
      lg4
      offset-lg4
    >
      <router-link
        :to="$i18n.path('photos')"
        class="button-link"
      >
        <v-btn
          block
          large
          depressed
          class="show-gallery-button"
        >
          {{ $t('home.gallery.search_button') }}
          <v-icon
            right
            dark
          >
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </router-link>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('photos', [
      'photoDetails',
      'showErrorConnectionAlert',
    ]),
  },
  created() {
    this.$store.dispatch('photos/getPhotos', '/api/photos?start=0&offset=8&fields=thumbnail');
  },
  methods: {
    ...mapActions([
      'photos/getPhotos',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/home/gallery/lg.scss';
@import '../../assets/scss/home/gallery/xs.scss';
</style>
