import { INITIAL_STATE } from './state';
import * as types from './types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_STARS_REPOSITORE:
      return { ...state, repositore: { ...state.repositore, stars: action.data } };
    case types.GET_FORKS_REPOSITORE:
      return { ...state, repositore: { ...state.repositore, forks: action.data } };
    case types.GET_WATCHS_REPOSITORE:
      return { ...state, repositore: { ...state.repositore, watchs: action.data } };
    case types.FAILED_GITHUB_API:
      return { ...state, repositore: { ...state.repositore, error: true } };
    default:
      return state;
  }
};
