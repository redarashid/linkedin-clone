import * as actions from "../actions/actionType";

export const setUser = (payload) => {
  return {
    type: actions.SET_USER,
    user: payload,
  };
};
