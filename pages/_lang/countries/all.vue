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

    <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2 class="select-country">
      {{ $t('countries.select_country') }}
    </v-flex>

    <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2>
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

    <v-flex xs12 lg10 offset-lg1 class="loader-section">
      <v-progress-circular
        v-if="showLoader"
        :size="50"
        indeterminate
        style="color:#252bfc;"
      />
    </v-flex>

  </v-layout>
</template>

<script>
import axios from 'axios';
import nightImage from '../../../assets/images/night-dortmund.jpg';

export default {
  data() {
    return {
      nightImage,
      countriesItems: false,
      showLoader: false,
    };
  },
  created() {
    this.showLoader = true;

    axios.get('/api/countries')
      .then((response) => {
        this.countriesItems = response.data;
        this.showLoader = false;
      })
      .catch(() => {
        this.showLoader = false;
      });
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
  @import './assets/scss/countries/xs.scss';
</style>
