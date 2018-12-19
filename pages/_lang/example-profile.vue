<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap class="example-profile-container">

    <v-flex xs12 sm12 md12 lg12>
      <div class="top-image-section">
        <v-img :src="topImage" class="top-image"/>
      </div>
    </v-flex>

    <div class="content-container">
      <span id="alignment"/>
      <div class="wrapper">
        <div v-if="this.$vuetify.breakpoint.name != 'xs'" class="menu-section">
          <router-link :to="$i18n.path('example-profile')" class="router-link">
            <div class="router-link-button">
              <v-icon class="icon">chevron_right</v-icon>
              {{ $t('example-profile.menu.information') }}
            </div>
          </router-link>
          <router-link :to="$i18n.path('example-profile/posts')" class="router-link">
            <div class="router-link-button">
              <v-icon class="icon">chevron_right</v-icon>
              {{ $t('example-profile.menu.posts') }}
            </div>
          </router-link>
          <router-link :to="$i18n.path('example-profile/photos')" class="router-link">
            <div class="router-link-button">
              <v-icon class="icon">chevron_right</v-icon>
              {{ $t('example-profile.menu.photos') }}
            </div>
          </router-link>
          <router-link :to="$i18n.path('example-profile/comments')" class="router-link">
            <div class="router-link-button">
              <v-icon class="icon">chevron_right</v-icon>
              {{ $t('example-profile.menu.comments') }}
            </div>
          </router-link>
          <router-link :to="$i18n.path('example-profile/related-profiles')" class="router-link">
            <div class="router-link-button">
              <v-icon class="icon">chevron_right</v-icon>
              {{ $t('example-profile.menu.related-profiles') }}
            </div>
          </router-link>
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
  @import '../../assets/scss/example-profile/example-profile.scss';
  @import './assets/scss/example-profile/xs.scss';
</style>
