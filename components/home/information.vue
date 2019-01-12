<template>
  <v-flex xs12 sm12 md12 lg12>
    <v-layout row wrap class="title-section">
      <v-flex xs12 sm12 md6 lg4 offset-lg2>
        <div data-aos="fade-right" data-aos-delay="240" data-aos-once="true">
          <div class="logo-section">
            <logo-component :logo-size="logoSize" :margin="logoMargin"/>
          </div>
          <v-layout row wrap style="margin-top:-80px;padding-bottom:48px;">
            <v-flex
              lg4 style="font-weight:700;text-align:center;letter-spacing:1px;">
              Cities
            </v-flex>
            <v-flex lg4 style="font-weight:700;text-align:center;letter-spacing:1px;">
              Places
            </v-flex>
            <v-flex lg4 style="font-weight:700;text-align:center;letter-spacing:1px;">
              Locations
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 lg4>
        <div data-aos="fade-left" data-aos-delay="240" data-aos-once="true">
          <div class="text-title">
            {{ $t('home.information-section.title') }}
          </div>
          <div class="text-subtitle">
            {{ $t('home.information-section.subtitle') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex order-xs2 xs12 sm8 offset-sm2 order-lg1 lg3 offset-lg2 xl2 offset-xl3>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.exploration.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.exploration.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex order-xs1 xs12 lg3 order-lg2 offset-lg2 xl2 class="section-icon">
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#030ac9;">
            search
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex xs12 lg3 offset-lg2 xl2 offset-xl3 class="section-icon">
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#0308b0;">
            info_outline
          </v-icon>
        </div>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 lg3 offset-lg2 xl2 offset-xl2>
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.information.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.information.description') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex order-xs2 xs12 sm8 offset-sm2 order-lg1 lg3 offset-lg2 xl2 offset-xl3>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.categories.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.categories.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex order-xs1 xs12 lg3 order-lg2 offset-lg2 xl2 class="section-icon">
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#020797;">
            location_on
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex xs12 lg3 offset-lg2 xl2 offset-xl3 class="section-icon">
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#02067e;">
            map
          </v-icon>
        </div>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 lg3 offset-lg2 xl2 offset-xl2>
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.attractions.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.attractions.description') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex order-xs2 xs12 sm8 offset-sm2 order-lg1 lg3 offset-lg2 xl2 offset-xl3>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.help.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.help.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex order-xs1 xs12 lg3 order-lg2 offset-lg2 xl2 class="section-icon">
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#020564;">
            local_hospital
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex xs12 lg3 offset-lg2 xl2 offset-xl3 class="section-icon">
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#01044b;">
            view_compact
          </v-icon>
        </div>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 lg3 offset-lg2 xl2 offset-xl2>
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.profiles.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.profiles.description') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex order-xs2 xs12 sm8 offset-sm2 order-lg1 lg3 offset-lg2 xl2 offset-xl3>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <div class="section-info-title">
            {{ $t('home.information-section.companies.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information-section.companies.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex order-xs1 xs12 lg3 order-lg2 offset-lg2 xl2 class="section-icon">
        <div data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
          <v-icon class="info-icon" style="color:#010232;">
            dvr
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

  </v-flex>
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
        case 'xs': return 0;
        case 'sm': return 0;
        case 'md': return 10;
        case 'lg': return 0;
        case 'xl': return 0;
        default: return 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home/information/lg.scss';
  @import '../../assets/scss/home/information/sm.scss';
  @import '../../assets/scss/home/information/xs.scss';

  @media only screen and (max-width: 1264px)
  {
    .text-title
    {
      font-size: 34px;
      text-align: center;
    }
    .text-subtitle
    {
      font-size: 18px;
      text-align: center;
    }
  }
</style>
