<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm12
        lg12
      >
        <v-layout
          row
          wrap
          class=""
        >
          <v-flex
            xs12
            order-xs2
            sm8
            order-sm1
            md8
            order-md1
            lg8
            order-lg1
          >
            <div class="">
              <div class="">
                <!-- name -->
              </div>
              <div class="">
                <!-- description -->
              </div>
              <div class="">
                <!-- address -->
              </div>
              <div class="">
                <!-- star rating -->
              </div>
              <div class="">
                <!-- rating count -->
              </div>
              <div class="">
                <!-- hours -->
              </div>
            </div>

            <v-layout class="">
              <div class="">
                <!-- vbtn -->
              </div>
            </v-layout>
          </v-flex>
          <v-flex
            xs12
            order-xs1
            sm4
            order-sm2
            md4
            order-md2
            lg4
            order-lg2
          >
            <div class="">
              <div
                class=""
              />
              <div class="">
                <div class="">
                  <!-- image not available -->
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-dialog
      max-width="800"
    >
      <v-card>
        <v-card-title class="">
          <!-- photo name -->
        </v-card-title>
        <div class="">
          <!--  -->
        </div>
        <div class="">
          <!--  -->
        </div>
        <v-card-actions>
          <div class="">
            <!--  -->
          </div>
          <v-spacer/>
          <v-btn
            flat
            color="blue accent-3"
            class=""
          >
            zamknij
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    result: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/profiles-search/container-results/results-list/lg.scss';
  @import '../../assets/scss/profiles-search/container-results/results-list/xs.scss';
</style>
