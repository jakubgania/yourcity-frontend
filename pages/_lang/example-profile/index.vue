<template>
  <div class="">
    example profile page
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('example-profile.head.title'),
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
