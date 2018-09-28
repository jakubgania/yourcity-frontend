<template>
  <v-toolbar
    v-if="displayHeader()"
    color="white"
    app
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

  </v-toolbar>
</template>

<script>
export default {
  component: {
  //
  },
  data() {
  //
  },
  watch: {
    // drawer(value) {
    //   !value && this.$emit('closeNavigationDrawer');
    // },
  },
  methods: {
    displayHeader() {
      return this.$route.name !== 'lang-search';
    },
    displayLogoBusinessName() {
      return this.$route.name === 'lang-business' || this.$route.name === 'business';
    },
    switchNavigationDrawer() {
      // this.$emit('switchNavigationDrawer');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/header/toolbar-header.scss';
</style>
