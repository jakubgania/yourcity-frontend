<template>
  <v-layout
    row
    wrap
    style="overflow-x: hidden;"
  >
    <v-flex
      xs12
      lg12
    >
      <search-component/>

      <information-component/>

      <img
        :src="seeImage"
        alt="Phoenix See Dortmund"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <categories-component/>

      <img
        :src="galleryImage"
        alt="Thier-Galerie Dortmund"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <tags-component/>

      <img
        :src="bridgeImage"
        alt="Rędziński Bridge Wrocław"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <gallery-component/>

      <img
        :src="wroImage"
        alt="Gallery Wroclavia Wrocław"
        style="width:100%;"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >

      <cities-component/>

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
      title: 'Yourcity - Wyszukuj różne miejsca w miastach i lokalizacjach.',
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
