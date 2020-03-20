import axios from 'axios';
import {store} from "./store/configureStore";

const axiosForum = axios.create({
  baseURL: 'http://localhost:8000'
});

axiosForum.interceptors.request.use(config => {
  if(store.getState().users.user) {
    const token = store.getState().users.user.token;
    config.headers.Authorization = 'token ' + token;
  }
  return config;
});

export default axiosForum;