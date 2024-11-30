import * as actions from "../actions/actionType";

export const initialState = {
  loading: false,
  articles: [],
};
const articalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case actions.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articalesReducer;
