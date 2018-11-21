/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import globalVariables from './modules/global-variables';
import searchProfiles from './modules/profiles-search';
import autocomplete from './modules/autocomplete';
import photos from './modules/photos';
import changelog from './modules/changelog';

if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://api.yourcity.io';
} else {
  axios.defaults.baseURL = 'http://192.168.0.15';
}


Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    locales: ['en', 'pl'],
    locale: 'pl',
  },
  mutations: {
    SET_LANG(state, locale) {
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
    changelog
  },
});
