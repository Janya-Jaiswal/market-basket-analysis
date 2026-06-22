// import { store } from '../app/store.js';
import { envs } from '../config/config.js';

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  console.log('envs', envs);

  //   const state = store.getState();
  //   const token = state.auth.token;

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${envs.base_url}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'API request failed');
  }

  // Backend returns { success: true, data: ... }
  return data.data !== undefined ? data.data : data;
};
