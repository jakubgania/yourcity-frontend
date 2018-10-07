<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs12
      lg12
    >
      <v-layout
        row
        wrap
        class="business-section"
      >
        <v-flex
          xs10
          offset-xs1
          lg11
          offset-lg1
        >
          <div
            class="title-section"
            data-aos="fade-right"
            data-aos-delay="240"
            data-aos-once="true"
          >
            Dla biznesu
          </div>
        </v-flex>
        <v-flex
          xs12
          lg12
          class="logo-section"
        >
          <v-layout
            row
            wrap
          >
            logo section
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          lg12
        >
          <v-layout
            row
            wrap>
            <v-flex
              sm6
              lg3
              offset-lg2
            >
              <v-layout
                row
                wrap
              >
                <div
                  data-aos="fade-right"
                  data-aos-delay="280"
                  data-aos-once="true"
                >
                  <v-flex lg12>
                    <div class="big-font-title">
                      <i class="material-icons icon-title">compare_arrows</i>
                      Zostań oficjalnym partnerem
                    </div>
                  </v-flex>
                  <v-flex lg12>
                    <div class="description first-description">
                      Dołącz do platformy YOURCITY i zostań oficjalnym zweryfikowanym partnerem.
                    </div>
                  </v-flex>
                </div>
              </v-layout>
            </v-flex>
            <v-flex
              sm6
              lg3
              offset-lg2
            >
              <v-layout
                row
                wrap
              >
                <div
                  data-aos="fade-left"
                  data-aos-delay="280"
                  data-aos-once="true"
                >
                  <v-flex lg12>
                    <div class="big-font-title">
                      <i class="material-icons icon-title">layers</i>
                      Stwórz porfil dla biznesu
                    </div>
                  </v-flex>
                  <v-flex lg12>
                    <div class="description">
                      Utwórz szczegółowy profil dla biznesu , który prowadzisz.
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
            >
              YOURCITY for business
              <v-icon
                right
                dark
              >
                keyboard_arrow_right
              </v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
    @import '../../assets/scss/home/business/lg.scss';
    @import '../../assets/scss/home/business/xs.scss';
</style>
