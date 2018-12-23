<template>
  <v-layout row wrap>

    <top-image-component/>

    <v-layout row wrap class="about-description">
      <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg4 offset-lg4 xl4 offset-xl4>
        <div class="example-profile-description">
          YOURCITY ma pomagać ludziom odnaleźć interesujące ich informacje w danym mieście.
          Ma być przydatnym narzędziem kiedy ktoś szuka konkretnego miejsca, jakieś usługi
          albo siedziby Twojej firmy. YOURCITY to wysoka jakość informacji.
        </div>
      </v-flex>
    </v-layout>

    <scheme-component/>

    <references-component/>

    <who-can-advertise-component/>

    <profile-components-descriptions-component/>

    <references-component/>

    <categories-component/>

    <references-component/>

    <v-flex lg12>
      <img :src="fromSkyTowerImage" alt="" class="image-section">
    </v-flex>

    <partners-component/>

  </v-layout>
</template>

<script>
import TopImageComponent from '../../../components/business/top-image.vue';
import SchemeComponent from '../../../components/business/scheme.vue';
import ReferencesComponent from '../../../components/business/references.vue';
import WhoCanAdvertiseComponent from '../../../components/business/who-can-advertise.vue';
import ProfileComponentsDescriptionsComponent from '../../../components/business/profile-components-descriptions.vue';
import CategoriesComponent from '../../../components/business/categories.vue';
import PartnersComponent from '../../../components/business/partners.vue';
import fromSkyTowerImage from '../../../assets/images/from-sky-tower.jpg';

export default {
  scrollToTop: true,
  components: {
    'top-image-component': TopImageComponent,
    'scheme-component': SchemeComponent,
    'references-component': ReferencesComponent,
    'who-can-advertise-component': WhoCanAdvertiseComponent,
    'profile-components-descriptions-component': ProfileComponentsDescriptionsComponent,
    'categories-component': CategoriesComponent,
    'partners-component': PartnersComponent,
  },
  data() {
    return {
      fromSkyTowerImage,
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('business.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('business.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('business.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/business/business.scss';
</style>
