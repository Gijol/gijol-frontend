import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://dev-api.gijol.im/',
  validateStatus: function (status: number) {
    return status < 500;
  },
  timeout: 5000,
  withCredentials: true,
};

const api = axios.create(config);

export default api;
