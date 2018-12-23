<template>
  <v-layout row wrap class="agreements-container">
    <v-flex xs12 lg4 offset-lg4 xl4 offset-xl4>
      <div class="title-page">
        {{ $t('agreements.title') }}
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
      xl4
      offset-xl4
      class="description"
    >
      {{ $t('agreements.app') }}
    </v-flex>
    <v-flex
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg4
      offset-lg4
      xl4
      offset-xl4
      class="description"
    >
      {{ $t('agreements.user') }}
    </v-flex>

    <v-flex
      v-for="(rule, index) in rules"
      :key="rule.id"
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg4
      offset-lg4
      xl4
      offset-xl4
      class="description"
    >
      <div v-html="index + 1 + '. ' + rule.message"/>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      rules: this.$t('agreements.rules'),
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('agreements.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('agreements.head.content'),
        },
        {
          name: 'keywords',
          content: this.$t('agreements.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/agreements/agreements.scss';
</style>
