<template>
  <v-app>

    <header-component/>

    <v-content style="padding-top:64px;">
      <v-container
        fluid
        class="container"
      >
        <nuxt/>
      </v-container>
    </v-content>

    <div v-if="displayFooter()">
      <footer-component/>
    </div>

  </v-app>
</template>

<script>
import HeaderComponent from '../components/header/header.vue';
import FooterComponent from '../components/footer.vue';

export default {
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
  },
  methods: {
    displayFooter() {
      if (this.$route.name === 'lang-search' || this.$route.name === 'search') {
        return false;
      }

      return true;
    },
  },
};
</script>

<style lang="scss">
$scrollbar-track-color: #f4f4f4;
$scrollbar-thumb-color: #b8b8b8;

::-webkit-scrollbar-track
{
    border-radius: 0px;
    background-color: $scrollbar-track-color;
}
::-webkit-scrollbar
{
    width: 8px;
}
::-webkit-scrollbar-thumb
{
    border-radius: 0px;
    background-color: $scrollbar-thumb-color
}
.container
{
    padding: 0;
    background-color: #ffffff;
}
.v-menu__content
{
    box-shadow: none;
    border-top: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
}
.v-menu__content::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: $scrollbar-track-color;
}
.v-menu__content::-webkit-scrollbar {
    width: 8px;
}
.v-menu__content::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: $scrollbar-thumb-color;
}

.v-expansion-panel__header
{
  padding: 0px;
}
</style>
