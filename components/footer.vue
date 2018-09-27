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
              <div class="">
                logo section
              </div>
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
                description
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
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex
              xs6
              sm4
              lg4
            >
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex
              xs6
              sm4
              lg4
            >
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
                </nuxt-link>
              </div>
              <div class="link-section">
                <nuxt-link to="/">
                  <v-icon class="link-icon">keyboard_arrow_right</v-icon>
                  page
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

<style lang="scss" scoped>
  @import './../assets/scss/footer/lg.scss';
</style>
