<template>
  <div
    v-if="showInformationDialog"
    class=""
  >
    <v-dialog
      v-model="showInformationDialog"
      max-width="600"
      @keydown.esc="$emit('closeShowInformationDialog')"
    >
      <v-card>
        <div class="title-header">
          <v-icon class="icon-info">info_outline</v-icon>
          <div class="title-text">
            Więcej informacji
          </div>
          <!-- <v-icon
            class="icon-close"
            @click="$emit('closeShowInformationDialog')"
          >
            close
          </v-icon> -->
        </div>

        <div style="height:60px;"/>

        <div
          v-if="profileDetails.cover"
          :style="{'background-image': 'url(' + profileDetails.cover.source + ')'}"
          class="profile-image-dialog"
        />

        <div class="profile-name-section">
          {{ profileDetails.name }}
        </div>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">description</i>
          Opis
        </v-card-title>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">access_time</i>
          Godziny otwarcia
        </v-card-title>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">comment</i>
          Posty
        </v-card-title>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">smartphone</i>
          Telefon
        </v-card-title>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">language</i>
          Strona
        </v-card-title>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">share</i>
          Powiązane kategorie
        </v-card-title>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
// posts component

export default {
  props: {
    showInformationDialog: {
      type: Boolean,
      default: false,
    },
    profileDetails: {
      type: Object,
      default: null,
    },
    profilePosts: {
      type: Array,
      default: null,
    },
    showFullDescription: {
      type: Boolean,
      default: false,
    },
    showFullDescriptionButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      //
    };
  },
  computed: {
    //
  },
  watch: {
    showInformationDialog(value) {
      // !value && this.$emit('closeShowInformationDialog');

      if (!value) {
        this.$emit('closeShowInformationDialog');
      }
    },
  },
  methods: {
    //
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/profile-details/desktop/lg.scss';
</style>
