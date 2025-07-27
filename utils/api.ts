import axios from 'axios';

const api = axios.create({
  baseURL: 'https://authentication-microservice-6cyp.onrender.com/api',  // your backend URL
});

// Add token to headers automatically
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' && localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
