<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap>
    <top-image-component/>
  </v-layout>
</template>

<script>
import TopImageComponent from '../../../components/business/top-image.vue';

export default {
  components: {
    'top-image-component': TopImageComponent,
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
