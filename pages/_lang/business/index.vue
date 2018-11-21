<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap>
    <top-image-component/>

    <v-layout row wrap class="about-description">
      <v-flex lg6 offset-lg3>
        <div class="example-profile-description" style="font-weight:700;text-align:center;">
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
      title: this.$t('business.head.title'),
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
.image-section
{
    width: 100%;
    height: auto;
}
.about-description
{
  background-color: #ffffff;
  margin-top: 140px;
}
.example-profile-description
{
    letter-spacing: 1px;
    font-size: 16px;
    margin-bottom: 60px;
}
</style>
