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

        <v-card-text
          v-if="profileDetails.description"
          :class="[ showFullDescription ? 'show-content' : '', 'hide-content']"
          class="description-section"
        >
          {{ profileDetails.description }}
        </v-card-text>
        <v-card-text
          v-else
          class="section"
        >
          Brak
        </v-card-text>
        <div
          v-if="showFullDescriptionButton"
          class="full-description-button-section"
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              sm6
              offset-sm3
              md6
              offset-md3
              lg6
              offset-lg3
            >
              <v-btn
                block
                depressed
                class="full-description-button"
                @click="showFullDescriptionEmit()"
              >
                {{ descriptionButtonText }}
                <v-icon class="icon">{{ iconButtonText }}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">location_on</i> Adres
        </v-card-title>

        <v-card-text
          v-if="profileDetails.single_line_address"
          class="section">
          {{ profileDetails.single_line_address }}
          <div class="">
            <div
              v-if="profileDetails.location.street"
              style="display:inline;"
            >
              <v-chip
                outline
                class="city-chip"
              >
                {{ profileDetails.location.street }}
              </v-chip>
            </div>
            <div
              v-if="profileDetails.location.city"
              style="display:inline;"
            >
              <v-chip
                outline
                class="city-chip"
              >
                {{ profileDetails.location.city }}
              </v-chip>
            </div>
            <div
              v-if="profileDetails.location.country"
              style="display:inline;"
            >
              <v-chip
                outline
                class="city-chip"
              >
                {{ profileDetails.location.country }}
              </v-chip>
            </div>
          </div>
        </v-card-text>
        <v-card-text
          v-else
          class="section"
        >
          Brak
        </v-card-text>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">access_time</i>
          Godziny otwarcia
        </v-card-title>

        <v-card-text class="section">
          <v-layout
            v-if="profileDetails.hours"
            row
            wrap
            class="opening-hours-section"
          >
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Poniedzialek
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.mon_1_open, profileDetails.hours.mon_1_close) }}
              </div>
            </v-flex>
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Wtorek
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.tue_1_open, profileDetails.hours.tue_1_close) }}
              </div>
            </v-flex>
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Środa
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.wed_1_open, profileDetails.hours.wed_1_close) }}
              </div>
            </v-flex>
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Czwartek
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.thu_1_open, profileDetails.hours.thu_1_close) }}
              </div>
            </v-flex>
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Piątek
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.fri_1_open, profileDetails.hours.fri_1_close) }}
              </div>
            </v-flex>
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Sobota
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.sat_1_open, profileDetails.hours.sat_1_close) }}
              </div>
            </v-flex>
            <v-flex
              lg12
              class="opening-hours-subsection"
            >
              <div class="title-day-off-week">
                Niedziela
              </div>
              <div class="hour-text">
                {{ hourText(profileDetails.hours.sun_1_open, profileDetails.hours.sun_1_close) }}
              </div>
            </v-flex>
          </v-layout>
          <v-layout
            v-else
            row
            wrap
            class=""
          >
            brak
          </v-layout>
        </v-card-text>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">comment</i>
          Posty
        </v-card-title>

        <div class="full-description-button-section">
          <v-layout
            row
            wrap
          >
            <v-flex
              sm6
              offset-sm3
              md6
              offset-md3
              lg6
              offset-lg3
            >
              <v-btn
                :loading="postLoaderButton"
                :disabled="postLoaderButton"
                block
                depressed
                class="full-description-button"
                @click.native="$emit('loadProfilePosts', profileDetails.id)"
              >
                Pokaż wpisy
                <v-icon class="icon">cloud_upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">smartphone</i>
          Telefon
        </v-card-title>

        <v-card-text
          v-if="profileDetails.phone"
          class="section"
        >
          {{ profileDetails.phone }}
        </v-card-text>
        <v-card-text
          v-else
          class="section"
        >
          Brak
        </v-card-text>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">language</i>
          Strona
        </v-card-title>

        <v-card-text
          v-if="profileDetails.website"
          class="section"
        >
          <a
            :href="profileDetails.website"
            target="_blank"
            style="text-decoration:none;"
          >
            <v-chip
              outline
              class="website-chip"
            >
              Przejdź do strony
              <v-icon>keyboard_arrow_right</v-icon>
            </v-chip>
          </a>
        </v-card-text>
        <v-card-text
          v-else
          class="section"
        >
          Brak
        </v-card-text>

        <v-card-title class="title-subsection">
          <i class="material-icons icon">share</i>
          Powiązane kategorie
        </v-card-title>

        <div v-if="profileDetails.category_list">
          <v-card-text class="category-list-section">
            <div
              v-for="category in profileDetails.category_list"
              :key="category.id"
              style="display:inline;"
            >
              <v-chip
                outline
                class="tag-chip"
                @click.native="tag(category.name)"
              >
                {{ category.name }}
              </v-chip>
            </div>
          </v-card-text>
        </div>

        <v-card-actions class="bottom-section">
          <!-- powered by component -->
          <v-spacer/>
          <v-btn
            color="blue accent-3"
            flat
            class="dialog-close-button"
            @click.native="$emit('closeShowInformationDialog')"
          >
            zamknij
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters('searchProfiles', [
      'postLoaderButton',
    ]),
    descriptionButtonText() {
      if (this.showFullDescription) {
        return 'Pokaż mniej';
      }

      return 'Pokaż więcej';
    },
    iconButtonText() {
      if (this.showFullDescription) {
        return 'keyboard_arrow_up';
      }

      return 'keyboard_arrow_down';
    },
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
    hourText(value1, value2) {
      if (value1 && value2) {
        return `${value1} - ${value2}`;
      }

      return '-- - --';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/profile-details/desktop/lg.scss';
</style>
