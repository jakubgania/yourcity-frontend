/* eslint no-shadow: off */

const state = () => ({
  basicClientAddress: '',
  basicServerAddressAPI: '',
});

const getters = {
  basicClientAddress: state => state.basicClientAddress,
  basicServerAddressAPI: state => state.basicServerAddressAPI,
};

export default {
  state,
  getters,
};
