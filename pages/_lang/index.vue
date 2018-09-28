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
      {{ $t('home.introduction') }}
      <!-- informations descriptions component -->
      <!-- image -->
      <!-- categories component -->
      <!-- image -->
      <!-- tags component -->
      <!-- image -->
      <!-- gallery component -->
      <!-- image -->
      <!-- cities component -->
      <!-- image -->
      <!-- business information component -->
      <!-- map component -->
    </v-flex>
  </v-layout>
</template>

<script>
import SearchComponent from '../../components/home/search.vue';

export default {
  components: {
    'search-component': SearchComponent,
  },
  head() {
    return {
      title: 'YOURCITY - Home page',
      // title: this.$t('home.title')
    };
  },
};
</script>
