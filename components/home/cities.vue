<template>
  <v-layout row wrap>

    <title-section-component :title="$t('home.cities.title-section')"/>

    <v-flex lg12 xl8 offset-xl2>
      <v-layout row wrap>
        <v-flex lg12>
          <div class="cities-section">
            <div
              v-for="city in cities"
              :key="city.id"
              class=""
              style="width:100%;"
            >
              <router-link
                :to="$i18n.path(`search?city=${city}`)"
                target="_blank"
                style="text-decoration:none;"
              >
                <div class="city-name">
                  {{ city }}
                </div>
              </router-link>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>

    <button-section-component
      :route-path="$i18n.path('countries/all')"
      :button-title="$t('home.categories.search-button')"
    />

  </v-layout>
</template>

<script>
import TitleComponent from './title-section.vue';
import ButtonComponent from './button-section.vue';
import cities from '../../json/cities.json';

export default {
  components: {
    'title-section-component': TitleComponent,
    'button-section-component': ButtonComponent,
  },
  data() {
    return {
      cities: cities.cities,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home/cities/lg.scss';
  @import '../../assets/scss/home/cities/xs.scss';
</style>
