<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap style="background-color:#ffffff;">

    <v-flex xs12 sm12 md12 lg12>
      <div class="top-image-section">
        <v-img :src="topImage" class="top-image"/>
      </div>
    </v-flex>

    <div class="content-container">
      <span id="alignment"/>
      <div class="wrapper">
        <div class="menu-section">
          <!--  -->
        </div>
        <div class="content-section">
          <nuxt-child/>
        </div>
      </div>
    </div>

  </v-layout>
</template>

<script>
import topImage from '../../assets/images/b2.jpg';

export default {
  data() {
    return {
      topImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-image-section
{
    width: 100%;
    height: calc(100vw / 3.2 - 1px);
    background-color: #d0d0d0;
}
.top-image
{
    width: 100%;
    height: calc(100vw / 3.2 - 1px);
    background-position: center;
    background-size: cover;
}
.content-container
{
    margin: auto;
    padding-bottom: 60px;
}
.wrapper
{
    text-align: left;
    margin: 0 300px 0 0;
    display: inline-block;
}
div.menu-section
{
    top: 0;
    padding-top: 64px;
    position: sticky;
    margin-right: 10px;
    width: 300px;
    height: auto;
    float: left;
}
.content-section
{
    width: 640px;
    padding-top: 60px;
    float: right;
}
.router-link
{
    text-decoration: none;
}
.router-link-button
{
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding-left: 10px;
    letter-spacing: 1px;
    font-weight: 700;
    color: #1b2d39;
    font-size: 14px;
    outline: none;

    &:hover
    {
        background-color: #f2f2f2;
    }

    .icon
    {
        position: relative;
        top: 3px;
        margin-right: 8px;
        color: #000000;
    }
}

#alignment
{
    height: 100%;
    display: inline-block;
}
</style>
