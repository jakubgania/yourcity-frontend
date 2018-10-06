<template>
  <div class="container-results">
    container results component
    <!-- filter section -->
    <tags-section-component/>
    <!-- count of results -->
    <!-- result list section -->
    <!-- profile details desktop layout -->
    <!-- profile details mobile layout -->
    <!-- paging button section -->
    <!-- alert of empty results section -->
    <!-- alert of connection error section -->
  </div>
</template>

<script>
import TagsSectionComponent from './tags-section.vue';

export default {
  components: {
    'tags-section-component': TagsSectionComponent,
  },
  data() {
    return {
    //
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
