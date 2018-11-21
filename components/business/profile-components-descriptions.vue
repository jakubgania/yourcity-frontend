<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap>
    <v-flex lg12>
      <v-layout row wrap class="categories-title-section">
        <v-flex lg8 offset-lg2>
          <div class="text-thin-big categories-title">
            Profil może być złożony z różnych sekcji.
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex lg12 style="padding-top:80px;padding-bottom:80px;background-color:white;">
      <v-layout
        v-for="option in descriptions.options_descriptions"
        :key="option.id"
        row
        wrap
      >
        <v-flex lg6 offset-lg3>
          <div class="option-title">
            {{ option.title }}
          </div>
        </v-flex>
        <v-flex lg6 offset-lg3>
          <div class="" style="text-align:center;font-size:20px;">
            {{ option.description }}
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      descriptions: {
        options_descriptions: [
          {
            title: 'Informacje podstawowe',
            description: 'W tej sekcji znajdują się informacje o nazwie,opisie profilu, kategorii w jakiej się znajduje oraz dacie utworzenia profilu i ostatniej modyfikacji.',
          },
          {
            title: 'Adres',
            description: 'W tej skecji można umieścić informacje takie jak miasto, ulica czy kod pocztowy.',
          },
          {
            title: 'Galeria',
            description: 'W galerii można zamieszczać zdjęcia oraz grafiki wraz z opisami.',
          },
          {
            title: 'Godziny otwarcia',
            description: 'W tej sekcji można zdefiniować godziny otwarcia w danym dniu tygodnia.',
          },
          {
            title: 'Kontakt',
            description: 'W tej sekcji można zdefiniować numery telefonów, adresy e-mail lub adres strony internetowej.',
          },
          {
            title: 'Informacje dodatkowe',
            description: 'W tej sekcji można zamieścić informacje o np. obsługiwanych rodzajach płatności.',
          },
          {
            title: 'Inne media',
            description: 'W tej sekcji można umieścić adresy profil w social mediach lub innych portalach.',
          },
          {
            title: 'Tagi',
            description: 'To sekcja w której można zdefiniować słowa kluczowe charakteryzujące dany profil tzn. biznes jaki ma być przedstawiony na profilu.',
          },
          {
            title: 'Aplikacje mobile',
            description: 'Sekcja w której można umieścić linki do pobrania aplikacji mobilnych.',
          },
          {
            title: 'Lokalizacja',
            description: 'Jest to mapa reprezentująca pozycję Twojego biznesu na mapie',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.text-thin-big
{
  text-align: center;
  margin-top: 160px;
  margin-bottom: 160px;
  font-size: 40px;
  font-weight: 700;
}
.categories-title-section
{
  background-color: #B0BEC5;

  .categories-title
  {
    color: #37474F;
  }
}
.option-title
{
  text-align:center;
  font-size:28px;
  font-weight:700;
  padding-top:14px;
  padding-bottom:14px;
}
</style>
