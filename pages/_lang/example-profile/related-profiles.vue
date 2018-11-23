<template>
  <div class="">
    related profiles
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('example-profile.related-profiles.page-subtitle'),
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
