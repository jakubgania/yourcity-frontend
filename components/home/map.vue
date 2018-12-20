<template>
  <v-flex
    xs12
    lg12
    xl12
  >
    <v-layout
      row
      wrap
      class="map-image-section"
    >
      <v-flex
        xs12
        lg8
        offset-lg2
        xl8
        offset-xl2
      >
        <img
          :src="worldImage"
          alt="World map"
          style="width:100%;"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-once="true"
        >
        <div class="text-section">
          <div
            data-aos="fade"
            data-aos-delay="800"
            data-aos-once="true"
          >
            <div class="text">
              Search for anything. Wherever you are.
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import worldImage from '../../assets/images/world.png';

export default {
  data() {
    return {
      worldImage,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home/map/lg.scss';
  @import '../../assets/scss/home/map/xs.scss';
</style>
