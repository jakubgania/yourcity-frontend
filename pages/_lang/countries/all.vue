<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="container-cities">

    <v-flex xs12 lg12 class="search-container">
      <div
        :style="{'background-image': 'url(' + nightImage + ')'}"
        class="top-image"
      >
        <v-layout row wrap>
          <v-flex xs12 lg12>
            <div class="title-page-section">
              {{ $t('countries.title') }}
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>

    <v-flex xs12 lg10 offset-lg1 class="select-country">
      {{ $t('countries.select_country') }}
    </v-flex>

    <v-flex xs12 lg10 offset-lg1>
      <div class="countries-section">
        <div
          v-for="(country) in countriesItems"
          :key="country.id"
          class="country-item"
        >
          <nuxt-link
            :to="$i18n.path(`country/${country.country_value}`)"
            class="country-name-link"
          >
            {{ country.country_name }}
          </nuxt-link>
        </div>
      </div>
    </v-flex>

  </v-layout>
</template>

<script>
import axios from 'axios';
import nightImage from '../../../assets/images/night-dortmund.jpg';

export default {
  async asyncData({ error }) {
    try {
      const { data } = await axios.get('https://api.yourcity.io/api/countries');
      return { countriesItems: data };
    } catch (e) {
      return error({ statusCode: 404, message: 'Network connection error.' });
    }
  },
  data() {
    return {
      nightImage,
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('countries.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('countries.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('countries.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/countries/countries.scss';
</style>
