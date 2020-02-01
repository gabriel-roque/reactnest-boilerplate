import * as types from "./types";

export const exampleAction = () => {
  return (dispath, getState) => {
    dispath({ type: types.EXAMPLE, user: "none" });
    // For example
    console.log(getState());
  };
};
