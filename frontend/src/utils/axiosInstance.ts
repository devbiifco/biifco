// src/utils/axiosInstance.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Cambia esto si es necesario
});

/**
 * Configura el interceptor de Axios para incluir el token JWT en los encabezados
 * de las solicitudes.
 */
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
