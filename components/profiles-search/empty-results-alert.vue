<template>
  <v-layout
    v-if="showEmptyResultsAlert"
    row
    wrap
  >
    <v-flex
      xs10
      offset-xs1
      sm6
      offset-sm3
      lg4
      offset-lg4
      style="margin-top:100px;"
    >
      <v-alert
        :value="true"
        color="info"
        icon="info"
        style="letter-spacing:1px;font-weight:700;"
      >
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
