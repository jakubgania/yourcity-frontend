// import axios from 'axios';
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

// const getProfilesData = ({ commit, dispatch }, queryStringParameters) => {
//
//   // function to check if it exists category in queryStringParameters
//
//   axios.get(url)
//     .then((response) => {
//       // response ok
//     }).catch((error) => {
//       // error
//     });
// };

export default {
  updateResult,
  updateCategory,
  updateCurrentCategory,
  resetResult,
  queryUpdate,
  cityUpdate,
  switchCategory,
  // getProfilesData,
};
