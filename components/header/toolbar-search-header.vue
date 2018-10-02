<template>
  <v-toolbar
    v-if="displaySearchHeader()"
    color="white"
    app
    height="64"
    absolute
    clipped-left
    class="toolbar-search-header"
  >
    <v-toolbar-side-icon @click.stop="drawerFlag = !drawerFlag"/>

    logo

    <form
      class="search-form"
      @submit.prevent="submitSearchForm()"
    >
      <v-layout
        row
        wrap
      >
        <v-flex lg5>
          <div class="query-input">
            <v-combobox
              solo
              clearable
              autocomplete="off"
              spellcheck="false"
              prepend-inner-icon="search"
              placeholder="text"
              class="combobox-input"
            />
          </div>
        </v-flex>
        <v-flex lg4>
          <div class="query-input">
            <v-combobox
              solo
              clearable
              autocomplete="off"
              spellcheck="false"
              prepend-inner-icon="location_on"
              placeholder="text"
              class="combobox-input"
            />
          </div>
        </v-flex>
        <v-flex lg3>
          <button
            type="submit"
            class="submit-search-form-btn"
          >
            szukaj
            <v-icon class="btn-icon">keyboard_arrow_right</v-icon>
          </button>
        </v-flex>
      </v-layout>
    </form>

    <v-spacer/>

    <v-btn
      class="hidden-md-only hidden-lg-only"
    >
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      //
    };
  },
  computed: {
    drawerFlag: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value);
      },
    },
  },
  watch: {
    //
  },
  methods: {
    displaySearchHeader() {
      return this.$route.name === 'lang-search' || this.$route.name === 'search';
    },
    submitSearchForm() {
      // this.$emit('submitSearchForm');
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/header/toolbar-search-header.scss';
</style>
