<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="contact-container">
    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        O projekcie
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('project.head.title'),
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
.container-project
{
  margin-top: 64px;
  // background-color: #ffffff;
}
.title-page
{
    font-size: 44px;

    padding-top: 100px;
    padding-bottom: 100px;

    text-align: center;
    letter-spacing: 2px;

    color: #111111;
}
</style>
