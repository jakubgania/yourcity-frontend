<template>
  <div class="">
    cities of the country
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: 'Yourcity - Miasta',
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
