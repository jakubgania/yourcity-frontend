<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap class="container-project">
    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        O projekcie
      </div>
    </v-flex>
    <v-flex
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg4
      offset-lg4
    >
      <div class="description">
        Miejsce w którym znajdziesz przydatne informacje o różnych miejscach,
        od restauracji po sklepy. Dzięki różnym kategoriom możesz odkrywać
        ciekawe obiekty w Twojej okolicy lub w miejscu, które jest Ci nieznane.
        YOURCITY wspomoże Cię w poszukiwaniu apteki ale i również atrakcji
        turystycznych. Profile usług oraz miejsc dostarczają różne informacje.
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
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
