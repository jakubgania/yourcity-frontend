<template>
  <v-layout
    row
    wrap
    class="container-agreements"
  >
    <v-flex
      lg6
      offset-lg3
    >
      Regulamin
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Yourcity - Regulamin',
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
.container-agreements
{
  margin-top: 64px;
  // background-color: #ffffff;
}
</style>
