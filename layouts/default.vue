<template>
  <v-app>

    <header-component/>

    <v-content>
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
      if (this.$route.name === 'lang-search') {
        return false;
      }

      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
$scrollbar-track-color: #ffffff;
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
}
</style>
