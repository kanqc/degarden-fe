import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosClient;
