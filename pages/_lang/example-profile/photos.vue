<template>
  <div class="">
    photos
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('example-profile.gallery.page-subtitle'),
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
