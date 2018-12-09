<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="information-container">
    <div class="title-profile">
      {{ $t('example-profile.information.profile-title') }}
    </div>

    <div class="title-subsection">
      {{ $t('example-profile.information.basic-information') }}
    </div>

    <div class="subtitle">
      <v-icon class="icon">apps</v-icon>
      {{ $t('example-profile.information.category') }}
    </div>
    <div class="text margin-bottom">
      Informacje
    </div>

    <div class="subtitle">
      <v-icon class="icon">info_outline</v-icon>
      {{ $t('example-profile.information.description') }}
    </div>
    <div class="text margin-bottom">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>

    <div class="subtitle">
      <v-icon class="icon">gps_fixed</v-icon>
      {{ $t('example-profile.information.address') }}
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.country') }}
      </div>
      <div class="opening-hours">
        Niemcy
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.city') }}
      </div>
      <div class="opening-hours">
        Hamburg
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.street') }}
      </div>
      <div class="opening-hours">
        Einsiedeldeich
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.postal-code') }}
      </div>
      <div class="opening-hours">
        22-444
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">query_builder</v-icon>
      {{ $t('example-profile.information.opening-hours') }}
    </div>
    <div
      v-for="section in profileData.openingHours"
      :key="section.id"
      class="opening-hours-section"
    >
      <div class="day-of-week-name">
        {{ section.name }}
      </div>
      <div class="opening-hours">
        {{ section.openHour + ' - ' + section.closeHour }}
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">phone_android</v-icon>
      {{ $t('example-profile.information.contact') }}
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.phone') }}
      </div>
      <div class="opening-hours">
        123 234 523
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.website') }}
      </div>
      <div class="opening-hours">
        www.example-website.com
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        {{ $t('example-profile.information.e-mail') }}
      </div>
      <div class="opening-hours">
        example@email.io
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">bubble_chart</v-icon>
      {{ $t('example-profile.information.tags') }}
    </div>
    <div class="tags margin-bottom">
      <div v-for="tag in profileData.tags" :key="tag.id" class="tags-section">
        <router-link :to="setRouteParams(tag)" style="text-decoration:none;">
          <v-chip outline class="tag">
            {{ tag }}
          </v-chip>
        </router-link>
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">location_on</v-icon>
      {{ $t('example-profile.information.location') }}
    </div>
    <div class="map-section">
      <img :src="worldImage" alt="" class="map-image">
    </div>

    <div class="subtitle">
      <i class="material-icons icon">share</i>
      {{ $t('example-profile.information.other-media') }}
    </div>
    <div v-for="section in profileData.otherMedia" :key="section.id">
      <div class="other-media-section">
        <i :class=" section.icon + ' other-media-icon'"/>
        <div class="title-social">
          {{ section.title }}
        </div>
        <div class="value">
          {{ section.value }}
        </div>
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">phone_android</v-icon>
      {{ $t('example-profile.information.apps') }}
    </div>
    <div class="mobile-app-section">
      <div class="app-subsection">
        <img
          :src="appleLogo"
          class="mobile-app-marketplace-logo"
          alt="Apple marketplace logo"
        >
      </div>
      <div class="app-subsection">
        <img
          :src="googleLogo"
          class="mobile-app-marketplace-logo mrg"
          alt="Google marketplace logo"
        >
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">history</v-icon>
      {{ $t('example-profile.information.creation-date') }}
    </div>
    <div class="text margin-bottom">
      02.09.2018 11:43:08
    </div>

    <div class="subtitle">
      <v-icon class="icon">cached</v-icon>
      {{ $t('example-profile.information.last-update') }}
    </div>
    <div class="text margin-bottom">
      02.09.2018 11:44:28
    </div>

  </div>
</template>

<script>
import appleLogo from '../../../assets/images/apple-logo.png';
import googleLogo from '../../../assets/images/play-logo.png';
import worldImage from '../../../assets/images/world.png';

export default {
  name: 'ExampleProfileInformationPage',
  data() {
    return {
      appleLogo,
      googleLogo,
      worldImage,
      profileData: {
        openingHours: {
          monday: {
            name: 'Poniedzialek',
            openHour: '10:28',
            closeHour: '18:40',
            openingTime: '14',
          },
          tuesday: {
            name: 'Wtorek',
            openHour: '11:35',
            closeHour: '18:40',
            openingTime: '12',
          },
          wednesday: {
            name: 'Środa',
            openHour: '12:50',
            closeHour: '18:40',
            openingTime: '16',
          },
          thursday: {
            name: 'Czwartek',
            openHour: '13:40',
            closeHour: '18:40',
            openingTime: '8',
          },
          friday: {
            name: 'Piątek',
            openHour: '14:30',
            closeHour: '18:40',
            openingTime: '3',
          },
          saturday: {
            name: 'Sobota',
            openHour: '15:20',
            closeHour: '18:40',
            openingTime: '15',
          },
          sunday: {
            name: 'Niedziela',
            openHour: '16:10',
            closeHour: '18:40',
            openingTime: '18',
          },
        },
        otherMedia: {
          media1: {
            icon: 'icon-facebook',
            title: 'Facebook',
            value: 'www.facebook-example-page.com',
          },
          media2: {
            icon: 'icon-gplus',
            title: 'Google',
            value: 'www.google-example-page.com',
          },
          media3: {
            icon: 'icon-twitter',
            title: 'Twitter',
            value: 'www.twitter-example-page.com',
          },
          media4: {
            icon: 'icon-youtube',
            title: 'Youtube',
            value: 'www.youtube-example-page.com',
          },
          media5: {
            icon: 'icon-instagram',
            title: 'Instagram',
            value: 'www.instagram-example-page.com',
          },
          media6: {
            icon: 'icon-pinterest',
            title: 'Pinterest',
            value: 'www.pinterest-example-page.com',
          },
          media7: {
            icon: 'icon-snapchat-ghost',
            title: 'Snapchat',
            value: 'snapchat example nick',
          },
          media8: {
            icon: 'icon-linkedin',
            title: 'Linkedin',
            value: 'www.linkedin-example-page.com',
          },
        },
        tags: [
          'apteka',
          'restauracja',
          'jedzenie',
          'lotnisko',
          'bar',
          'sklep',
          'całodobowy',
          'finanse',
          'usługi',
          'usługi przewozowe',
          'wyprzedaż',
          'promocja',
          'zniżka',
          'galeria',
          'supermarket',
          'otwarcie',
          'siłownia',
          'sport',
          'wifi',
          'impreza',
        ],
      },
    };
  },
  methods: {
    setRouteParams(tag) {
      const tagValue = tag.replace(/\s/g, '+');

      return { name: 'SearchProfilesPage', query: { query: tagValue, city: '' } };
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('example-profile.information.page-subtitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('example-profile.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('example-profile.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/example-profile/index/index.scss';
@import './assets/scss/example-profile/index/xs.scss';
@import '../../../assets/fontello/css/fontello.css';
</style>
