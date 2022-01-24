import axios from "../../modules/axiosConfig";

const PUBLIC_AUTH_URL = "/api/auth/public/user";
const AUTH_URL = "/api/auth/user";
const AUTH_TOKEN_URL = "api/auth/userToken";
const USER_URL = "/api/main/profiles/user";
const NOTIFICATION_URL = "/api/notifications/user/";

const FACEBOOK_API_ENDPOINT = "/api/facebook/auth";
const GOOGLE_API_ENDPOINT = "/api/google/auth/profile";
const APPLE_API_ENDPOINT = "/api/apple/auth";

class AuthService {
  async login(data) {
    return axios.post(PUBLIC_AUTH_URL, { mode: "login", data });
  }

  async register(data) {
    return axios.post(PUBLIC_AUTH_URL, { mode: "register", data });
  }

  async getMinAppVersion() {
    return axios.post(PUBLIC_AUTH_URL, {
      mode: "min-version",
    });
  }
}

export default new AuthService();
