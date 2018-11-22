/* eslint-disable */

import axios from 'axios'

const state = {
  sending: false,
  networkError: false
}

const getters = {
  sending: state => {
    return state.sending
  },
  networkError: state => {
    return state.networkError
  }
}

const actions = {
  sendContactForm({ commit }, parameters) {
    commit('sending', true);
    commit('networkError', false);

    axios.post('/api/contact?title=' + parameters.title + '&email=' + parameters.email
    + '&message=' + parameters.message + '&terms=' + parameters.terms)
    .then(response => {
      commit('sending', false);
    })
    .catch((error) => {
      commit('sending', false);
      commit('networkError', true);
    })
  }

}

const mutations = {
  sending(state, value) {
    state.sending = value
  },
  networkError(state, value) {
    state.networkError = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
