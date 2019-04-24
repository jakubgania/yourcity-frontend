<template>
  <v-layout row wrap class="gallery-container">

    <title-section-component :title="$t('home.gallery.title-section')"/>

    <network-connection-error-alert-component
      :show-error-connection-alert="showErrorConnectionAlert"
    />

    <!-- <v-flex v-if="true" lg4 offset-lg4>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </v-flex> -->

    <v-flex xs12 sm12 md12 lg10 offset-lg1 xl8 offset-xl2 class="gallery-section">
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex
            v-for="(thumbnail, index) in photoDetails"
            :key="thumbnail.id"
            xs12
            sm6
            md4
            lg3
            class="image-section"
          >
            <v-img :src="basicServerPhotosAddress + photoDetails[index].thumbnail" height="220px">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate style="color:#252bfc;"/>
              </v-layout>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <v-flex xs10 offset-xs1 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4 xl2 offset-xl5>
      <router-link :to="$i18n.path('photos')" class="button-link">
        <v-btn block large depressed class="show-gallery-button">
          {{ $t('home.gallery.search-button') }}
          <v-icon right dark>
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </router-link>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TitleComponent from './title-section.vue';
import NetworkConnectionErrorAlertComponent from '../network-connection-error-alert.vue';

export default {
  components: {
    'title-section-component': TitleComponent,
    'network-connection-error-alert-component': NetworkConnectionErrorAlertComponent,
  },
  computed: {
    ...mapGetters('photos', [
      'photoDetails',
      'showErrorConnectionAlert',
    ]),
    ...mapGetters({
      basicServerPhotosAddress: 'basicServerPhotosAddress',
    }),
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
