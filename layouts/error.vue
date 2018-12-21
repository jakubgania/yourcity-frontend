<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap class="error-container">
    <v-flex lg12 style="text-align:center;">
      <div class="message">
        Page not found.
      </div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.error-container
{
  width: 100%;
  min-height: calc(100vh - 64px);
  line-height: calc(100vh - 64px);
}
.message
{
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
}
</style>
