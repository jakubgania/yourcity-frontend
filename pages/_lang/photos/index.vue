<template>
  <div class="">
    photos page
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('photos.head.title'),
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
