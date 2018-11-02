<template>
  <div>
    <template
      slot="item"
      slot-scope="cityItems"
    >
      {{ cityItems.item.name }}
    </template>
    <template
      slot="item"
      slot-scope="cityItems"
    >
      <template v-if="cityItems.item.value">
        <v-list-tile-content @click="getCurrentLocation()">
          <v-list-tile-title>Użyj obecnej rot lokalizacji</v-list-tile-title>
        </v-list-tile-content>
      </template>
      <template v-else>
        <v-list-tile-content>
          <v-list-tile-title v-html="cityItems.item"/>
        </v-list-tile-content>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    cityItems: {
      type: Array,
      default: null,
    },
  },
  computed: {
    ...mapGetters('autocomplete', [
      'cityItems',
    ]),
  },
};
</script>
