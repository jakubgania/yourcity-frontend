<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-flex xs12 lg12>
    <v-parallax :src="officeImage" height="800">
      <div class="content">
        <v-layout row wrap>
          <v-flex xs12 lg4 offset-lg2>
            <div class="description">
              YOURCITY FOR BUSINESS to platforma umożliwiająca dotarcie do klienta.
              W zależności od rodzaju biznesu jaki prowadzisz YOURCITY daje możliwośc
              stworzenia kompleksowego profilu, na którym możesz zaprezentować ważne
              informacje o tym co masz do zaoferowania.
            </div>
            <v-layout>
              <v-flex lg2 class="icon-section">
                <i class="material-icons top-icon">assessment</i>
              </v-flex>
              <v-flex lg2 class="icon-section">
                <i class="material-icons top-icon">trending_up</i>
              </v-flex>
              <v-flex lg2 class="icon-section">
                <i class="material-icons top-icon">location_on</i>
              </v-flex>
              <v-flex lg2 class="icon-section">
                <i class="material-icons top-icon">devices</i>
              </v-flex>
              <v-flex lg2 class="icon-section">
                <i class="material-icons top-icon">apps</i>
              </v-flex>
              <v-flex lg2 class="icon-section">
                <i class="material-icons top-icon">bubble_chart</i>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs10 offset-xs1 lg4 offset-lg1>
            <button
              type="button"
              name="button"
              class="form-button"
              @click="dialog = true"
            >
              JESTEM ZAINTERESOWANY
            </button>
          </v-flex>
        </v-layout>
      </div>
    </v-parallax>
  </v-flex>
</template>

<script>
import officeImage from '../../assets/images/top-image.jpg';

export default {
  data() {
    return {
      officeImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.content
{
  color: #ffffff;
  position: absolute;
  margin: auto;
  top: -130px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100px;
}
.description
{
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
}
.icon-section
{
  text-align: center;

  .top-icon
  {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    cursor: default;
  }
}
.form-button
{
  background-color: transparent;
  color: white;
  width: 100%;
  height: 60px;
  border: 2px solid white;
  border-radius: 4px;
  letter-spacing: 2px;
  font-weight: 700;
  margin-top: 26px;

  &:hover
  {
    background-color: white;
    color: black;
    transition: background-color 200ms linear;
  }
}
</style>
