<template>
  <v-menu :nudge-width="140">
    <v-btn slot="activator" icon>
      <v-icon>more_vert</v-icon>
    </v-btn>

    <v-card class="card-menu">

      <v-list-tile class="title-header-menu">
        <v-list-tile-title class="text-title">
          <v-icon class="icon">translate</v-icon>
          {{ $t('header.dropdown-menu.title') }}
        </v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="link-section" @click="changeLanguage('pl')">
        <v-list-tile-title class="text-title">
          <v-icon class="icon">chevron_right</v-icon>
          Polski
        </v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="link-section" @click="changeLanguage('en')">
        <v-list-tile-title class="text-title">
          <v-icon class="icon">chevron_right</v-icon>
          English
        </v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="link-section" @click="changeLanguage('de')">
        <v-list-tile-title class="text-title">
          <v-icon class="icon">chevron_right</v-icon>
          Deutsch
        </v-list-tile-title>
      </v-list-tile>
    </v-card>

  </v-menu>
</template>

<script>
export default {
  methods: {
    changeLanguage(language) {
      const routeName = this.$route.name;

      if (routeName === 'index' && this.$i18n.locale !== language) {
        this.$router.push({ name: 'lang', params: { lang: language } });
        return;
      }

      if (routeName === 'lang' && this.$i18n.locale !== language) {
        this.$router.push({ name: 'lang', params: { lang: language } });
        return;
      }

      let route = '';

      if (this.$i18n.locale === 'pl') {
        route = `lang-${this.$route.name}`;
      } else {
        route = this.$route.name;
      }

      if (this.$i18n.locale !== 'pl' && language === 'pl') {
        this.$i18n.locale = 'pl';
        this.$router.push({ name: route, params: { lang: 'pl' } });
      } else if (this.$i18n.locale !== 'en' && language === 'en') {
        this.$i18n.locale = 'en';
        this.$router.push({ name: route, params: { lang: 'en' } });
      } else if (this.$i18n.locale !== 'de' && language === 'de') {
        this.$i18n.locale = 'de';
        this.$router.push({ name: route, params: { lang: 'de' } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/header/dropdown-menu.scss';
</style>
