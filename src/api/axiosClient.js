import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});
axiosClient.interceptors.response.use(
  res => res,
  err => Promise.reject(new Error(err?.response?.data?.message || err.message))
);
export default axiosClient;