<template>
  <v-layout
    row
    wrap
    class="container-photo"
  >

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
            <v-chip
              outline
              class="tag-chip details-tag"
            >
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
      <v-img
        :src="basicServerAddressAPI + photoFullSizeDetails.src"
        class="photo-section"
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
            color="blue"
          />
        </v-layout>
      </v-img>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
      'photoDetails',
      'photoFullSizeDetails',
    ]),
    ...mapGetters({
      basicClientAddress: 'basicClientAddress',
      basicServerAddressAPI: 'basicServerAddressAPI',
    }),
    // getCurrentURL() {
    //   return this.basicClientAddress + '/photos' + '/' + this.photoDetails['id'];
    // },
  },
  created() {
    this.$store.dispatch('photos/getPhotoDeatils', `/api/photos/details?id=${this.$route.params.id}`);
  },
  methods: {
    ...mapActions([
      'getProfilesData',
    ]),
  },
  head() {
    return {
      title: `Yourcity - ${this.$t('photos.head.photo')} - ${this.photoFullSizeDetails.title}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-photo
{
    background-color: #ffffff;
    padding-bottom: 100px;
}
.details-section
{
    background-color: #ffffff;
    box-shadow: none;
}
.title-text
{
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;
    background-color: #f4f6fa;
}
.card-text
{
    color: #4f4f4f;
    letter-spacing: 2px;
    cursor: default;

    .card-icon
    {
        position: relative;
        top: 7px;
        margin-right: 14px;
        color: #252bfc;
    }
}
.details-tag
{
    height: 48px;
    letter-spacing: 1px;
    padding: 4px;
    margin: 0px;
    margin-top: 8px;
    margin-right: 8px;
    background-color: #ffffff;

    &:hover
    {
        border-color: #ffaa06;
        color: #000000;
    }
}
.photo-section
{
    width: 100%;
}
</style>
