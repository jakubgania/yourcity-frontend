<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-flex xs12 sm12 md12 lg12>
    <v-layout
      row
      wrap
      class="title-section"
    >
      <v-flex xs12 sm12 md6 lg4 offset-lg2>
        <div
          data-aos="fade-right"
          data-aos-delay="240"
          data-aos-once="true"
        >
          <div class="logo-section">
            <logo-component
              :logo-size="logoSize"
              :margin="logoMargin"
            />
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 lg4>
        <div
          data-aos="fade-left"
          data-aos-delay="240"
          data-aos-once="true"
        >
          <div class="text-title">
            {{ $t('home.information_section.title') }}
          </div>
          <div class="text-subtitle">
            {{ $t('home.information_section.subtitle') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="section-info"
    >
      <v-flex
        order-xs2
        xs12
        sm8
        offset-sm2
        order-lg1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.exploration.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.exploration.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex
        order-xs1
        xs12
        lg3
        order-lg2
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#030ac9;"
          >
            search
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex
        xs12
        lg3
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#0308b0;"
          >
            info_outline
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm8
        offset-sm2
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.information.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.information.description') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="section-info">
      <v-flex
        order-xs2
        xs12
        sm8
        offset-sm2
        order-lg1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.categories.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.categories.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex
        order-xs1
        xs12
        lg3
        order-lg2
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#020797;"
          >
            location_on
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="section-info"
    >
      <v-flex
        xs12
        lg3
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#02067e;"
          >
            map
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm8
        offset-sm2
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.attractions.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.attractions.description') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="section-info"
    >
      <v-flex
        order-xs2
        xs12
        sm8
        offset-sm2
        order-lg1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.help.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.help.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex
        order-xs1
        xs12
        lg3
        order-lg2
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#020564;"
          >
            local_hospital
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="section-info"
    >
      <v-flex
        xs12
        lg3
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#01044b;"
          >
            view_compact
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm8
        offset-sm2
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.profiles.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.profiles.description') }}
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout
      row
      wrap
      class="section-info"
    >
      <v-flex
        order-xs2
        xs12
        sm8
        offset-sm2
        order-lg1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            {{ $t('home.information_section.companies.title') }}
          </div>
          <div class="section-info-description">
            {{ $t('home.information_section.companies.description') }}
          </div>
        </div>
      </v-flex>
      <v-flex
        order-xs1
        xs12
        lg3
        order-lg2
        offset-lg2
        class="section-icon"
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-icon
            class="info-icon"
            style="color:#010232;"
          >
            dvr
          </v-icon>
        </div>
      </v-flex>
    </v-layout>

  </v-flex>
</template>

<script>
import LogoComponent from '../logo-component.vue';

export default {
  components: {
    'logo-component': LogoComponent,
  },
  computed: {
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 44;
        case 'sm': return 88;
        case 'md': return 88;
        case 'lg': return 88;
        case 'xl': return 88;
        default: return 88;
      }
    },
    logoMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return -10;
        case 'sm': return -16;
        case 'md': return -16;
        case 'lg': return -16;
        case 'xl': return -16;
        default: return -16;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home/information/lg.scss';
  @import '../../assets/scss/home/information/sm.scss';
  @import '../../assets/scss/home/information/xs.scss';
</style>
