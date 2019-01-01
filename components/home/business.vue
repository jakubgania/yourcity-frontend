<template>
  <v-layout row wrap>
    <v-flex xs12 lg12>
      <v-layout row wrap class="business-section">
        <v-flex xs10 offset-xs1 lg11 offset-lg1>
          <div
            class="title-section"
            data-aos="fade-right"
            data-aos-delay="240"
            data-aos-once="true"
          >
            {{ $t('home.business.title_section') }}
          </div>
        </v-flex>
        <v-flex xs12 lg12 class="logo-section">
          <v-layout row wrap>
            <v-flex
              xs6
              lg4
              offset-lg2
              class="logo-section-component"
            >
              <logo-component
                :logo-size="logoSize"
                :margin="logoMargin"
              />
            </v-flex>
            <v-flex xs6 lg4>
              <div
                class="text"
                data-aos="fade"
                data-aos-delay="600"
                data-aos-once="true"
              >
                for business
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg12>
          <v-layout row wrap>
            <v-flex
              xs12
              sm6
              lg3
              offset-lg2
              xl3
            >
              <v-layout row wrap>
                <div
                  data-aos="fade-right"
                  data-aos-delay="280"
                  data-aos-once="true"
                >
                  <v-flex lg12>
                    <div class="big-font-title">
                      <i class="material-icons icon-title">compare_arrows</i>
                      {{ $t('home.business.section_1.title') }}
                    </div>
                  </v-flex>
                  <v-flex lg12>
                    <div class="description first-description">
                      {{ $t('home.business.section_1.description') }}
                    </div>
                  </v-flex>
                </div>
              </v-layout>
            </v-flex>
            <v-flex
              xs12
              sm6
              lg3
              offset-lg2
              xl3
            >
              <v-layout row wrap>
                <div
                  data-aos="fade-left"
                  data-aos-delay="280"
                  data-aos-once="true"
                >
                  <v-flex lg12>
                    <div class="big-font-title">
                      <i class="material-icons icon-title">layers</i>
                      {{ $t('home.business.section_2.title') }}
                    </div>
                  </v-flex>
                  <v-flex lg12>
                    <div class="description">
                      {{ $t('home.business.section_2.description') }}
                    </div>
                  </v-flex>
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs10
          offset-xs1
          sm8
          offset-sm2
          lg4
          offset-lg4
          xl2
          offset-xl5
        >
          <router-link
            :to="$i18n.path('business')"
            class="link-section"
          >
            <v-btn
              block
              large
              depressed
              class="button"
              data-aos="fade-right"
              data-aos-delay="240"
              data-aos-once="true"
            >
              YOURCITY for business
              <v-icon right dark>
                keyboard_arrow_right
              </v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import LogoComponent from '../logo.vue';

export default {
  components: {
    'logo-component': LogoComponent,
  },
  computed: {
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 240;
        case 'sm': return 400;
        case 'md': return 420;
        case 'lg': return 480;
        case 'xl': return 560;
        default: return 420;
      }
    },
    logoMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 10;
        case 'sm': return 0;
        case 'md': return 10;
        case 'lg': return 14;
        case 'xl': return 0;
        default: return 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home/business/lg.scss';
  @import '../../assets/scss/home/business/xs.scss';
</style>
