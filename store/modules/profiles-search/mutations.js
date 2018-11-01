/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ['state'] }] */

const city = (state, value) => {
  state.city = value;
};

const query = (state, value) => {
  state.query = value;
};

const cityInput = (state, value) => {
  state.city = value;
};

const queryInput = (state, value) => {
  state.query = value;
};

const switchCategory = (state, value) => {
  state.category = value;
};

const currentCategory = (state, value) => {
  state.currentCategory = value;
};

const showFullScreenLoader = (state, value) => {
  state.showFullScreenLoader = value;
};

const showProfileDetailsDialog = (state, value) => {
  state.showProfileDetailsDialog = value;
};

const showProfileDetailsDialogMobile = (state, value) => {
  state.showProfileDetailsDialogMobile = value;
};

const postLoaderButton = (state, value) => {
  state.postLoaderButton = value;
};

const showTagSection = (state, value) => {
  state.showTagSection = value;
};

const showPaginigButton = (state, value) => {
  state.showPaginigButton = value;
};

const showPagingButtonLoader = (state, value) => {
  state.showPagingButtonLoader = value;
};

const pagingURL = (state, value) => {
  state.pagingURL = value;
};

const getProfilesData = (state, value) => {
  state.result = value;
};

const getPagingProfilesData = (state, value) => {
  state.result = state.result.concat(value);
};

const profilePosts = (state, value) => {
  state.profilePosts = value;
};

const showModalImage = (state, value) => {
  state.showModalImage = value;
};

const showPagingModalImage = (state, value) => {
  state.showModalImage = Object.assign(state.showModalImage, value);
};

const closeModalImage = (state, index) => {
  // state.showModalImage['key' + index] = false;
  state.showModalImage[`key${index}`] = false;
};

const openModalImage = (state, index) => {
  // state.showModalImage['key' + index] = true;
  state.showModalImage[`key${index}`] = true;
};

const updateResult = (state, value) => {
  state.result = value;
};

const resultCopy = (state, value) => {
  state.resultCopy = value;
};

const resetResult = (state, value) => {
  state.result = value;
};

const proposedTags = (state, value) => {
  state.proposedTags = value;
};

const numberOfTags = (state, value) => {
  state.numberOfTags = value;
};

const showEmptyResultsAlert = (state, value) => {
  state.showEmptyResultsAlert = value;
};

const showErrorConnectionAlert = (state, value) => {
  state.showErrorConnectionAlert = value;
};

export {
  city,
  query,
  cityInput,
  queryInput,
  switchCategory,
  currentCategory,
  showFullScreenLoader,
  showProfileDetailsDialog,
  showProfileDetailsDialogMobile,
  postLoaderButton,
  showTagSection,
  showPaginigButton,
  showPagingButtonLoader,
  pagingURL,
  getProfilesData,
  getPagingProfilesData,
  profilePosts,
  showModalImage,
  showPagingModalImage,
  closeModalImage,
  openModalImage,
  updateResult,
  resultCopy,
  resetResult,
  proposedTags,
  numberOfTags,
  showEmptyResultsAlert,
  showErrorConnectionAlert,
};
