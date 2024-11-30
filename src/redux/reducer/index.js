import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articalesReducer from "./articalesReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articlesState: articalesReducer,
});

export default rootReducer;
