<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap>
    <top-image-component/>

    <v-layout row wrap class="about-description">
      <v-flex lg6 offset-lg3>
        <div class="example-profile-description" style="font-weight:700;text-align:center;">
          YOURCITY ma pomagać ludziom odnaleźć interesujące ich informacje w danym mieście.
          Ma być przydatnym narzędziem kiedy ktoś szuka konkretnego miejsca, jakieś usługi
          albo siedziby Twojej firmy. YOURCITY to wysoka jakość informacji.
        </div>
      </v-flex>
    </v-layout>

    <scheme-component/>

  </v-layout>
</template>

<script>
import TopImageComponent from '../../../components/business/top-image.vue';
import SchemeComponent from '../../../components/business/scheme.vue';

export default {
  components: {
    'top-image-component': TopImageComponent,
    'scheme-component': SchemeComponent,
  },
  head() {
    return {
      title: this.$t('business.head.title'),
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
.image-section
{
    width: 100%;
    height: auto;
}
.about-description
{
  background-color: #ffffff;
  margin-top: 140px;
}
.example-profile-description
{
    letter-spacing: 1px;
    font-size: 16px;
    margin-bottom: 60px;
}
</style>
