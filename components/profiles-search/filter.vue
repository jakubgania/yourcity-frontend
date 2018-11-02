<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content style="background-color:#ffffff;border-left:1px solid #eeeeee;">
      <div
        slot="header"
        style="letter-spacing:1px;font-weight:700;"
      >
        <v-icon style="position:relative;top:5px;margin-right:15px;font-size:20px;"/>
        Filtry
      </div>

      <v-layout
        row
        wrap
      >
        <v-flex
          xs10
          offset-xs1
          sm4
          lg4
          style="margin-left:20px;"
        >
          <v-text-field
            :append-icon="'search'"
            v-model="prototypeFilter"
            loading
            clearable
            autocomplete="off"
            name="input-1"
            label="Szukaj w wynikach"
            @keyup="inputFilter()"
          />
          <v-progress-linear
            v-if="custom"
            slot="progress"
            :value="progress"
            height="7"
          />
        </v-flex>
      </v-layout>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  // props: ['custom'],
  data() {
    return {
      custom: null,
      prototypeFilter: '',
      prototypeItems: null,
    };
  },
  computed: {
    progress() {
      let value;
      return Math.min(100, value.length * 10);
    },
    ...mapGetters('searchProfiles', [
      'resultCopy',
    ]),
  },
  watch: {
    // prototypeFilter(value) {
    //   if (!value) {
    //     this.$store.dispatch('searchProfiles/resetResult', this.resultCopy);
    //   }
    // },
  },
  methods: {
    ...mapActions('searchProfiles', [
      'updateResult',
      'resetResult',
    ]),
    inputFilter() {
      /* eslint-disable */
      if (this.prototypeFilter.length !== 0) {
        // this.$emit('updateFilterSectionValue', false);

        this.prototypeItems = this.resultCopy.filter(item => {
          if (this.calculateLogicalValueOfAllVariables(item)) {
            return item;
          }
        });

        this.$store.dispatch('searchProfiles/updateResult', this.prototypeItems);
      } else {
        this.$store.dispatch('searchProfiles/resetResult', this.resultCopy);
        // this.$emit('updateFilterSectionValue', true);
      }
    },
    calculateLogicalValueOfAllVariables(item) {
      let name = null;
      let description = null;
      let address = null;

      if (item.name) {
        name = this.checkItemValue(item.name, this.prototypeFilter);
      }

      if (item.description) {
        description = this.checkItemValue(item.description, this.prototypeFilter);
      }

      if (item.single_line_address) {
        address = this.checkItemValue(item.single_line_address, this.prototypeFilter);
      }

      return name || description || address;
    },
    checkItemValue(value, filter) {
      return value.toLowerCase().includes(filter);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px)
{
}
</style>
