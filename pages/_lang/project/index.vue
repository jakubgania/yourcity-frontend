<template>
  <v-layout row wrap class="container-project">
    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        O projekcie
      </div>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="text-align:center;">
      <logo-component :logo-size="400"/>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-top:-48px;">
      <v-layout row wrap>
        <v-flex lg4 style="font-weight:700;text-align:center;">
          Cities
        </v-flex>
        <v-flex lg4 style="font-weight:700;text-align:center;">
          Places
        </v-flex>
        <v-flex lg4 style="font-weight:700;text-align:center;">
          Locations
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
      <div class="description">
        Platforma na której znajdziesz przydatne informacje o różnych miejscach,
        od restauracji po sklepy. Dzięki różnym kategoriom możesz odkrywać
        ciekawe obiekty w Twojej okolicy lub w miejscu, które jest Ci nieznane.
        YOURCITY wspomoże Cię w poszukiwaniu apteki ale i również atrakcji
        turystycznych. Profile usług oraz miejsc dostarczają różne informacje.
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import LogoComponent from '../../../components/logo.vue';

export default {
  scrollToTop: true,
  components: {
    'logo-component': LogoComponent,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('project.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('project.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('project.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/project/project.scss';
</style>
