<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap style="overflow-x: hidden;">
    <v-flex xs12 lg12>
      <search-component/>

      <information-component/>

      <div
        :style="{'background-image': 'url(' + seeImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image"
      />

      <categories-component/>

      <div
        :style="{'background-image': 'url(' + galleryImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image"
      />

      <tags-component/>

      <div
        :style="{'background-image': 'url(' + bridgeImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image"
      />

      <gallery-component/>

      <div
        :style="{'background-image': 'url(' + wroImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image"
      />

      <cities-component/>

      <div
        :style="{'background-image': 'url(' + schoolImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image"
      />

      <business-component/>

      <map-component/>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchComponent from '../../components/home/search.vue';
import InformationComponent from '../../components/home/information.vue';
import CategoriesComponent from '../../components/home/categories.vue';
import TagsComponent from '../../components/home/tags.vue';
import GalleryComponent from '../../components/home/gallery.vue';
import CitiesComponent from '../../components/home/cities.vue';
import BusinessComponent from '../../components/home/business.vue';
import MapComponent from '../../components/home/map.vue';
import seeImage from '../../assets/images/see.jpg';
import galleryImage from '../../assets/images/gallery.jpg';
import bridgeImage from '../../assets/images/bridge.jpg';
import wroImage from '../../assets/images/wro.jpg';
import schoolImage from '../../assets/images/school.jpg';

export default {
  components: {
    'search-component': SearchComponent,
    'information-component': InformationComponent,
    'categories-component': CategoriesComponent,
    'tags-component': TagsComponent,
    'gallery-component': GalleryComponent,
    'cities-component': CitiesComponent,
    'business-component': BusinessComponent,
    'map-component': MapComponent,
  },
  data() {
    return {
      seeImage,
      galleryImage,
      bridgeImage,
      wroImage,
      schoolImage,
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('home.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('home.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image
{
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media only screen and (min-width: 1904px)
{
  .image
  {
    height: 800px;
  }
}
</style>
