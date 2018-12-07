<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap class="footer-container">
    <v-flex
      xs12
      md10
      offset-md1
      lg10
      offset-lg1
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
            <v-flex xs6 sm4 lg4>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.home_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('search')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.search_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('photos')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.photos_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('cities/all')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.cities_page') }}
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex xs6 sm4 lg4>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('project')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.projects_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('founder')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.founder_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('changelog')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.changelog_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('agreements')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.agreements_page') }}
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex xs6 sm4 lg4>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('contact')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.contact_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('business')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.business_page') }}
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('example-profile')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  {{ $t('routes_names.example_profile') }}
                </nuxt-link>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex xs12 md10 offset-md1 lg10 offset-lg1>
      <div class="copyright-section">
        <a
          href="mailto:example@email.io"
          class="email-link"
        >
          email address
        </a>
        <div class="copyright">
          yourcity &copy; 2018
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import LogoComponent from './logo-component.vue';

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
