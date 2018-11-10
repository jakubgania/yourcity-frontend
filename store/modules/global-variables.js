/* eslint no-shadow: off */

const state = () => ({
  basicClientAddress: 'https://yourcity.io',
  // basicClientAddress: 'http://192.168.0.14:9800',
  // basicServerAddressAPI: 'https://api.yourcity.io',
  basicServerAddressAPI: 'http://192.168.0.14',
});

const getters = {
  basicClientAddress: state => state.basicClientAddress,
  basicServerAddressAPI: state => state.basicServerAddressAPI,
};

export default {
  state,
  getters,
};
