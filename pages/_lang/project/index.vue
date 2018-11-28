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
      title: this.$t('project.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container-project
{
  padding-bottom: 100px;
}
.title-page
{
    font-size: 44px;

    padding-top: 100px;
    padding-bottom: 100px;

    text-align: center;
    letter-spacing: 2px;

    color: #111111;
}
.description
{
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.8;
}
@media only screen and (max-width: 600px)
{
  .description
  {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }
}
</style>
