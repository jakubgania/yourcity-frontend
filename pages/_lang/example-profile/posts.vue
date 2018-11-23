<template>
  <div class="">
    posts
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('example-profile.posts.page-subtitle'),
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
