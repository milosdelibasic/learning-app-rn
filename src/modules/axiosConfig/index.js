import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";
import AuthService from "../auth/service";
import { actions } from "../auth/reducer";
import { logger } from "@config/helpers";
const local = Config.SERVER_API;
// const remote = API_HOST;
logger(local);
const instance = axios.create({
  baseURL: local,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

export default instance;

// Request interceptor for API calls
instance.interceptors.request.use(
  async config => {
    const data = await AsyncStorage.getItem("data");
    if (data) {
      const { refreshToken } = JSON.parse(data);
      const { token } = JSON.parse(data);
      config.headers = {
        "x-access-token": token,
        "x-refresh-access-token": refreshToken,
      };
    }

    return config;
  },
  error => {
    logger(error, "ERROR");
    Promise.reject(error);
  },
);

let store;

export const injectStore = _store => {
  store = _store;
};

// Response interceptor for API calls
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error?.response?.status === 405) {
      store.dispatch(actions.logoutSuccess());
      await AsyncStorage.removeItem("data");
    }

    if (error && error.response && error.response.status === 403) {
      await refreshToken(error);
    }
    return Promise.reject(error.response.data.error);
  },
);

const refreshToken = async e => {
  const { data } = await AuthService.userToken();
  if (data) {
    await AsyncStorage.setItem("data", JSON.stringify(data));
    axios.defaults.headers["x-access-token"] = data.token;
    let errData = e.config.data ? JSON.parse(e.config.data) : null;

    return await axios[e.config.method](remote + e.config.url, errData);
  }
};
