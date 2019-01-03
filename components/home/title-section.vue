<template>
  <v-flex xs10 offset-xs1 lg11 offset-lg1>
    <div
      class="title-section"
      data-aos="fade-right"
      data-aos-delay="240"
      data-aos-once="true"
    >
      {{ title }}
    </div>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.title-section
{
  font-size: 40px;
  font-weight: 700;

  padding-top: 100px;
  padding-bottom: 100px;

  letter-spacing: 2px;

  color: #000;
}
</style>
