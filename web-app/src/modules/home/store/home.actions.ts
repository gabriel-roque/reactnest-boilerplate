import * as types from './home.types';

import { github } from 'core/providers';

export const getStarsRepository = () => {
  return async dispatch => {
    await github
      .get('/stargazers?per_page=100')
      .then(resp => {
        const data = resp.data;
        dispatch({ type: types.GET_STARS_REPOSITORY, data });
      })
      .catch(() => dispatch({ type: types.FAILED_GITHUB_API }));
  };
};

export const getForksRepository = () => {
  return async dispatch => {
    await github
      .get('/forks?per_page=100')
      .then(resp => {
        const data = resp.data;
        dispatch({ type: types.GET_FORKS_REPOSITORY, data });
      })
      .catch(() => dispatch({ type: types.FAILED_GITHUB_API }));
  };
};

export const getWatchsRepository = () => {
  return async dispatch => {
    await github
      .get('/subscribers?per_page=100')
      .then(resp => {
        const data = resp.data;
        dispatch({ type: types.GET_WATCHS_REPOSITORY, data });
      })
      .catch(() => dispatch({ type: types.FAILED_GITHUB_API }));
  };
};
