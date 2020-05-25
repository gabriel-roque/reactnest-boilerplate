import axios from 'axios';

export const randomUserApi = axios.create({
  baseURL: 'https://randomuser.me/api',
  headers: {},
});
