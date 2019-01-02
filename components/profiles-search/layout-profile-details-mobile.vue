<!-- eslint-disable -->

<template>
  <v-dialog
    id="profile-details-mobile-component"
    v-model="profileDetailsMobileModel"
    fullscreen
  >
    <div id="scroll-target" style="max-height: 100%" class="scroll-y">
      <div style="height: 1000px">
        <div
          class="profile-section"
          data-aos="zoom-in"
          data-aos-delay="140"
          data-aos-once="true"
          v-scroll:#scroll-target="onScroll"
        >
          <div
            v-touch="{ left: () => swipe('left') , right: () => swipe('right'), down: () => swipe('down') }"
            class="swipe-section"
          >

            <div class="title-header">
              <v-icon class="icon-info">info_outline</v-icon>
              <div class="title-text">
                {{ $t('profiles_search.profile-details.title-dialog') }}
              </div>
              <v-icon
                class="icon-close"
                @click="$emit('closeShowInformationDialog')"
              >
                close
              </v-icon>
            </div>

            <img
              v-if="profileDetails.cover"
              :src="profileDetails.cover.source"
              class="profile-image"
              style="margin-top:48px;"
            >
            <div v-else class="profile-no-image">
              Brak zdjęcia
            </div>

            <v-layout row wrap>
              <v-flex xs12>
                <v-card class="profile-details-card-section">
                  <v-card-title class="profile-title-section">
                    <div class="profile-title">
                      {{ profileDetails.name ? profileDetails.name : 'Brak' }}
                    </div>
                  </v-card-title>
                  <v-card-text class="border-bottom">
                    <v-layout row wrap>
                      <v-flex xs5 style="font-size:14px;letter-spacing: 1px;">
                        <v-icon class="" style="position:relative;top:2px;color: #3eafaf;">
                          start
                        </v-icon>
                        {{ profileDetails.overall_star_rating ?
                        'Ocena - ' + profileDetails.overall_star_rating : 'Ocena - Brak' }}
                      </v-flex>
                      <v-flex xs7 style="font-size:14px;letter-spacing: 1px;">
                        <v-icon
                          class=""
                          style="position:relative;top:2px;margin-right:12px;color: #3eafaf;"
                        >
                          keyboard_arrow_right
                        </v-icon>
                        {{ profileDetails.rating_count ?
                        'Liczba ocen - ' + profileDetails.rating_count : 'Liczba ocen - Brak' }}
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
                      <v-layout row wrap>
                        <v-flex xs6 offset-xs3>
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
                          <v-chip outline class="tag-chip">
                            {{ profileDetails.location.street }}
                          </v-chip>
                        </div>
                        <div
                          v-if="profileDetails.location.city"
                          style="display:inline;"
                        >
                          <v-chip outline class="tag-chip">
                            {{ profileDetails.location.city }}
                          </v-chip>
                        </div>
                        <div
                          v-if="profileDetails.location.country"
                          style="display:inline;"
                        >
                          <v-chip outline class="tag-chip">
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

                  <v-card-text class="border-bottom">
                    <v-layout row wrap>
                      <v-flex xs6 offset-xs3>
                        <v-btn
                          :loading="postLoaderButton"
                          :disabled="postLoaderButton"
                          block
                          depressed
                          class="full-description-button"
                          @click.native="$emit('loadProfilePosts', profileDetails.id)"
                        >
                          {{ $t('profiles_search.profile-details.posts.button-text') }}
                          <v-icon class="icon">cloud_upload</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-text>

                  <posts-dialog-component :profile-posts="profilePosts"/>

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
                      <v-chip outline class="website-chip">
                        Przejdź do strony
                        <v-icon>keyboard_arrow_right</v-icon>
                      </v-chip>
                    </a>
                  </v-card-text>
                  <v-card-text v-else class="card-section border-bottom">
                    Brak
                  </v-card-text>
                  <v-card-text>
                    <div class="profile-text">
                      <v-icon class="icon">widgets</v-icon>
                      Inne media
                    </div>
                  </v-card-text>

                  <v-card-text class="card-section border-bottom">
                    <div @click="facebookDialogModel = true">
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
                      <v-chip outline class="tag-chip">
                        {{ category.name }}
                      </v-chip>
                    </div>
                  </v-card-text>
                  <v-card-text v-else>
                    brak
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
                    <powered-by-facebook-component/>
                  </v-card-text>

                </v-card>
              </v-flex>
            </v-layout>

          </div>
        </div>
      </div>
    </div>

  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import PoweredByFacebookComponent from '../powered-by-facebook.vue';
import PostsDialogComponent from './posts-dialog.vue';

export default {
  components: {
    'powered-by-facebook-component': PoweredByFacebookComponent,
    'posts-dialog-component': PostsDialogComponent,
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
      offsetTop: 0,
    };
  },
  computed: {
    ...mapGetters('searchProfiles', [
      'postLoaderButton',
    ]),
    descriptionButtonText() {
      if (this.showFullDescription) {
        return this.$t('profiles_search.profile-details.show-less');
      }

      return this.$t('profiles_search.profile-details.show-more');
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

      if (direction === 'down') {
        if (this.offsetTop === 0) {
          this.$emit('updatepProfileDetailsMobileModel', false);
        }
      }
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
    scrollTop() {
      const element = document.getElementById('scroll-target');
      element.scrollTo(0, 0);
    },
    hourText(openingHour, closingHour) {
      if (openingHour && closingHour) {
        return `${openingHour} - ${closingHour}`;
      }

      return '-- - --';
    },
    closePrfoileDetails() {
      this.$emit('updatepProfileDetailsMobileModel', false);
      this.scrollTop();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/profile-details/mobile/xs.scss';
</style>
