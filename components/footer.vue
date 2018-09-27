<template>
  <v-layout
    row
    wrap
    class="footer-container"
  >
    <v-flex
      xs12
      md10
      offset-md1
      lg10
      offset-lg1
      class="footer-section"
    >
      <v-layout
        row
        wrap
      >
        <div class="">footer component</div>
      </v-layout>
    </v-flex>

    <v-flex
      xs12
      md10
      offset-md1
      lg10
      offset-lg1
    >
      <div class="copyright-section">
        <a
          href="mailto:email@address.co"
          class="email-link"
        >
          email address
        </a>
        <div class="copyright">
          yourcity &copy; 2018
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
  @import './../assets/scss/footer/lg.scss';
</style>
