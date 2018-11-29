<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="agreements-container">
    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        {{ $t('agreements.title') }}
      </div>
    </v-flex>

    <v-flex
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg4
      offset-lg4
      class="description"
    >
      {{ $t('agreements.app') }}
    </v-flex>
    <v-flex
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg4
      offset-lg4
      class="description"
    >
      {{ $t('agreements.user') }}
    </v-flex>

    <v-flex
      v-for="(rule, index) in rules"
      :key="rule.id"
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg4
      offset-lg4
      class="description"
    >
      <div v-html="index + 1 + '. ' + rule.message"/>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      rules: this.$t('agreements.rules'),
    };
  },
  head() {
    return {
      title: this.$t('agreements.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.agreements-container
{
  padding-bottom: 100px;
}
.title-page
{
    font-size: 44px;

    padding-top: 100px;
    padding-bottom: 100px;

    text-align: center;
    letter-spacing: 2px;

    color: #111111;
}
.description
{
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.8;
  margin-top: 30px;
}
@media only screen and (max-width: 600px)
{
  .description
  {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }
}
</style>
