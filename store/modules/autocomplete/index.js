/* eslint-disable */

import axios from 'axios';

const state = {
  queryItems: ['No items'],
  cityItems: [
    { name: 'Current location', value: 'Current location' },
  ],
};

const getters = {
  queryItems: state => {
    return state.queryItems;
  },
  cityItems: state => {
    return state.cityItems;
  }
}

const actions = {
  autocompleteQuery({ commit }, query) {
    axios.get(`/api/autocomplete-query?hl=pl&query=${query}`)
      .then((response) => {
        commit('queryItems', response.data);
      })
      .catch(() => {
        //
      });
  },
  autocompleteCity({ commit }, city) {
    axios.get(`/api/autocomplete-city?query=${city}`)
      .then((response) => {
        commit('cityItems', response.data);
      })
      .catch(() => {
        //
      });
  },
};

const mutations = {
  queryItems(state, value) {
    state.queryItems = value;
  },
  cityItems(state, value) {
    state.cityItems = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
