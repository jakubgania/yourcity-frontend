<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="founder-container">
    <v-flex xs12 lg4 offset-lg4>
      <div
        class="title-page"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-once="true"
      >
        O twórcy
      </div>
    </v-flex>
    <v-flex lg4 offset-lg4 style="text-align:center;">
      <v-avatar
        size="220"
        color="grey lighten-4"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <img :src="profileImg" alt="Jakub Gania - profile image">
      </v-avatar>
    </v-flex>
    <v-flex lg4 offset-lg4 style="text-align:center;">
      <div
        class="headline"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-once="true"
      >
        Jakub Gania
      </div>
      <div
        class=""
        style="margin-top:20px;"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <a href="https://jakubgania.io" target="_blank" class="link">
          jakubgania.io
        </a>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import profileImg from '../../../assets/images/jakub-gania.jpg';

export default {
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
.founder-container
{
  min-height: calc(100vh - 64px);
  height: auto;
  background-color: #ffffff;
}
.title-page
{
    font-size: 44px;

    padding-top: 100px;
    // padding-bottom: 100px;

    text-align: center;
    letter-spacing: 2px;

    color: #111111;
}
.link
{
  text-decoration: none;
  letter-spacing: 2px;
}
</style>
