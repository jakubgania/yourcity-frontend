const city = state => state.city;
const query = state => state.query;
const category = state => state.category;
const currentCategory = state => state.currentCategory;
const pagingURL = state => state.pagingURL;
const items = state => state.items;
const result = state => state.result;
const resultCopy = state => state.resultCopy;
const profilePosts = state => state.profilePosts;
const showModalImage = state => state.showModalImage;
const showLoader = state => state.showLoader;
const showTagSection = state => state.showTagSection;
const showPaginigButton = state => state.showPaginigButton;
const showProfileDetailsDialog = state => state.showProfileDetailsDialog;
const showProfileDetailsDialogMobile = state => state.showProfileDetailsDialogMobile;
const showPagingButtonLoader = state => state.showPagingButtonLoader;
const postLoaderButton = state => state.postLoaderButton;
const showEmptyResultsAlert = state => state.showEmptyResultsAlert;
const showErrorConnectionAlert = state => state.showErrorConnectionAlert;
const proposedTags = state => state.proposedTags;
const numberOfTags = state => state.numberOfTags;

export {
  city,
  query,
  category,
  currentCategory,
  pagingURL,
  items,
  result,
  resultCopy,
  profilePosts,
  showModalImage,
  showLoader,
  showTagSection,
  showPaginigButton,
  showProfileDetailsDialog,
  showProfileDetailsDialogMobile,
  showPagingButtonLoader,
  postLoaderButton,
  showEmptyResultsAlert,
  showErrorConnectionAlert,
  proposedTags,
  numberOfTags,
};
