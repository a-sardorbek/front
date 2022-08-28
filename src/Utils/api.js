import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const API_URL = "http://localhost:3000";
// http://89.223.64.39:8080
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${cookies.get("token")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
