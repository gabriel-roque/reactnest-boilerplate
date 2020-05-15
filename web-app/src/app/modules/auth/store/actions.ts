import * as types from './types';

export const setData = data => {
  return dispatch => {
    dispatch({ types: types.SET_DATA_EXAMPLE, data });
  };
};
