<template>
  <v-menu :nudge-width="140">
    <v-btn
      slot="activator"
      icon
    >
      <v-icon>more_vert</v-icon>
    </v-btn>

    <v-card style="border-radius:0px;">

      <v-list-tile style="cursor:default;background-color:#d4d4d4;">
        <v-list-tile-title class="text-title">
          <v-icon style="font-size:18px;margin-right:14px;">translate</v-icon>
          {{ $t('header.dropdown_menu.title') }}
        </v-list-tile-title>
      </v-list-tile>

      <v-list-tile
        class="link-section"
        @click="changeLanguage('pl')"
      >
        <v-list-tile-title class="text-title">
          <v-icon style="font-size:16px;margin-right:14px;">chevron_right</v-icon>
          Polski
        </v-list-tile-title>
      </v-list-tile>

      <v-list-tile
        class="link-section"
        @click="changeLanguage('en')"
      >
        <v-list-tile-title class="text-title">
          <v-icon style="font-size:16px;margin-right:14px;">chevron_right</v-icon>
          English
        </v-list-tile-title>
      </v-list-tile>

      <v-list-tile
        class="link-section"
        @click="changeLanguage('de')"
      >
        <v-list-tile-title class="text-title">
          <v-icon style="font-size:16px;margin-right:14px;">chevron_right</v-icon>
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

      let routeNameTest = '';

      if (this.$i18n.locale === 'pl') {
        routeNameTest = `lang-${this.$route.name}`;
      } else {
        routeNameTest = this.$route.name;
      }

      if (this.$i18n.locale !== 'pl' && language === 'pl') {
        this.$i18n.locale = 'pl';
        this.$router.push({ name: routeNameTest, params: { lang: 'pl' } });
      } else if (this.$i18n.locale !== 'en' && language === 'en') {
        this.$i18n.locale = 'en';
        this.$router.push({ name: routeNameTest, params: { lang: 'en' } });
      } else if (this.$i18n.locale !== 'de' && language === 'de') {
        this.$i18n.locale = 'de';
        this.$router.push({ name: routeNameTest, params: { lang: 'de' } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-menu__content
{
  position: fixed!important;
  top: 54px!important;
  right: 20px!important;
  left: unset!important;
}
.text-title
{
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}
.list
{
  cursor: default;
  letter-spacing: 1px;
}
.link-section:hover
{
  background-color: #f4efef;
}
.link
{
  width: 100%;
  background-color: red;
  text-decoration: none;
  letter-spacing: 1px;
}
</style>
