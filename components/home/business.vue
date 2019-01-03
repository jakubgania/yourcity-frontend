<template>
  <v-layout row wrap>
    <v-flex xs12 lg12>
      <v-layout row wrap class="business-section">

        <title-section-component :title="$t('home.business.title-section')"/>

        <v-flex xs12 lg12 class="logo-section">
          <v-layout row wrap>
            <v-flex xs6 lg4 offset-lg2 class="logo-section-component">
              <logo-component :logo-size="logoSize" :margin="logoMargin"/>
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
            <v-flex xs12 sm6 lg3 offset-lg2 xl3>
              <v-layout row wrap>
                <div
                  data-aos="fade-right"
                  data-aos-delay="280"
                  data-aos-once="true"
                >
                  <v-flex lg12>
                    <div class="big-font-title">
                      <i class="material-icons icon-title">compare_arrows</i>
                      {{ $t('home.business.section-1.title') }}
                    </div>
                  </v-flex>
                  <v-flex lg12>
                    <div class="description first-description">
                      {{ $t('home.business.section-1.description') }}
                    </div>
                  </v-flex>
                </div>
              </v-layout>
            </v-flex>
            <v-flex xs12 sm6 lg3 offset-lg2 xl3>
              <v-layout row wrap>
                <div
                  data-aos="fade-left"
                  data-aos-delay="280"
                  data-aos-once="true"
                >
                  <v-flex lg12>
                    <div class="big-font-title">
                      <i class="material-icons icon-title">layers</i>
                      {{ $t('home.business.section-2.title') }}
                    </div>
                  </v-flex>
                  <v-flex lg12>
                    <div class="description">
                      {{ $t('home.business.section-2.description') }}
                    </div>
                  </v-flex>
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <button-section-component
          :route-path="$i18n.path('business')"
          :button-title="'YOURCITY for business'"
        />

      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import TitleComponent from './title-section.vue';
import LogoComponent from '../logo.vue';
import ButtonComponent from './button-section.vue';

export default {
  components: {
    'title-section-component': TitleComponent,
    'logo-component': LogoComponent,
    'button-section-component': ButtonComponent,
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
