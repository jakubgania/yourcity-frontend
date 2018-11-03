/* eslint no-shadow: off */

const state = () => ({
  basicClientAddress: 'https://yourcity.io',
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
