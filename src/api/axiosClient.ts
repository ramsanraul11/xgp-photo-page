import axios from "axios";
import { useAuth } from "../auth/useAuth";

const BASE_URL = "https://xgp-photo-api.onrender.com/api";

// Instancia global
export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

// Interceptor para incluir token si existe
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || useAuth.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// axiosClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn("🔒 Token expirado o inválido, cerrando sesión.");
//       const { logout } = useAuth.getState();
//       logout();
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );