<template>
  <v-flex
    xs12
    lg12
    class=""
  >
    <v-parallax
      :src="topImage"
      :height="imageHeight"
      alt="Wrocław at night from the Sky Tower"
    >
      <v-layout
        row
        wrap
      >
        <v-flex lg12>
          <div class="word-changer-section">
            {{ wordChanger }}
          </div>
        </v-flex>
      </v-layout>

      <div class="search-form-section">
        <form @submit.prevent="submitSearchForm">
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              sm5
              md5
              offset-md1
              lg4
              offset-lg2
            >
              <v-combobox
                solo
                clearable
                autocomplete="off"
                spellcheck="false"
                prepend-inner-icon="search"
                placeholder="Czego szukasz ?"
                class="input-combobox"
              />
            </v-flex>
            <v-flex
              xs12
              sm4
              md3
              lg2
            >
              <v-combobox
                solo
                clearable
                autocomplete="off"
                spellcheck="false"
                prepend-inner-icon="location_on"
                placeholder="Lokalizacja"
                class="input-combobox"
              >
                <!--  -->
              </v-combobox>
            </v-flex>
            <v-flex
              xs12
              sm3
              md2
              lg2
            >
              <button
                type="submit"
                class="submit-button"
              >
                szukaj
                <v-icon class="icon">keyboard_arrow_right</v-icon>
              </button>
            </v-flex>
          </v-layout>
        </form>
      </div>

    </v-parallax>
  </v-flex>
</template>

<script>
import topImage from '../../assets/images/sky-tower-16.jpg';

export default {
  data() {
    return {
      topImage,
      counter: 0,
      topWords: [
        'klub',
        'obiad',
        'rynek',
        'impreza',
        'jedznie',
        'piwo',
        'sklep',
        'muzyka',
        'basen',
        'kino',
        'apteka',
      ],
    };
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '540';
        // case 'sm': return '400'
        // case 'md': return '500'
        case 'lg': return '680';
        // case 'xl': return '800'
        default: return '800';
      }
    },
    wordChanger() {
      if (this.counter === this.topWords.length) {
        // this.counter = 0;
        this.resetCounter();
        // return this.topWords[0];
      }

      return this.topWords[this.counter];
    },
  },
  watch: {
  //
  },
  mounted() {
    setInterval(() => {
      this.counter += 1;
    }, 1800);
  },
  methods: {
    resetCounter() {
      this.counter = 0;
    },
    submitSearchForm() {
      //
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/home/search/lg.scss';
</style>
