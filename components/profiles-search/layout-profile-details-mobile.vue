<template>
  <div
    v-if="profileDetailsMobileModel"
    class="profile-details-mobile-container"
  >
    <div class="profile-section">
      <div
        v-touch="{ left: () => swipe('left') , right: () => swipe('right') }"
        class="swipe-section"
      >
        <img
          v-if="profileDetails.cover"
          :src="profileDetails.cover.source"
          class="profile-image"
        >
        <div
          v-else
          class="profile-no-image"
        >
          Brak zdjęcia
        </div>

        <v-layout
          row
          wrap
        >
          <v-flex xs12>
            <v-card class="profile-details-card-section">
              <v-card-title class="profile-title-section">
                <div class="profile-title">
                  {{ profileDetails.name ? profileDetails.name : 'Brak' }}
                </div>
              </v-card-title>
              <v-card-text class="border-bottom">
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    xs5
                    style="font-size:14px;letter-spacing: 1px;"
                  >
                    <v-icon
                      class=""
                      style="position:relative;top:2px;color: #3eafaf;"
                    >
                      start
                    </v-icon>
                    {{ profileDetails.overall_star_rating ?
                    'Ocena - ' + profileDetails.overall_star_rating : 'Ocena - Brak' }}
                  </v-flex>
                  <v-flex
                    xs7
                    style="font-size:14px;letter-spacing: 1px;"
                  >
                    <v-icon
                      class=""
                      style="position:relative;top:2px;margin-right:12px;color: #3eafaf;"
                    >
                      keyboard_arrow_right
                    </v-icon>
                    {{ 'Liczba ocen - ' + profileDetails.rating_count }}
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">description</v-icon>
                  Opis
                </div>
              </v-card-text>
              <v-card-text class="border-bottom">
                <div
                  :class="[ showFullDescription ? 'show-content' : '', 'hide-content']"
                  class="description-section"
                >
                  {{ profileDetails.description ? profileDetails.description : 'Brak' }}
                </div>
                <div
                  v-if="showFullDescriptionButton"
                  class="full-description-button-section"
                >
                  <v-layout
                    row
                    wrap
                  >
                    <v-flex
                      xs6
                      offset-xs3
                    >
                      <v-btn
                        block
                        depressed
                        class="full-description-button"
                        @click="$emit('updateShowFullDescription')"
                      >
                        {{ descriptionButtonText }}
                        <v-icon class="icon">{{ iconButtonText }}</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </div>
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">home</v-icon>
                  Adres
                </div>
              </v-card-text>
              <v-card-text class="card-section border-bottom">
                <div v-if="profileDetails.single_line_address">
                  {{ profileDetails.single_line_address ?
                  profileDetails.single_line_address : 'Brak' }}
                  <div class="address-section-tags">
                    <div
                      v-if="profileDetails.location.street"
                      style="display:inline;"
                    >
                      <v-chip
                        outline
                        class="tag-chip"
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
                        class="tag-chip"
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
                        class="tag-chip"
                      >
                        {{ profileDetails.location.country }}
                      </v-chip>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">access_time</v-icon>
                  Godziny otwarcia
                </div>
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">comment</v-icon>
                  Posty
                </div>
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">smartphone</v-icon>
                  Telefon
                </div>
              </v-card-text>
              <v-card-text class="card-section border-bottom">
                {{ profileDetails.phone ? profileDetails.phone : 'Brak' }}
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">language</v-icon>
                  Strona
                </div>
              </v-card-text>
              <v-card-text
                v-if="profileDetails.website"
                class="card-section border-bottom"
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
                class="card-section border-bottom"
              >
                Brak
              </v-card-text>
              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">widgets</v-icon>
                  Inne media
                </div>
              </v-card-text>

              <v-card-text class="card-section border-bottom">
                <div
                  class=""
                  @click="facebookDialogModel = true"
                >
                  Facebook
                </div>
              </v-card-text>

              <v-card-text>
                <div class="profile-text">
                  <v-icon class="icon">share</v-icon>
                  Powiązane kategorie
                </div>
              </v-card-text>
              <v-card-text
                v-if="profileDetails.category_list"
                class="tag-section card-section border-bottom"
              >
                <div
                  v-for="category in profileDetails.category_list"
                  :key="category.id"
                  style="display:inline;"
                >
                  <v-chip
                    outline
                    class="tag-chip"
                  >
                    {{ category.name }}
                  </v-chip>
                </div>
              </v-card-text>
              <v-card-text v-else>
                niema
              </v-card-text>
              <v-card-text class="border-bottom">
                <div
                  class="return-button profile-text"
                  @click="closePrfoileDetails()"
                >
                  <v-icon class="icon">keyboard_backspace</v-icon>
                  Wróc do profili
                </div>
              </v-card-text>
              <v-card-text style="padding-bottom:80px;padding-top:24px;text-align:center;">
                <!-- <powered-by-facebook-component/> -->
              </v-card-text>

            </v-card>
          </v-flex>
        </v-layout>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    //
  },
  props: {
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
    profileDetailsMobileModel: {
      type: Boolean,
      default: false,
    },
    showFullDescriptionButton: {
      type: Boolean,
      default: false,
    },
    numberResults: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      nextIndex: null,
      facebookDialogModel: null,
      facebookMenuItems: [
        {
          title: 'Strona główna',
          icon: 'apps',
          page: '',
        },
        {
          title: 'Informacje',
          icon: 'info_outline',
          page: '/about',
        },
        {
          title: 'Zdjęcia',
          icon: 'photo_camera',
          page: '/photos',
        },
        {
          title: 'Recenzje',
          icon: 'chat',
          page: '/reviews',
        },
        {
          title: 'Posty',
          icon: 'forum',
          page: '/posts',
        },
        {
          title: 'Społeczność',
          icon: 'perm_identity',
          page: '/community',
        },
      ],
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
  methods: {
    swipe(direction) {
      if (direction === 'left') {
        if (this.profileDetails.index === this.numberResults - 1) {
          this.$emit('setProfileDetails', this.numberResults - 1);
        } else {
          this.$emit('setProfileDetails', this.profileDetails.index + 1);
        }
        this.scrollTop();
      }

      if (direction === 'right') {
        if (this.profileDetails.index === 0) {
          this.$emit('setProfileDetails', 0);
        } else {
          this.$emit('setProfileDetails', this.profileDetails.index - 1);
        }
        this.scrollTop();
      }
    },
    scrollTop() {
      const element = document.getElementById('profile-details-mobile-component');
      element.scrollTo(0, 0);
    },
    // showFullDescriptionEmit() {
    //   this.$emit('updateShowFullDescription');
    // },
    hourText(val1, val2) {
      if (val1 && val2) {
        return `${val1} - ${val2}`;
      }

      return '-- - --';
    },
    closePrfoileDetails() {
      this.$emit('updatepProfileDetailsMobileModel', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/profiles-search/profile-details/mobile/xs.scss';
</style>
