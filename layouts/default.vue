<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-app>

    <header-component/>

    <v-content style="padding-top:64px;">
      <v-container
        fluid
        class="container"
      >
        <nuxt/>
      </v-container>
    </v-content>

    <div v-if="displayFooter()">
      <footer-component/>
    </div>

    <no-ssr>
      <portal-rules-alert-component/>
    </no-ssr>

  </v-app>
</template>

<script>
import HeaderComponent from '../components/header/header.vue';
import FooterComponent from '../components/footer.vue';
import PortalRulesAlertComponent from '../components/portal-rules-alert.vue';

export default {
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'portal-rules-alert-component': PortalRulesAlertComponent,
  },
  methods: {
    displayFooter() {
      if (this.$route.name === 'lang-search' || this.$route.name === 'search') {
        return false;
      }

      return true;
    },
  },
};
</script>

<style lang="scss">
  @import './assets/scss/layouts/default.scss';
</style>
