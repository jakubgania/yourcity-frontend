<template>
  <v-layout
    row
    wrap
    class="container-founder"
  >
    <v-flex
      lg6
      offset-lg3
    >
      O twórcy
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Yourcity - O twórcy',
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
.container-founder
{
  margin-top: 64px;
  // background-color: #ffffff;
}
</style>
