<template>
  <div class="">
    contact page
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('contact.head.title'),
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
