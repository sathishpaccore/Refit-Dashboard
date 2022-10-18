import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://floodserviceapi.azurewebsites.net/";
// const API_BASE_URL = "http://127.0.0.1:5000/";

const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

AxiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = Cookies.get("token");
  config.headers["x-access-token"] = token;
  return config;
});

export default AxiosInstance;

