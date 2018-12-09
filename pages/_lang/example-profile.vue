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
              {{ $t('example-profile.menu.gallery') }}
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

    <v-navigation-drawer
      v-model="right"
      fixed
      app
      right
    >
      <v-list
        class="list-section"
      >
        <div class="list-section-logo">
          <v-icon
            class="close-menu-icon"
            @click="closeNavigationDrawer()"
          >
            close
          </v-icon>

          <!-- <logo-component/> -->

        </div>
        <v-divider/>
        <v-list-tile
          v-for="menuItem in navigationMenuItems"
          :key="menuItem.id"
          :to="$i18n.path(menuItem.path)"
        >
          <v-list-tile-action class="selected-icon">
            <v-icon class="list-menu-icon">keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="selected-text">
            <v-list-tile-title
              class="list-menu-text"
            >
              {{ $t(`routes_names.${menuItem.nameKey}`) }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </v-layout>
</template>

<script>
import topImage from '../../assets/images/b2.jpg';

export default {
  data() {
    return {
      topImage,
      right: true,
      navigationMenuItems: [
        {
          nameKey: 'example-profile',
          path: 'example-profile',
        },
        {
          nameKey: 'example-profile/posts',
          path: 'example-profile/posts',
        },
        {
          nameKey: 'example-profile/gallery',
          path: 'example-profile/gallery',
        },
        {
          nameKey: 'example-profile/comments',
          path: 'example-profile/comments',
        },
        {
          nameKey: 'example-profile/related-profiles',
          path: 'example-profile/related-profiles',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/example-profile/example-profile.scss';
@import './assets/scss/example-profile/xs.scss';
</style>
