<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap style="overflow-x: hidden;">
    <v-flex xs12 lg12>
      <search-component/>

      <information-component/>

      <!-- <img
        :src="seeImage"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image2"
      > -->
      <div
        :src="seeImage"
        :style="{'background-image': 'url(' + seeImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image2"
      />

      <categories-component/>

      <!-- <img
        :src="galleryImage"
        alt="Thier-Galerie Dortmund"
        class="image2"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      > -->
      <div
        :src="galleryImage"
        :style="{'background-image': 'url(' + galleryImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image2"
      />

      <tags-component/>

      <!-- <img
        :src="bridgeImage"
        alt="Rędziński Bridge Wrocław"
        class="image2"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      > -->
      <div
        :src="bridgeImage"
        :style="{'background-image': 'url(' + bridgeImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image2"
      />

      <gallery-component/>

      <!-- <img
        :src="wroImage"
        alt="Gallery Wroclavia Wrocław"
        class="image2"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      > -->
      <div
        :src="wroImage"
        :style="{'background-image': 'url(' + wroImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image2"
      />

      <cities-component/>

      <!-- <img
        :src="schoolImage"
        alt="Wrocław University of Economics"
        class="image2"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      > -->
      <div
        :src="schoolImage"
        :style="{'background-image': 'url(' + schoolImage + ')'}"
        alt="Phoenix See Dortmund"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        class="image2"
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
.image2
{
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media only screen and (min-width: 1904px)
{
  .image2
  {
    height: 800px;
  }
}
</style>
