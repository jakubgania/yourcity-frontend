/* eslint-disable */

import Vue                 from 'vue';
import Vuex                from 'vuex';
import axios               from 'axios';

import VueClazyLoad        from 'vue-clazy-load';

import globalVariables     from './modules/global-variables';
import searchProfiles      from './modules/profiles-search';
import autocomplete        from './modules/autocomplete';
import photos              from './modules/photos';
import changelog           from './modules/changelog';
import contact             from './modules/contact';

const baseUrlProduction    = 'https://api.yourcity.io';
const baseUrlDevelopment   = 'http://192.168.2.111';

if (process.env.NODE_ENV == 'production')
  axios.defaults.baseURL = baseUrlProduction;
else
  axios.defaults.baseURL = baseUrlDevelopment;

Vue.use(VueClazyLoad);
Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    locales: ['en', 'pl', 'de'],
    locale: 'pl',
  },
  mutations: {
    setLanguage(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale;
      }
    },
  },
  modules: {
    globalVariables,
    searchProfiles,
    autocomplete,
    photos,
    changelog,
    contact
  },
});
