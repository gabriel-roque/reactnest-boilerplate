import axios from 'axios';

export const github = axios.create({
  baseURL: 'https://api.github.com/repos/gabriel-roque/react-donis-docker-starter',
  headers: {},
});
