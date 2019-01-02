<template>
  <v-layout v-if="showEmptyResultsAlert" row wrap>
    <v-flex xs10 offset-xs1 sm6 offset-sm3 lg4 offset-lg4 class="alert-section">
      <v-alert value="true" color="info" icon="info" class="text">
        {{ $t('empty-results-alert') }}
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    showEmptyResultsAlert: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.alert-section
{
  margin-top: 100px;

  .text
  {
    letter-spacing: 1px;
    font-weight: 700;
  }
}
</style>
