<template>
  <div class="">
    business page
  </div>
</template>

<script>
export default {
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
