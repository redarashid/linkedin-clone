import * as action from "./actionType";

export const setUser = (payload) => {
  return {
    type: action.SET_USER,
    user: payload,
  };
};
export const setLoading = (status) => ({
  type: action.SET_LOADING_STATUS,
  status: status,
});
export const getArticles = (payload) => ({
  type: action.GET_ARTICLES,
  payload: payload,
});