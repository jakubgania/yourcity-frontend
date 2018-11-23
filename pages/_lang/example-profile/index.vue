<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="information-container">
    <div class="title-profile">
      Example profile on YOURCITY platform
    </div>

    <div class="title-subsection">
      Informacje podstawowe
    </div>

    <div class="subtitle">
      <v-icon class="icon">apps</v-icon>
      Kategoria
    </div>
    <div class="text">
      Informacje
    </div>

    <div class="subtitle">
      <v-icon class="icon">info_outline</v-icon>
      Opis
    </div>
    <div class="text">
      Wystarczy do tego już RTX 2080. Podczas GTC 2018 w Japonii zieloni
      przedstawili nowe dane na temat wydajności swoich kart graficznych z rodziny
      Turing. Przedsiębiorstwo zapewnia, że wraz z premierą GeForce’ów RTX wkroczymy
      w erę grania w rozdzielczości 4K przy 60 kl./s. Dzięki dodatkowym usprawnieniom
      w postaci DLSS mamy spodziewać się znaczącego wzrostu wydajności.
    </div>

    <div class="subtitle">
      <v-icon class="icon">gps_fixed</v-icon>
      Adres
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        Kraj
      </div>
      <div class="opening-hours">
        Niemcy
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        Miasto
      </div>
      <div class="opening-hours">
        Dortmund
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        Ulica
      </div>
      <div class="opening-hours">
        Vxdrty
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        Kod pocztowy
      </div>
      <div class="opening-hours">
        22-444
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">query_builder</v-icon>
      Gdziny otwarcia
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
      Kontakt
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        Telefon
      </div>
      <div class="opening-hours">
        343 672 917
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        Strona
      </div>
      <div class="opening-hours">
        www.xdwedsapxo.com
      </div>
    </div>
    <div class="opening-hours-section">
      <div class="day-of-week-name">
        E-mail
      </div>
      <div class="opening-hours">
        contact@yourcity.io
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">bubble_chart</v-icon>
      Tagi
    </div>
    <div class="">
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
      Lokalizacja
    </div>
    <div class="map-section">
      <img :src="worldImage" alt="" class="map-image">
    </div>

    <div class="subtitle">
      <i class="material-icons icon">share</i>
      Inne media
    </div>
    <div v-for="section in profileData.otherMedia" :key="section.id">
      <div class="other-media-section">
        <i :class=" section.icon + ' other-media-icon'"/>
        <div class="text" style="display: inline-block;width:140px;">
          {{ section.title }}
        </div>
        <div class="text" style="display: inline-block;">
          {{ section.value }}
        </div>
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">phone_android</v-icon>
      Aplikacje
    </div>
    <div class="mobile-app-section">
      <div class="app-subsection">
        <img :src="appleLogo" class="mobile-app-marketplace-logo" alt="">
      </div>
      <div class="app-subsection">
        <img :src="googleLogo" class="mobile-app-marketplace-logo mrg" alt="">
      </div>
    </div>

    <div class="subtitle">
      <v-icon class="icon">history</v-icon>
      Data utworzenia
    </div>
    <div class="text">
      02.09.2018 11:43:08
    </div>

    <div class="subtitle">
      <v-icon class="icon">cached</v-icon>
      Ostatnia aktualizacja
    </div>
    <div class="text">
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
          'one tag',
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
      title: this.$t('example-profile.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title-profile
{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    padding-bottom: 20px;
    border-bottom: 2px solid #000000;
}
.title-subsection
{
    font-size: 20px;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
}
.subtitle
{
    font-size: 18px;
    font-weight: 700;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-top: 14px;
    border-top: 1px solid #f2f2f2;
    letter-spacing: 1px;

    .icon
    {
        position: relative;
        top: 2px;
        margin-right: 14px;
        color: #393939;
    }
}
.text
{
    line-height: 1.6;
    font-size: 16px;
}
.opening-hours-section
{
    padding-bottom: 4px;
    font-size: 16px;

    .day-of-week-name
    {
        width: 140px;
        display: inline-block;
    }

    .opening-hours
    {
        width: 140px;
        display: inline-block;
        letter-spacing: 1px;
    }
}
.tags-section
{
    display: inline;
}
.tag
{
    height: 48px;
    letter-spacing: 1px;
    padding: 4px;

    &:hover
    {
        border-color: #ffaa06;
        color: #000000;
    }
}
.map-section
{
    margin-top: 24px;
    margin-bottom: 24px;
}
.map-image
{
    width: 100%;
}
.other-media-section
{
    letter-spacing: 1px;
    padding-bottom: 4px;
}

$icon-color-facebook: #3b5999;
$icon-color-google-plus: #dd4b39;
$icon-color-twitter: #55acee;
$icon-color-youtube: #cd201f;
$icon-color-instagram: #e4405f;
$icon-color-pinterest: #3b5999;
$icon-color-snapchat: #FFFC00;
$icon-color-linkedin: #0077B5;

.other-media-section:hover
{
    .icon-facebook
    {
        color: $icon-color-facebook;
    }

    .icon-gplus
    {
        color: $icon-color-google-plus;
    }

    .icon-twitter
    {
        color: $icon-color-twitter;
    }
    .icon-youtube
    {
        color: $icon-color-youtube;
    }
    .icon-instagram
    {
        color: $icon-color-instagram;
    }
    .icon-pinterest
    {
        color: $icon-color-pinterest;
    }
    .icon-snapchat-ghost
    {
        color: $icon-color-snapchat;
    }
    .icon-linkedin
    {
        color: $icon-color-linkedin;
    }
}
.other-media-icon
{
    margin-left: -2px;
    margin-right: 10px;
    font-size: 22px;
}
.mobile-app-section
{
    margin-top: 20px;
    margin-bottom: 20px;

    .app-subsection
    {
        display: inline;
    }

    .mrg
    {
        margin-left: 20px;
    }
}
.mobile-app-marketplace-logo
{
    width: 30%;
}

@import '../../../assets/fontello/css/fontello.css';
</style>
