<template>
  <div class="">
    comments
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('example-profile.comments.page-subtitle'),
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
