<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1 lg11 offset-lg1 xl2 offset-xl3>
      <div
        class="title-section"
        data-aos="fade-right"
        data-aos-delay="240"
        data-aos-once="true"
      >
        {{ $t('home.cities.title_section') }}
      </div>
    </v-flex>
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
    <v-flex xs10 offset-xs1 sm8 offset-sm2 lg4 offset-lg4 xl2 offset-xl5>
      <router-link :to="$i18n.path('countries/all')" class="link-section">
        <v-btn
          block
          large
          depressed
          class="more-cities-button"
          data-aos="fade-right"
          data-aos-delay="240"
          data-aos-once="true"
        >
          {{ $t('home.cities.search_button') }}
          <v-icon right dark>
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import cities from '../../json/cities.json';

export default {
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
