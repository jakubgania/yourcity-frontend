<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="categories-title-section">
    <v-flex lg6 offset-lg3>
      <div class="text-thin-big categories-title">
        Dowiedz się więcej o kategoriach
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      descriptions: {
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.text-thin-big
{
  text-align: center;
  margin-top: 160px;
  margin-bottom: 160px;
  font-size: 40px;
  font-weight: 700;
}
.categories-title-section
{
  background-color: #B0BEC5;

  .categories-title
  {
    color: #37474F;
  }
}
</style>
