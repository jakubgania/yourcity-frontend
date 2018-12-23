<template>
  <v-layout row wrap class="contact-container">

    <v-flex xs12 lg4 offset-lg4>
      <div class="title-page">
        {{ $t('contact.title') }}
      </div>
    </v-flex>
    <v-flex xs12 lg4 offset-lg4>
      <div class="subtitle-page">
        {{ $t('contact.subtitle') }}
      </div>
    </v-flex>
    <v-flex xs12 lg4 offset-lg4>
      <div class="subtitle-page">
        <v-alert
          :value="true"
          type="error"
        >
          The contact form is not working yet.
        </v-alert>
      </div>
    </v-flex>

    <v-flex xs12 sm12 md12 lg12>
      <v-form ref="form" @submit.prevent="submit">
        <v-layout row wrap class="contact-form-section">

          <v-flex lg12 class="contact-form">
            <v-form ref="form" method="POST" @submit.prevent="submit">
              <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 class="section">
                <v-text-field
                  ref="title"
                  v-model="title"
                  :label="text.label_title"
                  :rules="rules.title"
                  :error-messages="errorMessageTtile"
                  prepend-icon="person"
                  name="title"
                  type="text"
                  required
                  counter="40"
                />
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 class="section">
                <v-text-field
                  ref="email"
                  v-model="email"
                  :rules="rules.email"
                  :error-messages="errorMessageEmail"
                  label="E-mail"
                  prepend-icon="alternate_email"
                  name="login"
                  type="text"
                  required
                />
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 class="section">
                <v-textarea
                  ref="message"
                  v-model="message"
                  :label="text.label_message"
                  :rules="rules.message"
                  :error-messages="errorMessageMessage"
                  prepend-icon="message"
                  name="message"
                  type="text"
                  required
                  counter="1000"
                />
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 class="section">
                <v-checkbox
                  ref="terms"
                  v-model="terms"
                  :label="text.label_checkbox"
                  :rules="rules.terms"
                  :error-messages="errorMessageTerms"
                  color="green"
                />
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 class="section">
                <div style="text-align:center;">
                  <div
                    class="g-recaptcha"
                    data-theme="dark"
                    data-callback="recaptchaCallback"
                    data-sitekey="6Lf_MH4UAAAAAKnH6EzLo0zU3FpYNOYwkcUcOjUR"
                  />
                </div>
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 class="section">
                <v-btn
                  type="submit"
                  name="submit"
                  value="SUBMIT"
                  depressed
                  large
                  block
                  style="letter-spacing:2px;font-size:12px;"
                >
                  {{ $t('contact.send-button') }}
                  <v-icon style="margin-left:4px;font-size:20px;">send</v-icon>
                </v-btn>
              </v-flex>
            </v-form>
          </v-flex>

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
      errorMessageTtile: '',
      errorMessageEmail: '',
      errorMessageMessage: '',
      errorMessageTerms: '',
      rules: {
        title: [
          () => !!this.title || this.$t('contact.rules.title'),
        ],
        email: [
          () => !!this.email || this.$t('contact.rules.email'),
        ],
        message: [
          () => !!this.message || this.$t('contact.rules.message'),
        ],
        terms: [
          () => !!this.terms || this.$t('contact.rules.terms'),
        ],
      },
      text: {
        label_title: this.$t('contact.label.title_message'),
        label_email: this.$t('contact.label.email'),
        label_message: this.$t('contact.label.message'),
        label_checkbox: this.$t('contact.label.checkbox'),
        send_button: this.$t('contact.send-button'),
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
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('contact.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('contact.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/contact/contact.scss';
</style>
