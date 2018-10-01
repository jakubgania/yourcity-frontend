<template>
  <v-toolbar
    v-if="displayHeader()"
    color="white"
    app
    height="64"
    absolute
    clipped-left
    class="toolbar-header"
  >
    <v-toolbar-side-icon @click.native="switchNavigationDrawer()"/>

    <div class="">
      l o g o
    </div>

    <div
      v-if="displayLogoBusinessName()"
      class="business-logo-text"
    >
      for business
    </div>

    <v-spacer/>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
export default {
  component: {
  //
  },
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
  watch: {
    drawer(value) {
      // !value && this.$emit('closeNavigationDrawer');
      if (!value) {
        this.$emit('closeNavigationDrawer');
      }
    },
  },
  methods: {
    displayHeader() {
      return this.$route.name !== 'lang-search' || this.route.name === 'search';
    },
    displayLogoBusinessName() {
      return this.$route.name === 'lang-business' || this.$route.name === 'business';
    },
    switchNavigationDrawer() {
      this.$emit('switchNavigationDrawer');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/header/toolbar-header.scss';
</style>
