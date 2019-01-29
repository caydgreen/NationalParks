import axios from 'axios';

// set base URL to setup axios
axios.defaults.baseURL = 'https://developer.nps.gov/api/v1';
axios.defaults.params = {
  api_key: process.env.VUE_APP_API_KEY,
};

export default{
  getParks(stateCode) {
    return axios.get('/parks', {
      params: {
        stateCode,
      },
    });
  }
};
