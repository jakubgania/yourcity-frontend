/* eslint-disable */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'pl',
    messages: {
      'en': require('~/locales/en.json'),
      'pl': require('~/locales/pl.json'),
      'de': {
        'rules-dialog': require('~/locales/de/rules-dialog.json'),
        'home': require('~/locales/de/home.json'),
        'profiles-search': require('~/locales/de/profiles-search.json'),
        'example-profile': require('~/locales/de/example-profile.json'),
        'agreements': require('~/locales/de/agreements.json'),
        'photos': require('~/locales/de/photos.json'),
        'countries': require('~/locales/de/countries.json'),
        'project': require('~/locales/de/project.json'),
        'founder': require('~/locales/de/founder.json'),
        'changelog': require('~/locales/de/changelog.json'),
        'contact': require('~/locales/de/contact.json'),
        'business': require('~/locales/de/business.json'),
        'routes-names': require('~/locales/de/routes-names.json'),
        'categories': require('~/locales/de/categories.json'),
        'footer': require('~/locales/de/footer.json'),
        'general': require('~/locales/de/general.json'),
      }
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
