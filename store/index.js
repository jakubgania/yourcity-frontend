/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import searchProfiles from './modules/profiles-search';
import autocomplete from './modules/autocomplete';

// axios.defaults.baseURL = 'http://192.168.0.14';
axios.defaults.baseURL = 'https://api.yourcity.io';

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    locales: ['en', 'pl'],
    locale: 'en',
  },
  mutations: {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale;
      }
    },
  },
  modules: {
    searchProfiles,
    autocomplete
  },
});
