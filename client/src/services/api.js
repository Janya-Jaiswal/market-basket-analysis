import { store } from '../app/store.js';
import { envs } from '../config/config.js';

export const apiRequest = async (endpoint, options = {}) => {
  const state = store.getState();
  const token = state.auth.token;

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${envs}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};
