<template>
  <v-menu
    :nudge-width="140"
    nudge-top="-38"
    nudge-right="14"
    absolute
  >
    <v-btn
      slot="activator"
      icon
    >
      <v-icon>more_vert</v-icon>
    </v-btn>

    <v-card>
      <v-list-tile
        class="link-section"
      >
        <v-list-tile-title>
          <v-icon style="margin-right:14px;">translate</v-icon>
          Języki
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile
        class="link-section"
        @click="changeLanguage('pl')"
      >
        <v-list-tile-title>
          <v-icon style="margin-right:14px;">chevron_right</v-icon>
          Polski
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile
        class="link-section"
        @click="changeLanguage('en')"
      >
        <v-list-tile-title>
          <v-icon style="margin-right:14px;">chevron_right</v-icon>
          Angielski
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile
        class="link-section"
        @click="changeLanguage('de')"
      >
        <v-list-tile-title>
          <v-icon style="margin-right:14px;">chevron_right</v-icon>
          Niemiecki
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
.list
{
  cursor: default;
  letter-spacing: 1px;
  // padding-left: 10px;
  padding-right: 10px;
}
.link-section:hover
{
  background-color: #e6e6e6;
}
.link
{
  width: 100%;
  background-color: red;
  text-decoration: none;
  letter-spacing: 1px;
}
</style>
