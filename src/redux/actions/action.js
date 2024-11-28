import * as action from "./actionType";

export const setUser = (user) => {
  return {
    type: action.SET_USER,
    user,
  };
};
