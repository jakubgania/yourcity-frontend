<template>
  <v-flex
    xs12
    lg12
  >
    <v-layout
      row
      wrap
      class="title-section"
    >
      <v-flex
        xs12
        lg4
        offset-lg2
      >
        <div
          class="logo-section"
          data-aos="fade-right"
          data-aos-delay="240"
          data-aos-once="true"
        >
          <logo-component
            :logo-size="logoSize"
            :margin="logoMargin"
          />
        </div>
      </v-flex>
      <v-flex
        xs12
        lg4
      >
        <div
          data-aos="fade-left"
          data-aos-delay="240"
          data-aos-once="true"
        >
          <div class="text-title">
            Informacje o Twoim mieście
          </div>
          <div class="text-subtitle">
            oraz okolicy w której się znajdujesz
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
        sm10
        offset-sm1
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
            Odkrywanie
          </div>
          <div class="section-info-description">
            YOURCITY możesz użyc podczas pobytu w nowym nieznanym
            miescie lub do odrkywania nowych miejsc w twoim obecnym.
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
            style="color:#0308b0;"
          >
            info_outline
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm10
        offset-sm1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            Informacje
          </div>
          <div class="section-info-description">
            Jest to miejsce w którym znajdziesz przydatne informacje o
            różnych miejscach oraz usugach czy nadchodzacych wydarzeniach.
            Sprawdz jakie sa restauracje w miejscu do ktroego sie wybierasz
            lub wyszukaj galerie handlowa planujac zakupy.
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
        sm10
        offset-sm1
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
            Kategorie
          </div>
          <div class="section-info-description">
            Dzięki różnym kategoriom możesz odkrywać ciekawe obiekty w
            Twojej okolicy lub w miejscu, które jest Ci nieznane.
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
            style="color:#0308b0;"
          >
            map
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm10
        offset-sm1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            Atrakcje
          </div>
          <div class="section-info-description">
            YOURCITY wspomoże Cię takze w poszukiwaniu obiektow sportowych
            takich jak baseny, hale sportowe czy parki trampolin
            ale i również atrakcji turystycznych, muzeow czy galerii sztuki.
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
        sm10
        offset-sm1
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
            Pomoc
          </div>
          <div class="section-info-description">
            Gdy jest dla Ciebie ważne zdrowie mozesz poszukac silowni lub
            trenera personalnego ale takze znajdziesz informacje o przychodniach lekarskich,
            szpitalch i aptekach.
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
            style="color:#0308b0;"
          >
            view_compact
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm10
        offset-sm1
        lg3
        offset-lg2
      >
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div class="section-info-title">
            Profile
          </div>
          <div class="section-info-description">
            Profile usług oraz miejsc dostarczają różne informacje takie
            jak godziny otwarcia czy adres lub zdjęcie.
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
        sm10
        offset-sm1
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
            Firmy
          </div>
          <div class="section-info-description">
            Można tutaj znaleźc informacje o wielu firmach z różnych braż oraz
            informacje przeznaczone dla startupow i przedsiębiorcow.
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
        case 'xs': return '44';
        case 'sm': return '88';
        case 'md': return '88';
        case 'lg': return '88';
        case 'xl': return '88';
        default: return '88';
      }
    },
    logoMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '-10';
        case 'sm': return '-16';
        case 'md': return '-16';
        case 'lg': return '-16';
        case 'xl': return '-16';
        default: return '-16';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/home/information/lg.scss';
@import '../../assets/scss/home/information/xs.scss';
</style>
