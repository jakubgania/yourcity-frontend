<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-flex lg12>
    <v-layout row wrap class="scheme-section">
      <v-flex xs12 lg3 offset-lg1 class="scheme">
        Twój biznes
      </v-flex>
      <v-flex xs12 lg1 class="scheme-icon-section">
        <v-icon class="scheme-icon">swap_horiz</v-icon>
        <v-icon class="hidden-sm-only hidden-md-only hidden-lg-only">swap_vert</v-icon>
      </v-flex>
      <v-flex xs12 lg2 class="scheme-logo-section" style="margin-top:-20px;">
        <logo-component :logo-size="48" margin="-10"/>
      </v-flex>
      <v-flex xs12 lg1 class="scheme-icon-section">
        <v-icon class="scheme-icon">swap_horiz</v-icon>
        <v-icon class="hidden-sm-only hidden-md-only hidden-lg-only">swap_vert</v-icon>
      </v-flex>
      <v-flex xs12 lg3 class="scheme">
        Klienci
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import LogoComponent from '../logo-component.vue';

export default {
  components: {
    'logo-component': LogoComponent,
  },
};
</script>

<style lang="scss" scoped>
.scheme-section
{
  background-color: white;
  padding-top: 140px;
  padding-bottom: 140px;
  // margin-top: -20px;
}
.scheme
{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
.scheme-icon-section
{
  text-align: center;
}
.scheme-logo-section
{
  text-align: center;
  margin-top: -31px;

  .scheme-logo
  {
    width: 100%;
  }
}
.scheme-icon
{
  position: relative;
  top: 4px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 44px;
  color: #252bfc;
}
</style>
