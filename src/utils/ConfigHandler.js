import axios from 'axios';
// import config from '../config.json';

// eslint-disable-next-line no-unused-vars
export function handleAxios(setIsLoading) {
  // axios.get('config.json').then((res) => {
  //   axios.defaults.baseURL = res.data.baseUrl;
  //   setIsLoading(false);
  // })
  axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
  setIsLoading(false);
}
