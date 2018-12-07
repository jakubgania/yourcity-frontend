/* eslint-disable */

import axios from 'axios';

const state = ({
  posts: [],
  pagingURL: null,
  showPagingButton: false,
  showPagingButtonLoader: false,
  showPageLoader: false,
  networkError: false,
  networkErrorPaging: false,
})

const getters = {
  posts: state => {
    return state.posts
  },
  pagingURL: state => {
    return state.pagingURL
  },
  showPagingButton: state => {
    return state.showPagingButton
  },
  showPagingButtonLoader: state => {
    return state.showPagingButtonLoader
  },
  showPageLoader: state => {
      return state.showPageLoader
  },
  networkError: state => {
    return state.networkError
  },
  networkErrorPaging: state => {
    return state.networkErrorPaging
  }
}

const actions = {
  getPosts({commit, dispatch}) {
    commit('showPageLoader', true);
    axios.get('/api/changelog?start=0&offset=4')
    .then(response => {
      commit('posts', response.data.data);
      dispatch('checkIsPaging', response.data.paging);
      commit('showPageLoader', false);
    })
    .catch(e => {
      commit('networkError', true);
      commit('showPageLoader', false);
    })
  },
  getPagingPosts({ commit, dispatch }, url) {
    commit('showPagingButtonLoader', true);

    axios.get(url)
    .then(response => {
      commit('pagingPosts', response.data.data);
      dispatch('checkIsPaging', response.data.paging);
      commit('showPagingButtonLoader', false);
    })
    .catch(e => {
      commit('networkErrorPaging', true);
      commit('showPagingButtonLoader', false);
    })
  },
  checkIsPaging({ commit }, paging) {
    if (paging) {
      commit('pagingURL', paging);
      commit('showPagingButton', true);
    } else {
      commit('showPagingButton', false);
    }
  }
}

const mutations = {
  posts(state, data) {
    state.posts = data
  },
  pagingPosts(state, data) {
    state.posts = state.posts.concat(data)
  },
  pagingURL(state, data) {
    state.pagingURL = data
  },
  showPagingButton(state, value) {
    state.showPagingButton = value
  },
  showPagingButtonLoader(state, value) {
    state.showPagingButtonLoader = value
  },
  showPageLoader(state, value) {
      state.showPageLoader = value
  },
  networkError(state, value) {
    state.networkError = value
  },
  networkErrorPaging(state, value) {
    state.networkErrorPaging = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
