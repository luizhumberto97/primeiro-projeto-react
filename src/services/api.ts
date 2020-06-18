import axios from 'axios';

const api = axios.create({
  // Acessivel api.github.com
  baseURL: 'https://api.github.com',
});

export default api;
