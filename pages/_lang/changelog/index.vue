<template>
  <v-layout
    row
    wrap
    class="container-changelog"
  >
    <v-flex
      lg6
      offset-lg3
    >
      Changelog
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Yourcity - Changelog',
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
.container-changelog
{
  margin-top: 64px;
  // background-color: #ffffff;
}
</style>
