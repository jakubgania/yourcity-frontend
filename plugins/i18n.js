/* eslint-disable */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'pl',
    messages: {
      'en': {
        'html':             require('~/locales/en/html.json'),
        'header':           require('~/locales/en/header.json'),
        'rules-dialog':     require('~/locales/en/rules-dialog.json'),
        'home':             require('~/locales/en/home.json'),
        'profiles-search':  require('~/locales/en/profiles-search.json'),
        'countries':        require('~/locales/en/countries.json'),
        'photos':           require('~/locales/en/photos.json'),
        'contact':          require('~/locales/en/contact.json'),
        'changelog':        require('~/locales/en/changelog.json'),
        'business':         require('~/locales/en/business.json'),
        'example-profile':  require('~/locales/en/example-profile.json'),
        'project':          require('~/locales/en/project.json'),
        'founder':          require('~/locales/en/founder.json'),
        'agreements':       require('~/locales/en/agreements.json'),
        'routes-names':     require('~/locales/en/routes-names.json'),
        'categories':       require('~/locales/en/categories.json'),
        'footer':           require('~/locales/en/footer.json'),
        'alerts':           require('~/locales/en/alerts.json')
      },
      'pl': {
        'html':             require('~/locales/pl/html.json'),
        'header':           require('~/locales/pl/header.json'),
        'rules-dialog':     require('~/locales/pl/rules-dialog.json'),
        'home':             require('~/locales/pl/home.json'),
        'profiles-search':  require('~/locales/pl/profiles-search.json'),
        'countries':        require('~/locales/pl/countries.json'),
        'photos':           require('~/locales/pl/photos.json'),
        'contact':          require('~/locales/pl/contact.json'),
        'changelog':        require('~/locales/pl/changelog.json'),
        'business':         require('~/locales/pl/business.json'),
        'example-profile':  require('~/locales/pl/example-profile.json'),
        'project':          require('~/locales/pl/project.json'),
        'founder':          require('~/locales/pl/founder.json'),
        'agreements':       require('~/locales/pl/agreements.json'),
        'routes-names':     require('~/locales/pl/routes-names.json'),
        'categories':       require('~/locales/pl/categories.json'),
        'footer':           require('~/locales/pl/footer.json'),
        'alerts':           require('~/locales/pl/alerts.json')
      },
      'de': {
        'html':             require('~/locales/de/html.json'),
        'header':           require('~/locales/de/header.json'),
        'rules-dialog':     require('~/locales/de/rules-dialog.json'),
        'home':             require('~/locales/de/home.json'),
        'profiles-search':  require('~/locales/de/profiles-search.json'),
        'countries':        require('~/locales/de/countries.json'),
        'photos':           require('~/locales/de/photos.json'),
        'contact':          require('~/locales/de/contact.json'),
        'changelog':        require('~/locales/de/changelog.json'),
        'business':         require('~/locales/de/business.json'),
        'example-profile':  require('~/locales/de/example-profile.json'),
        'project':          require('~/locales/de/project.json'),
        'founder':          require('~/locales/de/founder.json'),
        'agreements':       require('~/locales/de/agreements.json'),
        'routes-names':     require('~/locales/de/routes-names.json'),
        'categories':       require('~/locales/de/categories.json'),
        'footer':           require('~/locales/de/footer.json'),
        'alerts':           require('~/locales/de/alerts.json')
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
