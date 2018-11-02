import axios from 'axios';
import state from './state';

import categoryTags from '../../../json/tags.json';

const updateResult = ({ commit }, value) => {
  commit('updateResult', value);
};

const updateCategory = ({ commit }, value) => {
  commit('switchCategory', value);
};

const updateCurrentCategory = ({ commit }, currentCategory) => {
  commit('currentCategory', currentCategory);
};

const resetResult = ({ commit }, resultCopy) => {
  commit('resetResult', resultCopy);
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

  dispatch('showFullScreenLoader', true);
  // commit('resultCopy', state.result);
  dispatch('showPaginigButton', false);

  if (queryStringParameters.category) {
    queryStringParameters.city = encodeURIComponent(queryStringParameters.city);
    url = `/api/profiles-search?city=${queryStringParameters.city}&query=null&category=${queryStringParameters.category}`;
  } else {
    queryStringParameters.query = encodeURIComponent(queryStringParameters.query);
    queryStringParameters.city = encodeURIComponent(queryStringParameters.city);
    url = `/api/profiles-search?city=${queryStringParameters.city}&query=${queryStringParameters.query}`;
  }

  axios.get(url)
    .then((response) => {
      if (!response.data.data || response.data.data.length === 0) {
        commit('showEmptyResultsAlert', true);
        dispatch('showFullScreenLoader', false);
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
        commit('resultCopy', response.data.data);

        dispatch('showFullScreenLoader', false);
      }
    }).catch(() => {
      // error
      // console.log(error);
    });
};

const getPagingProfilesData = ({ commit, dispatch }, urlparameters) => {
  const parameters = urlparameters;
  let url = null;
  dispatch('showPagingButtonLoader', true);
  parameters.url = encodeURIComponent(parameters.url);

  url = `/api/profiles-search/paging?query=${parameters.query}&city=${parameters.city}&category=${parameters.category}&paging-url=${parameters.url}`;

  axios.get(url)
    .then((response) => {
      const items = {
        result: state.result.length,
        loop: response.data.data.length,
      };

      dispatch('generatePagingModalImage', items);
      commit('getPagingProfilesData', response.data.data);
      dispatch('checkIsPaging', response.data);
      // dispatch('setProposedTags', state.result);
      dispatch('showPagingButtonLoader', false);
    }).catch(() => {
      dispatch('showPagingButtonLoader', false);
      // this.errors.push(e)
    });
};

const checkIsPaging = ({ commit, dispatch }, data) => {
  // if (data.hasOwnProperty('paging')) {
  // if (data.Object.prototype.hasOwnProperty.call(foo, 'paging')) {
  if (data.paging) {
    dispatch('showPaginigButton', true);
    commit('pagingURL', data.paging.next);
  } else {
    dispatch('showPaginigButton', false);
  }
};

const setProposedTags = ({ commit, dispatch }, data) => {
  let numberOfResults = 0;
  const arrayResult = []; // const ??

  numberOfResults = data.length;

  if (numberOfResults > 0) {
    for (let i = 0; i < numberOfResults; i += 1) {
      if (data[i].category_list) {
        const dataCategoryListLengthArray = data[i].category_list.length;

        for (let p = 0; p < dataCategoryListLengthArray; p += 1) {
          arrayResult.push(data[i].category_list[p].name);
        }
      }
    }

    dispatch('removeDuplicates', arrayResult);
    // dispatch('sort', state.proposedTags );
    commit('showTagSection', true);
  } else {
    commit('showTagSection', false);
  }
};

const setPredefinedTags = ({ commit, dispatch }, category) => {
  dispatch('numberOfTags', categoryTags.tags[category].length);
  commit('proposedTags', categoryTags.tags[category]);
};

const removeDuplicates = ({ commit, dispatch }, arr) => {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  commit('proposedTags', uniqueArray);

  if (uniqueArray.length > 14) {
    dispatch('numberOfTags', 14);
  } else {
    dispatch('numberOfTags', uniqueArray.length);
  }
};

const sort = ({ commit }, arr) => {
  arr.sort((a, b) => a.length - b.length);
  commit('proposedTags', arr);
};

const numberOfTags = ({ commit }, value) => {
  commit('numberOfTags', value);
};

const showFullScreenLoader = ({ commit }, value) => {
  commit('showFullScreenLoader', value);
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

const generateModalImage = ({ commit }, value) => {
  const jsObj = {};

  for (let i = 0; i < value; i += 1) {
    jsObj[`key${i}`] = false;
  }

  commit('showModalImage', jsObj);
};

const generatePagingModalImage = ({ commit }, items) => {
  const object = {};
  let keyNumber = null;

  for (let p = 0; p < items.loop; p += 1) {
    keyNumber = items.result + p;
    object[`key${keyNumber}`] = false;
  }

  commit('showPagingModalImage', object);
};

const getProfilePosts = ({ commit, dispatch }, idProfile) => {
  const id = idProfile;
  let url = null;
  dispatch('postLoaderButton', true);

  url = `/api/search-profiles/posts?id-profile=${id}`;

  axios.get(url)
    .then((response) => {
      commit('profilePosts', response.data.data);
      dispatch('postLoaderButton', false);
      dispatch('updateShowProfileDetailsDialog', true);
    }).catch(() => {
      // this.errors.push(e)
      commit('profilePosts', null);
      dispatch('postLoaderButton', false);
    });
};

export {
  updateResult,
  updateCategory,
  resetResult,
  queryUpdate,
  cityUpdate,
  switchCategory,
  updateCurrentCategory,
  shuffle,
  getProfilesData,
  getPagingProfilesData,
  setProposedTags,
  numberOfTags,
  removeDuplicates,
  showFullScreenLoader,
  postLoaderButton,
  updateShowProfileDetailsDialog,
  showProfileDetailsDialogMobile,
  showPagingButtonLoader,
  updateShowTagSection,
  showPaginigButton,
  generateModalImage,
  generatePagingModalImage,
  closeModalImage,
  openModalImage,
  sort,
  setPredefinedTags,
  getProfilePosts,
  checkIsPaging,
};
