import axios from 'axios';
import state from './state';

const updateResult = ({ commit }, value) => {
  commit('updateResult', value);
};

const updateCategory = ({ commit }, value) => {
  commit('switchCategory', value);
};

const updateCurrentCategory = ({ commit }, currentCategory) => {
  commit('currentCategory', currentCategory);
};

const resetResult = ({ commit }) => {
  commit('resetResult', state.resultCopy);
};

const queryUpdate = ({ commit }, query) => {
  commit('query', query);
};

const cityUpdate = ({ commit }, city) => {
  commit('city', city);
};

const switchCategory = ({ dispatch }, parameters) => {
  const item = {
    category: parameters.category,
    city: parameters.city,
  };

  dispatch('getProfilesData', item);
};

const shuffle = (dataArray) => {
  const h = dataArray;
  let m = h.length;
  let t;
  let i;

  while (m) {
    m -= 1;
    i = Math.floor(Math.random() * m);
    t = h[m];
    h[m] = h[i];
    h[i] = t;
  }
};

const getProfilesData = ({ commit, dispatch }, parameters) => {
  const queryStringParameters = parameters;
  let url = null;
  const emptyArray = [];

  dispatch('showLoader', true);
  commit('resultCopy', state.result);
  dispatch('showPaginigButton', false);

  if (queryStringParameters.category) {
    queryStringParameters.city = encodeURIComponent(queryStringParameters.city);
    url = `/api/search-profiles?city=${queryStringParameters.city}&query=null&category=${queryStringParameters.category}`;
  } else {
    queryStringParameters.query = encodeURIComponent(queryStringParameters.query);
    queryStringParameters.city = encodeURIComponent(queryStringParameters.city);
    url = `/api/search-profiles?city=${queryStringParameters.city}&query=${queryStringParameters.category}`;
  }

  axios.get(url)
    .then((response) => {
      if (!response.data.data || response.data.data.length === 0) {
        commit('showEmptyResultsAlert', true);
        dispatch('showLoader', false);
      } else {
        commit('showEmptyResultsAlert', false);
        commit('getProfilesData', emptyArray);

        if (state.showErrorConnectionAlert) {
          commit('showErrorConnectionAlert', false);
        }

        dispatch('shuffle', response.data.data);
        dispatch('generateModalImage', response.data.data.length);
        dispatch('setProposedTags', response.data.data);
        dispatch('checkIsPaging', response.data);
        commit('getProfilesData', response.data.data);
        commit('resultCopy', state.result);

        dispatch('showLoader', false);
      }
    }).catch(() => {
      // error
      // console.log(error);
    });
};

// const getPagingProfilesData = ({ commit , dispatch }, parameters) => {
//
// };

// const checkIsPaging = ({ commit, dispatch }, data) => {
//
// }

// const setProposedTags = ({ commit, dispatch }, data) => {
//
// }

// const setPredefinedTags = ({ commit, dispatch }, category) => {
//
// }

// const removeDuplicates = ({ commit, dispatch }, arr) => {
//
// }

// const sort = ({ commit }, arr ) => {
//
// }

const numberOfTags = ({ commit }, value) => {
  commit('numberOfTags', value);
};

const showLoader = ({ commit }, value) => {
  commit('showLoader', value);
};

const postLoaderButton = ({ commit }, value) => {
  commit('postLoaderButton', value);
};

const updateShowProfileDetailsDialog = ({ commit }, value) => {
  commit('showProfileDetailsDialog', value);
};

const showProfileDetailsDialogMobile = ({ commit }, value) => {
  commit('showProfileDetailsDialogMobile', value);
};

const showPagingButtonLoader = ({ commit }, value) => {
  commit('showPagingButtonLoader', value);
};

const updateShowTagSection = ({ commit }, value) => {
  commit('showTagSection', value);
};

const showPaginigButton = ({ commit }, value) => {
  commit('showPaginigButton', value);
};

const closeModalImage = ({ commit }, index) => {
  commit('closeModalImage', index);
};

const openModalImage = ({ commit }, index) => {
  commit('openModalImage', index);
};

// const generateModalImage = ({ commit }, value) => {
//
// }
//
// const generatePagingModalImage = ({ commit }, items) => {
//
// }

// const getProfilePosts = ({ commit, dispatch}, idProfile) => {
//
// }

export {
  updateResult,
  updateCategory,
  updateCurrentCategory,
  resetResult,
  queryUpdate,
  cityUpdate,
  switchCategory,
  shuffle,
  getProfilesData,
  // getPagingProfilesData,
  numberOfTags,
  showLoader,
  postLoaderButton,
  updateShowProfileDetailsDialog,
  showProfileDetailsDialogMobile,
  showPagingButtonLoader,
  updateShowTagSection,
  showPaginigButton,
  closeModalImage,
  openModalImage,
};
