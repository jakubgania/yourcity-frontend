<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-flex xs12 lg12>
    <v-layout row wrap class="pages-references-section">
      <v-flex xs10 offset-xs1 lg4 offset-lg1 class="button-link-section">
        <router-link :to="$i18n.path('example-profile')">
          <button type="button" name="button" class="button-link">
            Zobacz przykadowy profil
          </button>
        </router-link>
      </v-flex>
      <v-flex xs10 offset-xs1 lg4 offset-lg2 class="button-link-section">
        <button type="button" name="button" class="button-link" @click="dialog = true">
          Poinformuj o starcie platformy
        </button>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<style lang="scss" scoped>
.pages-references-section
{
  background-color: #f2f2f2;
}
.button-link-section
{
  margin-top: 180px;
  margin-bottom: 180px;
}
.button-link
{
  width: 100%;
  height: 60px;
  line-height: 60px;
  border: 2px solid #252bfc;
  color: #252bfc;
  outline: none;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: background-color 0.2s ease;

  &:hover
  {
    color: white;
    background-color: #252bfc;
  }
}
</style>
