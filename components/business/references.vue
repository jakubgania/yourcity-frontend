<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-flex xs12 lg12>
    <v-layout row wrap class="pages-references-section">
      <v-flex
        xs10
        offset-xs1
        sm8
        offset-sm2
        md6
        offset-md3
        lg4
        offset-lg1
        class="button-link-section"
      >
        <router-link :to="$i18n.path('example-profile')">
          <button type="button" name="button" class="button-link">
            Zobacz przykadowy profil
          </button>
        </router-link>
      </v-flex>
      <v-flex
        xs10
        offset-xs1
        sm8
        offset-sm2
        md6
        offset-md3
        lg4
        offset-lg2
        class="button-link-section"
      >
        <button type="button" name="button" class="button-link" @click="dialog = true">
          Poinformuj o starcie platformy
        </button>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Poinformuj o starcie platformy</span>
          <v-spacer/>
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" flat @click="dialog=false">
            Zamknij
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$yourcity-blue-color: #252bfc;

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
  border: 2px solid $yourcity-blue-color;
  color: $yourcity-blue-color;
  outline: none;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: background-color 0.2s ease;

  &:hover
  {
    color: #ffffff;
    background-color: $yourcity-blue-color;
  }
}
@media only screen and (max-width: 1264px)
{
  .button-link-section
  {
    margin-top: 80px;
    margin-bottom: 80px;
  }
}
@media only screen and (max-width: 959px)
{
  .button-link-section
  {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 600px)
{
  .button-link-section
  {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}
</style>
