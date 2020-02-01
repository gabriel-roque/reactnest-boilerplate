import * as types from "./types";

const INITIAL_STATE = {
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EXAMPLE:
      return { ...state, user: action.user };

    default:
      return state;
  }
};
