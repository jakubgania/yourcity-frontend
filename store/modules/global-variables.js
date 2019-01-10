/* eslint no-shadow: off */

const state = () => ({
  basicClientAddress: 'https://yourcity.io',
  // basicClientAddress: 'http://192.168.0.15:9800',
  basicServerAddressAPI: 'https://api.yourcity.io',
  basicServerPhotosAddress: 'https://jakubgania.io/yourcity/photos',
});

const getters = {
  basicClientAddress: state => state.basicClientAddress,
  basicServerAddressAPI: state => state.basicServerAddressAPI,
  basicServerPhotosAddress: state => state.basicServerPhotosAddress,
};

export default {
  state,
  getters,
};
