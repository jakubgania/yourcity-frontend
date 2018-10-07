<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs12
      lg12
    >
      <search-component/>
      <!-- {{ $t('home.introduction') }} -->
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

      <!-- <img :src="" alt="" class=""> -->

      <tags-component/>

      <!-- <img :src="" alt="" class=""> -->

      <gallery-component/>

      <!-- <img :src="" alt="" class=""> -->

      <cities-component/>

      <!-- <img :src="" alt="" class=""> -->

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
    };
  },
  head() {
    return {
      title: 'Yourcity - Wyszukuj różne miejsca w miastach i lokalizacjach.',
      // title: this.$t('home.title')
    };
  },
};
</script>
