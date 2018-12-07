/* eslint-disable */

import axios from 'axios';

const state = {
  thumbnails: [],
  photoDetails: [],
  photoFullSizeDetails: [],
  showPhotosPageLoader: false,
  showGalleryLoader: false,
  showPagingMoreButtonLoader: false,
  pagingPhotosURL: false,
  showErrorConnectionAlert: false
};

const getters = {
  thumbnails: state => {
    return state.thumbnails
  },
  photoDetails: state => {
    return state.photoDetails
  },
  photoFullSizeDetails: state => {
    return state.photoFullSizeDetails
  },
  showPhotosPageLoader: state => {
    return state.showPhotosPageLoader
  },
  showGalleryLoader: state => {
    return state.showGalleryLoader
  },
  showPagingMoreButtonLoader: state => {
    return state.showPagingMoreButtonLoader
  },
  pagingPhotosURL: state => {
    return state.pagingPhotosURL
  },
  showErrorConnectionAlert: state => {
    return state.showErrorConnectionAlert
  }
}

const actions = {
  getPhotos({ commit, dispatch }, url) {
    dispatch('showPhotosPageLoader', true);
    dispatch('showErrorConnectionAlert', false);

    axios.get(url)
    .then(response => {
      commit('photoDetails', response.data.data);

      if (response.data.paging) {
        commit('pagingPhotosURL', response.data.paging);
      }

      dispatch('showPhotosPageLoader', false);
    })
    .catch(e => {
      // this.errors.push(e);
      dispatch('showPhotosPageLoader', false);
      dispatch('showErrorConnectionAlert', true);
    })
  },
  getPhotoDeatils({ commit, dispatch }, url) {
    dispatch('showGalleryLoader', true);
    dispatch('showErrorConnectionAlert', false);

    axios.get(url)
    .then(response => {
      commit('photoFullSizeDetails', response.data);
      dispatch('showGalleryLoader', false);
      dispatch('showErrorConnectionAlert', false);
    })
    .catch(e => {
      dispatch('showGalleryLoader', false);
      dispatch('showErrorConnectionAlert', true);
      // this.errors.push(e)
    })
  },
  pagingPhotoGallery({ commit, dispatch}, url) {
    dispatch('showPagingMoreButtonLoader', true);

    axios.get( url )
    .then(response => {
      commit('pagingPhotos', response.data.data);

      if (response.data.paging) {
        commit('pagingPhotosURL', response.data.paging);
      } else {
        commit('pagingPhotosURL', null);
      }

      dispatch('showPagingMoreButtonLoader', false);
    })
    .catch(e => {
      // this.errors.push(e)
    })
  },
  pagingPhotosURL({commit}, value) {
    commit('pagingPhotosURL', value)
  },
  showPhotosPageLoader({ commit }, value) {
    commit('showPhotosPageLoader', value)
  },
  showGalleryLoader({ commit }, value ) {
    commit('showGalleryLoader', value)
  },
  showPagingMoreButtonLoader({ commit }, value) {
    commit('showPagingMoreButtonLoader', value)
  },
  showErrorConnectionAlert({ commit }, value) {
    commit('showErrorConnectionAlert', value)
  }
}

const mutations = {
  thumbnails(state, data) {
    state.thumbnails = data
  },
  photoDetails(state, data) {
    state.photoDetails = data
  },
  photoFullSizeDetails(state, data) {
    state.photoFullSizeDetails = data
  },
  pagingPhotosURL(state, data) {
    state.pagingPhotosURL = data
  },
  pagingPhotos(state, data) {
    state.photoDetails = state.photoDetails.concat(data)
  },
  showPhotosPageLoader(state, value) {
    state.showPhotosPageLoader = value
  },
  showGalleryLoader(state, value) {
    state.showGalleryLoader = value;
  },
  showPagingMoreButtonLoader(state, value) {
    state.showPagingMoreButtonLoader = value
  },
  showErrorConnectionAlert(state, value) {
    state.showErrorConnectionAlert = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
