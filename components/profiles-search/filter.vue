<template>
  <v-layout row wrap class="filter-container">
    <v-flex xs12 sm12 md12 lg12 xl10 offset-xl1>
      <v-expansion-panel expand style="box-shadow:none;"
      >
        <v-expansion-panel-content
          class="extension-panel"
          style="background-color: transparent;"
        >
          <div
            slot="header"
            style="letter-spacing:1px;font-weight:700;"
          >
            <v-icon style="position:relative;top:5px;margin-right:15px;font-size:20px;">
              filter_list
            </v-icon>
            {{ $t('profiles-search.filter.title-section') }}
          </div>

          <v-layout row wrap>
            <v-flex xs12 sm4 lg4 class="filter-input">
              <v-text-field
                :append-icon="'search'"
                v-model="prototypeFilter"
                :label="$t('profiles-search.filter.search')"
                loading
                clearable
                autocomplete="off"
                name="input-1"
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
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
    prototypeFilter(value) {
      if (!value) {
        this.$store.dispatch('searchProfiles/resetResult', this.resultCopy);
      }
    },
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
.extension-panel
{
  border-bottom: 1px solid #dfdfdf;
}
.filter-input
{
  margin-left: 20px;
}
@media only screen and (max-width: 600px)
{
  .filter-container
  {
    padding-left: 10px;
    padding-right: 10px;
  }
  .filter-input
  {
    margin-left: 0px;
  }
}
</style>
