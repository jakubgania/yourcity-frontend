<template>
  <v-layout row wrap class="founder-container">
    <v-flex xs12 lg4 offset-lg4>
      <div
        class="title-page"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {{ this.$t('founder.title') }}
      </div>
    </v-flex>
    <v-flex xs12 lg4 offset-lg4 justify-center layout>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <v-avatar size="140" color="grey lighten-4">
          <img :src="profileImg" alt="Jakub Gania - profile image">
        </v-avatar>
      </div>
    </v-flex>
    <v-flex xs12 lg4 offset-lg4 style="text-align:center;">
      <div
        class="headline"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-once="true"
      >
        Jakub Gania
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <a href="https://jakubgania.io" rel="noreferrer" target="_blank" class="link">
          jakubgania.io
        </a>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import profileImg from '../../../assets/images/jakub-gania.jpg';

export default {
  scrollToTop: true,
  data() {
    return {
      profileImg,
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('founder.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('founder.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('founder.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/founder/founder.scss';
</style>
