import { INITIAL_STATE } from './home.state';
import * as types from './home.types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_STARS_REPOSITORY:
      return { ...state, repository: { ...state.repository, stars: action.data } };
    case types.GET_FORKS_REPOSITORY:
      return { ...state, repository: { ...state.repository, forks: action.data } };
    case types.GET_WATCHS_REPOSITORY:
      return { ...state, repository: { ...state.repository, watchs: action.data } };
    case types.FAILED_GITHUB_API:
      return { ...state, repository: { ...state.repository, error: true } };
    default:
      return state;
  }
};
