<template>
  <v-flex xs10 offset-xs1 sm8 offset-sm2 lg4 offset-lg4 xl2 offset-xl5>
    <router-link :to="routePath" class="link-section">
      <v-btn
        block
        large
        depressed
        class="button"
        data-aos="fade-right"
        data-aos-delay="240"
        data-aos-once="true"
      >
        {{ buttonTitle }}
        <v-icon right dark>
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </router-link>
  </v-flex>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      default: '',
    },
    routePath: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.link-section
{
  text-decoration: none;
}
.button
{
  margin-top: 160px;
  margin-bottom: 160px;
  letter-spacing: 2px;
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #2a2f30 !important;
}
</style>
