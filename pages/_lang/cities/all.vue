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
              Miasta
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>

    <v-flex xs12 lg10 offset-lg1 class="select-country">
      {{ $t('cities.select_city') }}
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
  asyncData({ error }) {
    return axios.get('/api/countries')
      // eslint-disable-next-line
      .then((response) => {
        return { countriesItems: response.data };
      })
      .catch(() => {
        error({ statusCode: 404, message: 'Post not found' });
      });
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
      title: this.$t('cities.head.title'),
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
@import './assets/scss/cities/cities.scss';
</style>
