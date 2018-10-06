<template>
  <transition name="fade">
    <div v-if="true">
      <v-flex lg12>
        <div class="title-section">
          <!-- {{ 'Tagi : ' + proposedTags.length }} -->
          Tagi: 24
        </div>
      </v-flex>
      <div class="tag-section">
        <v-flex
          xs12
          lg12
        >
          <!-- chip -->
        </v-flex>
      </div>
      <v-flex
        v-if="false"
        lg4
        offset-lg4
        md6
        offset-md3
        sm6
        offset-sm3
        xs10
        offset-xs1
      >
        <!-- button and dialog -->
      </v-flex>
      tags component test
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/tags/lg.scss';
  @import '../../assets/scss/profiles-search/tags/xs.scss';
</style>
