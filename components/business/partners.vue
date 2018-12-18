<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-layout row wrap>
    <v-flex xs12 lg12>
      <div class="text-thin-big">
        Partnerzy
      </div>
    </v-flex>
    <v-flex xs12 lg12>
      <div class="partners-section">
        Ty możesz być pierwszy.
      </div>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.text-thin-big
{
  text-align: center;
  margin-top: 160px;
  margin-bottom: 160px;
  font-size: 40px;
  font-weight: 700;
}
.partners-section
{
  text-align: center;
  letter-spacing: 0.8em;
  margin-bottom: 240px;
  color: #b3b3b3;
  cursor: default;
}
@media only screen and (max-width: 600px)
{
  .text-thin-big
  {
    margin-top: 80px;
    margin-bottom: 80px;
    font-size: 32px;
  }
  .partners-section
  {
    letter-spacing: 0.4em;
    margin-bottom: 120px;
  }
}
</style>
