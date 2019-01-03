<template>
  <v-layout row wrap class="footer-container">
    <v-flex
      xs12
      md10
      offset-md1
      lg10
      offset-lg1
      xl8
      offset-xl2
      class="footer-section"
    >
      <v-layout row wrap>
        <v-flex xs12 lg4>
          <v-layout row wrap>
            <v-flex xs12 sm12 lg12>
              <logo-component/>
            </v-flex>
            <v-flex xs12 sm8 lg12>
              <div class="icons-section">
                <v-layout>
                  <v-flex sm2 mg2 lg2>
                    <v-icon class="footer-icon">perm_device_info</v-icon>
                  </v-flex>
                  <v-flex sm2 mg2 lg2>
                    <v-icon class="footer-icon">location_city</v-icon>
                  </v-flex>
                  <v-flex sm2 mg2 lg2>
                    <v-icon class="footer-icon">map</v-icon>
                  </v-flex>
                  <v-flex sm2 mg2 lg2>
                    <v-icon class="footer-icon">layers</v-icon>
                  </v-flex>
                  <v-flex sm2 mg2 lg2>
                    <v-icon class="footer-icon">perm_device_info</v-icon>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
            <v-flex xs12 sm8 lg12>
              <div class="description">
                {{ $t('footer.description') }}
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg8>
          <v-layout row wrap>
            <v-flex xs12 sm4 lg4>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.home-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('search')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.search-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('photos')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.photos-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('countries/all')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.countries-page') }}
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex xs12 sm4 lg4>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('project')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.projects-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('founder')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.founder-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('changelog')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.changelog-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('agreements')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.agreements-page') }}
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex xs12 sm4 lg4>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('contact')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.contact-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('business')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.business-page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('example-profile')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes-names.example-profile') }}
                </nuxt-link>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2>
      <div class="copyright-section">
        <!-- <a
          href="mailto:example@email.io"
          class="email-link"
        >
          email address
        </a> -->
        <div class="copyright">
          yourcity &copy; 2018 - 2019
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import LogoComponent from './logo.vue';

export default {
  components: {
    'logo-component': LogoComponent,
  },
};
</script>

<style lang="scss" scoped>
  @import './../assets/scss/footer/lg.scss';
  @import './../assets/scss/footer/sm.scss';
  @import './../assets/scss/footer/xs.scss';
</style>
