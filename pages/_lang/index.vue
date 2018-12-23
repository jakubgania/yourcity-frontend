<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap style="overflow-x: hidden;">
    <v-flex xs12 lg12>
      <search-component/>

      <information-component/>

      <!-- <clazy-load :src="seeImage">
        <div
          :style="{'background-image': 'url('+ seeImage +')'}"
          class="image"
        />
        <div slot="placeholder" class="preloader">
          <div class="preloader-image">
            <v-progress-circular
              indeterminate
              color="primary"
            />
          </div>
        </div>
      </clazy-load> -->

      <img
        :src="seeImage"
        alt="Phoenix See Dortmund"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <categories-component/>

      <!-- <clazy-load :src="galleryImage">
        <div
          :style="{'background-image': 'url(' + galleryImage + ')'}"
          class="image"
        />
        <div slot="placeholder" class="preloader">
          <div class="preloader-image">
            <v-progress-circular
              indeterminate
              color="primary"
            />
          </div>
        </div>
      </clazy-load> -->

      <img
        :src="galleryImage"
        alt="Thier-Galerie Dortmund"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <tags-component/>

      <!-- <clazy-load :src="bridgeImage">
        <div
          :style="{'background-image': 'url(' + bridgeImage + ')'}"
          class="image"
        />
        <div slot="placeholder" class="preloader">
          <div class="preloader-image">
            <v-progress-circular
              indeterminate
              color="primary"
            />
          </div>
        </div>
      </clazy-load> -->

      <img
        :src="bridgeImage"
        alt="Rędziński Bridge Wrocław"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <gallery-component/>

      <!-- <clazy-load :src="wroImage">
        <div
          :style="{'background-image': 'url(' + wroImage + ')'}"
          class="image"
        />
        <div slot="placeholder" class="preloader">
          <div class="preloader-image">
            <v-progress-circular
              indeterminate
              color="primary"
            />
          </div>
        </div>
      </clazy-load> -->

      <img
        :src="wroImage"
        alt="Gallery Wroclavia Wrocław"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <cities-component/>

      <!-- <clazy-load :src="schoolImage">
        <div
          :style="{'background-image': 'url(' + schoolImage + ')'}"
          class="image"
        />
        <div slot="placeholder" class="preloader">
          <div class="preloader-image">
            <v-progress-circular
              indeterminate
              color="primary"
            />
          </div>
        </div>
      </clazy-load> -->

      <img
        :src="schoolImage"
        alt="Wrocław University of Economics"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

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
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.image
{
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.preloader-image
{
  width: 100%;
  height: 600px;
  line-height: 600px;
  text-align: center;
}
@media only screen and (min-width: 1904px)
{
  .image
  {
    height: 800px;
  }
}
@media only screen and (max-width: 600px)
{
  .image
  {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
