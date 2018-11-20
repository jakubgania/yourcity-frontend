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
.container-cities
{
  background-color: #ffffff;
}
.select-country
{
  padding-top: 60px;
  padding-bottom: 60px;
  font-size: 34px;
  letter-spacing: 1px;
  border-bottom: 2px solid #f4f4f4;
}
.search-container
{
    max-width: 100%;
}
.top-image
{
    width: 100%;
    height: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.title-page-section
{
    font-size: 44px;

    padding-top: 100px;
    padding-bottom: 100px;

    text-align: center;
    letter-spacing: 2px;

    color: #ffffff;
}
.search-city-section
{
    margin-top: 0px;
    padding-bottom: 100px;
}
.search-city-input
{
    height: 60px;

    &.primary--text
    {
        color: #252bfc !important;
    }
}
.countries-section
{
    column-count: 4;
    column-width: 25%;
    background-color: #ffffff;
    padding-top: 80px;
    padding-bottom: 80px;
}
.country-item
{
    padding-bottom: 12px;
}
.country-name-link
{
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #b6b6b6;
    cursor: default;

    &:hover
    {
        color: #2d2d2d;
    }
}
</style>
