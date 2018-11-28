<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="agreements-container">
    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        Regulamin
      </div>
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
      rules: [
        {
          message: 'Użytkownik korzystający z aplikacji Yourcity akceptuje regulamin/postanowienia oraz zapoznał się ze wszystkimi postanowieniami zawartymi w regulaminie.',
        },
        {
          message: 'Twórca aplikacji Yourcity nie bierze na siebie odpowiedzialności w związku z niepoprawnym działaniem strony lub nieaktualnymi lub nieprawidłowymi informacjami jakie są wyświetlane podczas wyszukiwania profili.',
        },
        {
          message: 'Twórca aplikacji Yourcity nie bierze na siebie odpowiedzialności w związku z niepoprawnym działaniem strony lub nieaktualnymi lub nieprawidłowymi informacjami jakie są wyświetlane podczas wyszukiwania profili.',
        },
        {
          message: 'Aplikacja Yourcity jest w ciągłej rozbudowie i może czasami działać niestabilnie lub w ogóle nie być dostępna dla użytkowników podczas aktualizacji.',
        },
        {
          message: 'Źródłem danych dla aplikacji Yourcity jest <a href="https://developers.facebook.com/docs/places/web" target="_blank">Places Graph API - Facebook<a>.',
        },
        {
          message: 'Aplikacja wykorzystuje pliki cookie jedynie w celach statystycznych.',
        },
        {
          message: 'Aplikacja Yourcity może zostać w każdej chwili wyłączona przez osobę nią zarządzającą i przestać dostarczać informacje.',
        },
        {
          message: 'Należy pamiętać, że informacje o profilach mogą być nieaktualne lub nieprawdziwe.',
        },
        {
          message: 'Wszystkie zdjęcia na stronie głównej, stronie z galerią zdjęć oraz stronie z listą wszystkich karajów są własnością twórcy. Zabrania się kopiowania i nieuprawnionego wykorzystywania bez zgody autora.',
        },
        {
          message: 'Twórca dokłada wszelkich starań by aplikacja działała jak najlepiej.',
        },
        {
          message: 'W przypadku zaobserowania niestabilnej pracy aplikacji lub znalezienia błędów użytkonik proszony jest o kontakt z twórcą i opisanie problemu.',
        },
      ],
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
