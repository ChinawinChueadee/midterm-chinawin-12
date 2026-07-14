import axios, { create } from "axios";
import { useUserStore } from "../stores/userStore";

const api = axios.create({
  baseURL: "https://mt-todolist-backend.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token = useUserStore.getState().token;
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default api;
