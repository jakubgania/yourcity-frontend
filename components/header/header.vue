<template>
  <div>
    <toolbar-header-component/>
  </div>
</template>

<script>
import ToolbarHeaderComponent from './toolbar-header.vue';

export default {
  components: {
    'toolbar-header-component': ToolbarHeaderComponent,
  },
  data: () => ({
    drawer: false,
  }),
  watch: {
  //
  },
  methods: {
  //
  },
};
</script>

<style lang="scss" scoped>
</style>
