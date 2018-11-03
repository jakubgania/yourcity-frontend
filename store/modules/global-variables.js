/* eslint no-shadow: off */

const state = () => ({
  // basicClientAddress: 'https://yourcity.io',
  basicClientAddress: 'http://192.168.0.14:9800',
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
