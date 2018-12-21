<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <v-dialog v-model="dialog" persistent max-width="440">
    <v-card>
      <v-card-title class="headline">
        Szanowny Użytkowniku
        <v-spacer/>
        <v-icon style="cursor:default;" @click="accept()">close</v-icon>
      </v-card-title>
      <v-card-text style="letter-spacing:1px;">
        Klikając „Akceptuję” lub zamykając okno przez kliknięcie w
        znaczek X, zgadzasz się na poniższe warunki.
      </v-card-text>
      <v-card-title class="title">
        Pliki Cookies
      </v-card-title>
      <v-card-text style="letter-spacing:1px;">
        Strona wykorzystuje pliki cookie oraz usługę Google Analytics jedynie
        w celach statystycznych do analizowania ruchu sieciowego.
        Wykorzystywany jest również mechanizm local storage do poprawnego
        działania aplikacji Yourcity.
      </v-card-text>
      <v-card-title class="title">
        Regulamin
      </v-card-title>
      <v-card-text style="letter-spacing:1px;">
        Regualmin opisuje reguły i zasady dotyczące platformy Yourcity.
        Użytkownik potwierdza, że rozumie i akceptuje regualmin dostępny pod
        następującym adresem -
        <a :href="link()" target="_blank">
          https://yourcity.io/agreements
        </a>
      </v-card-text>
      <v-card-title class="title">
        Lokalizacja
      </v-card-title>
      <v-card-text style="letter-spacing:1px;">
        Obecna lokalizacja może być wykorzystana za zgodą użytkownika do
        realizacji funkcjonalności związanych z wyszukiwaniem.
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="green darken-1"
          flat
          class="accept-button"
          @click="accept()"
        >
          Akceptuję
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  created() {
    let confirmation = false;
    confirmation = localStorage.getItem('confirmation');

    if (confirmation) {
      this.dialog = false;
    } else {
      this.dialog = true;
    }
  },
  methods: {
    accept() {
      localStorage.setItem('confirmation', true);
      this.dialog = false;
    },
    link() {
      return `/${this.$i18n.locale}/agreements`;
    },
  },
};
</script>

<style lang="scss" scoped>
.accept-button
{
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
