<template>
  <v-flex lg12>
    <v-layout row wrap class="scheme-section">
      <v-flex xs12 sm12 md3 lg3 offset-lg1 xl2 offset-xl2 class="scheme">
        Twój biznes
      </v-flex>
      <v-flex xs12 sm12 md1 lg1 xl1 class="scheme-icon-section">
        <v-icon class="scheme-icon hidden-xs-only hidden-sm-only">swap_horiz</v-icon>
        <v-icon class="scheme-icon hidden-md-only hidden-lg-only hidden-xl-only">swap_vert</v-icon>
      </v-flex>
      <v-flex xs12 sm12 md4 lg2 xl2 class="scheme-logo-section" style="margin-top:-20px;">
        <logo-component :logo-size="280" margin="4"/>
      </v-flex>
      <v-flex xs12 sm12 md1 lg1 xl1 class="scheme-icon-section">
        <v-icon class="scheme-icon hidden-xs-only hidden-sm-only">swap_horiz</v-icon>
        <v-icon class="scheme-icon hidden-md-only hidden-lg-only hidden-xl-only">swap_vert</v-icon>
      </v-flex>
      <v-flex xs12 sm12 md3 lg3 xl2 class="scheme">
        Klienci
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import LogoComponent from '../logo.vue';

export default {
  components: {
    'logo-component': LogoComponent,
  },
};
</script>

<style lang="scss" scoped>
.scheme-section
{
  background-color: #ffffff;
  padding-top: 140px;
  padding-bottom: 140px;
}
.scheme
{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 38px;
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
@media only screen and (max-width: 959px)
{
}
@media only screen and (max-width: 600px)
{
  .scheme
  {
    font-size: 32px;
  }
  .scheme-section
  {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>
