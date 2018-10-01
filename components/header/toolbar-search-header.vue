<template>
  <v-toolbar
    color="white"
    app
    height="64"
    absolute
    clipped-left
    class="toolbar-search-header"
  >
    <v-toolbar-side-icon/>

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
            search button
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
  data() {
    return {
      //
    };
  },
  computed: {
    //
  },
  watch: {
    //
  },
  methods: {
    submitSearchForm() {
      //
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/header/toolbar-search-header.scss';
</style>
