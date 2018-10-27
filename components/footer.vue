<template>
  <v-layout
    row
    wrap
    class="footer-container"
  >
    <v-flex
      xs12
      md10
      offset-md1
      lg10
      offset-lg1
      class="footer-section"
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          lg4
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              sm12
              lg12
            >
              <logo-component/>
            </v-flex>
            <v-flex
              xs12
              sm8
              lg12
            >
              <div class="icons-section">
                <v-layout>
                  <v-flex
                    sm2
                    mg2
                    lg2
                  >
                    <v-icon class="footer-icon">perm_device_info</v-icon>
                  </v-flex>
                  <v-flex
                    sm2
                    mg2
                    lg2
                  >
                    <v-icon class="footer-icon">location_city</v-icon>
                  </v-flex>
                  <v-flex
                    sm2
                    mg2
                    lg2
                  >
                    <v-icon class="footer-icon">map</v-icon>
                  </v-flex>
                  <v-flex
                    sm2
                    mg2
                    lg2
                  >
                    <v-icon class="footer-icon">layers</v-icon>
                  </v-flex>
                  <v-flex
                    sm2
                    mg2
                    lg2
                  >
                    <v-icon class="footer-icon">perm_device_info</v-icon>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
            <v-flex
              xs12
              sm8
              lg12
            >
              <div class="description">
                Miejsce w którym znajdziesz przydatne informacje o różnych
                miejscach, od restauracji po sklepy. Dzięki różnym kategoriom
                możesz odkrywać ciekawe obiekty w Twojej okolicy lub w miejscu,
                które jest Ci nieznane. YOURCITY wspomoże Cię w poszukiwaniu
                apteki ale i również atrakcji turystycznych. Profile usług oraz
                miejsc dostarczają różne informacje.
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          lg8
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              xs6
              sm4
              lg4
            >
              <div class="link-section">
                <nuxt-link :to="$i18n.path('')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  strona główna
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('search')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  wyszukiwanie
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('photos')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  zdjęcia
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('cities/all')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  miasta
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex
              xs6
              sm4
              lg4
            >
              <div class="link-section">
                <nuxt-link :to="$i18n.path('project')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  o platformie
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('founder')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  o twórcy
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('changelog')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  changelog
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('agreements')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  regulamin
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex
              xs6
              sm4
              lg4
            >
              <div class="link-section">
                <nuxt-link :to="$i18n.path('contact')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  kontakt
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('business')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  dla biznesu
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('example-profile')">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  przykładowy profil
                </nuxt-link>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex
      xs12
      md10
      offset-md1
      lg10
      offset-lg1
    >
      <div class="copyright-section">
        <a
          href="mailto:email@address.co"
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
</style>
