<template>
  <v-layout
    row
    wrap
    class="container-project"
  >
    <v-flex
      lg6
      offset-lg3
    >
      O projekcie
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Yourcity - O projekcie',
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
</style>
