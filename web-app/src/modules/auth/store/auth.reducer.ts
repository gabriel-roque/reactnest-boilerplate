import { INITIAL_STATE } from './auth.state';
import * as types from './auth.types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_DATA_EXAMPLE:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
