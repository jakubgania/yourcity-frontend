<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="contact-container">
    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        Kontakt
      </div>
    </v-flex>

    <v-flex xs12 sm12 md12 lg12>
      <v-form ref="form" @submit.prevent="submit">
        <v-layout row wrap class="contact-form-section">

          <v-flex xs12 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4 class="section">
            <v-text-field
              ref="title"
              v-model="title"
              :label="text.label_title"
              :rules="rules.title"
              required
              counter="80"
            />
          </v-flex>

          <v-flex xs12 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4 class="section">
            <v-text-field
              ref="email"
              v-model="email"
              :label="text.label_email"
              :rules="rules.email"
              required
            />
          </v-flex>

          <v-flex xs12 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4 class="section">
            <v-textarea
              ref="message"
              v-model="message"
              :label="text.label_message"
              :rules="rules.message"
              rows="10"
              required
              counter="1200"
              spellcheck="false"
            />
          </v-flex>

          <v-flex xs12 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4 class="section">
            <v-checkbox
              ref="terms"
              v-model="terms"
              :label="text.label_checkbox"
              :rules="rules.terms"
              color="green"
            />
          </v-flex>

          <v-flex xs12 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4>
            <div class="" style="margin-bottom:24px;">
              CAPTCHA
            </div>
          </v-flex>

          <v-flex xs12 sm8 offset-sm2 md4 offset-md4 lg4 offset-lg4>
            <v-btn
              :disabled="sending"
              :loading="sending"
              type="submit"
              large
              block
              color="white"
              style="font-size:12px;font-weight:400;letter-spacing:2px;margin-top:24px;"
              @click="sending = true"
            >
              wyślij
            </v-btn>
          </v-flex>

          <v-snackbar
            :timeout="timeout"
            v-model="snackbarSuccess"
            color="green"
            style="letter-spacing:1px;"
          >
            Wiadomość wysłana.
            <v-btn dark flat @click.native="snackbarSuccess = false">zamknij</v-btn>
          </v-snackbar>

          <v-snackbar
            :timeout="timeout"
            v-model="snackbarError"
            color="red"
            style="letter-spacing:1px;"
          >
            Wystąpił błąd.
            <v-btn dark flat @click.native="snackbarSuccess = false">zamknij</v-btn>
          </v-snackbar>

        </v-layout>
      </v-form>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      title: null,
      email: null,
      message: null,
      terms: null,
      parameters: null,
      formHasErrors: false,
      timeout: 2400,
      snackbarSuccess: false,
      snackbarError: false,
      rules: {
        title: [
          () => !!this.title || 'This field is required title',
        ],
        email: [
          () => !!this.email || 'This field is required email',
        ],
        message: [
          () => !!this.message || 'This field is required message',
        ],
        terms: [
          () => !!this.terms || 'This field is required terms',
        ],
      },
      text: {
        title_page: 'Formularz kontaktowy',
        label_title: 'Tytuł widomości',
        label_email: 'E-mail',
        label_message: 'Wiadomości',
        label_checkbox: 'Wyrażam zgodę na kontakt drogą elektroniczną na podany e-mail.',
        send_button: 'WYŚLIJ',
      },
    };
  },
  computed: {
    ...mapGetters('contact', [
      'sending',
      'networkError',
    ]),
    ...mapGetters({
      basicServerAddressAPI: 'basicServerAddressAPI',
    }),
    sendingModel: {
      get() {
        return this.$store.state.contact.sending;
      },
      set(value) {
        this.$store.contact.commit('sending', value);
      },
    },
    form() {
      return {
        title: this.title,
        email: this.email,
        message: this.message,
        terms: this.terms,
      };
    },
  },
  methods: {
    ...mapActions('contact', [
      'sendContactForm',
    ]),
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });

      if (this.formHasErrors) {
        // alert('false');
      } else {
        const parameters = {
          title: this.title,
          email: this.email,
          message: this.message,
          terms: this.terms,
        };

        this.$store.dispatch('contact/sendContactForm', parameters);
      }
    },
  },
  head() {
    return {
      title: this.$t('contact.head.title'),
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
.contact-container
{
    min-height: calc(100vh - 64px);
    height: auto;
    background-color: #ffffff;
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
.section
{
    margin-bottom: 40px;
}
.contact-form-section
{
    margin-bottom: 140px;
}
</style>
