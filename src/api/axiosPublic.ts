import axios from "axios";

// Instancia sin token, usada para endpoints públicos
export const axiosPublic = axios.create({
  baseURL: "https://xgp-photo-api.onrender.com/api",
});

// Interceptor que asegura que NO se envíe el token
axiosPublic.interceptors.request.use((config) => {
  if (config.headers && "Authorization" in config.headers) {
    delete config.headers.Authorization;
  }
  return config;
});
