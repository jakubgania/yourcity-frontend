<template>
  <v-flex xs12 lg12>
    <v-parallax
      :src="topImage"
      :height="imageHeight"
      alt="Wrocław at night from the Sky Tower"
    >
      <v-layout row wrap>
        <v-flex lg12>
          <div class="word-changer-section">
            <transition name="fade">
              <p v-if="show">{{ wordChanger }}</p>
            </transition>
          </div>
        </v-flex>
      </v-layout>

      <div class="search-form-section">
        <v-form @submit.prevent="submitSearchForm">
          <v-layout row wrap>
            <v-flex xs12 sm5 md5 offset-md1 lg4 offset-lg2 xl3 offset-xl3>
              <v-combobox
                v-model="queryModel"
                :items="queryItems"
                :search-input.sync="queryInputSync"
                :placeholder="$t('home.search_section.search_form.input_query_placeholder')"
                solo
                clearable
                autocomplete="off"
                spellcheck="false"
                prepend-inner-icon="search"
                class="input-combobox"
              />
            </v-flex>
            <v-flex xs12 sm4 md3 lg2 xl2>
              <v-combobox
                v-model="cityModel"
                :items="cityItems"
                :search-input.sync="cityInputSync"
                :placeholder="$t('home.search_section.search_form.input_city_placeholder')"
                item-text="name"
                item-value="name"
                return-object
                solo
                clearable
                autocomplete="off"
                spellcheck="false"
                prepend-inner-icon="location_on"
                class="input-combobox"
              >
                <!-- <autocomplete-list-component
                  :city-items="cityItems"
                /> -->
                <template
                  slot="item"
                  slot-scope="cityItems"
                >
                  {{ cityItems.item.name }}
                </template>
                <template
                  slot="item"
                  slot-scope="cityItems"
                >
                  <template v-if="cityItems.item.value">
                    <v-list-tile-content @click="getCurrentLocation()">
                      <v-list-tile-title>
                        Użyj obecnej lokalizacji
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </template>
                  <template v-else>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="cityItems.item"/>
                    </v-list-tile-content>
                  </template>
                </template>
              </v-combobox>
            </v-flex>
            <v-flex xs12 sm3 md2 lg2 xl1>
              <button
                type="submit"
                class="submit-button"
              >
                {{ $t('home.search_section.search_form.submit_button') }}
                <v-icon class="icon">keyboard_arrow_right</v-icon>
              </button>
            </v-flex>
          </v-layout>
        </v-form>
      </div>

    </v-parallax>
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import topImage from '../../assets/images/sky-tower-16.jpg';
import AutocompleteListComponent from '../autocomplete-list.vue';

export default {
  components: {
    'autocomplete-list-component': AutocompleteListComponent,
  },
  data() {
    return {
      topImage,
      counter: 0,
      show: false,
      topWords: this.$t('home.search_section.top_words'),
      cityInputSync: null,
      queryInputSync: null,
    };
  },
  computed: {
    ...mapGetters('searchProfiles', [
      'city',
      'query',
    ]),
    ...mapGetters('autocomplete', [
      'queryItems',
      'cityItems',
    ]),
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '540';
        case 'sm': return '600';
        case 'md': return '640';
        case 'lg': return '680';
        case 'xl': return '800';
        default: return '800';
      }
    },
    wordChanger() {
      if (this.counter > this.topWords.length) {
        this.resetCounter();
      }

      return this.topWords[this.counter];
    },
    queryModel: {
      get() {
        return this.$store.state.searchProfiles.query;
      },
      set(value) {
        this.$store.dispatch('searchProfiles/queryUpdate', value);
      },
    },
    cityModel: {
      get() {
        return this.$store.state.searchProfiles.city;
      },
      set(value) {
        this.$store.dispatch('searchProfiles/cityUpdate', value);
      },
    },
  },
  watch: {
    cityInputSync(value) {
      if (value && value !== this.cityModel) {
        this.$store.dispatch('autocomplete/autocompleteCity', value);
      }

      if (value != null) {
        this.cityModel = value;
      }
    },
    queryInputSync(value) {
      if (value && value !== this.queryModel) {
        this.$store.dispatch('autocomplete/autocompleteQuery', value);
      }

      if (value != null) {
        this.queryModel = value;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.show = !this.show;
      if (this.show) {
        this.counter += 1;
      }
    }, 2000);
  },
  methods: {
    ...mapActions('autocomplete', [
      'autocompleteQuery',
      'autocompleteCity',
    ]),
    resetCounter() {
      this.counter = 0;
    },
    submitSearchForm() {
      this.$router.push({
        path: `${this.checkLanguage()}/search`,
        query: {
          query: this.query,
          city: this.city,
        },
      });
    },
    checkLanguage() {
      if (this.$i18n.locale !== 'en') {
        return `/${this.$i18n.locale}`;
      }

      return '';
    },
    getCurrentLocation() {
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/scss/home/search/search.scss';
  @import '../../assets/scss/home/search/lg.scss';
  @import '../../assets/scss/home/search/sm.scss';
  @import '../../assets/scss/home/search/xs.scss';
</style>
