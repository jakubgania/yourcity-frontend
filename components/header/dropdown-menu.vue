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

    <!-- <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-title
          class="list"
          @click="menu(item.action)"
        >
          <v-icon style="margin-right:14px;">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list> -->

    <!-- <v-list>
      <v-list-tile class="link-section">
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          :to="`/pl` + $route.fullPath.replace(/^\/[^\/]+/, '')"
          class="link"
        >
          <v-icon style="margin-right:14px;">translate</v-icon>
          {{ $t('header.dropdown_menu.language') }}
        </nuxt-link>
        <nuxt-link
          v-if="$i18n.locale === 'pl'"
          :to="`/en` + $route.fullPath"
          class="link"
        >
          <v-icon style="margin-right:14px;">translate</v-icon>
          {{ $t('header.dropdown_menu.language') }}
        </nuxt-link>
      </v-list-tile>
    </v-list> -->

    <!-- <v-card>
      <v-list-tile class="link-section">
        <v-list-tile-title>
          <nuxt-link
            v-if="$i18n.locale === 'en'"
            :to="`/pl` + $route.fullPath.replace(/^\/[^\/]+/, '')"
            class="link"
          >
            <v-icon style="margin-right:14px;">translate</v-icon>
            {{ $t('header.dropdown_menu.language') }}
          </nuxt-link>
        </v-list-tile-title>
        <v-list-tile-title>
          <nuxt-link
            v-if="$i18n.locale === 'pl'"
            :to="`/en` + $route.fullPath"
            class="link"
          >
            <v-icon style="margin-right:14px;">translate</v-icon>
            {{ $t('header.dropdown_menu.language') }}
          </nuxt-link>
        </v-list-tile-title>
      </v-list-tile>
    </v-card> -->
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

    <!-- <v-card>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>Enable messages</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-title>Enable hints</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-card> -->

  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; // eslint-disable-line

export default {
  methods: {
    changeLanguage(language) {
      console.log(this.$route); // eslint-disable-line

      const routeName = this.$route.name;

      if (routeName === 'index' && this.$i18n.locale !== language) {
        // console.log('1'); // eslint-disable-line
        this.$router.push({ name: 'lang', params: { lang: language } });
        return;
      }

      if (routeName === 'lang' && this.$i18n.locale !== language) {
        // console.log('2'); // eslint-disable-line
        this.$router.push({ name: 'lang', params: { lang: language } });
        return;
      }

      // const yp = language;
      // console.log(this.$route.name); // eslint-disable-line
      // console.log(language); // eslint-disable-line

      let routeNameTest = '';

      if (this.$i18n.locale === 'pl') {
        routeNameTest = `lang-${this.$route.name}`;
      } else {
        routeNameTest = this.$route.name;
      }
      //
      // // console.log(this.$route.name);  // eslint-disable-line
      //
      // if (this.$route.name === 'index' || this.$route.name === 'lang') {
      //   // console.log('1'); // eslint-disable-line
      //   if (this.$i18n.locale === 'pl') {
      //     routeName = 'index';
      //   } else {
      //     routeName = 'lang';
      //   }
      //   this.$i18n.locale = language;
      //   this.$router.push({ name: routeName, params: { lang: language } });
      if (this.$i18n.locale !== 'pl' && language === 'pl') {
        // this.$store.commit('setLanguage', 'pl');
        this.$i18n.locale = 'pl';
        this.$router.push({ name: routeNameTest, params: { lang: 'pl' } });
      } else if (this.$i18n.locale !== 'en' && language === 'en') {
        this.$i18n.locale = 'en';
        this.$router.push({ name: routeNameTest, params: { lang: 'en' } });
        // this.$router.push(`/en${this.$route.fullPath}`); // eslint-disable-line
        // console.log(this.$route.fullPath); // eslint-disable-line
      } else if (this.$i18n.locale !== 'de' && language === 'de') {
        // console.log('4'); // eslint-disable-line
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
