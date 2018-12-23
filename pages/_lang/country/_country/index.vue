<template>
  <v-layout row wrap class="container-country">
    <v-flex lg8 offset-lg2>
      <div class="display-2" style="margin-top:100px;margin-bottom:100px;">
        Country
      </div>
    </v-flex>
  </v-layout>
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

<style lang="scss" scoped>
.container-country
{
  //
}
</style>
