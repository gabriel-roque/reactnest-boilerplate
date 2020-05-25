import * as types from './types';

import { github } from 'core/providers';

export const getStarsRepositores = () => {
  return async dispatch => {
    await github
      .get('/stargazers?per_page=100')
      .then(resp => {
        let data = resp.data;
        dispatch({ type: types.GET_STARS_REPOSITORE, data });
      })
      .catch(() => dispatch({ type: types.FAILED_GITHUB_API }));
  };
};

export const getForksRepositores = () => {
  return async dispatch => {
    await github
      .get('/forks?per_page=100')
      .then(resp => {
        let data = resp.data;
        dispatch({ type: types.GET_FORKS_REPOSITORE, data });
      })
      .catch(() => dispatch({ type: types.FAILED_GITHUB_API }));
  };
};

export const getWatchsRepositores = () => {
  return async dispatch => {
    await github
      .get('/subscribers?per_page=100')
      .then(resp => {
        let data = resp.data;
        dispatch({ type: types.GET_WATCHS_REPOSITORE, data });
      })
      .catch(() => dispatch({ type: types.FAILED_GITHUB_API }));
  };
};
